(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"/REu":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var b=a("k1TG"),n=a("8o2o"),r=(a("q1tI"),a("7ljp")),l=a("hhGP"),c=(a("qKvR"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Miscellaneous/chart-params.mdx"}});var O={_frontmatter:c},j=l.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(j,Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"chart-parameters"},"Chart Parameters"),Object(r.b)("p",null,"Chart parameters are stored as a JSON encoded string the ",Object(r.b)("inlineCode",{parentName:"p"},"slices.params")," column and are often referenced throughout the code as form-data. Currently the form-data is neither versioned nor typed as thus is somewhat free-formed. Note in the future there may be merit in using something like ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON Schema")," to both annotate and validate the JSON object in addition to using a Mypy ",Object(r.b)("inlineCode",{parentName:"p"},"TypedDict")," (introduced in Python 3.8) for typing the form-data in the backend. This section serves as a potential primer for that work."),Object(r.b)("p",null,"The following tables provide a non-exhausive list of the various fields which can be present in the JSON object grouped by the Explorer pane sections. These values were obtained by extracting the distinct fields from a legacy deployment consisting of tens of thousands of charts and thus some fields may be missing whilst others may be deprecated."),Object(r.b)("p",null,"Note not all fields are correctly categorized. The fields vary based on visualization type and may appear in different sections depending on the type. Verified deprecated columns may indicate a missing migration and/or prior migrations which were unsuccessful and thus future work may be required to clean up the form-data."),Object(r.b)("h3",{id:"datasource--chart-type"},"Datasource & Chart Type"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"database_name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"datasource")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<datasouce_id>__<datasource_type>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"datasource_id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?")," See ",Object(r.b)("inlineCode",{parentName:"td"},"datasource"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"datasource_name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"datasource_type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?")," See ",Object(r.b)("inlineCode",{parentName:"td"},"datasource"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"viz_type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Visualization Type")," widget")))),Object(r.b)("h3",{id:"time"},"Time"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"druid_time_origin")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The Druid ",Object(r.b)("strong",{parentName:"td"},"Origin")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"granularity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The Druid ",Object(r.b)("strong",{parentName:"td"},"Time Granularity")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"granularity_sqla")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The SQLA ",Object(r.b)("strong",{parentName:"td"},"Time Column")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time_grain_sqla")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The SQLA ",Object(r.b)("strong",{parentName:"td"},"Time Grain")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time_range")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Time range")," widget")))),Object(r.b)("h3",{id:"group-by"},"GROUP BY"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"metrics")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(string)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Query section")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"order_asc")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Query section")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"row_limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Query section")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timeseries_limit_metric")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Query section")))),Object(r.b)("h3",{id:"not-grouped-by"},"NOT GROUPED BY"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"order_by_cols")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(string)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Ordering")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"row_limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Query section")))),Object(r.b)("h3",{id:"y-axis-1"},"Y Axis 1"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"metric")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Left Axis Metric")," widget. See Query section")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y_axis_format")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"See Y Axis section")))),Object(r.b)("h3",{id:"y-axis-2"},"Y Axis 2"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"metric_2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Right Axis Metric")," widget. See Query section")))),Object(r.b)("h3",{id:"query"},"Query"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"adhoc_filters")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(object)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Filters")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"extra_filters")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(object)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Another pathway to the ",Object(r.b)("strong",{parentName:"td"},"Filters")," widget.",Object(r.b)("br",null),"It is generally used to pass dashboard filter parameters to a chart.",Object(r.b)("br",null),"It can be used for appending additional filters to a chart that has been saved with its own filters on an ad-hoc basis if the chart is being used as a standalone widget.",Object(r.b)("br",null),Object(r.b)("br",null),"For implementation examples see : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/apache/superset/blob/66a4c94a1ed542e69fe6399bab4c01d4540486cf/tests/utils_tests.py#L181"}),"utils test.py"),Object(r.b)("br",null),"For insight into how superset processes the contents of this parameter see: ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/apache/superset/blob/93c7f5bb446ec6895d7702835f3157426955d5a9/superset-frontend/src/explore/exploreUtils/index.js#L159"}),"exploreUtils/index.js"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columns")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(string)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Breakdowns")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"groupby")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"array(string)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Group by")," or ",Object(r.b)("strong",{parentName:"td"},"Series")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Series Limit")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"metric"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"metric_2"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"metrics"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"percent_mertics"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"secondary_metric"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"size"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"x"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"y")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"),",",Object(r.b)("em",{parentName:"td"},"object"),",",Object(r.b)("em",{parentName:"td"},"array(string)"),",",Object(r.b)("em",{parentName:"td"},"array(object)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The metric(s) depending on the visualization type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"order_asc")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Sort Descending")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"row_limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Row limit")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timeseries_limit_metric")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"object")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Sort By")," widget")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"metric")," (or equivalent) and ",Object(r.b)("inlineCode",{parentName:"p"},"timeseries_limit_metric")," fields are all composed of either metric names or the JSON representation of the ",Object(r.b)("inlineCode",{parentName:"p"},"AdhocMetric")," TypeScript type. The ",Object(r.b)("inlineCode",{parentName:"p"},"adhoc_filters")," is composed of the JSON represent of the ",Object(r.b)("inlineCode",{parentName:"p"},"AdhocFilter")," TypeScript type (which can comprise of columns or metrics depending on whether it is a WHERE or HAVING clause). The ",Object(r.b)("inlineCode",{parentName:"p"},"all_columns"),", ",Object(r.b)("inlineCode",{parentName:"p"},"all_columns_x"),", ",Object(r.b)("inlineCode",{parentName:"p"},"columns"),", ",Object(r.b)("inlineCode",{parentName:"p"},"groupby"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"order_by_cols")," fields all represent column names."),Object(r.b)("h3",{id:"chart-options"},"Chart Options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color_picker")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"object")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Fixed Color")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"label_colors")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"object")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Color Scheme")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"normalized")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Normalized")," widget")))),Object(r.b)("h3",{id:"y-axis"},"Y Axis"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y_axis_2_label")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y_axis_format")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("strong",{parentName:"td"},"Y Axis Format")," widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y_axis_zero")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Deprecated?"))))),Object(r.b)("p",null,"Note the ",Object(r.b)("inlineCode",{parentName:"p"},"y_axis_format")," is defined under various section for some charts."),Object(r.b)("h3",{id:"other"},"Other"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color_scheme")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"unclassified"},"Unclassified"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"add_to_dash")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"code")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collapsed_fieldsets")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"comparison type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"country_fieldtype")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"default_filters")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"expanded_slices")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"filter_immune_slice_fields")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"filter_immune_slices")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_col_0")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_col_1")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_eq_0")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_eq_1")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_op_0")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flt_op_1")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"goto_dash")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"import_time")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"label")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"linear_color_scheme")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"new_dashboard_name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"new_slice_name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"num_period_compare")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"period_ratio_type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"perm")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"rdo_save")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"refresh_frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"remote_id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"resample_fillmethod")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"resample_how")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"rose_area_proportion")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"save_to_dashboard_id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schema")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"series")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"show_bubbles")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"slice_name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timed_refresh_immune_slices")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"userid")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"N/A")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Miscellaneous/chart-params.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-miscellaneous-chart-params-mdx-9bb013904824376d707a.js.map