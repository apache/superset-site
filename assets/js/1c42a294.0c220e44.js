"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6251],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={title:"Apache Kylin",hide_title:!0,sidebar_position:11,version:1},i=void 0,c={unversionedId:"databases/kylin",id:"databases/kylin",title:"Apache Kylin",description:"Apache Kylin",source:"@site/docs/databases/kylin.mdx",sourceDirName:"databases",slug:"/databases/kylin",permalink:"/docs/databases/kylin",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/databases/kylin.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Apache Kylin",hide_title:!0,sidebar_position:11,version:1},sidebar:"tutorialSidebar",previous:{title:"Ascend.io",permalink:"/docs/databases/ascend"},next:{title:"Apache Pinot",permalink:"/docs/databases/pinot"}},l={},s=[{value:"Apache Kylin",id:"apache-kylin",level:2}],p={toc:s},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"apache-kylin"},"Apache Kylin"),(0,a.yg)("p",null,"The recommended connector library for Apache Kylin is\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Kyligence/kylinpy"},"kylinpy"),"."),(0,a.yg)("p",null,"The expected connection string is formatted as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kylin://<username>:<password>@<hostname>:<port>/<project>?<param1>=<value1>&<param2>=<value2>\n")))}y.isMDXComponent=!0}}]);