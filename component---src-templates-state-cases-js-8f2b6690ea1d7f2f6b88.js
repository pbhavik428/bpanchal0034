(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{AOlr:function(e,a,t){"use strict";var o=t("q1tI"),l=t.n(o),r=t("4SwH"),c=t("fy0c"),n=t.n(c);a.a=function(e){var a=e.definitions,t=e.order,o=[];return t.forEach((function(e){o.push(a.find((function(a){return a.fieldName===e})))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Definitions"),o.map((function(e){return l.a.createElement(r.a,{key:e.name},l.a.createElement(r.b,{type:"button",className:n.a.definitionButton},e.name," ",l.a.createElement("span",{className:n.a.arrowDown,"aria-hidden":!0},"↓")," ",l.a.createElement("span",{className:n.a.arrowUp,"aria-hidden":!0},"↑")),l.a.createElement(r.c,null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.childContentfulDataDefinitionDefinitionTextNode.childMarkdownRemark.html}})))})))}},G2sI:function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),l=t.n(o),r=t("Xjed"),c=t("AOlr"),n=t("I/Ru"),i=t("R5tI"),d=t("eMu6"),u=t.n(d),f=t("dpHP");a.default=function(e){var a=e.pageContext,t=e.path,d=e.data,s=a,b=s.childSlug.slug,m=Object(f.a)(d.allContentfulChartAnnotation.nodes,d.allCovidStateDaily.nodes),p=m.annotations,v=m.dataRows,y=Object(o.useState)(!1),h=y[0],S=y[1],P=Object(o.useState)(!1),w=P[0],E=P[1];return l.a.createElement(n.a,{title:s.name+": Cases",returnLinks:[{link:"/data"},{link:"/data/state/"+b,title:s.name}],description:"Data definitions and historical time series of data on confirmed cases, probable cases, total cases, and daily new cases in "+s.name+".",path:t},l.a.createElement(i.b.Provider,{value:{annotations:p,setCardAnnotations:function(e){var a=e.fields,t=e.highlight;S(a),E(t)}}},h&&l.a.createElement(i.c,{annotations:p,highlightedDefinition:w,onHide:function(){return S(!1)},title:s.name+" cases time series information"}),l.a.createElement(c.a,{definitions:d.allContentfulDataDefinition.nodes,order:["positive","positiveIncrease","positiveCasesViral","probableCases"]}),l.a.createElement("h2",null,"Case History"),l.a.createElement(r.a,{annotations:d.allContentfulChartAnnotation,labels:[{field:"dateWithAnnotation",noWrap:!0,style:u.a.dateCell,label:"Date"},{field:"positive",isNumeric:!0},{field:"positiveIncrease",isNumeric:!0},{field:"positiveCasesViral",isNumeric:!0,label:"Confirmed cases"},{field:"probableCases",isNumeric:!0}],data:v})))}},"I/Ru":function(e,a,t){"use strict";var o=t("q1tI"),l=t.n(o),r=t("Wbzz"),c=t("JI7f"),n=t("F5At"),i=t("cmL/"),d=t("SJqI"),u=t("aTGQ"),f=t("+Bwl");t("fmqH");a.a=function(e){var a=e.title,t=e.displayTitle,o=e.titleLink,s=e.path,b=e.returnLinks,m=e.returnLinksContent,p=e.description,v=e.children,y=e.noMargin,h=e.hasHero,S=e.centered,P=e.socialCard,w=e.hero,E=e.centerTitle,H=e.hidewarning,x=void 0!==H&&H,g=e.flipColors,C=void 0!==g&&g,N=e.noContainer,q=void 0!==N&&N,B=e.forceSubNavigationKey,L=void 0!==B&&B,k=Object(r.useStaticQuery)("3649515864");return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:a,description:p,socialCard:P}),l.a.createElement(f.a,null),l.a.createElement(n.a,{siteTitle:k.site.siteMetadata.title,title:t||a,titleLink:o,path:s,noMargin:y,hasHero:h,returnLinks:b,returnLinksContent:m,hero:w,centerTitle:E,forceSubNavigationKey:L,flipColors:C,hidewarning:x}),l.a.createElement("main",{id:"main"},l.a.createElement(c.a,null),q?l.a.createElement(l.a.Fragment,null,v):l.a.createElement(u.a,{centered:S},v)),l.a.createElement(i.a,{flipColors:C}))}},Xjed:function(e,a,t){"use strict";var o=t("q1tI"),l=t.n(o),r=t("TSYQ"),c=t.n(r),n=t("4SwH"),i=t("3CiM"),d=t("779a"),u=t("cryO"),f=t.n(u),s=t("eMu6"),b=t.n(s),m=function(e){var a=e.labels,t=e.row;return l.a.createElement("tr",null,a.map((function(e){var a=e.field,o=e.label,r=e.format,n=e.isNumeric,u=e.noWrap,s=e.alignLeft,m=e.style;return l.a.createElement("td",{className:c()(u&&b.a.noWrap,s&&f.a.alignLeft,m)},l.a.createElement("span",{className:b.a.cellLabel,"aria-hidden":!0},o||l.a.createElement(i.a,{field:a})),l.a.createElement("span",{className:b.a.value},n?l.a.createElement(d.d,{number:t[a]}):l.a.createElement(l.a.Fragment,null,r?r(t[a]):t[a]||"N/A")))})))};a.a=function(e){var a=e.labels,t=e.data,o=e.header,r=e.mobileShowNRows,d=void 0===r?t.length:r;return l.a.createElement("table",{className:c()(f.a.table,b.a.table)},o&&l.a.createElement("thead",{className:b.a.customHeader},o),l.a.createElement("thead",null,l.a.createElement("tr",null,a.map((function(e){var a=e.label,t=e.field,o=e.alignLeft,r=e.headerStyle;return l.a.createElement("th",{scope:"col",className:c()(o&&f.a.alignLeft,r)},a||l.a.createElement(i.a,{field:t}))})))),l.a.createElement("tbody",null,l.a.createElement(l.a.Fragment,null,t.slice(0,d).map((function(e){return l.a.createElement(m,{labels:a,row:e})})),d!==t.length&&l.a.createElement(n.a,null,l.a.createElement("tr",{className:b.a.disclosureButton},l.a.createElement("td",{colSpan:a.length},l.a.createElement(n.b,null,l.a.createElement("span",{className:b.a.closed},"Show"),l.a.createElement("span",{className:b.a.expanded},"Hide")," ","all rows"))),l.a.createElement(n.c,{className:b.a.disclosurePanel},t.slice(d,t.length).map((function(e){return l.a.createElement(m,{labels:a,row:e})})))))))}},cryO:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",alignLeft:"_972ec",borderLeft:"_4c21d",headerLabel:"_48594",headerLabel3:"_87c8d",headerLabel4:"_8bd24",headerLabel5:"_1ee0f",headerLabelHidden:"a0e2a",table:"e1fd0",sort:"_903bc",sortButton:"c8fff",wide:"_588d8"}},dpHP:function(e,a,t){"use strict";var o=t("q1tI"),l=t.n(o),r=t("R5tI"),c=t("FOYg"),n=t("eMu6"),i=t.n(n),d=function(e){return(e+10).toString(36).toUpperCase()},u=function(e){var a=e.annotation,t=e.annotationFields,n=Object(o.useContext)(r.b),u=t.findIndex((function(e){return e===a.field}));return l.a.createElement("div",{className:i.a.annotation},l.a.createElement(r.a,{field:a.date},l.a.createElement(c.a,{content:{annotationSymbol:d(u)},handleAnnotationClick:function(){n.setCardAnnotations({fields:t,highlight:a.date})}})))};a.a=function(e,a){var t=a,o=e;t.forEach((function(e,a){t[a].dateWithAnnotation=e.date}));var r=o.map((function(e){return e.date}));return o.forEach((function(e,a){o[a].field=e.date,o[a].htmlFormat=!0,o[a].warning=e.childContentfulChartAnnotationDescriptionTextNode.childMarkdownRemark.html;var c=t.findIndex((function(a){return a.date===e.date}));t[c].dateWithAnnotation=l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{annotation:e,annotationFields:r}),t[c].date)})),{annotations:o,dataRows:t}}},eMu6:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",table:"_4545b",noWrap:"b6f76",cellLabel:"_0d5cc",annotation:"_07822",dateCell:"_4c288",value:"e0025",customHeader:"_8bb7b",disclosureButton:"_14c53",closed:"_30bfa",expanded:"_61282",disclosurePanel:"_8c30c"}},fmqH:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740"}},fy0c:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",definitionButton:"d714d",arrowDown:"_941e8",arrowUp:"_15b4b"}}}]);
//# sourceMappingURL=component---src-templates-state-cases-js-8f2b6690ea1d7f2f6b88.js.map