"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={title:"Timezones",hide_title:!0,sidebar_position:1,version:1},o=void 0,s={unversionedId:"miscellaneous/timezones",id:"miscellaneous/timezones",title:"Timezones",description:"Timezones",source:"@site/docs/miscellaneous/timezones.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/timezones",permalink:"/docs/miscellaneous/timezones",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/miscellaneous/timezones.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Timezones",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"Country Map Tools",permalink:"/docs/miscellaneous/country-map-tools"},next:{title:"Importing and Exporting Datasources",permalink:"/docs/miscellaneous/importing-exporting-datasources"}},l={},p=[{value:"Timezones",id:"timezones",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"timezones"},"Timezones"),(0,i.kt)("p",null,"There are four distinct timezone components which relate to Apache Superset,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The timezone that the underlying data is encoded in."),(0,i.kt)("li",{parentName:"ol"},"The timezone of the database engine."),(0,i.kt)("li",{parentName:"ol"},"The timezone of the Apache Superset backend."),(0,i.kt)("li",{parentName:"ol"},"The timezone of the Apache Superset client.")),(0,i.kt)("p",null,"where if a temporal field (",(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP"),", etc.) does not explicitly define a timezone it defaults to the underlying timezone of the component."),(0,i.kt)("p",null,"To help make the problem somewhat tractable\u2014given that Apache Superset has no control on either how the data is ingested (1) or the timezone of the client (4)\u2014from a consistency standpoint it is highly recommended that both (2) and (3) are configured to use the same timezone with a strong preference given to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Coordinated_Universal_Time"},"UTC")," to ensure temporal fields without an explicit timestamp are not incorrectly coerced into the wrong timezone. Actually Apache Superset currently has implicit assumptions that timestamps are in UTC and thus configuring (3) to a non-UTC timezone could be problematic."),(0,i.kt)("p",null,"To strive for data consistency (regardless of the timezone of the client) the Apache Superset backend tries to ensure that any timestamp sent to the client has an explicit (or semi-explicit as in the case with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Epoch time")," which is always in reference to UTC) timezone encoded within."),(0,i.kt)("p",null,"The challenge however lies with the slew of ",(0,i.kt)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers#install-database-drivers"},"database engines")," which Apache Superset supports and various inconsistencies between their ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0249/"},"Python Database API (DB-API)")," implementations combined with the fact that we use ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/"},"Pandas")," to read SQL into a DataFrame prior to serializing to JSON. Regrettably Pandas ignores the DB-API ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0249/#type-objects"},"type_code")," relying by default on the underlying Python type returned by the DB-API. Currently only a subset of the supported database engines work correctly with Pandas, i.e., ensuring timestamps without an explicit timestamp are serializd to JSON with the server timezone, thus guaranteeing the client will display timestamps in a consistent manner irrespective of the client's timezone."),(0,i.kt)("p",null,"For example the following is a comparison of MySQL and Presto,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import pandas as pd\nfrom sqlalchemy import create_engine\n\npd.read_sql_query(\n    sql="SELECT TIMESTAMP(\'2022-01-01 00:00:00\') AS ts",\n    con=create_engine("mysql://root@localhost:3360"),\n).to_json()\n\npd.read_sql_query(\n    sql="SELECT TIMESTAMP \'2022-01-01 00:00:00\' AS ts",\n    con=create_engine("presto://localhost:8080"),\n).to_json()\n')),(0,i.kt)("p",null,"which outputs ",(0,i.kt)("inlineCode",{parentName:"p"},'{"ts":{"0":1640995200000}}')," (which infers the UTC timezone per the Epoch time definition) and ",(0,i.kt)("inlineCode",{parentName:"p"},'{"ts":{"0":"2022-01-01 00:00:00.000"}}')," (without an explicit timezone) respectively and thus are treated differently in JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'new Date(1640995200000)\n> Sat Jan 01 2022 13:00:00 GMT+1300 (New Zealand Daylight Time)\n\nnew Date("2022-01-01 00:00:00.000")\n> Sat Jan 01 2022 00:00:00 GMT+1300 (New Zealand Daylight Time)\n')))}d.isMDXComponent=!0}}]);