"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5097],{26216:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={title:"Oracle",hide_title:!0,sidebar_position:26,version:1},s=void 0,l={unversionedId:"databases/oracle",id:"databases/oracle",title:"Oracle",description:"Oracle",source:"@site/docs/databases/oracle.mdx",sourceDirName:"databases",slug:"/databases/oracle",permalink:"/docs/databases/oracle",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/oracle.mdx",tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Oracle",hide_title:!0,sidebar_position:26,version:1},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/docs/databases/mysql"},next:{title:"Postgres",permalink:"/docs/databases/postgres"}},u={},p=[{value:"Oracle",id:"oracle",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"oracle"},"Oracle"),(0,a.kt)("p",null,"The recommended connector library is\n",(0,a.kt)("a",{parentName:"p",href:"https://cx-oracle.readthedocs.io/en/latest/user_guide/installation.html"},"cx_Oracle"),"."),(0,a.kt)("p",null,"The connection string is formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"oracle://<username>:<password>@<hostname>:<port>\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);