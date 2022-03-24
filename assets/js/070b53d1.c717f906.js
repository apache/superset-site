"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[340],{67666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(51402),s=["components"],c={title:"Apache Druid",hide_title:!0,sidebar_position:7,version:1},u=void 0,l={unversionedId:"databases/druid",id:"databases/druid",title:"Apache Druid",description:"Apache Druid",source:"@site/docs/databases/druid.mdx",sourceDirName:"databases",slug:"/databases/druid",permalink:"/docs/databases/druid",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/druid.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Apache Druid",hide_title:!0,sidebar_position:7,version:1},sidebar:"tutorialSidebar",previous:{title:"Apache Drill",permalink:"/docs/databases/drill"},next:{title:"Apache Hive",permalink:"/docs/databases/hive"}},d={},p=[{value:"Apache Druid",id:"apache-druid",level:2},{value:"Customizing Druid Connection",id:"customizing-druid-connection",level:3},{value:"Aggregations",id:"aggregations",level:3},{value:"Post-Aggregations",id:"post-aggregations",level:3}],g={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apache-druid"},"Apache Druid"),(0,a.kt)("p",null,"A native connector to Druid ships with Superset (behind the ",(0,a.kt)("inlineCode",{parentName:"p"},"DRUID_IS_ACTIVE")," flag) but this is\nslowly getting deprecated in favor of SQLAlchemy / DBAPI connector made available in the\n",(0,a.kt)("a",{parentName:"p",href:"https://pythonhosted.org/pydruid/"},"pydruid library"),"."),(0,a.kt)("p",null,"The connection string looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"druid://<User>:<password>@<Host>:<Port-default-9088>/druid/v2/sql\n")),(0,a.kt)("h3",{id:"customizing-druid-connection"},"Customizing Druid Connection"),(0,a.kt)("p",null,"When adding a connection to Druid, you can customize the connection a few different ways in the\n",(0,a.kt)("strong",{parentName:"p"},"Add Database")," form."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Custom Certificate")),(0,a.kt)("p",null,"You can add certificates in the ",(0,a.kt)("strong",{parentName:"p"},"Root Certificate")," field when configuring the new database\nconnection to Druid:"),(0,a.kt)("img",{src:(0,o.Z)("/img/root-cert-example.png")})," ",(0,a.kt)("p",null,"When using a custom certificate, pydruid will automatically use https scheme."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disable SSL Verification")),(0,a.kt)("p",null,"To disable SSL verification, add the following to the ",(0,a.kt)("strong",{parentName:"p"},"Extras")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'engine_params:\n{"connect_args":\n    {"scheme": "https", "ssl_verify_cert": false}}\n')),(0,a.kt)("h3",{id:"aggregations"},"Aggregations"),(0,a.kt)("p",null,"Common aggregations or Druid metrics can be defined and used in Superset. The first and simpler use\ncase is to use the checkbox matrix exposed in your datasource\u2019s edit view (",(0,a.kt)("strong",{parentName:"p"},"Sources -> Druid\nDatasources -> ","[your datasource]"," -> Edit -> ","[tab]"," List Druid Column"),")."),(0,a.kt)("p",null,"Clicking the GroupBy and Filterable checkboxes will make the column appear in the related dropdowns\nwhile in the Explore view. Checking Count Distinct, Min, Max or Sum will result in creating new\nmetrics that will appear in the ",(0,a.kt)("strong",{parentName:"p"},"List Druid Metric")," tab upon saving the datasource."),(0,a.kt)("p",null,"By editing these metrics, you\u2019ll notice that their JSON element corresponds to Druid aggregation\ndefinition. You can create your own aggregations manually from the ",(0,a.kt)("strong",{parentName:"p"},"List Druid Metric")," tab\nfollowing Druid documentation."),(0,a.kt)("h3",{id:"post-aggregations"},"Post-Aggregations"),(0,a.kt)("p",null,"Druid supports post aggregation and this works in Superset. All you have to do is create a metric,\nmuch like you would create an aggregation manually, but specify ",(0,a.kt)("inlineCode",{parentName:"p"},"postagg")," as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Metric Type"),". You\nthen have to provide a valid json post-aggregation definition (as specified in the Druid docs) in\nthe JSON field."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);