"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[217],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(96540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=s,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(58168),s=(a(96540),a(15680));const r={title:"Frequently Asked Questions",hide_title:!0,sidebar_position:8},o=void 0,i={unversionedId:"frequently-asked-questions",id:"frequently-asked-questions",title:"Frequently Asked Questions",description:"Frequently Asked Questions",source:"@site/docs/frequently-asked-questions.mdx",sourceDirName:".",slug:"/frequently-asked-questions",permalink:"/docs/frequently-asked-questions",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/frequently-asked-questions.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Frequently Asked Questions",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Entity-Relationship Diagram",permalink:"/docs/contributing/erd"},next:{title:"Security",permalink:"/docs/security/"}},l={},u=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How big of a dataset can Superset handle?",id:"how-big-of-a-dataset-can-superset-handle",level:3},{value:"What are the computing specifications required to run Superset?",id:"what-are-the-computing-specifications-required-to-run-superset",level:3},{value:"Can I join / query multiple tables at one time?",id:"can-i-join--query-multiple-tables-at-one-time",level:3},{value:"How do I create my own visualization?",id:"how-do-i-create-my-own-visualization",level:3},{value:"Can I upload and visualize CSV data?",id:"can-i-upload-and-visualize-csv-data",level:3},{value:"Why are my queries timing out?",id:"why-are-my-queries-timing-out",level:3},{value:"Why is the map not visible in the geospatial visualization?",id:"why-is-the-map-not-visible-in-the-geospatial-visualization",level:3},{value:"How to limit the timed refresh on a dashboard?",id:"how-to-limit-the-timed-refresh-on-a-dashboard",level:3},{value:"What if the table schema changed?",id:"what-if-the-table-schema-changed",level:3},{value:"What database engine can I use as a backend for Superset?",id:"what-database-engine-can-i-use-as-a-backend-for-superset",level:3},{value:"How can I configure OAuth authentication and authorization?",id:"how-can-i-configure-oauth-authentication-and-authorization",level:3},{value:"Is there a way to force the dashboard to use specific colors?",id:"is-there-a-way-to-force-the-dashboard-to-use-specific-colors",level:3},{value:"Does Superset work with insert database engine here?",id:"does-superset-work-with-insert-database-engine-here",level:3},{value:"Does Superset offer a public API?",id:"does-superset-offer-a-public-api",level:3},{value:"How can I see usage statistics (e.g., monthly active users)?",id:"how-can-i-see-usage-statistics-eg-monthly-active-users",level:3},{value:"What Does Hours Offset in the Edit Dataset view do?",id:"what-does-hours-offset-in-the-edit-dataset-view-do",level:3},{value:"Does Superset collect any telemetry data?",id:"does-superset-collect-any-telemetry-data",level:3},{value:"Does Superset have an archive panel or trash bin from which a user can recover deleted assets?",id:"does-superset-have-an-archive-panel-or-trash-bin-from-which-a-user-can-recover-deleted-assets",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,s.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,s.yg)("h3",{id:"how-big-of-a-dataset-can-superset-handle"},"How big of a dataset can Superset handle?"),(0,s.yg)("p",null,"Superset can work with even gigantic databases! Superset acts as a thin layer above your underlying\ndatabases or data engines, which do all the processing.  Superset simply visualizes the results of\nthe query."),(0,s.yg)("p",null,"The key to achieving acceptable performance in Superset is whether your database can execute queries\nand return results at a speed that is acceptable to your users. If you experience slow performance with\nSuperset, benchmark and tune your data warehouse."),(0,s.yg)("h3",{id:"what-are-the-computing-specifications-required-to-run-superset"},"What are the computing specifications required to run Superset?"),(0,s.yg)("p",null,"The specs of your Superset installation depend on how many users you have and what their activity is, not\non the size of your data.  Superset admins in the community have reported 8GB RAM, 2vCPUs as adequate to\nrun a moderately-sized instance. To develop Superset, e.g., compile code or build images, you may\nneed more power."),(0,s.yg)("p",null,"Monitor your resource usage and increase or decrease as needed. Note that Superset usage has a tendency\nto occur in spikes, e.g., if everyone in a meeting loads the same dashboard at once."),(0,s.yg)("p",null,"Superset's application metadata does not require a very large database to store it, though\nthe log file grows over time."),(0,s.yg)("h3",{id:"can-i-join--query-multiple-tables-at-one-time"},"Can I join / query multiple tables at one time?"),(0,s.yg)("p",null,"Not in the Explore or Visualization UI. A Superset SQLAlchemy datasource can only be a single table\nor a view."),(0,s.yg)("p",null,"When working with tables, the solution would be to create a table that contains all the fields\nneeded for your analysis, most likely through some scheduled batch process."),(0,s.yg)("p",null,"A view is a simple logical layer that abstracts an arbitrary SQL queries as a virtual table. This can\nallow you to join and union multiple tables and to apply some transformation using arbitrary SQL\nexpressions. The limitation there is your database performance, as Superset effectively will run a\nquery on top of your query (view). A good practice may be to limit yourself to joining your main\nlarge table to one or many small tables only, and avoid using ",(0,s.yg)("em",{parentName:"p"},"GROUP BY")," where possible as Superset\nwill do its own ",(0,s.yg)("em",{parentName:"p"},"GROUP BY")," and doing the work twice might slow down performance."),(0,s.yg)("p",null,"Whether you use a table or a view, performance depends on how fast your database can deliver\nthe result to users interacting with Superset."),(0,s.yg)("p",null,"However, if you are using SQL Lab, there is no such limitation. You can write SQL queries to join\nmultiple tables as long as your database account has access to the tables."),(0,s.yg)("h3",{id:"how-do-i-create-my-own-visualization"},"How do I create my own visualization?"),(0,s.yg)("p",null,"We recommend reading the instructions in\n",(0,s.yg)("a",{parentName:"p",href:"/docs/contributing/creating-viz-plugins"},"Creating Visualization Plugins"),"."),(0,s.yg)("h3",{id:"can-i-upload-and-visualize-csv-data"},"Can I upload and visualize CSV data?"),(0,s.yg)("p",null,"Absolutely! Read the instructions ",(0,s.yg)("a",{parentName:"p",href:"/docs/creating-charts-dashboards/exploring-data"},"here")," to learn\nhow to enable and use CSV upload."),(0,s.yg)("h3",{id:"why-are-my-queries-timing-out"},"Why are my queries timing out?"),(0,s.yg)("p",null,"There are many reasons may cause long query timing out."),(0,s.yg)("p",null,"For running long query from Sql Lab, by default Superset allows it run as long as 6 hours before it\nbeing killed by celery. If you want to increase the time for running query, you can specify the\ntimeout in configuration. For example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SQLLAB_ASYNC_TIME_LIMIT_SEC = 60 * 60 * 6\n")),(0,s.yg)("p",null,"If you are seeing timeouts (504 Gateway Time-out) when loading dashboard or explore slice, you are\nprobably behind gateway or proxy server (such as Nginx). If it did not receive a timely response\nfrom Superset server (which is processing long queries), these web servers will send 504 status code\nto clients directly. Superset has a client-side timeout limit to address this issue. If query didn\u2019t\ncome back within client-side timeout (60 seconds by default), Superset will display warning message\nto avoid gateway timeout message. If you have a longer gateway timeout limit, you can change the\ntimeout settings in ",(0,s.yg)("strong",{parentName:"p"},"superset_config.py"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SUPERSET_WEBSERVER_TIMEOUT = 60\n")),(0,s.yg)("h3",{id:"why-is-the-map-not-visible-in-the-geospatial-visualization"},"Why is the map not visible in the geospatial visualization?"),(0,s.yg)("p",null,"You need to register a free account at ",(0,s.yg)("a",{parentName:"p",href:"https://www.mapbox.com"},"Mapbox.com"),", obtain an API key, and add it\nto ",(0,s.yg)("strong",{parentName:"p"},".env")," at the key MAPBOX_API_KEY:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'MAPBOX_API_KEY = "longstringofalphanumer1c"\n')),(0,s.yg)("h3",{id:"how-to-limit-the-timed-refresh-on-a-dashboard"},"How to limit the timed refresh on a dashboard?"),(0,s.yg)("p",null,"By default, the dashboard timed refresh feature allows you to automatically re-query every slice on\na dashboard according to a set schedule. Sometimes, however, you won\u2019t want all of the slices to be\nrefreshed - especially if some data is slow moving, or run heavy queries. To exclude specific slices\nfrom the timed refresh process, add the ",(0,s.yg)("inlineCode",{parentName:"p"},"timed_refresh_immune_slices")," key to the dashboard JSON\nMetadata field:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'{\n   "filter_immune_slices": [],\n    "expanded_slices": {},\n    "filter_immune_slice_fields": {},\n    "timed_refresh_immune_slices": [324]\n}\n')),(0,s.yg)("p",null,"In the example above, if a timed refresh is set for the dashboard, then every slice except 324 will\nbe automatically re-queried on schedule."),(0,s.yg)("p",null,"Slice refresh will also be staggered over the specified period. You can turn off this staggering by\nsetting the ",(0,s.yg)("inlineCode",{parentName:"p"},"stagger_refresh")," to false and modify the stagger period by setting ",(0,s.yg)("inlineCode",{parentName:"p"},"stagger_time")," to a\nvalue in milliseconds in the JSON Metadata field:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'{\n    "stagger_refresh": false,\n    "stagger_time": 2500\n}\n')),(0,s.yg)("p",null,"Here, the entire dashboard will refresh at once if periodic refresh is on. The stagger time of 2.5\nseconds is ignored."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Why does \u2018flask fab\u2019 or superset freezed/hung/not responding when started (my home directory is\nNFS mounted)?")),(0,s.yg)("p",null,"By default, Superset creates and uses an SQLite database at ",(0,s.yg)("inlineCode",{parentName:"p"},"~/.superset/superset.db"),". SQLite is\nknown to ",(0,s.yg)("a",{parentName:"p",href:"https://www.sqlite.org/lockingv3.html"},"not work well if used on NFS")," due to broken file\nlocking implementation on NFS."),(0,s.yg)("p",null,"You can override this path using the ",(0,s.yg)("strong",{parentName:"p"},"SUPERSET_HOME")," environment variable."),(0,s.yg)("p",null,"Another workaround is to change where superset stores the sqlite database by adding the following in\n",(0,s.yg)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SQLALCHEMY_DATABASE_URI = 'sqlite:////new/location/superset.db?check_same_thread=false'\n")),(0,s.yg)("p",null,"You can read more about customizing Superset using the configuration file\n",(0,s.yg)("a",{parentName:"p",href:"/docs/installation/configuring-superset"},"here"),"."),(0,s.yg)("h3",{id:"what-if-the-table-schema-changed"},"What if the table schema changed?"),(0,s.yg)("p",null,"Table schemas evolve, and Superset needs to reflect that. It\u2019s pretty common in the life cycle of a\ndashboard to want to add a new dimension or metric. To get Superset to discover your new columns,\nall you have to do is to go to ",(0,s.yg)("strong",{parentName:"p"},"Data -> Datasets"),", click the edit icon next to the dataset\nwhose schema has changed, and hit ",(0,s.yg)("strong",{parentName:"p"},"Sync columns from source")," from the ",(0,s.yg)("strong",{parentName:"p"},"Columns")," tab.\nBehind the scene, the new columns will get merged. Following this, you may want to re-edit the\ntable afterwards to configure the Columns tab, check the appropriate boxes and save again."),(0,s.yg)("h3",{id:"what-database-engine-can-i-use-as-a-backend-for-superset"},"What database engine can I use as a backend for Superset?"),(0,s.yg)("p",null,"To clarify, the database backend is an OLTP database used by Superset to store its internal\ninformation like your list of users and dashboard definitions. While Superset supports a\n",(0,s.yg)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers/"},"variety of databases as data ",(0,s.yg)("em",{parentName:"a"},"sources")),",\nonly a few database engines are supported for use as the OLTP backend / metadata store."),(0,s.yg)("p",null,"Superset is tested using MySQL, PostgreSQL, and SQLite backends. It\u2019s recommended you install\nSuperset on one of these database servers for production.  Installation on other OLTP databases\nmay work but isn\u2019t tested.  It has been reported that ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/issues/18961"},"Microsoft SQL Server does ",(0,s.yg)("em",{parentName:"a"},"not"),"\nwork as a Superset backend"),". Column-store,\nnon-OLTP databases are not designed for this type of workload."),(0,s.yg)("h3",{id:"how-can-i-configure-oauth-authentication-and-authorization"},"How can I configure OAuth authentication and authorization?"),(0,s.yg)("p",null,"You can take a look at this Flask-AppBuilder\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/dpgaspar/Flask-AppBuilder/blob/master/examples/oauth/config.py"},"configuration example"),"."),(0,s.yg)("h3",{id:"is-there-a-way-to-force-the-dashboard-to-use-specific-colors"},"Is there a way to force the dashboard to use specific colors?"),(0,s.yg)("p",null,"It is possible on a per-dashboard basis by providing a mapping of labels to colors in the JSON\nMetadata attribute using the ",(0,s.yg)("inlineCode",{parentName:"p"},"label_colors")," key."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'{\n    "label_colors": {\n        "Girls": "#FF69B4",\n        "Boys": "#ADD8E6"\n    }\n}\n')),(0,s.yg)("h3",{id:"does-superset-work-with-insert-database-engine-here"},"Does Superset work with ","[insert database engine here]","?"),(0,s.yg)("p",null,"The ",(0,s.yg)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers"},"Connecting to Databases section")," provides the best\noverview for supported databases. Database engines not listed on that page may work too. We rely on\nthe community to contribute to this knowledge base."),(0,s.yg)("p",null,"For a database engine to be supported in Superset through the SQLAlchemy connector, it requires\nhaving a Python compliant ",(0,s.yg)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/13/dialects/"},"SQLAlchemy dialect")," as well\nas a ",(0,s.yg)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0249/"},"DBAPI driver")," defined. Database that have limited\nSQL support may work as well. For instance it\u2019s possible to connect to Druid through the SQLAlchemy\nconnector even though Druid does not support joins and subqueries. Another key element for a\ndatabase to be supported is through the Superset Database Engine Specification interface. This\ninterface allows for defining database-specific configurations and logic that go beyond the\nSQLAlchemy and DBAPI scope. This includes features like:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"date-related SQL function that allow Superset to fetch different time granularities when running\ntime-series queries"),(0,s.yg)("li",{parentName:"ul"},"whether the engine supports subqueries. If false, Superset may run 2-phase queries to compensate\nfor the limitation"),(0,s.yg)("li",{parentName:"ul"},"methods around processing logs and inferring the percentage of completion of a query"),(0,s.yg)("li",{parentName:"ul"},"technicalities as to how to handle cursors and connections if the driver is not standard DBAPI")),(0,s.yg)("p",null,"Beyond the SQLAlchemy connector, it\u2019s also possible, though much more involved, to extend Superset\nand write your own connector. The only example of this at the moment is the Druid connector, which\nis getting superseded by Druid\u2019s growing SQL support and the recent availability of a DBAPI and\nSQLAlchemy driver. If the database you are considering integrating has any kind of of SQL support,\nit\u2019s probably preferable to go the SQLAlchemy route. Note that for a native connector to be possible\nthe database needs to have support for running OLAP-type queries and should be able to do things that\nare typical in basic SQL:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"aggregate data"),(0,s.yg)("li",{parentName:"ul"},"apply filters"),(0,s.yg)("li",{parentName:"ul"},"apply HAVING-type filters"),(0,s.yg)("li",{parentName:"ul"},"be schema-aware, expose columns and types")),(0,s.yg)("h3",{id:"does-superset-offer-a-public-api"},"Does Superset offer a public API?"),(0,s.yg)("p",null,"Yes, a public REST API, and the surface of that API formal is expanding steadily. You can read more about this API and\ninteract with it using Swagger ",(0,s.yg)("a",{parentName:"p",href:"/docs/api"},"here"),"."),(0,s.yg)("p",null,"Some of the\noriginal vision for the collection of endpoints under ",(0,s.yg)("strong",{parentName:"p"},"/api/v1")," was originally specified in\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/issues/7259"},"SIP-17")," and constant progress has been\nmade to cover more and more use cases."),(0,s.yg)("p",null,"The API available is documented using ",(0,s.yg)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," and the documentation can be\nmade available under ",(0,s.yg)("strong",{parentName:"p"},"/swagger/v1")," by enabling the following flag in ",(0,s.yg)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"FAB_API_SWAGGER_UI = True\n")),(0,s.yg)("p",null,"There are other undocumented ","[private]"," ways to interact with Superset programmatically that offer no\nguarantees and are not recommended but may fit your use case temporarily:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"using the ORM (SQLAlchemy) directly"),(0,s.yg)("li",{parentName:"ul"},"using the internal FAB ModelView API (to be deprecated in Superset)"),(0,s.yg)("li",{parentName:"ul"},"altering the source code in your fork")),(0,s.yg)("h3",{id:"how-can-i-see-usage-statistics-eg-monthly-active-users"},"How can I see usage statistics (e.g., monthly active users)?"),(0,s.yg)("p",null,"This functionality is not included with Superset, but you can extract and analyze Superset's application\nmetadata to see what actions have occurred.  By default, user activities are logged in the ",(0,s.yg)("inlineCode",{parentName:"p"},"logs")," table\nin Superset's metadata database.  One company has published a write-up of ",(0,s.yg)("a",{parentName:"p",href:"https://engineering.hometogo.com/monitor-superset-usage-via-superset-c7f9fba79525"},"how they analyzed Superset\nusage, including example queries"),"."),(0,s.yg)("h3",{id:"what-does-hours-offset-in-the-edit-dataset-view-do"},"What Does Hours Offset in the Edit Dataset view do?"),(0,s.yg)("p",null,"In the Edit Dataset view, you can specify a time offset. This field lets you configure the\nnumber of hours to be added or subtracted from the time column.\nThis can be used, for example, to convert UTC time to local time."),(0,s.yg)("h3",{id:"does-superset-collect-any-telemetry-data"},"Does Superset collect any telemetry data?"),(0,s.yg)("p",null,"Superset uses ",(0,s.yg)("a",{parentName:"p",href:"https://about.scarf.sh/"},"Scarf")," by default to collect basic telemetry data upon installing and/or running Superset. This data helps the maintainers of Superset better understand which versions of Superset are being used, in order to prioritize patch/minor releases and security fixes.\nWe use the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.scarf.sh/gateway/"},"Scarf Gateway")," to sit in front of container registries, the ",(0,s.yg)("a",{parentName:"p",href:"https://about.scarf.sh/package-sdks"},"scarf-js")," package to track ",(0,s.yg)("inlineCode",{parentName:"p"},"npm")," installations, and a Scarf pixel to gather anonymous analytics on Superset page views.\nScarf purges PII and provides aggregated statistics. Superset users can easily opt out of analytics in various ways documented ",(0,s.yg)("a",{parentName:"p",href:"https://docs.scarf.sh/gateway/#do-not-track"},"here")," and ",(0,s.yg)("a",{parentName:"p",href:"https://docs.scarf.sh/package-analytics/#as-a-user-of-a-package-using-scarf-js-how-can-i-opt-out-of-analytics"},"here"),".\nSuperset maintainers can also opt out of telemetry data collection by setting the ",(0,s.yg)("inlineCode",{parentName:"p"},"SCARF_ANALYTICS")," environment variable to ",(0,s.yg)("inlineCode",{parentName:"p"},"false")," in the Superset container (or anywhere Superset/webpack are run).\nAdditional opt-out instructions for Docker users are available on the ",(0,s.yg)("a",{parentName:"p",href:"/docs/installation/installing-superset-using-docker-compose"},"Docker Installation")," page."),(0,s.yg)("h3",{id:"does-superset-have-an-archive-panel-or-trash-bin-from-which-a-user-can-recover-deleted-assets"},"Does Superset have an archive panel or trash bin from which a user can recover deleted assets?"),(0,s.yg)("p",null,"No. Currently, there is no way to recover a deleted Superset dashboard/chart/dataset/database from the UI. However, there is an ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/discussions/18386"},"ongoing discussion")," about implementing such a feature."),(0,s.yg)("p",null,"Hence, it is recommended to take periodic backups of the metadata database. For recovery, you can launch a recovery instance of a Superset server with the backed-up copy of the DB attached and use the Export Dashboard button in the Superset UI (or the ",(0,s.yg)("inlineCode",{parentName:"p"},"superset export-dashboards")," CLI command). Then, take the .zip file and import it into the current Superset instance."),(0,s.yg)("p",null,"Alternatively, you can programmatically take regular exports of the assets as a backup."))}c.isMDXComponent=!0}}]);