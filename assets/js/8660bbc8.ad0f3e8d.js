"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5851],{54813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(83117),n=(r(67294),r(3905));const s={name:"Kusto",hide_title:!0,sidebar_position:41,version:2},o=void 0,i={unversionedId:"databases/kusto",id:"databases/kusto",title:"kusto",description:"Kusto",source:"@site/docs/databases/kusto.mdx",sourceDirName:"databases",slug:"/databases/kusto",permalink:"/docs/databases/kusto",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/kusto.mdx",tags:[],version:"current",sidebarPosition:41,frontMatter:{name:"Kusto",hide_title:!0,sidebar_position:41,version:2},sidebar:"tutorialSidebar",previous:{title:"Extra Database Settings",permalink:"/docs/databases/extra-settings"},next:{title:"Querying across databases",permalink:"/docs/databases/meta-database"}},c={},l=[{value:"Kusto",id:"kusto",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"kusto"},"Kusto"),(0,n.kt)("p",null,"The recommended connector library for Kusto is\n",(0,n.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-kusto/2.0.0/"},"sqlalchemy-kusto"),">=2.0.0."),(0,n.kt)("p",null,"The connection string for Kusto (sql dialect) looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kustosql+https://{cluster_url}/{database}?azure_ad_client_id={azure_ad_client_id}&azure_ad_client_secret={azure_ad_client_secret}&azure_ad_tenant_id={azure_ad_tenant_id}&msi=False\n")),(0,n.kt)("p",null,"The connection string for Kusto (kql dialect) looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kustokql+https://{cluster_url}/{database}?azure_ad_client_id={azure_ad_client_id}&azure_ad_client_secret={azure_ad_client_secret}&azure_ad_tenant_id={azure_ad_tenant_id}&msi=False\n")),(0,n.kt)("p",null,"Make sure the user has privileges to access and use all required\ndatabases/tables/views."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);