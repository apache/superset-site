"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[515],{27623:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={title:"Dremio",hide_title:!0,sidebar_position:17,version:1},c=void 0,l={unversionedId:"databases/dremio",id:"databases/dremio",title:"Dremio",description:"Dremio",source:"@site/docs/databases/dremio.mdx",sourceDirName:"databases",slug:"/databases/dremio",permalink:"/docs/databases/dremio",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/dremio.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Dremio",hide_title:!0,sidebar_position:17,version:1},sidebar:"tutorialSidebar",previous:{title:"CockroachDB",permalink:"/docs/databases/cockroachdb"},next:{title:"Elasticsearch",permalink:"/docs/databases/elasticsearch"}},p={},u=[{value:"Dremio",id:"dremio",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dremio"},"Dremio"),(0,a.kt)("p",null,"The recommended connector library for Dremio is\n",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-dremio/"},"sqlalchemy_dremio"),"."),(0,a.kt)("p",null,"The expected connection string for ODBC (Default port is 31010) is formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dremio://{username}:{password}@{host}:{port}/{database_name}/dremio?SSL=1\n")),(0,a.kt)("p",null,"The expected connection string for Arrow Flight (Dremio 4.9.1+. Default port is 32010) is formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dremio+flight://{username}:{password}@{host}:{port}/dremio\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://www.dremio.com/tutorials/dremio-apache-superset/"},"blog post by Dremio")," has some\nadditional helpful instructions on connecting Superset to Dremio."))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);