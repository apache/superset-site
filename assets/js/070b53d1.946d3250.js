"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6040],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,y=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(86404),a=(n(11504),n(95788)),i=n(70964);const o={title:"Apache Druid",hide_title:!0,sidebar_position:7,version:1},s=void 0,l={unversionedId:"databases/druid",id:"databases/druid",title:"Apache Druid",description:"Apache Druid",source:"@site/docs/databases/druid.mdx",sourceDirName:"databases",slug:"/databases/druid",permalink:"/docs/databases/druid",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/druid.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Apache Druid",hide_title:!0,sidebar_position:7,version:1},sidebar:"tutorialSidebar",previous:{title:"Apache Drill",permalink:"/docs/databases/drill"},next:{title:"Apache Hive",permalink:"/docs/databases/hive"}},d={},c=[{value:"Apache Druid",id:"apache-druid",level:2},{value:"Customizing Druid Connection",id:"customizing-druid-connection",level:3},{value:"Aggregations",id:"aggregations",level:3},{value:"Post-Aggregations",id:"post-aggregations",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"apache-druid"},"Apache Druid"),(0,a.yg)("p",null,"A native connector to Druid ships with Superset (behind the ",(0,a.yg)("inlineCode",{parentName:"p"},"DRUID_IS_ACTIVE")," flag) but this is\nslowly getting deprecated in favor of the SQLAlchemy / DBAPI connector made available in the\n",(0,a.yg)("a",{parentName:"p",href:"https://pythonhosted.org/pydruid/"},"pydruid library"),"."),(0,a.yg)("p",null,"The connection string looks like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"druid://<User>:<password>@<Host>:<Port-default-9088>/druid/v2/sql\n")),(0,a.yg)("p",null,"Here's a breakdown of the key components of this connection string:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"User"),": username portion of the credentials needed to connect to your database"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Password"),": password portion of the credentials needed to connect to your database"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Host"),": IP address (or URL) of the host machine that's running your database"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Port"),": specific port that's exposed on your host machine where your database is running")),(0,a.yg)("h3",{id:"customizing-druid-connection"},"Customizing Druid Connection"),(0,a.yg)("p",null,"When adding a connection to Druid, you can customize the connection a few different ways in the\n",(0,a.yg)("strong",{parentName:"p"},"Add Database")," form."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Custom Certificate")),(0,a.yg)("p",null,"You can add certificates in the ",(0,a.yg)("strong",{parentName:"p"},"Root Certificate")," field when configuring the new database\nconnection to Druid:"),(0,a.yg)("img",{src:(0,i.c)("/img/root-cert-example.png")})," ",(0,a.yg)("p",null,"When using a custom certificate, pydruid will automatically use https scheme."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Disable SSL Verification")),(0,a.yg)("p",null,"To disable SSL verification, add the following to the ",(0,a.yg)("strong",{parentName:"p"},"Extras")," field:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'engine_params:\n{"connect_args":\n    {"scheme": "https", "ssl_verify_cert": false}}\n')),(0,a.yg)("h3",{id:"aggregations"},"Aggregations"),(0,a.yg)("p",null,"Common aggregations or Druid metrics can be defined and used in Superset. The first and simpler use\ncase is to use the checkbox matrix exposed in your datasource\u2019s edit view (",(0,a.yg)("strong",{parentName:"p"},"Sources -> Druid\nDatasources -> ","[your datasource]"," -> Edit -> ","[tab]"," List Druid Column"),")."),(0,a.yg)("p",null,"Clicking the GroupBy and Filterable checkboxes will make the column appear in the related dropdowns\nwhile in the Explore view. Checking Count Distinct, Min, Max or Sum will result in creating new\nmetrics that will appear in the ",(0,a.yg)("strong",{parentName:"p"},"List Druid Metric")," tab upon saving the datasource."),(0,a.yg)("p",null,"By editing these metrics, you\u2019ll notice that their JSON element corresponds to Druid aggregation\ndefinition. You can create your own aggregations manually from the ",(0,a.yg)("strong",{parentName:"p"},"List Druid Metric")," tab\nfollowing Druid documentation."),(0,a.yg)("h3",{id:"post-aggregations"},"Post-Aggregations"),(0,a.yg)("p",null,"Druid supports post aggregation and this works in Superset. All you have to do is create a metric,\nmuch like you would create an aggregation manually, but specify ",(0,a.yg)("inlineCode",{parentName:"p"},"postagg")," as a ",(0,a.yg)("inlineCode",{parentName:"p"},"Metric Type"),". You\nthen have to provide a valid json post-aggregation definition (as specified in the Druid docs) in\nthe JSON field."))}g.isMDXComponent=!0}}]);