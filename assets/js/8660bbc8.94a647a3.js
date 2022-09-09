"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5851],{54813:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],i={name:"Kusto",hide_title:!0,sidebar_position:41,version:2},u=void 0,c={unversionedId:"databases/kusto",id:"databases/kusto",title:"kusto",description:"Kusto",source:"@site/docs/databases/kusto.mdx",sourceDirName:"databases",slug:"/databases/kusto",permalink:"/docs/databases/kusto",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/kusto.mdx",tags:[],version:"current",sidebarPosition:41,frontMatter:{name:"Kusto",hide_title:!0,sidebar_position:41,version:2},sidebar:"tutorialSidebar",previous:{title:"Extra Database Settings",permalink:"/docs/databases/extra-settings"},next:{title:"Creating Your First Dashboard",permalink:"/docs/creating-charts-dashboards/creating-your-first-dashboard"}},l={},d=[{value:"Kusto",id:"kusto",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kusto"},"Kusto"),(0,o.kt)("p",null,"The recommended connector library for Kusto is\n",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-kusto/2.0.0/"},"sqlalchemy-kusto"),">=2.0.0."),(0,o.kt)("p",null,"The connection string for Kusto (sql dialect) looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kustosql+https://{cluster_url}/{database}?azure_ad_client_id={azure_ad_client_id}&azure_ad_client_secret={azure_ad_client_secret}&azure_ad_tenant_id={azure_ad_tenant_id}&msi=False\n")),(0,o.kt)("p",null,"The connection string for Kusto (kql dialect) looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kustokql+https://{cluster_url}/{database}?azure_ad_client_id={azure_ad_client_id}&azure_ad_client_secret={azure_ad_client_secret}&azure_ad_tenant_id={azure_ad_tenant_id}&msi=False\n")),(0,o.kt)("p",null,"Make sure the user has privileges to access and use all required\ndatabases/tables/views."))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);