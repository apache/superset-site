"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),b=a,y=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={title:"YugabyteDB",hide_title:!0,sidebar_position:38,version:1},s=void 0,i={unversionedId:"databases/yugabytedb",id:"databases/yugabytedb",title:"YugabyteDB",description:"YugabyteDB",source:"@site/docs/databases/yugabytedb.mdx",sourceDirName:"databases",slug:"/databases/yugabytedb",permalink:"/docs/databases/yugabytedb",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/yugabytedb.mdx",tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"YugabyteDB",hide_title:!0,sidebar_position:38,version:1},sidebar:"tutorialSidebar",previous:{title:"Firebird",permalink:"/docs/databases/firebird"},next:{title:"Databend",permalink:"/docs/databases/databend"}},c={},p=[{value:"YugabyteDB",id:"yugabytedb",level:2}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yugabytedb"},"YugabyteDB"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.yugabyte.com/"},"YugabyteDB")," is a distributed SQL database built on top of PostgreSQL."),(0,a.kt)("p",null,"Note that, if you're using docker compose, the\nPostgres connector library ",(0,a.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/"},"psycopg2"),"\ncomes out of the box with Superset."),(0,a.kt)("p",null,"The connection string looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"postgresql://{username}:{password}@{host}:{port}/{database}\n")))}d.isMDXComponent=!0}}]);