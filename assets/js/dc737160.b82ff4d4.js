"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4992],{18110:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={title:"Google BigQuery",hide_title:!0,sidebar_position:20,version:1},c=void 0,u={unversionedId:"databases/bigquery",id:"databases/bigquery",title:"Google BigQuery",description:"Google BigQuery",source:"@site/docs/databases/bigquery.mdx",sourceDirName:"databases",slug:"/databases/bigquery",permalink:"/docs/databases/bigquery",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/bigquery.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Google BigQuery",hide_title:!0,sidebar_position:20,version:1},sidebar:"tutorialSidebar",previous:{title:"Exasol",permalink:"/docs/databases/exasol"},next:{title:"Google Sheets",permalink:"/docs/databases/google-sheets"}},s={},p=[{value:"Google BigQuery",id:"google-bigquery",level:2},{value:"Install BigQuery Driver",id:"install-bigquery-driver",level:3},{value:"Connecting to BigQuery",id:"connecting-to-bigquery",level:3}],d={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"google-bigquery"},"Google BigQuery"),(0,a.kt)("p",null,"The recommended connector library for BigQuery is\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxmzdlv/pybigquery"},"pybigquery"),"."),(0,a.kt)("h3",{id:"install-bigquery-driver"},"Install BigQuery Driver"),(0,a.kt)("p",null,"Follow the steps ",(0,a.kt)("a",{parentName:"p",href:"/docs/databases/docker-add-drivers"},"here")," about how to\ninstall new database drivers when setting up Superset locally via docker-compose."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'echo "pybigquery" >> ./docker/requirements-local.txt\n')),(0,a.kt)("h3",{id:"connecting-to-bigquery"},"Connecting to BigQuery"),(0,a.kt)("p",null,"When adding a new BigQuery connection in Superset, you'll need to add the GCP Service Account\ncredentials file (as a JSON)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create your Service Account via the Google Cloud Platform control panel, provide it access to the\nappropriate BigQuery datasets, and download the JSON configuration file for the service account."),(0,a.kt)("li",{parentName:"ol"},"In Superset, you can either upload that JSON or add the JSON blob in the following format (this should be the content of your credential JSON file):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n        "type": "service_account",\n        "project_id": "...",\n        "private_key_id": "...",\n        "private_key": "...",\n        "client_email": "...",\n        "client_id": "...",\n        "auth_uri": "...",\n        "token_uri": "...",\n        "auth_provider_x509_cert_url": "...",\n        "client_x509_cert_url": "..."\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52086618/138352958-a18ef9cb-8880-4ef1-88c1-452a9f1b8105.gif",alt:"CleanShot 2021-10-22 at 04 18 11"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Additionally, can connect via SQLAlchemy URI instead"),(0,a.kt)("p",{parentName:"li"},"The connection string for BigQuery looks like:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"bigquery://{project_id}\n")),(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," tab, Add a JSON blob to the ",(0,a.kt)("strong",{parentName:"p"},"Secure Extra")," field in the database configuration form with\nthe following format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n"credentials_info": <contents of credentials JSON file>\n}\n')),(0,a.kt)("p",{parentName:"li"},"The resulting file should have this structure:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n "credentials_info": {\n     "type": "service_account",\n     "project_id": "...",\n     "private_key_id": "...",\n     "private_key": "...",\n     "client_email": "...",\n     "client_id": "...",\n     "auth_uri": "...",\n     "token_uri": "...",\n     "auth_provider_x509_cert_url": "...",\n     "client_x509_cert_url": "..."\n     }\n }\n')))),(0,a.kt)("p",null,"You should then be able to connect to your BigQuery datasets."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52086618/138354340-df57f477-d3e5-42d4-b032-d901c69d2213.gif",alt:"CleanShot 2021-10-22 at 04 47 08"})),(0,a.kt)("p",null,"To be able to upload CSV or Excel files to BigQuery in Superset, you'll need to also add the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pydata/pandas-gbq"},"pandas_gbq")," library."))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,y=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);