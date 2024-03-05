"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4111],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(45072),o=(r(11504),r(95788));const a={title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:2,version:1},s=void 0,i={unversionedId:"miscellaneous/importing-exporting-datasources",id:"miscellaneous/importing-exporting-datasources",title:"Importing and Exporting Datasources",description:"Importing and Exporting Datasources",source:"@site/docs/miscellaneous/importing-exporting-datasources.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/importing-exporting-datasources",permalink:"/docs/miscellaneous/importing-exporting-datasources",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/miscellaneous/importing-exporting-datasources.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Timezones",permalink:"/docs/miscellaneous/timezones"},next:{title:"Issue Codes",permalink:"/docs/miscellaneous/issue-codes"}},l={},p=[{value:"Importing and Exporting Datasources",id:"importing-and-exporting-datasources",level:2},{value:"Exporting Datasources to YAML",id:"exporting-datasources-to-yaml",level:3},{value:"Importing Datasources",id:"importing-datasources",level:3},{value:"Legacy Importing Datasources",id:"legacy-importing-datasources",level:3},{value:"From older versions of Superset to current version",id:"from-older-versions-of-superset-to-current-version",level:4},{value:"From older versions of Superset to older versions",id:"from-older-versions-of-superset-to-older-versions",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"importing-and-exporting-datasources"},"Importing and Exporting Datasources"),(0,o.yg)("p",null,"The superset cli allows you to import and export datasources from and to YAML. Datasources include\ndatabases. The data is expected to be organized in the following hierarchy:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500databases\n|  \u251c\u2500\u2500database_1\n|  |  \u251c\u2500\u2500table_1\n|  |  |  \u251c\u2500\u2500columns\n|  |  |  |  \u251c\u2500\u2500column_1\n|  |  |  |  \u251c\u2500\u2500column_2\n|  |  |  |  \u2514\u2500\u2500... (more columns)\n|  |  |  \u2514\u2500\u2500metrics\n|  |  |     \u251c\u2500\u2500metric_1\n|  |  |     \u251c\u2500\u2500metric_2\n|  |  |     \u2514\u2500\u2500... (more metrics)\n|  |  \u2514\u2500\u2500 ... (more tables)\n|  \u2514\u2500\u2500 ... (more databases)\n")),(0,o.yg)("h3",{id:"exporting-datasources-to-yaml"},"Exporting Datasources to YAML"),(0,o.yg)("p",null,"You can print your current datasources to stdout by running:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset export_datasources\n")),(0,o.yg)("p",null,"To save your datasources to a ZIP file run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset export_datasources -f <filename>\n")),(0,o.yg)("p",null,"By default, default (null) values will be omitted. Use the -d flag to include them. If you want back\nreferences to be included (e.g. a column to include the table id it belongs to) use the -b flag."),(0,o.yg)("p",null,"Alternatively, you can export datasources using the UI:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open ",(0,o.yg)("strong",{parentName:"li"},"Sources -> Databases")," to export all tables associated to a single or multiple databases.\n(",(0,o.yg)("strong",{parentName:"li"},"Tables")," for one or more tables)"),(0,o.yg)("li",{parentName:"ol"},"Select the items you would like to export."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("strong",{parentName:"li"},"Actions -> Export")," to YAML"),(0,o.yg)("li",{parentName:"ol"},"If you want to import an item that you exported through the UI, you will need to nest it inside\nits parent element, e.g. a database needs to be nested under databases a table needs to be nested\ninside a database element.")),(0,o.yg)("p",null,"In order to obtain an ",(0,o.yg)("strong",{parentName:"p"},"exhaustive list of all fields")," you can import using the YAML import run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset export_datasource_schema\n")),(0,o.yg)("p",null,"As a reminder, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"-b")," flag to include back references."),(0,o.yg)("h3",{id:"importing-datasources"},"Importing Datasources"),(0,o.yg)("p",null,"In order to import datasources from a ZIP file, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset import_datasources -p <path / filename>\n")),(0,o.yg)("p",null,"The optional username flag ",(0,o.yg)("strong",{parentName:"p"},"-u")," sets the user used for the datasource import. The default is 'admin'. Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset import_datasources -p <path / filename> -u 'admin'\n")),(0,o.yg)("h3",{id:"legacy-importing-datasources"},"Legacy Importing Datasources"),(0,o.yg)("h4",{id:"from-older-versions-of-superset-to-current-version"},"From older versions of Superset to current version"),(0,o.yg)("p",null,"When using Superset version 4.x.x to import from an older version (2.x.x or 3.x.x) importing is supported as the command ",(0,o.yg)("inlineCode",{parentName:"p"},"legacy_import_datasources")," and expects a JSON or directory of JSONs. The options are ",(0,o.yg)("inlineCode",{parentName:"p"},"-r")," for recursive and ",(0,o.yg)("inlineCode",{parentName:"p"},"-u")," for specifying a user. Example of legacy import without options:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset legacy_import_datasources -p <path or filename>\n")),(0,o.yg)("h4",{id:"from-older-versions-of-superset-to-older-versions"},"From older versions of Superset to older versions"),(0,o.yg)("p",null,"When using an older Superset version (2.x.x & 3.x.x) of Superset, the command is ",(0,o.yg)("inlineCode",{parentName:"p"},"import_datasources"),". ZIP and YAML files are supported and to switch between them the feature flag ",(0,o.yg)("inlineCode",{parentName:"p"},"VERSIONED_EXPORT")," is used. When ",(0,o.yg)("inlineCode",{parentName:"p"},"VERSIONED_EXPORT")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"True"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"import_datasources")," expects a ZIP file, otherwise YAML. Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset import_datasources -p <path or filename>\n")),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"VERSIONED_EXPORT")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"False"),", if you supply a path all files ending with ",(0,o.yg)("strong",{parentName:"p"},"yaml")," or ",(0,o.yg)("strong",{parentName:"p"},"yml")," will be parsed. You can apply\nadditional flags (e.g. to search the supplied path recursively):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset import_datasources -p <path> -r\n")),(0,o.yg)("p",null,"The sync flag ",(0,o.yg)("strong",{parentName:"p"},"-s")," takes parameters in order to sync the supplied elements with your file. Be\ncareful this can delete the contents of your meta database. Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"superset import_datasources -p <path / filename> -s columns,metrics\n")),(0,o.yg)("p",null,"This will sync all metrics and columns for all datasources found in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<path /filename>")," in the\nSuperset meta database. This means columns and metrics not specified in YAML will be deleted. If you\nwould add tables to columns,metrics those would be synchronised as well."),(0,o.yg)("p",null,"If you don\u2019t supply the sync flag (",(0,o.yg)("strong",{parentName:"p"},"-s"),") importing will only add and update (override) fields.\nE.g. you can add a verbose_name to the column ds in the table random_time_series from the example\ndatasets by saving the following YAML to file and then running the ",(0,o.yg)("strong",{parentName:"p"},"import_datasources")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"databases:\n- database_name: main\n  tables:\n  - table_name: random_time_series\n    columns:\n    - column_name: ds\n      verbose_name: datetime\n")))}c.isMDXComponent=!0}}]);