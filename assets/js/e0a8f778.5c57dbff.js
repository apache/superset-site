"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4867],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={title:"Firebolt",hide_title:!0,sidebar_position:39,version:1},i=void 0,s={unversionedId:"databases/firebolt",id:"databases/firebolt",title:"Firebolt",description:"Firebolt",source:"@site/docs/databases/firebolt.mdx",sourceDirName:"databases",slug:"/databases/firebolt",permalink:"/docs/databases/firebolt",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/databases/firebolt.mdx",tags:[],version:"current",sidebarPosition:39,frontMatter:{title:"Firebolt",hide_title:!0,sidebar_position:39,version:1},sidebar:"tutorialSidebar",previous:{title:"Databend",permalink:"/docs/databases/databend"},next:{title:"Extra Database Settings",permalink:"/docs/databases/extra-settings"}},c={},l=[{value:"Firebolt",id:"firebolt",level:2}],p={toc:l},d="wrapper";function b(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"firebolt"},"Firebolt"),(0,a.yg)("p",null,"The recommended connector library for Firebolt is ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.org/project/firebolt-sqlalchemy/"},"firebolt-sqlalchemy"),"."),(0,a.yg)("p",null,"The recommended connection string is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"firebolt://{username}:{password}@{database}?account_name={name}\nor\nfirebolt://{username}:{password}@{database}/{engine_name}?account_name={name}\n")),(0,a.yg)("p",null,"It's also possible to connect using a service account:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"firebolt://{client_id}:{client_secret}@{database}?account_name={name}\nor\nfirebolt://{client_id}:{client_secret}@{database}/{engine_name}?account_name={name}\n")))}b.isMDXComponent=!0}}]);