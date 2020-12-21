/* eslint-disable no-underscore-dangle,max-len,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useRef, Fragment } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Form, Input } from '~components/common/form'
import { Row, Col } from '~components/common/grid'
import { Table, Th, Td } from '~components/common/table'
import facilitiesMapStyles from './map.module.scss'

const fields = [
  {
    title: 'Adult COVID-19 patients currently in hospital',
    field:
      'total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg',
  },
  {
    title: 'Adult COVID-19 patients currently in ICU',
    field: 'staffed_icu_adult_patients_confirmed_and_suspected_covid_7_day_avg',
  },
  {
    title: 'Percent of adult inpatient beds occupied by all patients',
    field: 'adult_inpatient_beds_occupancy_all',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Percent of adult ICU beds occupied by all patients',
    field: 'adult_icu_beds_occupancy_all',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Percent of adult inpatient beds occupied by COVID-19 patients',
    field: 'adult_inpatient_beds_occupancy_covid',
    value: value => `${Math.round(value * 100)}%`,
  },
  {
    title: 'Percent of adult ICU beds occupied by COVID-19 patients',
    field: 'adult_icu_beds_occupancy_covid',
    value: value => `${Math.round(value * 100)}%`,
  },
  { title: 'Reporting completeness', field: 'mean_coverage' },
  {
    title: 'Reporting week (spans Friday to Thursday)',
    field: 'collection_week',
  },
]

const FacilityDetails = ({ facility }) => (
  <>
    <h3>{facility.hospital_name}</h3>
    <p>
      <strong>Adult COVID-19 patients currently in hospital:</strong>{' '}
      {facility.total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg >
      0 ? (
        <>
          {Math.round(
            facility.total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg,
          )}
        </>
      ) : (
        'between 0 and 4'
      )}
    </p>
    <p>
      <strong>Percent of inpatient beds occupied by COVID-19 patients:</strong>{' '}
      {facility.adult_inpatient_beds_occupancy_covid > 0
        ? `${Math.round(facility.adult_inpatient_beds_occupancy_covid * 100)}%`
        : 'between 0 and 4%'}
    </p>
    <p>Click to view more information</p>
  </>
)

const FacilityDialog = ({ facility }) => (
  <>
    <h2>{facility.hospital_name}</h2>
    <dl className={facilitiesMapStyles.details}>
      {Object.keys(fields).map(key => (
        <div key={key}>
          <dt>{fields[key].title}</dt>
          <dd>
            {fields[key].value
              ? fields[key].value(facility[fields[key].field])
              : facility[fields[key].field]}
          </dd>
        </div>
      ))}
    </dl>
  </>
)

const HHSFacilitiesMap = ({ center, zoom, state = false }) => {
  mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_TOKEN
  const [activeFacility, setActiveFacility] = useState(false)
  const [query, setQuery] = useState(false)
  const [facilities, setFacilities] = useState(false)
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 })
  const [highlightedFacility, setHighlightedFacility] = useState(false)
  const [revealedFacility, setRevealedFacility] = useState(false)
  const [currentZoom, setCurrentZoom] = useState(0)
  const [highlighedMarker, setHighlightedMarker] = useState(false)
  const layers = ['Hospitals', 'Null hospitals']

  const mapNode = useRef(null)
  const mapRef = useRef(null)

  const selectFacility = (event, show) => {
    const bbox = [
      [event.point.x - 5, event.point.y - 5],
      [event.point.x + 5, event.point.y + 5],
    ]
    const features = mapRef.current.queryRenderedFeatures(bbox, {
      layers,
    })
    if (!features || !features.length) {
      setActiveFacility(false)
      return
    }
    console.log(event.point)
    setActiveFacility(features[0].properties)
    setTooltip(event.point)
    if (show) {
      setRevealedFacility(true)
    }
  }

  const mapBoundChanged = event => {
    if (typeof window !== 'undefined') {
      window.location.hash = [
        ...event.target.getCenter().toArray(),
        event.target.getZoom(),
      ].join(',')
    }
    if (event.target.getZoom() < 4) {
      setFacilities(false)
      return
    }
    const features = mapRef.current.queryRenderedFeatures({
      layers,
    })
    setCurrentZoom(event.target.getZoom())
    setFacilities(
      features.sort((a, b) =>
        a.properties.hospital_name > b.properties.hospital_name ? 1 : -1,
      ),
    )
  }

  useEffect(() => {
    if (!revealedFacility) {
      return
    }
    window.location.hash += `,|id:${activeFacility.hospital_pk}`
  }, [revealedFacility])

  useEffect(() => {
    if (!highlightedFacility || !highlightedFacility.geometry) {
      return
    }
    if (highlighedMarker) {
      highlighedMarker.remove()
    }
    const { coordinates } = highlightedFacility.geometry
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(mapRef.current)
    setHighlightedMarker(marker)
  }, [highlightedFacility])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setRevealedFacility(false)
      }
    })
    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: `mapbox://styles/covidtrackingproject/ckihibso80hsg19o8q5gbq9z7`,
      center,
      zoom,
    })

    const hash = window.location.hash.replace('#', '').split(',')
    if (hash.length > 2) {
      map.setCenter([hash[0], hash[1]])
      map.setZoom(hash[2])
    }

    map.addControl(new mapboxgl.NavigationControl(), 'top-left')

    map.on('load', () => {
      if (state) {
        layers.forEach(layer => {
          map.setFilter(layer, ['==', ['get', 'state'], state])
        })
      }

      if (window.location.hash) {
        if (hash.length > 2) {
          const features = map.queryRenderedFeatures({
            layers,
          })
          setFacilities(
            features.sort((a, b) =>
              a.properties.hospital_name > b.properties.hospital_name ? 1 : -1,
            ),
          )
        }
      }
    })

    map.on('moveend', event => {
      mapBoundChanged(event)
    })

    map.on('dragend', event => {
      mapBoundChanged(event)
    })

    map.on('zoomend', event => {
      mapBoundChanged(event)
    })

    map.on('mousemove', event => {
      selectFacility(event)
    })

    map.on('click', event => {
      selectFacility(event, true)
    })

    mapRef.current = map
  }, [])

  return (
    <div className={facilitiesMapStyles.container}>
      <div className={facilitiesMapStyles.sidebar}>
        <Form
          onSubmit={event => {
            event.preventDefault()
            if (
              typeof window === 'undefined' ||
              typeof window.fetch === 'undefined'
            ) {
              return
            }
            window
              .fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                  query,
                )}.json?limit=1&access_token=${
                  process.env.GATSBY_MAPBOX_API_TOKEN
                }`,
              )
              .then(response => response.json())
              .then(response => {
                if (response.features.length === 0) {
                  return
                }
                const feature = response.features.pop()
                mapRef.current.easeTo({
                  center: feature.center,
                  zoom: 7,
                })
              })
          }}
          noMargin
        >
          <Row>
            <Col width={[4, 6, 8]}>
              <Input
                type="text"
                label="Search facilities"
                placeholder="Enter a city or zip code"
                hideLabel
                onChange={event => {
                  setQuery(event.target.value)
                }}
              />
            </Col>
            <Col width={[4, 6, 4]} paddingLeft={[0, 0, 8]}>
              <button
                type="submit"
                className={facilitiesMapStyles.searchButton}
              >
                Search
              </button>
            </Col>
          </Row>
        </Form>
        <Table ariaHidden>
          <thead>
            <tr>
              <Th alignLeft>Name</Th>
              <Th>7-day average COVID patients</Th>
            </tr>
          </thead>
        </Table>
        {facilities && facilities.length > 0 ? (
          <div className={facilitiesMapStyles.tableScroll}>
            <Table>
              <thead className="a11y-only">
                <tr>
                  <Th alignLeft>Name</Th>
                  <Th>7-day average COVID patients</Th>
                </tr>
              </thead>
              <tbody>
                {facilities.map(facility => (
                  <tr
                    onMouseEnter={() => {
                      setHighlightedFacility(facility)
                    }}
                    onMouseLeave={() => {
                      setHighlightedFacility(false)
                    }}
                    onFocus={() => {
                      setHighlightedFacility(facility)
                    }}
                    onBlur={() => {
                      setHighlightedFacility(false)
                    }}
                  >
                    <Td alignLeft>
                      <button
                        type="button"
                        onClick={event => {
                          event.preventDefault()
                          setActiveFacility({ ...facility.properties })
                          setRevealedFacility(true)
                        }}
                      >
                        {facility.properties.hospital_name}
                      </button>
                    </Td>
                    <Td>
                      {facility.properties
                        .total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg ===
                      null ? (
                        <>N/A</>
                      ) : (
                        <>
                          {facility.properties
                            .total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg >
                          0
                            ? facility.properties
                                .total_adult_patients_hospitalized_confirmed_and_suspected_covid_7_day_avg
                            : 'between 0 and 4'}
                        </>
                      )}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>
            {currentZoom < 4 ? (
              <>Zoom in to get facility details.</>
            ) : (
              <>No facilities in the current map.</>
            )}
          </p>
        )}
      </div>
      <div className={facilitiesMapStyles.mapWrapper} role="img">
        <div className={facilitiesMapStyles.mapInset}>
          {revealedFacility && (
            <>
              <div
                role="dialog"
                className={facilitiesMapStyles.facilityCardOverlay}
                onClick={() => setRevealedFacility(false)}
              />
              <div className={facilitiesMapStyles.facilityCard} role="dialog">
                <button
                  className={facilitiesMapStyles.close}
                  type="button"
                  onClick={event => {
                    event.preventDefault()
                    setRevealedFacility(false)
                  }}
                >
                  &times;
                </button>
                <FacilityDialog facility={activeFacility} />
              </div>
            </>
          )}
          <div className={facilitiesMapStyles.legend}>
            <div className={facilitiesMapStyles.label}>
              % of hospital beds with COVID patients
            </div>
            <div className={facilitiesMapStyles.scale}>
              <div>
                <div />
                0%
              </div>
              <div>
                <div />
                {'<'}10%
              </div>
              <div>
                <div />
                10-20%
              </div>
              <div>
                <div />
                20-30%
              </div>
              <div>
                <div />
                {'>'}30%
              </div>
            </div>
            <div className={facilitiesMapStyles.label}>
              Circle size indicates total COVID patients
            </div>
          </div>
          {activeFacility && (
            <>
              <div
                className={facilitiesMapStyles.tooltip}
                style={{
                  left: Math.max(10, tooltip.x - 175),
                  top: tooltip.y + 15,
                }}
              >
                <FacilityDetails facility={activeFacility} />
              </div>
            </>
          )}
          <div
            ref={mapNode}
            className={facilitiesMapStyles.map}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default HHSFacilitiesMap
