"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={title:"Async Queries via Celery",hide_title:!0,sidebar_position:9,version:1},s=void 0,i={unversionedId:"installation/async-queries-celery",id:"installation/async-queries-celery",title:"Async Queries via Celery",description:"Async Queries via Celery",source:"@site/docs/installation/async-queries-celery.mdx",sourceDirName:"installation",slug:"/installation/async-queries-celery",permalink:"/docs/installation/async-queries-celery",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/async-queries-celery.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Async Queries via Celery",hide_title:!0,sidebar_position:9,version:1},sidebar:"tutorialSidebar",previous:{title:"Upgrading Superset",permalink:"/docs/installation/upgrading-superset"},next:{title:"Alerts and Reports",permalink:"/docs/installation/alerts-reports"}},l={},p=[{value:"Async Queries via Celery",id:"async-queries-via-celery",level:2},{value:"Celery",id:"celery",level:3},{value:"Celery Flower",id:"celery-flower",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"async-queries-via-celery"},"Async Queries via Celery"),(0,a.kt)("h3",{id:"celery"},"Celery"),(0,a.kt)("p",null,"On large analytic databases, it\u2019s common to run queries that execute for minutes or hours. To enable\nsupport for long running queries that execute beyond the typical web request\u2019s timeout (30-60\nseconds), it is necessary to configure an asynchronous backend for Superset which consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"one or many Superset workers (which is implemented as a Celery worker), and can be started with\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"celery worker")," command, run ",(0,a.kt)("inlineCode",{parentName:"li"},"celery worker --help")," to view the related options."),(0,a.kt)("li",{parentName:"ul"},"a celery broker (message queue) for which we recommend using Redis or RabbitMQ"),(0,a.kt)("li",{parentName:"ul"},"a results backend that defines where the worker will persist the query results")),(0,a.kt)("p",null,"Configuring Celery requires defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"CELERY_CONFIG")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py"),". Both the worker\nand web server processes should have the same configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class CeleryConfig(object):\n    broker_url = "redis://localhost:6379/0"\n    imports = (\n        "superset.sql_lab",\n        "superset.tasks.scheduler",\n    )\n    result_backend = "redis://localhost:6379/0"\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n    task_annotations = {\n        "sql_lab.get_sql_results": {\n            "rate_limit": "100/s",\n        },\n    }\n\nCELERY_CONFIG = CeleryConfig\n')),(0,a.kt)("p",null,"To start a Celery worker to leverage the configuration, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app worker --pool=prefork -O fair -c 4\n")),(0,a.kt)("p",null,"To start a job which schedules periodic background jobs, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app beat\n")),(0,a.kt)("p",null,"To setup a result backend, you need to pass an instance of a derivative of from\nfrom flask_caching.backends.base import BaseCache to the RESULTS_BACKEND configuration key in your superset_config.py. You can\nuse Memcached, Redis, S3 (",(0,a.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/s3werkzeugcache"},"https://pypi.python.org/pypi/s3werkzeugcache"),"), memory or the file system\n(in a single server-type setup or for testing), or to write your own caching interface. Your\n",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py")," may look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# On S3\nfrom s3cache.s3cache import S3Cache\nS3_CACHE_BUCKET = 'foobar-superset'\nS3_CACHE_KEY_PREFIX = 'sql_lab_result'\nRESULTS_BACKEND = S3Cache(S3_CACHE_BUCKET, S3_CACHE_KEY_PREFIX)\n\n# On Redis\nfrom flask_caching.backends.rediscache import RedisCache\nRESULTS_BACKEND = RedisCache(\n    host='localhost', port=6379, key_prefix='superset_results')\n")),(0,a.kt)("p",null,"For performance gains, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/msgpack/msgpack-python"},"MessagePack")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/"},"PyArrow")," are now used for results serialization. This can be\ndisabled by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"RESULTS_BACKEND_USE_MSGPACK = False")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py"),", should any\nissues arise. Please clear your existing results cache store when upgrading an existing environment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important Notes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is important that all the worker nodes and web servers in the Superset cluster ",(0,a.kt)("em",{parentName:"p"},"share a common\nmetadata database"),". This means that SQLite will not work in this context since it has limited\nsupport for concurrency and typically lives on the local file system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There should ",(0,a.kt)("em",{parentName:"p"},"only be one instance of celery beat running")," in your entire setup. If not,\nbackground jobs can get scheduled multiple times resulting in weird behaviors like duplicate\ndelivery of reports, higher than expected load / traffic etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SQL Lab will ",(0,a.kt)("em",{parentName:"p"},"only run your queries asynchronously if")," you enable ",(0,a.kt)("strong",{parentName:"p"},"Asynchronous Query Execution"),"\nin your database settings (Sources > Databases > Edit record)."))),(0,a.kt)("h3",{id:"celery-flower"},"Celery Flower"),(0,a.kt)("p",null,"Flower is a web based tool for monitoring the Celery cluster which you can install from pip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pip install flower\n")),(0,a.kt)("p",null,"You can run flower using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app flower\n")))}y.isMDXComponent=!0}}]);