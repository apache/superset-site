"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(83117),o=(r(67294),r(3905));const a={title:"Apache Solr",hide_title:!0,sidebar_position:13,version:1},s=void 0,l={unversionedId:"databases/solr",id:"databases/solr",title:"Apache Solr",description:"Apache Solr",source:"@site/docs/databases/solr.mdx",sourceDirName:"databases",slug:"/databases/solr",permalink:"/docs/databases/solr",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/solr.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Apache Solr",hide_title:!0,sidebar_position:13,version:1},sidebar:"tutorialSidebar",previous:{title:"Apache Pinot",permalink:"/docs/databases/pinot"},next:{title:"Apache Spark SQL",permalink:"/docs/databases/spark-sql"}},c={},i=[{value:"Apache Solr",id:"apache-solr",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"apache-solr"},"Apache Solr"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-solr/"},"sqlalchemy-solr")," library provides a\nPython / SQLAlchemy interface to Apache Solr."),(0,o.kt)("p",null,"The connection string for Solr looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"solr://{username}:{password}@{host}:{port}/{server_path}/{collection}[/?use_ssl=true|false]\n")))}d.isMDXComponent=!0}}]);