"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8835],{21635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={title:"Amazon Redshift",hide_title:!0,sidebar_position:5,version:1},s=void 0,i={unversionedId:"databases/redshift",id:"databases/redshift",title:"Amazon Redshift",description:"AWS Redshift",source:"@site/docs/databases/redshift.mdx",sourceDirName:"databases",slug:"/databases/redshift",permalink:"/docs/databases/redshift",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/redshift.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Amazon Redshift",hide_title:!0,sidebar_position:5,version:1},sidebar:"tutorialSidebar",previous:{title:"Amazon DynamoDB",permalink:"/docs/databases/dynamodb"},next:{title:"StarRocks",permalink:"/docs/databases/starrocks"}},l={},c=[{value:"AWS Redshift",id:"aws-redshift",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aws-redshift"},"AWS Redshift"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-redshift/"},"sqlalchemy-redshift")," library is the recommended\nway to connect to Redshift through SQLAlchemy."),(0,a.kt)("p",null,"You'll need to the following setting values to form the connection string:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Name"),": userName"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),": DBPassword"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database Host"),": AWS Endpoint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database Name"),": Database Name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),": default 5439")),(0,a.kt)("p",null,"Here's what the connection string looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"redshift+psycopg2://<userName>:<DBPassword>@<AWS End Point>:5439/<Database Name>\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);