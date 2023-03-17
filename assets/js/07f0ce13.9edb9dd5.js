"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8561],{64082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=n(83117),o=(n(67294),n(3905));const i={title:"Event Logging",hide_title:!0,sidebar_position:6,version:1},a=void 0,s={unversionedId:"installation/event-logging",id:"installation/event-logging",title:"Event Logging",description:"Logging",source:"@site/docs/installation/event-logging.mdx",sourceDirName:"installation",slug:"/installation/event-logging",permalink:"/docs/installation/event-logging",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/event-logging.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Event Logging",hide_title:!0,sidebar_position:6,version:1},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/docs/installation/cache"},next:{title:"Upgrading Superset",permalink:"/docs/installation/upgrading-superset"}},l={},g=[{value:"Logging",id:"logging",level:2},{value:"Event Logging",id:"event-logging",level:3},{value:"StatsD Logging",id:"statsd-logging",level:3}],c={toc:g},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("h3",{id:"event-logging"},"Event Logging"),(0,o.kt)("p",null,"Superset by default logs special action events in its internal database (DBEventLogger). These logs can be accessed\non the UI by navigating to ",(0,o.kt)("strong",{parentName:"p"},"Security > Action Log"),". You can freely customize these logs by\nimplementing your own event log class.\n",(0,o.kt)("strong",{parentName:"p"},"When custom log class is enabled DBEventLogger is disabled and logs stop being populated in UI logs view."),"\nTo achieve both, custom log class should extend built-in DBEventLogger log class."),(0,o.kt)("p",null,"Here's an example of a simple JSON-to-stdout class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def log(self, user_id, action, *args, **kwargs):\n        records = kwargs.get('records', list())\n        dashboard_id = kwargs.get('dashboard_id')\n        slice_id = kwargs.get('slice_id')\n        duration_ms = kwargs.get('duration_ms')\n        referrer = kwargs.get('referrer')\n\n        for record in records:\n            log = dict(\n                action=action,\n                json=record,\n                dashboard_id=dashboard_id,\n                slice_id=slice_id,\n                duration_ms=duration_ms,\n                referrer=referrer,\n                user_id=user_id\n            )\n            print(json.dumps(log))\n")),(0,o.kt)("p",null,"End by updating your config to pass in an instance of the logger you want to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EVENT_LOGGER = JSONStdOutEventLogger()\n")),(0,o.kt)("h3",{id:"statsd-logging"},"StatsD Logging"),(0,o.kt)("p",null,"Superset can be instrumented to log events to StatsD if desired. Most endpoints hit are logged as\nwell as key events like query start and end in SQL Lab."),(0,o.kt)("p",null,"To setup StatsD logging, it\u2019s a matter of configuring the logger in your ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superset.stats_logger import StatsdStatsLogger\nSTATS_LOGGER = StatsdStatsLogger(host='localhost', port=8125, prefix='superset')\n")),(0,o.kt)("p",null,"Note that it\u2019s also possible to implement you own logger by deriving\n",(0,o.kt)("inlineCode",{parentName:"p"},"superset.stats_logger.BaseStatsLogger"),"."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);