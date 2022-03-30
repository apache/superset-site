"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3775],{58115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],i={title:"Apache Spark SQL",hide_title:!0,sidebar_position:14,version:1},s=void 0,p={unversionedId:"databases/spark-sql",id:"databases/spark-sql",title:"Apache Spark SQL",description:"Apache Spark SQL",source:"@site/docs/databases/spark-sql.mdx",sourceDirName:"databases",slug:"/databases/spark-sql",permalink:"/docs/databases/spark-sql",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/spark-sql.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Apache Spark SQL",hide_title:!0,sidebar_position:14,version:1},sidebar:"tutorialSidebar",previous:{title:"Apache Solr",permalink:"/docs/databases/solr"},next:{title:"Clickhouse",permalink:"/docs/databases/clickhouse"}},l={},u=[{value:"Apache Spark SQL",id:"apache-spark-sql",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"apache-spark-sql"},"Apache Spark SQL"),(0,o.kt)("p",null,"The recommended connector library for Apache Spark SQL ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyHive/"},"pyhive"),"."),(0,o.kt)("p",null,"The expected connection string is formatted as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hive://hive@{hostname}:{port}/{database}\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);