import React, { useState, useContext } from 'react'
import { graphql } from 'gatsby'
import TableResponsive from '~components/common/table-responsive'
import Definitions from '~components/pages/data/definitions'
import Layout from '~components/layout'
import {
  DefinitionPanel,
  AnnotationPanelContext,
  AnnotationButton,
} from '~components/pages/data/cards/definitions-panel'
import { DefinitionLink } from '~components/common/statistic'

const AnnotationIcon = ({ annotation, annotationFields }) => {
  const annotationContext = useContext(AnnotationPanelContext)

  // todo stop using definition link
  return (
    <AnnotationButton field={annotation.date}>
      <DefinitionLink
        title="Warning"
        onDefinitionsToggle={() => {
          annotationContext.setCardAnnotations({
            fields: annotationFields,
            highlight: annotation.date,
          })
        }}
        label="Annotation for Total Tests (in unclear units)"
      />
    </AnnotationButton>
  )
}

const StateCasesTemplate = ({ pageContext, path, data }) => {
  const state = pageContext
  const { slug } = state.childSlug

  const annotations = data.allContentfulChartAnnotation.nodes
  const dataRows = data.allCovidStateDaily.nodes.slice(0, 10) // todo remove me

  const annotationDates = annotations.map(annotation => annotation.date) // A list of the dates with annotations.

  annotations.forEach((annotation, index) => {
    // Standardize the content for the DefinitionsPanel
    annotations[index].field = annotation.date
    annotations[index].warning = annotation.description.description // todo use childMarkdownRemark here

    // Match annotations with their respective days.
    const row = dataRows.findIndex(r => r.date === annotation.date)
    dataRows[row].annotations = (
      <AnnotationIcon
        annotation={annotation}
        annotationFields={annotationDates}
      />
    )
  })

  const [cardAnnotations, setCardAnnotations] = useState(false)
  const [highlightedAnnotation, setHighlightedAnnotation] = useState(false)

  return (
    <Layout
      title={`${state.name}: Cases`}
      returnLinks={[
        { link: '/data' },
        { link: `/data/state/${slug}`, title: state.name },
      ]}
      path={path}
      showWarning
    >
      <AnnotationPanelContext.Provider
        value={{
          annotations,
          setCardAnnotations: ({ fields, highlight }) => {
            setCardAnnotations(fields)
            setHighlightedAnnotation(highlight)
          },
        }}
      >
        {cardAnnotations && (
          <DefinitionPanel
            annotations={annotations}
            highlightedDefinition={highlightedAnnotation}
            onHide={() => setCardAnnotations(false)}
            title={`${state.name} Annotations & Warnings`}
          />
        )}
        <Definitions
          definitions={data.allContentfulDataDefinition.nodes}
          order={[
            'positive',
            'positiveIncrease',
            'positiveCasesViral',
            'probableCases',
          ]}
        />
        <TableResponsive
          annotations={data.allContentfulChartAnnotation}
          labels={[
            {
              field: 'annotations',
            },
            {
              field: 'date',
              noWrap: true,
            },
            {
              field: 'positive',
              isNumeric: true,
            },
            {
              field: 'positiveIncrease',
              isNumeric: true,
            },
            {
              field: 'positiveCasesViral',
              isNumeric: true,
              label: 'Confirmed cases',
            },
            {
              field: 'probableCases',
              isNumeric: true,
            },
          ]}
          data={dataRows}
        />
      </AnnotationPanelContext.Provider>
    </Layout>
  )
}

export default StateCasesTemplate

export const query = graphql`
  query($state: String!) {
    allCovidStateDaily(
      filter: { state: { eq: $state } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date(formatString: "MMM D, YYYY")
        positive
        positiveIncrease
        positiveCasesViral
        probableCases
      }
    }
    allContentfulChartAnnotation(
      filter: { state: { code: { eq: "AL" } }, dataElement: { eq: "cases" } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        description {
          description
        }
        date(formatString: "MMM DD, YYYY")
        dataElement
        contentful_id
        childContentfulChartAnnotationDescriptionTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulDataDefinition(
      filter: {
        fieldName: {
          in: [
            "positive"
            "positiveCasesViral"
            "positiveIncrease"
            "probableCases"
          ]
        }
      }
    ) {
      nodes {
        name
        fieldName
        childContentfulDataDefinitionDefinitionTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
