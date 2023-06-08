"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3206],{58809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(83117),n=(a(67294),a(3905));const i={title:"Introduction",hide_title:!0,sidebar_position:1},s=void 0,o={unversionedId:"intro",id:"intro",title:"Introduction",description:"What is Apache Superset?",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installing Locally Using Docker Compose",permalink:"/docs/installation/installing-superset-using-docker-compose"}},l={},u=[{value:"What is Apache Superset?",id:"what-is-apache-superset",level:2},{value:"Video Overview",id:"video-overview",level:4},{value:"Features",id:"features",level:4},{value:"Backend Technology",id:"backend-technology",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-apache-superset"},"What is Apache Superset?"),(0,n.kt)("p",null,"Apache Superset is a modern, enterprise-ready business intelligence web application. It\nis fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill\nsets to explore and visualize their data, from simple pie charts to highly detailed deck.gl\ngeospatial charts."),(0,n.kt)("p",null,"Here are a ",(0,n.kt)("strong",{parentName:"p"},"few different ways you can get started with Superset"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install Superset ",(0,n.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/installing-superset-from-scratch/"},"from scratch")),(0,n.kt)("li",{parentName:"ul"},"Deploy Superset locally with one command\n",(0,n.kt)("a",{parentName:"li",href:"installation/installing-superset-using-docker-compose"},"using Docker Compose")),(0,n.kt)("li",{parentName:"ul"},"Deploy Superset ",(0,n.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/running-on-kubernetes"},"with Kubernetes")),(0,n.kt)("li",{parentName:"ul"},"Run a ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"Docker image")," from Dockerhub"),(0,n.kt)("li",{parentName:"ul"},"Download Superset ",(0,n.kt)("a",{parentName:"li",href:"https://pypi.org/project/apache-superset/"},"from Pypi here")),(0,n.kt)("li",{parentName:"ul"},"Install the latest version of Superset\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/tree/latest"},"from GitHub")),(0,n.kt)("li",{parentName:"ul"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/superset/"},"source from Apache Foundation's website"))),(0,n.kt)("h4",{id:"video-overview"},"Video Overview"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/64562059/234390129-321d4f35-cb4b-45e8-89d9-20ae292f34fc.mp4"},"https://user-images.githubusercontent.com/64562059/234390129-321d4f35-cb4b-45e8-89d9-20ae292f34fc.mp4")),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("p",null,"Superset provides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An intuitive interface for visualizing datasets and crafting interactive dashboards"),(0,n.kt)("li",{parentName:"ul"},"A wide array of beautiful visualizations to showcase your data"),(0,n.kt)("li",{parentName:"ul"},"Code-free visualization builder to extract and present datasets"),(0,n.kt)("li",{parentName:"ul"},"A world-class SQL IDE for preparing data for visualization, including a rich metadata browser"),(0,n.kt)("li",{parentName:"ul"},"A lightweight semantic layer which empowers data analysts to quickly define custom dimensions and metrics"),(0,n.kt)("li",{parentName:"ul"},"Out-of-the-box support for ",(0,n.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/databases/installing-database-drivers/"},"most SQL-speaking databases")),(0,n.kt)("li",{parentName:"ul"},"Seamless, in-memory asynchronous caching and queries"),(0,n.kt)("li",{parentName:"ul"},"An extensible security model that allows configuration of very intricate rules on who can access which product features and datasets."),(0,n.kt)("li",{parentName:"ul"},"Integration with major authentication backends (database, OpenID, LDAP, OAuth, REMOTE_USER, etc)"),(0,n.kt)("li",{parentName:"ul"},"The ability to add custom visualization plugins"),(0,n.kt)("li",{parentName:"ul"},"An API for programmatic customization"),(0,n.kt)("li",{parentName:"ul"},"A cloud-native architecture designed from the ground up for scale")),(0,n.kt)("h4",{id:"backend-technology"},"Backend Technology"),(0,n.kt)("p",null,"Superset is cloud-native and designed to be highly available. It was designed to scale out to large,\ndistributed environments and works very well inside containers. While you can easily test drive\nSuperset on a modest setup or simply on your laptop, there\u2019s virtually no limit around scaling out\nthe platform."),(0,n.kt)("p",null,"Superset is also cloud-native in the sense that it is flexible and lets you choose the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web server (Gunicorn, Nginx, Apache),"),(0,n.kt)("li",{parentName:"ul"},"Metadata database engine (PostgreSQL, MySQL, MariaDB),"),(0,n.kt)("li",{parentName:"ul"},"Message queue (Celery, Redis, RabbitMQ, SQS, etc.),"),(0,n.kt)("li",{parentName:"ul"},"Results backend (Redis, S3, Memcached, etc.),"),(0,n.kt)("li",{parentName:"ul"},"Caching layer (Redis, Memcached, etc.)")),(0,n.kt)("p",null,"Superset also works well with ",(0,n.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/event-logging/"},"event-logging"),"\nservices like StatsD, NewRelic, and DataDog."),(0,n.kt)("p",null,"Superset is currently run at scale at many companies. For example, Superset is run in Airbnb\u2019s\nproduction environment inside Kubernetes and serves 600+ daily active users viewing over 100K charts\na day."),(0,n.kt)("p",null,"You can find a partial list of industries and companies embracing Superset\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md"},"on this page in GitHub"),"."))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);