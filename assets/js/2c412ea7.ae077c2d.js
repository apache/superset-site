"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:2,version:1},s=void 0,i={unversionedId:"miscellaneous/importing-exporting-datasources",id:"miscellaneous/importing-exporting-datasources",title:"Importing and Exporting Datasources",description:"Importing and Exporting Datasources",source:"@site/docs/miscellaneous/importing-exporting-datasources.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/importing-exporting-datasources",permalink:"/docs/miscellaneous/importing-exporting-datasources",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/miscellaneous/importing-exporting-datasources.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Timezones",permalink:"/docs/miscellaneous/timezones"},next:{title:"Issue Codes",permalink:"/docs/miscellaneous/issue-codes"}},l={},p=[{value:"Importing and Exporting Datasources",id:"importing-and-exporting-datasources",level:2},{value:"Exporting Datasources to YAML",id:"exporting-datasources-to-yaml",level:3},{value:"Importing Datasources from YAML",id:"importing-datasources-from-yaml",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"importing-and-exporting-datasources"},"Importing and Exporting Datasources"),(0,a.kt)("p",null,"The superset cli allows you to import and export datasources from and to YAML. Datasources include\ndatabases. The data is expected to be organized in the following hierarchy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500databases\n|  \u251c\u2500\u2500database_1\n|  |  \u251c\u2500\u2500table_1\n|  |  |  \u251c\u2500\u2500columns\n|  |  |  |  \u251c\u2500\u2500column_1\n|  |  |  |  \u251c\u2500\u2500column_2\n|  |  |  |  \u2514\u2500\u2500... (more columns)\n|  |  |  \u2514\u2500\u2500metrics\n|  |  |     \u251c\u2500\u2500metric_1\n|  |  |     \u251c\u2500\u2500metric_2\n|  |  |     \u2514\u2500\u2500... (more metrics)\n|  |  \u2514\u2500\u2500 ... (more tables)\n|  \u2514\u2500\u2500 ... (more databases)\n")),(0,a.kt)("h3",{id:"exporting-datasources-to-yaml"},"Exporting Datasources to YAML"),(0,a.kt)("p",null,"You can print your current datasources to stdout by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset export_datasources\n")),(0,a.kt)("p",null,"To save your datasources to a file run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset export_datasources -f <filename>\n")),(0,a.kt)("p",null,"By default, default (null) values will be omitted. Use the -d flag to include them. If you want back\nreferences to be included (e.g. a column to include the table id it belongs to) use the -b flag."),(0,a.kt)("p",null,"Alternatively, you can export datasources using the UI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Sources -> Databases")," to export all tables associated to a single or multiple databases.\n(",(0,a.kt)("strong",{parentName:"li"},"Tables")," for one or more tables)"),(0,a.kt)("li",{parentName:"ol"},"Select the items you would like to export."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Actions -> Export")," to YAML"),(0,a.kt)("li",{parentName:"ol"},"If you want to import an item that you exported through the UI, you will need to nest it inside\nits parent element, e.g. a database needs to be nested under databases a table needs to be nested\ninside a database element.")),(0,a.kt)("p",null,"In order to obtain an ",(0,a.kt)("strong",{parentName:"p"},"exhaustive list of all fields")," you can import using the YAML import run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset export_datasource_schema\n")),(0,a.kt)("p",null,"As a reminder, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-b")," flag to include back references."),(0,a.kt)("h3",{id:"importing-datasources-from-yaml"},"Importing Datasources from YAML"),(0,a.kt)("p",null,"In order to import datasources from a YAML file(s), run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset import_datasources -p <path or filename>\n")),(0,a.kt)("p",null,"If you supply a path all files ending with ",(0,a.kt)("strong",{parentName:"p"},"yaml")," or ",(0,a.kt)("strong",{parentName:"p"},"yml")," will be parsed. You can apply\nadditional flags (e.g. to search the supplied path recursively):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset import_datasources -p <path> -r\n")),(0,a.kt)("p",null,"The sync flag ",(0,a.kt)("strong",{parentName:"p"},"-s")," takes parameters in order to sync the supplied elements with your file. Be\ncareful this can delete the contents of your meta database. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset import_datasources -p <path / filename> -s columns,metrics\n")),(0,a.kt)("p",null,"This will sync all metrics and columns for all datasources found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<path /filename>")," in the\nSuperset meta database. This means columns and metrics not specified in YAML will be deleted. If you\nwould add tables to columns,metrics those would be synchronised as well."),(0,a.kt)("p",null,"If you don\u2019t supply the sync flag (",(0,a.kt)("strong",{parentName:"p"},"-s"),") importing will only add and update (override) fields.\nE.g. you can add a verbose_name to the column ds in the table random_time_series from the example\ndatasets by saving the following YAML to file and then running the ",(0,a.kt)("strong",{parentName:"p"},"import_datasources")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"databases:\n- database_name: main\n  tables:\n  - table_name: random_time_series\n    columns:\n    - column_name: ds\n      verbose_name: datetime\n")))}d.isMDXComponent=!0}}]);