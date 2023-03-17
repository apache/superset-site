"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5643],{82391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(83117),n=(r(67294),r(3905));const a={title:"CockroachDB",hide_title:!0,sidebar_position:16,version:1},c=void 0,i={unversionedId:"databases/cockroachdb",id:"databases/cockroachdb",title:"CockroachDB",description:"CockroachDB",source:"@site/docs/databases/cockroachdb.mdx",sourceDirName:"databases",slug:"/databases/cockroachdb",permalink:"/docs/databases/cockroachdb",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/cockroachdb.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"CockroachDB",hide_title:!0,sidebar_position:16,version:1},sidebar:"tutorialSidebar",previous:{title:"ClickHouse",permalink:"/docs/databases/clickhouse"},next:{title:"RisingWave",permalink:"/docs/databases/risingwave"}},s={},l=[{value:"CockroachDB",id:"cockroachdb",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cockroachdb"},"CockroachDB"),(0,n.kt)("p",null,"The recommended connector library for CockroachDB is\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cockroachdb/sqlalchemy-cockroachdb"},"sqlalchemy-cockroachdb"),"."),(0,n.kt)("p",null,"The expected connection string is formatted as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cockroachdb://root@{hostname}:{port}/{database}?sslmode=disable\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||u[b]||a;return r?o.createElement(f,c(c({ref:t},d),{},{components:r})):o.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);