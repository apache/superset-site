"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7672],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>u});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),y=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=y(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=y(a),o=r,u=p["".concat(d,".").concat(o)]||p[o]||N[o]||l;return a?n.createElement(u,g(g({ref:t},m),{},{components:a})):n.createElement(u,g({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=o;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},97376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(86404),r=(a(11504),a(95788));const l={title:"Chart Parameters Reference",hide_title:!0,sidebar_position:4,version:1},g=void 0,i={unversionedId:"miscellaneous/chart-params",id:"miscellaneous/chart-params",title:"Chart Parameters Reference",description:"Chart Parameters",source:"@site/docs/miscellaneous/chart-params.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/chart-params",permalink:"/docs/miscellaneous/chart-params",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/miscellaneous/chart-params.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Chart Parameters Reference",hide_title:!0,sidebar_position:4,version:1},sidebar:"tutorialSidebar",previous:{title:"Issue Codes",permalink:"/docs/miscellaneous/issue-codes"},next:{title:"Contributing to Superset",permalink:"/docs/contributing/contributing-page"}},d={},y=[{value:"Chart Parameters",id:"chart-parameters",level:2},{value:"Datasource &amp; Chart Type",id:"datasource--chart-type",level:3},{value:"Time",id:"time",level:3},{value:"GROUP BY",id:"group-by",level:3},{value:"NOT GROUPED BY",id:"not-grouped-by",level:3},{value:"Y Axis 1",id:"y-axis-1",level:3},{value:"Y Axis 2",id:"y-axis-2",level:3},{value:"Query",id:"query",level:3},{value:"Chart Options",id:"chart-options",level:3},{value:"Y Axis",id:"y-axis",level:3},{value:"Other",id:"other",level:3},{value:"Unclassified",id:"unclassified",level:3}],m={toc:y},p="wrapper";function N(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"chart-parameters"},"Chart Parameters"),(0,r.yg)("p",null,"Chart parameters are stored as a JSON encoded string in the ",(0,r.yg)("inlineCode",{parentName:"p"},"slices.params")," column and are often referenced throughout the code as form-data. Currently the form-data is neither versioned nor typed as thus is somewhat free-formed. Note in the future there may be merit in using something like ",(0,r.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," to both annotate and validate the JSON object in addition to using a Mypy ",(0,r.yg)("inlineCode",{parentName:"p"},"TypedDict")," (introduced in Python 3.8) for typing the form-data in the backend. This section serves as a potential primer for that work."),(0,r.yg)("p",null,"The following tables provide a non-exhaustive list of the various fields which can be present in the JSON object grouped by the Explorer pane sections. These values were obtained by extracting the distinct fields from a legacy deployment consisting of tens of thousands of charts and thus some fields may be missing whilst others may be deprecated."),(0,r.yg)("p",null,"Note not all fields are correctly categorized. The fields vary based on visualization type and may appear in different sections depending on the type. Verified deprecated columns may indicate a missing migration and/or prior migrations which were unsuccessful and thus future work may be required to clean up the form-data."),(0,r.yg)("h3",{id:"datasource--chart-type"},"Datasource & Chart Type"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"database_name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"datasource")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<datasource_id>__<datasource_type>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"datasource_id")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?")," See ",(0,r.yg)("inlineCode",{parentName:"td"},"datasource"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"datasource_name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"datasource_type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?")," See ",(0,r.yg)("inlineCode",{parentName:"td"},"datasource"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"viz_type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Visualization Type")," widget")))),(0,r.yg)("h3",{id:"time"},"Time"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"granularity_sqla")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The SQLA ",(0,r.yg)("strong",{parentName:"td"},"Time Column")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"time_grain_sqla")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The SQLA ",(0,r.yg)("strong",{parentName:"td"},"Time Grain")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"time_range")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Time range")," widget")))),(0,r.yg)("h3",{id:"group-by"},"GROUP BY"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"metrics")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(string)")),(0,r.yg)("td",{parentName:"tr",align:null},"See Query section")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"order_asc")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"See Query section")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"row_limit")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"See Query section")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timeseries_limit_metric")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"See Query section")))),(0,r.yg)("h3",{id:"not-grouped-by"},"NOT GROUPED BY"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"order_by_cols")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(string)")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Ordering")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"row_limit")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"See Query section")))),(0,r.yg)("h3",{id:"y-axis-1"},"Y Axis 1"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"metric")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Left Axis Metric")," widget. See Query section")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"y_axis_format")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"See Y Axis section")))),(0,r.yg)("h3",{id:"y-axis-2"},"Y Axis 2"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"metric_2")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Right Axis Metric")," widget. See Query section")))),(0,r.yg)("h3",{id:"query"},"Query"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"adhoc_filters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(object)")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Filters")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"extra_filters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(object)")),(0,r.yg)("td",{parentName:"tr",align:null},"Another pathway to the ",(0,r.yg)("strong",{parentName:"td"},"Filters")," widget.",(0,r.yg)("br",null),"It is generally used to pass dashboard filter parameters to a chart.",(0,r.yg)("br",null),"It can be used for appending additional filters to a chart that has been saved with its own filters on an ad-hoc basis if the chart is being used as a standalone widget.",(0,r.yg)("br",null),(0,r.yg)("br",null),"For implementation examples see : ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/superset/blob/66a4c94a1ed542e69fe6399bab4c01d4540486cf/tests/utils_tests.py#L181"},"utils test.py"),(0,r.yg)("br",null),"For insight into how superset processes the contents of this parameter see: ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/superset/blob/93c7f5bb446ec6895d7702835f3157426955d5a9/superset-frontend/src/explore/exploreUtils/index.js#L159"},"exploreUtils/index.js"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"columns")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(string)")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Breakdowns")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"groupby")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"array(string)")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Group by")," or ",(0,r.yg)("strong",{parentName:"td"},"Series")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"limit")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Series Limit")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"metric"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"metric_2"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"metrics"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"percent_metrics"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"secondary_metric"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"size"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"x"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"y")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string"),",",(0,r.yg)("em",{parentName:"td"},"object"),",",(0,r.yg)("em",{parentName:"td"},"array(string)"),",",(0,r.yg)("em",{parentName:"td"},"array(object)")),(0,r.yg)("td",{parentName:"tr",align:null},"The metric(s) depending on the visualization type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"order_asc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Sort Descending")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"row_limit")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Row limit")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timeseries_limit_metric")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"object")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Sort By")," widget")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," (or equivalent) and ",(0,r.yg)("inlineCode",{parentName:"p"},"timeseries_limit_metric")," fields are all composed of either metric names or the JSON representation of the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdhocMetric")," TypeScript type. The ",(0,r.yg)("inlineCode",{parentName:"p"},"adhoc_filters")," is composed of the JSON represent of the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdhocFilter")," TypeScript type (which can comprise of columns or metrics depending on whether it is a WHERE or HAVING clause). The ",(0,r.yg)("inlineCode",{parentName:"p"},"all_columns"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"all_columns_x"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"columns"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"groupby"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"order_by_cols")," fields all represent column names."),(0,r.yg)("h3",{id:"chart-options"},"Chart Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color_picker")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"object")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Fixed Color")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"label_colors")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"object")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Color Scheme")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normalized")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Normalized")," widget")))),(0,r.yg)("h3",{id:"y-axis"},"Y Axis"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"y_axis_2_label")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"y_axis_format")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("strong",{parentName:"td"},"Y Axis Format")," widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"y_axis_zero")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Deprecated?"))))),(0,r.yg)("p",null,"Note the ",(0,r.yg)("inlineCode",{parentName:"p"},"y_axis_format")," is defined under various section for some charts."),(0,r.yg)("h3",{id:"other"},"Other"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color_scheme")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"unclassified"},"Unclassified"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"add_to_dash")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"code")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"collapsed_fieldsets")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"comparison type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"country_fieldtype")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"default_filters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"entity")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"expanded_slices")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"filter_immune_slice_fields")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"filter_immune_slices")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_col_0")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_col_1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_eq_0")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_eq_1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_op_0")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"flt_op_1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"goto_dash")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"import_time")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"label")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"linear_color_scheme")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"new_dashboard_name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"new_slice_name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"num_period_compare")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"period_ratio_type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"perm")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rdo_save")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"refresh_frequency")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"remote_id")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"resample_fillmethod")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"resample_how")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rose_area_proportion")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"save_to_dashboard_id")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"schema")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"series")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"show_bubbles")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"slice_name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timed_refresh_immune_slices")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"userid")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"N/A")),(0,r.yg)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);