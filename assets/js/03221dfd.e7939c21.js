"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5604],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23170:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),s=["components"],c={title:"Microsoft SQL Server",hide_title:!0,sidebar_position:30,version:1},i=void 0,l={unversionedId:"connecting-to-databases/sql-server",id:"connecting-to-databases/sql-server",isDocsHomePage:!1,title:"Microsoft SQL Server",description:"SQL Server",source:"@site/docs/connecting-to-databases/sql-server.mdx",sourceDirName:"connecting-to-databases",slug:"/connecting-to-databases/sql-server",permalink:"/docs/connecting-to-databases/sql-server",editUrl:"https://github.com/apache/superset/tree/master/docs-v2/docs/connecting-to-databases/sql-server.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Microsoft SQL Server",hide_title:!0,sidebar_position:30,version:1},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/docs/connecting-to-databases/snowflake"},next:{title:"Teradata",permalink:"/docs/connecting-to-databases/teradata"}},u=[{value:"SQL Server",id:"sql-server",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sql-server"},"SQL Server"),(0,a.kt)("p",null,"The recommended connector library for SQL Server is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pymssql/pymssql"},"pymssql"),"."),(0,a.kt)("p",null,"The connection string for SQL Server looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mssql+pymssql://<Username>:<Password>@<Host>:<Port-default:1433>/<Database Name>/?Encrypt=yes\n")))}f.isMDXComponent=!0}}]);