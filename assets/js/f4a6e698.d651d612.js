"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Ocient DB",hide_title:!0,sidebar_position:20,version:1},i=void 0,s={unversionedId:"databases/ocient",id:"databases/ocient",title:"Ocient DB",description:"Ocient DB",source:"@site/docs/databases/ocient.mdx",sourceDirName:"databases",slug:"/databases/ocient",permalink:"/docs/databases/ocient",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/ocient.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Ocient DB",hide_title:!0,sidebar_position:20,version:1},sidebar:"tutorialSidebar",previous:{title:"Google BigQuery",permalink:"/docs/databases/bigquery"},next:{title:"Google Sheets",permalink:"/docs/databases/google-sheets"}},l={},c=[{value:"Ocient DB",id:"ocient-db",level:2},{value:"Install the Ocient Driver",id:"install-the-ocient-driver",level:2},{value:"Connecting to Ocient",id:"connecting-to-ocient",level:2},{value:"User Access Control",id:"user-access-control",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ocient-db"},"Ocient DB"),(0,a.kt)("p",null,"The recommended connector library for Ocient is ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-ocient"},"sqlalchemy-ocient"),"."),(0,a.kt)("h2",{id:"install-the-ocient-driver"},"Install the Ocient Driver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install sqlalchemy-ocient\n")),(0,a.kt)("h2",{id:"connecting-to-ocient"},"Connecting to Ocient"),(0,a.kt)("p",null,"The format of the Ocient DSN is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ocient://user:password@[host][:port][/database][?param1=value1&...]\n")),(0,a.kt)("p",null,"The DSN for connecting to an ",(0,a.kt)("inlineCode",{parentName:"p"},"exampledb")," database hosted at ",(0,a.kt)("inlineCode",{parentName:"p"},"examplehost:4050")," with TLS enabled is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ocient://admin:abc123@examplehost:4050/exampledb?tls=on\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": You must enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," credentials.  ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," defaults to localhost,\nport defaults to 4050, database defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," defaults\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"unverified"),"."),(0,a.kt)("h2",{id:"user-access-control"},"User Access Control"),(0,a.kt)("p",null,"Make sure the user has privileges to access and use all required databases, schemas, tables, views, and warehouses, as the Ocient SQLAlchemy engine does not test for user or role rights by default."))}u.isMDXComponent=!0}}]);