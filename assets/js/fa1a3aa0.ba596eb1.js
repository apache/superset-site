"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3628],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30851:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),s=["components"],l={title:"Postgres",hide_title:!0,sidebar_position:27,version:1},i=void 0,p={unversionedId:"databases/postgres",id:"databases/postgres",isDocsHomePage:!1,title:"Postgres",description:"Postgres",source:"@site/docs/databases/postgres.mdx",sourceDirName:"databases",slug:"/databases/postgres",permalink:"/docs/databases/postgres",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/postgres.mdx",tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Postgres",hide_title:!0,sidebar_position:27,version:1},sidebar:"tutorialSidebar",previous:{title:"Oracle",permalink:"/docs/databases/oracle"},next:{title:"Presto",permalink:"/docs/databases/presto"}},c=[{value:"Postgres",id:"postgres",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"postgres"},"Postgres"),(0,a.kt)("p",null,"Note that, if you're using docker-compose, the Postgres connector library ",(0,a.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/"},"psycopg2"),"\ncomes out of the box with Superset."),(0,a.kt)("p",null,"Postgres sample connection parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Name"),": UserName"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),": DBPassword"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database Host"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For Localhost: localhost or 127.0.0.1"),(0,a.kt)("li",{parentName:"ul"},"For On Prem: IP address or Host name"),(0,a.kt)("li",{parentName:"ul"},"For AWS Endpoint"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database Name"),": Database Name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),": default 5432")),(0,a.kt)("p",null,"The connection string looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database}\n")),(0,a.kt)("p",null,"You can require SSL by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"?sslmode=require")," at the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database}?sslmode=require\n")),(0,a.kt)("p",null,"You can read about the other SSL modes that Postgres supports in\n",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/libpq-ssl.html"},"Table 31-1 from this documentation"),"."),(0,a.kt)("p",null,"More information about PostgreSQL connection options can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/13/dialects/postgresql.html#module-sqlalchemy.dialects.postgresql.psycopg2"},"SQLAlchemy docs"),"\nand the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/libpq-connect.html#LIBPQ-PQCONNECTDBPARAMS"},"PostgreSQL docs"),"."))}d.isMDXComponent=!0}}]);