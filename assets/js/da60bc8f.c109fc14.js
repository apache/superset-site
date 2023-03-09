"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5551],{96348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Elasticsearch",hide_title:!0,sidebar_position:18,version:1},s=void 0,i={unversionedId:"databases/elasticsearch",id:"databases/elasticsearch",title:"Elasticsearch",description:"Elasticsearch",source:"@site/docs/databases/elasticsearch.mdx",sourceDirName:"databases",slug:"/databases/elasticsearch",permalink:"/docs/databases/elasticsearch",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/elasticsearch.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Elasticsearch",hide_title:!0,sidebar_position:18,version:1},sidebar:"tutorialSidebar",previous:{title:"Dremio",permalink:"/docs/databases/dremio"},next:{title:"Exasol",permalink:"/docs/databases/exasol"}},c={},l=[{value:"Elasticsearch",id:"elasticsearch",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"elasticsearch"},"Elasticsearch"),(0,a.kt)("p",null,"The recommended connector library for Elasticsearch is\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/preset-io/elasticsearch-dbapi"},"elasticsearch-dbapi"),"."),(0,a.kt)("p",null,"The connection string for Elasticsearch looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"elasticsearch+http://{user}:{password}@{host}:9200/\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using HTTPS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"elasticsearch+https://{user}:{password}@{host}:9200/\n")),(0,a.kt)("p",null,"Elasticsearch as a default limit of 10000 rows, so you can increase this limit on your cluster or\nset Superset\u2019s row limit on config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ROW_LIMIT = 10000\n")),(0,a.kt)("p",null,"You can query multiple indices on SQL Lab for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'SELECT timestamp, agent FROM "logstash"\n')),(0,a.kt)("p",null,"But, to use visualizations for multiple indices you need to create an alias index on your cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /_aliases\n{\n    "actions" : [\n        { "add" : { "index" : "logstash-**", "alias" : "logstash_all" } }\n    ]\n}\n')),(0,a.kt)("p",null,"Then register your table with the alias name logstash_all"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time zone")),(0,a.kt)("p",null,"By default, Superset uses UTC time zone for elasticsearch query. If you need to specify a time zone,\nplease edit your Database and enter the settings of your specified time zone in the Other > ENGINE PARAMETERS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "connect_args": {\n        "time_zone": "Asia/Shanghai"\n    }\n}\n')),(0,a.kt)("p",null,"Another issue to note about the time zone problem is that before elasticsearch7.8, if you want to convert a string into a ",(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME")," object,\nyou need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CAST")," function,but this function does not support our ",(0,a.kt)("inlineCode",{parentName:"p"},"time_zone")," setting. So it is recommended to upgrade to the version after elasticsearch7.8.\nAfter elasticsearch7.8, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME_PARSE")," function to solve this problem.\nThe DATETIME_PARSE function is to support our ",(0,a.kt)("inlineCode",{parentName:"p"},"time_zone")," setting, and here you need to fill in your elasticsearch version number in the Other > VERSION setting.\nthe superset will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME_PARSE")," function for conversion."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disable SSL Verification")),(0,a.kt)("p",null,"To disable SSL verification, add the following to the ",(0,a.kt)("strong",{parentName:"p"},"SQLALCHEMY URI")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"elasticsearch+https://{user}:{password}@{host}:9200/?verify_certs=False\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);