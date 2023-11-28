"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3628],{92388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(83117),n=(r(67294),r(3905));const a={title:"Postgres",hide_title:!0,sidebar_position:27,version:1},s=void 0,l={unversionedId:"databases/postgres",id:"databases/postgres",title:"Postgres",description:"Postgres",source:"@site/docs/databases/postgres.mdx",sourceDirName:"databases",slug:"/databases/postgres",permalink:"/docs/databases/postgres",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/postgres.mdx",tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Postgres",hide_title:!0,sidebar_position:27,version:1},sidebar:"tutorialSidebar",previous:{title:"Oracle",permalink:"/docs/databases/oracle"},next:{title:"Presto",permalink:"/docs/databases/presto"}},p={},i=[{value:"Postgres",id:"postgres",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"postgres"},"Postgres"),(0,n.kt)("p",null,"Note that, if you're using docker compose, the Postgres connector library ",(0,n.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/"},"psycopg2"),"\ncomes out of the box with Superset."),(0,n.kt)("p",null,"Postgres sample connection parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Name"),": UserName"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password"),": DBPassword"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Host"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For Localhost: localhost or 127.0.0.1"),(0,n.kt)("li",{parentName:"ul"},"For On Prem: IP address or Host name"),(0,n.kt)("li",{parentName:"ul"},"For AWS Endpoint"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Name"),": Database Name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port"),": default 5432")),(0,n.kt)("p",null,"The connection string looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database}\n")),(0,n.kt)("p",null,"You can require SSL by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"?sslmode=require")," at the end:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database}?sslmode=require\n")),(0,n.kt)("p",null,"You can read about the other SSL modes that Postgres supports in\n",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/libpq-ssl.html"},"Table 31-1 from this documentation"),"."),(0,n.kt)("p",null,"More information about PostgreSQL connection options can be found in the\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/13/dialects/postgresql.html#module-sqlalchemy.dialects.postgresql.psycopg2"},"SQLAlchemy docs"),"\nand the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/libpq-connect.html#LIBPQ-PQCONNECTDBPARAMS"},"PostgreSQL docs"),"."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(g,s(s({ref:t},c),{},{components:r})):o.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);