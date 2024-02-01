"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6500],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>m});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},21236:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(86404),o=(t(11504),t(95788));const a={title:"Microsoft SQL Server",hide_title:!0,sidebar_position:30,version:1},s=void 0,i={unversionedId:"databases/sql-server",id:"databases/sql-server",title:"Microsoft SQL Server",description:"SQL Server",source:"@site/docs/databases/sql-server.mdx",sourceDirName:"databases",slug:"/databases/sql-server",permalink:"/docs/databases/sql-server",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/sql-server.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Microsoft SQL Server",hide_title:!0,sidebar_position:30,version:1},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/docs/databases/snowflake"},next:{title:"Teradata",permalink:"/docs/databases/teradata"}},c={},l=[{value:"SQL Server",id:"sql-server",level:2}],p={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"sql-server"},"SQL Server"),(0,o.yg)("p",null,"The recommended connector library for SQL Server is ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/pymssql/pymssql"},"pymssql"),"."),(0,o.yg)("p",null,"The connection string for SQL Server looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mssql+pymssql://<Username>:<Password>@<Host>:<Port-default:1433>/<Database Name>/?Encrypt=yes\n")),(0,o.yg)("p",null,"It is also possible to connect using ",(0,o.yg)("a",{parentName:"p",href:"https://pypi.org/project/pyodbc"},"pyodbc")," with the parameter ",(0,o.yg)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/14/dialects/mssql.html#pass-through-exact-pyodbc-string"},"odbc_connect")),(0,o.yg)("p",null,"The connection string for SQL Server looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mssql+pyodbc:///?odbc_connect=Driver%3D%7BODBC+Driver+17+for+SQL+Server%7D%3BServer%3Dtcp%3A%3Cmy_server%3E%2C1433%3BDatabase%3Dmy_database%3BUid%3Dmy_user_name%3BPwd%3Dmy_password%3BEncrypt%3Dyes%3BConnection+Timeout%3D30\n")))}u.isMDXComponent=!0}}]);