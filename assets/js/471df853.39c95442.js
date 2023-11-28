"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4796],{96632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const o={title:"TimescaleDB",hide_title:!0,sidebar_position:31,version:1},s=void 0,i={unversionedId:"databases/timescaledb",id:"databases/timescaledb",title:"TimescaleDB",description:"TimescaleDB",source:"@site/docs/databases/timescaledb.mdx",sourceDirName:"databases",slug:"/databases/timescaledb",permalink:"/docs/databases/timescaledb",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/timescaledb.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"TimescaleDB",hide_title:!0,sidebar_position:31,version:1},sidebar:"tutorialSidebar",previous:{title:"Teradata",permalink:"/docs/databases/teradata"},next:{title:"Vertica",permalink:"/docs/databases/vertica"}},l={},c=[{value:"TimescaleDB",id:"timescaledb",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"timescaledb"},"TimescaleDB"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.timescale.com"},"TimescaleDB")," is the open-source relational database for time-series and analytics to build powerful data-intensive applications.\nTimescaleDB is a PostgreSQL extension, and you can use the standard PostgreSQL connector library, ",(0,n.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/"},"psycopg2"),", to connect to the database."),(0,n.kt)("p",null,"If you're using docker compose, psycopg2 comes out of the box with Superset."),(0,n.kt)("p",null,"TimescaleDB sample connection parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Name"),": User"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password"),": Password"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Host"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For Localhost: localhost or 127.0.0.1"),(0,n.kt)("li",{parentName:"ul"},"For On Prem: IP address or Host name"),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("a",{parentName:"li",href:"https://console.cloud.timescale.com"},"Timescale Cloud")," service: Host name"),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("a",{parentName:"li",href:"https://portal.managed.timescale.com"},"Managed Service for TimescaleDB")," service: Host name"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Name"),": Database Name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port"),": default 5432 or Port number of the service")),(0,n.kt)("p",null,"The connection string looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database name}\n")),(0,n.kt)("p",null,"You can require SSL by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"?sslmode=require")," at the end (e.g. in case you use ",(0,n.kt)("a",{parentName:"p",href:"https://www.timescale.com/cloud"},"Timescale Cloud"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database name}?sslmode=require\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.timescale.com/"},"Learn more about TimescaleDB!")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(b,s(s({ref:t},p),{},{components:a})):r.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);