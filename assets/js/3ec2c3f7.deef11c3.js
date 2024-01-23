"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const a={title:"Presto",hide_title:!0,sidebar_position:28,version:1},s=void 0,i={unversionedId:"databases/presto",id:"databases/presto",title:"Presto",description:"Presto",source:"@site/docs/databases/presto.mdx",sourceDirName:"databases",slug:"/databases/presto",permalink:"/docs/databases/presto",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/presto.mdx",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Presto",hide_title:!0,sidebar_position:28,version:1},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/docs/databases/postgres"},next:{title:"Snowflake",permalink:"/docs/databases/snowflake"}},p={},c=[{value:"Presto",id:"presto",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"presto"},"Presto"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyHive/"},"pyhive")," library is the recommended way to connect to Presto through SQLAlchemy."),(0,o.kt)("p",null,"The expected connection string is formatted as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"presto://{hostname}:{port}/{database}\n")),(0,o.kt)("p",null,"You can pass in a username and password as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"presto://{username}:{password}@{hostname}:{port}/{database}\n")),(0,o.kt)("p",null,"Here is an example connection string with values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"presto://datascientist:securepassword@presto.example.com:8080/hive\n")),(0,o.kt)("p",null,"By default Superset assumes the most recent version of Presto is being used when querying the\ndatasource. If you\u2019re using an older version of Presto, you can configure it in the extra parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "version": "0.123"\n}\n')))}d.isMDXComponent=!0}}]);