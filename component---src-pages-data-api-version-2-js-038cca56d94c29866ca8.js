(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"4SwH":function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return f})),t.d(a,"c",(function(){return b}));var l=t("q1tI"),o=t.n(l),r=t("evZC"),c=t("iUFP");function n(e,a){if(null==e)return{};var t,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(o[t]=e[t]);return o}var i,d=Object(r.b)("DisclosureContext",{}),u=function(){return Object(l.useContext)(d)};!function(e){e.Open="open",e.Collapsed="collapsed"}(i||(i={}));var s=function(e){var a=e.children,t=e.defaultOpen,i=void 0!==t&&t,u=e.onChange,s=e.open,f=n(e,["children","defaultOpen","onChange","open"]),b=null!=s,m=Object(l.useRef)(b).current,p=Object(c.a)(null!=f.id?String(f.id):void 0)||"disclosure",v=Object(r.h)("panel",p),h=Object(l.useState)(m?s:i),y=h[0],S=h[1];var E={disclosureId:p,onSelect:function(){u&&u(),m||S(!y)},open:y,panelId:v};return m&&s!==y&&S(s),o.a.createElement(d.Provider,{value:E},a)};var f=Object(r.c)((function(e,a){var t=e.as,c=void 0===t?"button":t,d=e.children,s=e.onClick,f=(e.onMouseDown,e.onPointerDown,n(e,["as","children","onClick","onMouseDown","onPointerDown"])),b=u(),m=b.onSelect,p=b.open,v=b.panelId,h=Object(l.useRef)(null),y=Object(r.j)(a,h);return o.a.createElement(c,Object.assign({"aria-controls":v,"aria-expanded":p},f,{"data-reach-disclosure-button":"","data-state":p?i.Open:i.Collapsed,ref:y,onClick:Object(r.m)(s,(function(e){e.preventDefault(),h.current&&h.current.focus(),m()}))}),d)}));var b=Object(l.forwardRef)((function(e,a){var t=e.children,l=n(e,["children"]),r=u(),c=r.panelId,d=r.open;return o.a.createElement("div",Object.assign({ref:a,hidden:!d},l,{"data-reach-disclosure-panel":"","data-state":d?i.Open:i.Collapsed,id:c,tabIndex:-1}),t)}))},DXnz:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",content:"_28f79"}},HXuP:function(e,a,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("MAUh"),c=t.n(r);a.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:c.a.changeLog},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://apichanges.covidtracking.com/",target:"_blank",rel:"noreferrer"},"Latest changes",o.a.createElement("span",{"aria-hidden":!0}))))))}},IEZe:function(e,a,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("Wbzz"),c=t("TSYQ"),n=t.n(c),i=t("TFGg"),d=t("Im9R"),u=t.n(d);a.a=function(e){var a=e.content,t=e.className,c=e.id,d=e.inline,s=void 0!==d&&d,f=Object(r.useStaticQuery)("3565063634"),b=Object(l.useState)(!1),m=b[0],p=b[1],v=f.site.siteMetadata.contentfulSpace;return Object(l.useEffect)((function(){"undefined"!=typeof window&&void 0!==window.location&&window.location.search.search("\\?edit")>-1&&p(!0)}),[]),o.a.createElement(o.a.Fragment,null,m&&o.a.createElement("a",{className:s?u.a.editInline:u.a.edit,href:"https://app.contentful.com/spaces/"+v+"/entries/"+c,target:"_blank",rel:"noopener noreferrer"},"Edit this content"),o.a.createElement("div",{className:n()(t,u.a.content),dangerouslySetInnerHTML:{__html:Object(i.a)(a,1)}}))}},Im9R:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",editInline:"b19ef",edit:"_5d743",content:"_8b762"}},MAUh:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",changeLog:"_000ba"}},"Od/x":function(e,a,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("DXnz"),c=t.n(r);a.a=function(e){var a=e.children;return o.a.createElement("div",{className:c.a.content},a)}},cryO:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",alignLeft:"_972ec",borderLeft:"_4c21d",headerLabel:"_48594",headerLabel3:"_87c8d",headerLabel4:"_8bd24",headerLabel5:"_1ee0f",headerLabelHidden:"a0e2a",table:"e1fd0",sort:"_903bc",sortButton:"c8fff",wide:"_588d8"}},dsKg:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",button:"_5441b",toggle:"_29959",panel:"fa8a6",pathDescription:"_8c650",type:"_86bf1",pathExample:"_5da7c"}},k1QJ:function(e,a,t){"use strict";t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return f}));t("ToJy");var l=t("q1tI"),o=t.n(l),r=t("TSYQ"),c=t.n(r),n=t("uY6E"),i=t("cryO"),d=t.n(i),u=function(e){var a=e.children,t=e.colSpan,l=e.header,r=e.isFirst,n=e.alignLeft,i=e.columnWidth,u=e.additionalClass,s=e.wide,f=e.sortDirection,b=e.sortable,m=e.onClick,p=e.scope,v=[];n&&v.push(d.a.alignLeft),r&&v.push(d.a.borderLeft),s&&v.push(d.a.wide),u&&v.push(u);return o.a.createElement("th",{scope:p||"col",colSpan:t,className:c()(v)},o.a.createElement("span",{role:"text"},b?o.a.createElement("button",{type:"button",className:d.a.sortButton,onClick:m},"up"===f&&o.a.createElement("abbr",{className:d.a.sort,title:"Sort up","aria-label":"Sort up"},"↑"),"down"===f&&o.a.createElement("abbr",{className:d.a.sort,title:"Sort down","aria-label":"Sort down"},"↓"),a):o.a.createElement(o.a.Fragment,null,a),l&&o.a.createElement("span",{className:(r?d.a.headerLabel:d.a.headerLabelHidden)+(i&&void 0!==d.a["headerLabel"+i]?" "+d.a["headerLabel"+i]:"")},l)))},s=function(e){var a=e.children,t=e.alignLeft,l=e.isFirst,r=e.additionalClass,n=e.rowspan,i=[];return t&&i.push(d.a.alignLeft),l&&i.push(d.a.borderLeft),r&&i.push(r),n?o.a.createElement("td",{className:c()(i),rowSpan:n},a):o.a.createElement("td",{className:c()(i)},a)},f=function(e){var a=e.children,t=e.tableLabel,l=e.ariaHidden,r=e.className;return o.a.createElement("div",null,o.a.createElement("table",{"aria-hidden":l,className:c()(d.a.table,r)},a),t&&o.a.createElement(n.a,null,t))}},"qWg+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),o=t.n(l),r=t("HXuP"),c=t("IEZe"),n=t("4SwH"),i=t("dsKg"),d=t.n(i),u=t("Wbzz"),s=t("k1QJ"),f=function(){var e=Object(u.useStaticQuery)("2481119464");return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement(s.c,{header:!0,alignLeft:!0},"V1 name"),o.a.createElement(s.c,{header:!0,alignLeft:!0},"V2 name"),o.a.createElement(s.c,{header:!0,alignLeft:!0},"Description"))),o.a.createElement("tbody",null,e.allContentfulDataDefinition.nodes.map((function(e){return o.a.createElement(o.a.Fragment,null,-1===e.fieldName.search(/\./)&&o.a.createElement("tr",null,o.a.createElement(s.b,{alignLeft:!0},o.a.createElement("code",null,e.fieldName)),o.a.createElement(s.b,{alignLeft:!0},o.a.createElement("code",null,e.v2Name)),o.a.createElement(s.b,{alignLeft:!0},e.name)))})))))},b=function(e){var a=e.endpoint,t=Object(l.useState)(!1),r=t[0],c=t[1],i=a.title,u=a.description,s=a.path,f=a.sample,b=a.simplePath,m=a.simpleSample,p="https://api.covidtracking.com"+(void 0!==f?f:s),v=b&&"https://api.covidtracking.com"+(void 0!==m?m:b);return o.a.createElement(n.a,{onChange:function(){return c(!r)}},o.a.createElement(n.b,{className:d.a.button},o.a.createElement("h3",null,i," ",o.a.createElement("span",{"aria-hidden":!0,className:d.a.toggle},r?o.a.createElement(o.a.Fragment,null,"↑"):o.a.createElement(o.a.Fragment,null,"↓")))),o.a.createElement(n.c,{className:d.a.panel},o.a.createElement("p",{className:d.a.pathDescription},u),o.a.createElement("p",{className:d.a.pathDescription},o.a.createElement("strong",null,"URL path:"),o.a.createElement("code",null,s)),o.a.createElement("p",{className:d.a.pathDescription},o.a.createElement("strong",null,"Example:")," ",o.a.createElement("a",{className:d.a.pathExample,target:"_blank",rel:"noreferrer",href:p},p,o.a.createElement("span",{"aria-hidden":!0}))),b&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:d.a.pathDescription},o.a.createElement("code",null,"Simplified data:",s)),o.a.createElement("p",{className:d.a.pathDescription},o.a.createElement("strong",null,"Simplified data example:")," ",o.a.createElement("a",{className:d.a.pathExample,target:"_blank",rel:"noreferrer",href:v},v,o.a.createElement("span",{"aria-hidden":!0}))))))},m=function(e){var a=e.title,t=e.endpoints;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,a),t.map((function(e){return o.a.createElement(b,{endpoint:e})})))},p=function(){var e=Object(l.useState)(!1),a=e[0],t=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,{onChange:function(){return t(!a)}},o.a.createElement(n.b,{className:d.a.button},o.a.createElement("h3",null,"Convert fields from v1 to v2",o.a.createElement("span",{"aria-hidden":!0,className:d.a.toggle},a?o.a.createElement(o.a.Fragment,null,"↑"):o.a.createElement(o.a.Fragment,null,"↓")))),o.a.createElement(n.c,{className:d.a.panel},o.a.createElement(f,null))),o.a.createElement(m,{title:"National Data",endpoints:[{title:"Historic US values",description:"All COVID data for the US.",path:"/v2/us/daily.json"},{title:"Single day of data",description:"One day of data for the US.",path:"/v2/us/daily/[date-iso-format].json",sample:"/v2/us/daily/2021-01-02.json",simplePath:"/v2/us/daily/[date-iso-format]/simple.json",simpleSample:"/v2/us/daily/2021-01-02/simple.json"}]}),o.a.createElement(m,{title:"State & Territories Data",endpoints:[{title:"All state metadata",description:"Basic information about all states, including notes about our methodology and the websites we use to check for data.",path:"/v2/states.json"},{title:"Single state metadata",description:"Basic information about all states, including notes about our methodology and the websites we use to check for data.",path:"/v2/states/[state-code].json",sample:"/v2/states/mi.json"},{title:"Historic data for a state or territory",description:"All historic data for a single state",path:"/v2/states/[state-code]/daily.json",sample:"/v2/states/ca/daily.json",simplePath:"/v2/states/[state-code]/daily/simple.json",simpleSample:"/v2/states/ca/daily/simple.json"},{title:"Single day of data for a state or territory",description:"Returns data for a single day.",path:"/v2/states/[state-code]/[date-iso-format].json",sample:"/v2/states/ca/2021-01-10.json",simplePath:"/v2/states/[state-code]/[date-iso-format]/simple.json",simpleSample:"/v2/states/ca/2021-01-10/simple.json"}]}))},v=t("Od/x"),h=t("I/Ru");a.default=function(e){var a=e.data;return o.a.createElement(h.a,{title:"Data API",path:"/data/api"},o.a.createElement(v.a,null,o.a.createElement(r.a,null),o.a.createElement(c.a,{content:a.contentfulSnippet.childContentfulSnippetContentTextNode.childMarkdownRemark.html,id:a.contentfulSnippet.contentful_id})),o.a.createElement(p,null))}},uY6E:function(e,a,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("TSYQ"),c=t.n(r),n=t("xlXs"),i=t.n(n);a.a=function(e){var a=e.children,t=e.className,l=e.small,r=void 0!==l&&l,n=e.centered,d=void 0!==n&&n;return o.a.createElement("div",{className:c()("detail-text",i.a.detailText,d&&i.a.centered,r&&i.a.small,t)},a)}},xlXs:function(e,a,t){e.exports={viewportSm:"480px",viewportMs:"640px",viewportMd:"768px",viewportLg:"1080px",viewportXl:"1200px",text:"#303030",link:"#000",linkActive:"#8b8dc7",colorPlum100:"#f2f2ff",colorPlum200:"#d1d1e8",colorPlum300:"#b6b7db",colorPlum400:"#8b8dc7",colorPlum500:"#6164ba",colorPlum600:"#575aad",colorPlum700:"#31347a",colorPlum800:"#111354",colorHoney100:"#fcf9eb",colorHoney200:"#fbe8a9",colorHoney300:"#f6ce7a",colorHoney400:"#ffad4a",colorHoney500:"#e2894e",colorHoney600:"#c66b3e",colorHoney700:"#924f34",colorHoney800:"#6e2f1f",colorBlueberry100:"#e2f1fc",colorBlueberry200:"#8cc7f4",colorBlueberry300:"#0091ea",colorBlueberry400:"#004399",colorBlueberry500:"#012656",colorSlate100:"#edf1f2",colorSlate200:"#d2d6d7",colorSlate300:"#b7bcbd",colorSlate400:"#9ca1a2",colorSlate500:"#828688",colorSlate600:"#676b6d",colorSlate700:"#4c5153",colorSlate800:"#313638",colorStrawberry100:"#fbbcb2",colorStrawberry200:"#dc472e",qualitativeColorPalette100:"#b5e3db",qualiTativecolorPalette200:"#cc0",qualiTativecolorPalette300:"#a19bca",qualiTativecolorPalette400:"#f4a071",qualiTativecolorPalette500:"#2f6488",qualiTativecolorPalette600:"#527740",crdtAsian:"#E35942",crdtWhite:"#cc0",crdtBlack:"#a19bca",crdtLatinx:"#f4a071",crdtNonHispanic:"#111354",crdtNhpi:"#2f6488",crdtAian:"#527740",detailText:"_9c10b",small:"bdbe3",centered:"_1aaf0"}}}]);
//# sourceMappingURL=component---src-pages-data-api-version-2-js-038cca56d94c29866ca8.js.map