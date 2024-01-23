"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=a,g=s["".concat(c,".").concat(y)]||s[y]||d[y]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={title:"Google BigQuery",hide_title:!0,sidebar_position:20,version:1},i=void 0,l={unversionedId:"databases/bigquery",id:"databases/bigquery",title:"Google BigQuery",description:"Google BigQuery",source:"@site/docs/databases/bigquery.mdx",sourceDirName:"databases",slug:"/databases/bigquery",permalink:"/docs/databases/bigquery",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/bigquery.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Google BigQuery",hide_title:!0,sidebar_position:20,version:1},sidebar:"tutorialSidebar",previous:{title:"Exasol",permalink:"/docs/databases/exasol"},next:{title:"Ocient DB",permalink:"/docs/databases/ocient"}},c={},p=[{value:"Google BigQuery",id:"google-bigquery",level:2},{value:"Install BigQuery Driver",id:"install-bigquery-driver",level:3},{value:"Connecting to BigQuery",id:"connecting-to-bigquery",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"google-bigquery"},"Google BigQuery"),(0,a.kt)("p",null,"The recommended connector library for BigQuery is\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/googleapis/python-bigquery-sqlalchemy"},"sqlalchemy-bigquery"),"."),(0,a.kt)("h3",{id:"install-bigquery-driver"},"Install BigQuery Driver"),(0,a.kt)("p",null,"Follow the steps ",(0,a.kt)("a",{parentName:"p",href:"/docs/databases/docker-add-drivers"},"here")," about how to\ninstall new database drivers when setting up Superset locally via docker compose."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'echo "sqlalchemy-bigquery" >> ./docker/requirements-local.txt\n')),(0,a.kt)("h3",{id:"connecting-to-bigquery"},"Connecting to BigQuery"),(0,a.kt)("p",null,"When adding a new BigQuery connection in Superset, you'll need to add the GCP Service Account\ncredentials file (as a JSON)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create your Service Account via the Google Cloud Platform control panel, provide it access to the\nappropriate BigQuery datasets, and download the JSON configuration file for the service account."),(0,a.kt)("li",{parentName:"ol"},"In Superset, you can either upload that JSON or add the JSON blob in the following format (this should be the content of your credential JSON file):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n        "type": "service_account",\n        "project_id": "...",\n        "private_key_id": "...",\n        "private_key": "...",\n        "client_email": "...",\n        "client_id": "...",\n        "auth_uri": "...",\n        "token_uri": "...",\n        "auth_provider_x509_cert_url": "...",\n        "client_x509_cert_url": "..."\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52086618/138352958-a18ef9cb-8880-4ef1-88c1-452a9f1b8105.gif",alt:"CleanShot 2021-10-22 at 04 18 11"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Additionally, can connect via SQLAlchemy URI instead"),(0,a.kt)("p",{parentName:"li"},"The connection string for BigQuery looks like:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"bigquery://{project_id}\n")),(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," tab, Add a JSON blob to the ",(0,a.kt)("strong",{parentName:"p"},"Secure Extra")," field in the database configuration form with\nthe following format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n"credentials_info": <contents of credentials JSON file>\n}\n')),(0,a.kt)("p",{parentName:"li"},"The resulting file should have this structure:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n "credentials_info": {\n     "type": "service_account",\n     "project_id": "...",\n     "private_key_id": "...",\n     "private_key": "...",\n     "client_email": "...",\n     "client_id": "...",\n     "auth_uri": "...",\n     "token_uri": "...",\n     "auth_provider_x509_cert_url": "...",\n     "client_x509_cert_url": "..."\n     }\n }\n')))),(0,a.kt)("p",null,"You should then be able to connect to your BigQuery datasets."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52086618/138354340-df57f477-d3e5-42d4-b032-d901c69d2213.gif",alt:"CleanShot 2021-10-22 at 04 47 08"})),(0,a.kt)("p",null,"To be able to upload CSV or Excel files to BigQuery in Superset, you'll need to also add the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pydata/pandas-gbq"},"pandas_gbq")," library."),(0,a.kt)("p",null,"Currently, Google BigQuery python sdk is not compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"gevent"),", due to some dynamic monkeypatching on python core library by ",(0,a.kt)("inlineCode",{parentName:"p"},"gevent"),".\nSo, when you deploy Superset with ",(0,a.kt)("inlineCode",{parentName:"p"},"gunicorn")," server, you have to use worker type except ",(0,a.kt)("inlineCode",{parentName:"p"},"gevent"),"."))}d.isMDXComponent=!0}}]);