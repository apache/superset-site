"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8860],{19775:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=t(83117),s=(t(67294),t(3905));const r={title:"Querying across databases",hide_title:!0,sidebar_position:42,version:1},o=void 0,i={unversionedId:"databases/meta-database",id:"databases/meta-database",title:"Querying across databases",description:"Querying across databases",source:"@site/docs/databases/meta-database.mdx",sourceDirName:"databases",slug:"/databases/meta-database",permalink:"/docs/databases/meta-database",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/meta-database.mdx",tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"Querying across databases",hide_title:!0,sidebar_position:42,version:1},sidebar:"tutorialSidebar",previous:{title:"kusto",permalink:"/docs/databases/kusto"},next:{title:"Creating Your First Dashboard",permalink:"/docs/creating-charts-dashboards/creating-your-first-dashboard"}},l={},d=[{value:"Querying across databases",id:"querying-across-databases",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Enabling the meta database",id:"enabling-the-meta-database",level:2}],u={toc:d},c="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"querying-across-databases"},"Querying across databases"),(0,s.kt)("p",null,'Superset offers an experimental feature for querying across different databases. This is done via a special database called "Superset meta database" that uses the "superset://" SQLAlchemy URI. When using the database it\'s possible to query any table in any of the configured databases using the following syntax:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "database name.[[catalog.].schema].table name";\n')),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "examples.birth_names";\n')),(0,s.kt)("p",null,"Spaces are allowed, but periods in the names must be replaced by ",(0,s.kt)("inlineCode",{parentName:"p"},"%2E"),". Eg:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "Superset meta database.examples%2Ebirth_names";\n')),(0,s.kt)("p",null,"The query above returns the same rows as ",(0,s.kt)("inlineCode",{parentName:"p"},'SELECT * FROM "examples.birth_names"'),", and also shows that the meta database can query tables from any table \u2014 even itself!"),(0,s.kt)("h2",{id:"considerations"},"Considerations"),(0,s.kt)("p",null,"Before enabling this feature, there are a few considerations that you should have in mind. First, the meta database enforces permissions on the queried tables, so users should only have access via the database to tables that they originally have access to. Nevertheless, the meta database is a new surface for potential attacks, and bugs could allow users to see data they should not."),(0,s.kt)("p",null,"Second, there are performance considerations. The meta database will push any filtering, sorting, and limiting to the underlying databases, but any aggregations and joins will happen in memory in the process running the query. Because of this, it's recommended to run the database in async mode, so queries are executed in Celery workers, instead of the web workers. Additionally, it's possible to specify a hard limit on how many rows are returned from the underlying databases."),(0,s.kt)("h2",{id:"enabling-the-meta-database"},"Enabling the meta database"),(0,s.kt)("p",null,"To enable the Superset meta database, first you need to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"ENABLE_SUPERSET_META_DB"),' feature flag to true. Then, add a new database of type "Superset meta database" with the SQLAlchemy URI "superset://".'),(0,s.kt)("p",null,"If you enable DML in the meta database users will be able to run DML queries on underlying databases ",(0,s.kt)("strong",{parentName:"p"},"as long as DML is also enabled in them"),". This allows users to run queries that move data across databases."),(0,s.kt)("p",null,"Second, you might want to change the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"SUPERSET_META_DB_LIMIT"),". The default value is 1000, and defines how many are read from each database before any aggregations and joins are executed. You can also set this value ",(0,s.kt)("inlineCode",{parentName:"p"},"None")," if you only have small tables."),(0,s.kt)("p",null,'Additionally, you might want to restrict the databases to with the meta database has access to. This can be done in the database configuration, under "Advanced" -> "Other" -> "ENGINE PARAMETERS" and adding:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"allowed_dbs":["Google Sheets","examples"]}\n')))}p.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),b=s,m=c["".concat(l,".").concat(b)]||c[b]||p[b]||r;return t?n.createElement(m,o(o({ref:a},u),{},{components:t})):n.createElement(m,o({ref:a},u))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=b;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);