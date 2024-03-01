"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8400],{95788:(t,e,a)=>{a.d(e,{Iu:()=>p,yg:()=>N});var r=a(11504);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var y=r.createContext({}),o=function(t){var e=r.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=o(t.components);return r.createElement(y.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,y=t.parentName,p=g(t,["components","mdxType","originalType","parentName"]),d=o(a),s=n,N=d["".concat(y,".").concat(s)]||d[s]||m[s]||i;return a?r.createElement(N,l(l({ref:e},p),{},{components:a})):r.createElement(N,l({ref:e},p))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var g={};for(var y in e)hasOwnProperty.call(e,y)&&(g[y]=e[y]);g.originalType=t,g[d]="string"==typeof t?t:n,l[1]=g;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},10264:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>o});var r=a(45072),n=(a(11504),a(95788));const i={title:"CVEs fixed by release",hide_title:!0,sidebar_position:2},l=void 0,g={unversionedId:"security/cves",id:"security/cves",title:"CVEs fixed by release",description:"Version 3.0.4, 3.1.1",source:"@site/docs/security/cves.mdx",sourceDirName:"security",slug:"/security/cves",permalink:"/docs/security/cves",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/security/cves.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"CVEs fixed by release",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/security/"},next:{title:"API",permalink:"/docs/api"}},y={},o=[{value:"Version 3.0.4, 3.1.1",id:"version-304-311",level:4},{value:"Version 3.0.3",id:"version-303",level:4},{value:"Version 3.0.2, 2.1.3",id:"version-302-213",level:4},{value:"Version 3.0.0",id:"version-300",level:4},{value:"Version 2.1.3",id:"version-213",level:4},{value:"Version 2.1.2",id:"version-212",level:4},{value:"Version 2.1.1",id:"version-211",level:4},{value:"Version 2.1.0",id:"version-210",level:4},{value:"Version 2.0.1",id:"version-201",level:4}],p={toc:o},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.yg)(d,(0,r.c)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h4",{id:"version-304-311"},"Version 3.0.4, 3.1.1"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2024-27315"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper error handling on alerts"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.4, >= 3.1.0, < 3.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2024-24773"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper validation of SQL statements allows for unauthorized access to data"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.4, >= 3.1.0, < 3.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2024-24772"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper Neutralisation of custom SQL on embedded context"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.4, >= 3.1.0, < 3.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2024-24779"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper data authorization when creating a new dataset"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.4, >= 3.1.0, < 3.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2024-26016"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper authorization validation on dashboards and charts import"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.4, >= 3.1.0, < 3.1.1")))),(0,n.yg)("h4",{id:"version-303"},"Version 3.0.3"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-49657"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stored XSS in Dashboard Title and Chart Title"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.3")))),(0,n.yg)("h4",{id:"version-302-213"},"Version 3.0.2, 2.1.3"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-46104"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Allows for uncontrolled resource consumption via a ZIP bomb"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.3, >= 3.0.0, < 3.0.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-49736"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SQL Injection on where_in JINJA macro"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.3, >= 3.0.0, < 3.0.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-49734"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Privilege Escalation Vulnerability"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.3, >= 3.0.0, < 3.0.2")))),(0,n.yg)("h4",{id:"version-300"},"Version 3.0.0"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-42502"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Open Redirect Vulnerability"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-42505"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sensitive information disclosure on db connection details"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 3.0.0")))),(0,n.yg)("h4",{id:"version-213"},"Version 2.1.3"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-42504"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Lack of rate limiting allows for possible denial of service"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.3")))),(0,n.yg)("h4",{id:"version-212"},"Version 2.1.2"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-40610"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Privilege escalation with default examples database"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-42501"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unnecessary read permissions within the Gamma role"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-43701"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stored XSS on API endpoint"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.2")))),(0,n.yg)("h4",{id:"version-211"},"Version 2.1.1"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-36387"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper API permission for low privilege users"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-36388"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper API permission for low privilege users allows for SSRF"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-27523"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper data permission validation on Jinja templated queries"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-27526"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper Authorization check on import charts"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-39264"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stack traces enabled by default"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-39265"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Possible Unauthorized Registration of SQLite Database Connections"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-37941"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Metadata db write access can lead to remote code execution"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-32672"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SQL parser edge case bypasses data access authorization"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.1")))),(0,n.yg)("h4",{id:"version-210"},"Version 2.1.0"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-25504"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Possible SSRF on import datasets"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-27524"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Session validation vulnerability when using provided default SECRET_KEY"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-27525"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Incorrect default permissions for Gamma role"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2023-30776"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Database connection password leak"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.1.0")))),(0,n.yg)("h4",{id:"version-201"},"Version 2.0.1"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"CVE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Title"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Affected"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-41703"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SQL injection vulnerability in adhoc clauses"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-43717"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cross-Site Scripting on dashboards"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-43718"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cross-Site Scripting vulnerability on upload forms"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-43719"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cross Site Request Forgery (CSRF) on accept, request access"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-43720"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Improper rendering of user input"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-43721"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Open Redirect Vulnerability"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CVE-2022-45438"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Dashboard metadata information leak"),(0,n.yg)("td",{parentName:"tr",align:"right"},"< 2.0.1 or <1.5.2")))))}m.isMDXComponent=!0}}]);