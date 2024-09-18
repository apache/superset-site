"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8428],{51329:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(74848),t=n(28453);const o={title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:11,version:1},i="Importing and Exporting Datasources",a={id:"configuration/importing-exporting-datasources",title:"Importing and Exporting Datasources",description:"The superset cli allows you to import and export datasources from and to YAML. Datasources include",source:"@site/docs/configuration/importing-exporting-datasources.mdx",sourceDirName:"configuration",slug:"/configuration/importing-exporting-datasources",permalink:"/docs/configuration/importing-exporting-datasources",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/importing-exporting-datasources.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Importing and Exporting Datasources",hide_title:!0,sidebar_position:11,version:1},sidebar:"CustomSidebar",previous:{title:"Country Map Tools",permalink:"/docs/configuration/country-map-tools"},next:{title:"networking-settings",permalink:"/docs/configuration/networking-settings"}},d={},c=[{value:"Exporting Datasources to YAML",id:"exporting-datasources-to-yaml",level:2},{value:"Importing Datasources",id:"importing-datasources",level:2},{value:"Legacy Importing Datasources",id:"legacy-importing-datasources",level:2},{value:"From older versions of Superset to current version",id:"from-older-versions-of-superset-to-current-version",level:3},{value:"From older versions of Superset to older versions",id:"from-older-versions-of-superset-to-older-versions",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"importing-and-exporting-datasources",children:"Importing and Exporting Datasources"})}),"\n",(0,r.jsx)(s.p,{children:"The superset cli allows you to import and export datasources from and to YAML. Datasources include\ndatabases. The data is expected to be organized in the following hierarchy:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u251c\u2500\u2500databases\n|  \u251c\u2500\u2500database_1\n|  |  \u251c\u2500\u2500table_1\n|  |  |  \u251c\u2500\u2500columns\n|  |  |  |  \u251c\u2500\u2500column_1\n|  |  |  |  \u251c\u2500\u2500column_2\n|  |  |  |  \u2514\u2500\u2500... (more columns)\n|  |  |  \u2514\u2500\u2500metrics\n|  |  |     \u251c\u2500\u2500metric_1\n|  |  |     \u251c\u2500\u2500metric_2\n|  |  |     \u2514\u2500\u2500... (more metrics)\n|  |  \u2514\u2500\u2500 ... (more tables)\n|  \u2514\u2500\u2500 ... (more databases)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"exporting-datasources-to-yaml",children:"Exporting Datasources to YAML"}),"\n",(0,r.jsx)(s.p,{children:"You can print your current datasources to stdout by running:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset export_datasources\n"})}),"\n",(0,r.jsx)(s.p,{children:"To save your datasources to a ZIP file run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset export_datasources -f <filename>\n"})}),"\n",(0,r.jsx)(s.p,{children:"By default, default (null) values will be omitted. Use the -d flag to include them. If you want back\nreferences to be included (e.g. a column to include the table id it belongs to) use the -b flag."}),"\n",(0,r.jsx)(s.p,{children:"Alternatively, you can export datasources using the UI:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Open ",(0,r.jsx)(s.strong,{children:"Sources -> Databases"})," to export all tables associated to a single or multiple databases.\n(",(0,r.jsx)(s.strong,{children:"Tables"})," for one or more tables)"]}),"\n",(0,r.jsx)(s.li,{children:"Select the items you would like to export."}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Actions -> Export"})," to YAML"]}),"\n",(0,r.jsx)(s.li,{children:"If you want to import an item that you exported through the UI, you will need to nest it inside\nits parent element, e.g. a database needs to be nested under databases a table needs to be nested\ninside a database element."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["In order to obtain an ",(0,r.jsx)(s.strong,{children:"exhaustive list of all fields"})," you can import using the YAML import run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset export_datasource_schema\n"})}),"\n",(0,r.jsxs)(s.p,{children:["As a reminder, you can use the ",(0,r.jsx)(s.code,{children:"-b"})," flag to include back references."]}),"\n",(0,r.jsx)(s.h2,{id:"importing-datasources",children:"Importing Datasources"}),"\n",(0,r.jsx)(s.p,{children:"In order to import datasources from a ZIP file, run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset import_datasources -p <path / filename>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The optional username flag ",(0,r.jsx)(s.strong,{children:"-u"})," sets the user used for the datasource import. The default is 'admin'. Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset import_datasources -p <path / filename> -u 'admin'\n"})}),"\n",(0,r.jsx)(s.h2,{id:"legacy-importing-datasources",children:"Legacy Importing Datasources"}),"\n",(0,r.jsx)(s.h3,{id:"from-older-versions-of-superset-to-current-version",children:"From older versions of Superset to current version"}),"\n",(0,r.jsxs)(s.p,{children:["When using Superset version 4.x.x to import from an older version (2.x.x or 3.x.x) importing is supported as the command ",(0,r.jsx)(s.code,{children:"legacy_import_datasources"})," and expects a JSON or directory of JSONs. The options are ",(0,r.jsx)(s.code,{children:"-r"})," for recursive and ",(0,r.jsx)(s.code,{children:"-u"})," for specifying a user. Example of legacy import without options:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset legacy_import_datasources -p <path or filename>\n"})}),"\n",(0,r.jsx)(s.h3,{id:"from-older-versions-of-superset-to-older-versions",children:"From older versions of Superset to older versions"}),"\n",(0,r.jsxs)(s.p,{children:["When using an older Superset version (2.x.x & 3.x.x) of Superset, the command is ",(0,r.jsx)(s.code,{children:"import_datasources"}),". ZIP and YAML files are supported and to switch between them the feature flag ",(0,r.jsx)(s.code,{children:"VERSIONED_EXPORT"})," is used. When ",(0,r.jsx)(s.code,{children:"VERSIONED_EXPORT"})," is ",(0,r.jsx)(s.code,{children:"True"}),", ",(0,r.jsx)(s.code,{children:"import_datasources"})," expects a ZIP file, otherwise YAML. Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset import_datasources -p <path or filename>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["When ",(0,r.jsx)(s.code,{children:"VERSIONED_EXPORT"})," is ",(0,r.jsx)(s.code,{children:"False"}),", if you supply a path all files ending with ",(0,r.jsx)(s.strong,{children:"yaml"})," or ",(0,r.jsx)(s.strong,{children:"yml"})," will be parsed. You can apply\nadditional flags (e.g. to search the supplied path recursively):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset import_datasources -p <path> -r\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The sync flag ",(0,r.jsx)(s.strong,{children:"-s"})," takes parameters in order to sync the supplied elements with your file. Be\ncareful this can delete the contents of your meta database. Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"superset import_datasources -p <path / filename> -s columns,metrics\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This will sync all metrics and columns for all datasources found in the ",(0,r.jsx)(s.code,{children:"<path /filename>"})," in the\nSuperset meta database. This means columns and metrics not specified in YAML will be deleted. If you\nwould add tables to columns,metrics those would be synchronised as well."]}),"\n",(0,r.jsxs)(s.p,{children:["If you don\u2019t supply the sync flag (",(0,r.jsx)(s.strong,{children:"-s"}),") importing will only add and update (override) fields.\nE.g. you can add a verbose_name to the column ds in the table random_time_series from the example\ndatasets by saving the following YAML to file and then running the ",(0,r.jsx)(s.strong,{children:"import_datasources"})," command."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"databases:\n- database_name: main\n  tables:\n  - table_name: random_time_series\n    columns:\n    - column_name: ds\n      verbose_name: datetime\n"})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);