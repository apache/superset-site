"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[477],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={sidebar_position:6,version:1},o="Misc.",s={unversionedId:"contributing/misc",id:"contributing/misc",title:"Misc.",description:"Reporting a Security Vulnerability",source:"@site/docs/contributing/misc.mdx",sourceDirName:"contributing",slug:"/contributing/misc",permalink:"/docs/contributing/misc",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/contributing/misc.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,version:1},sidebar:"CustomSidebar",previous:{title:"Resources",permalink:"/docs/contributing/resources"},next:{title:"Security Configurations",permalink:"/docs/security/"}},l={},c=[{value:"Reporting a Security Vulnerability",id:"reporting-a-security-vulnerability",level:2},{value:"SQL Lab Async",id:"sql-lab-async",level:3},{value:"Async Chart Queries",id:"async-chart-queries",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"misc"},"Misc."),(0,a.yg)("h2",{id:"reporting-a-security-vulnerability"},"Reporting a Security Vulnerability"),(0,a.yg)("p",null,"Please report security vulnerabilities to ",(0,a.yg)("a",{parentName:"p",href:"mailto:private@superset.apache.org"},"private@superset.apache.org"),"."),(0,a.yg)("p",null,"In the event a community member discovers a security flaw in Superset, it is important to follow the ",(0,a.yg)("a",{parentName:"p",href:"https://www.apache.org/security/committers.html"},"Apache Security Guidelines")," and release a fix as quickly as possible before public disclosure. Reporting security vulnerabilities through the usual GitHub Issues channel is not ideal as it will publicize the flaw before a fix can be applied."),(0,a.yg)("h3",{id:"sql-lab-async"},"SQL Lab Async"),(0,a.yg)("p",null,"It's possible to configure a local database to operate in ",(0,a.yg)("inlineCode",{parentName:"p"},"async")," mode,\nto work on ",(0,a.yg)("inlineCode",{parentName:"p"},"async")," related features."),(0,a.yg)("p",null,"To do this, you'll need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Add an additional database entry. We recommend you copy the connection\nstring from the database labeled ",(0,a.yg)("inlineCode",{parentName:"p"},"main"),", and then enable ",(0,a.yg)("inlineCode",{parentName:"p"},"SQL Lab")," and the\nfeatures you want to use. Don't forget to check the ",(0,a.yg)("inlineCode",{parentName:"p"},"Async")," box")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Configure a results backend, here's a local ",(0,a.yg)("inlineCode",{parentName:"p"},"FileSystemCache")," example,\nnot recommended for production,\nbut perfect for testing (stores cache in ",(0,a.yg)("inlineCode",{parentName:"p"},"/tmp"),")"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-python"},"from flask_caching.backends.filesystemcache import FileSystemCache\nRESULTS_BACKEND = FileSystemCache('/tmp/sqllab')\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Start up a celery worker"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"celery --app=superset.tasks.celery_app:app worker -O fair\n")))),(0,a.yg)("p",null,"Note that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"for changes that affect the worker logic, you'll have to\nrestart the ",(0,a.yg)("inlineCode",{parentName:"li"},"celery worker")," process for the changes to be reflected."),(0,a.yg)("li",{parentName:"ul"},"The message queue used is a ",(0,a.yg)("inlineCode",{parentName:"li"},"sqlite")," database using the ",(0,a.yg)("inlineCode",{parentName:"li"},"SQLAlchemy"),"\nexperimental broker. Ok for testing, but not recommended in production"),(0,a.yg)("li",{parentName:"ul"},"In some cases, you may want to create a context that is more aligned\nto your production environment, and use the similar broker as well as\nresults backend configuration")),(0,a.yg)("h3",{id:"async-chart-queries"},"Async Chart Queries"),(0,a.yg)("p",null,"It's possible to configure database queries for charts to operate in ",(0,a.yg)("inlineCode",{parentName:"p"},"async")," mode. This is especially useful for dashboards with many charts that may otherwise be affected by browser connection limits. To enable async queries for dashboards and Explore, the following dependencies are required:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Redis 5.0+ (the feature utilizes ",(0,a.yg)("a",{parentName:"li",href:"https://redis.io/topics/streams-intro"},"Redis Streams"),")"),(0,a.yg)("li",{parentName:"ul"},"Cache backends enabled via the ",(0,a.yg)("inlineCode",{parentName:"li"},"CACHE_CONFIG")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"DATA_CACHE_CONFIG")," config settings"),(0,a.yg)("li",{parentName:"ul"},"Celery workers configured and running to process async tasks")))}y.isMDXComponent=!0}}]);