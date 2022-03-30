"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3996],{27784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"IBM DB2",hide_title:!0,sidebar_position:23,version:1},c=void 0,p={unversionedId:"databases/ibm-db2",id:"databases/ibm-db2",title:"IBM DB2",description:"IBM DB2",source:"@site/docs/databases/ibm-db2.mdx",sourceDirName:"databases",slug:"/databases/ibm-db2",permalink:"/docs/databases/ibm-db2",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/ibm-db2.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"IBM DB2",hide_title:!0,sidebar_position:23,version:1},sidebar:"tutorialSidebar",previous:{title:"Hana",permalink:"/docs/databases/hana"},next:{title:"IBM Netezza Performance Server",permalink:"/docs/databases/netezza"}},u={},l=[{value:"IBM DB2",id:"ibm-db2",level:2}],d={toc:l};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ibm-db2"},"IBM DB2"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ibmdb/python-ibmdbsa/tree/master/ibm_db_sa"},"IBM_DB_SA")," library provides a\nPython / SQLAlchemy interface to IBM Data Servers."),(0,o.kt)("p",null,"Here's the recommended connection string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"db2+ibm_db://{username}:{passport}@{hostname}:{port}/{database}\n")),(0,o.kt)("p",null,"There are two DB2 dialect versions implemented in SQLAlchemy. If you are connecting to a DB2 version without ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT [n]")," syntax, the recommended connection string to be able to use the SQL Lab is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ibm_db_sa://{username}:{passport}@{hostname}:{port}/{database}\n")))}b.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,m=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);