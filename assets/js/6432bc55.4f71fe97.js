"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4003],{40424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Caching",hide_title:!0,sidebar_position:5,version:1},s=void 0,c={unversionedId:"installation/cache",id:"installation/cache",title:"Caching",description:"Caching",source:"@site/docs/installation/cache.mdx",sourceDirName:"installation",slug:"/installation/cache",permalink:"/docs/installation/cache",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/cache.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Caching",hide_title:!0,sidebar_position:5,version:1},sidebar:"tutorialSidebar",previous:{title:"Additional Networking Settings",permalink:"/docs/installation/networking-settings"},next:{title:"Event Logging",permalink:"/docs/installation/event-logging"}},u={},p=[{value:"Caching",id:"caching",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Fallback Metastore Cache",id:"fallback-metastore-cache",level:3},{value:"Chart Cache Timeout",id:"chart-cache-timeout",level:3},{value:"SQL Lab Query Results",id:"sql-lab-query-results",level:3},{value:"Caching Thumbnails",id:"caching-thumbnails",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"Superset uses ",(0,i.kt)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/"},"Flask-Caching")," for caching purposes.\nFlask-Caching supports various caching backends, including Redis (recommended), Memcached,\nSimpleCache (in-memory), or the local filesystem.\n",(0,i.kt)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/en/latest/#custom-cache-backends"},"Custom cache backends"),"\nare also supported."),(0,i.kt)("p",null,"Caching can be configured by providing a dictionaries in\n",(0,i.kt)("inlineCode",{parentName:"p"},"superset_config.py")," that comply with",(0,i.kt)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/en/latest/#configuring-flask-caching"},"the Flask-Caching config specifications"),"."),(0,i.kt)("p",null,"The following cache configurations can be customized in this way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dashboard filter state (required): ",(0,i.kt)("inlineCode",{parentName:"li"},"FILTER_STATE_CACHE_CONFIG"),"."),(0,i.kt)("li",{parentName:"ul"},"Explore chart form data (required): ",(0,i.kt)("inlineCode",{parentName:"li"},"EXPLORE_FORM_DATA_CACHE_CONFIG")),(0,i.kt)("li",{parentName:"ul"},"Metadata cache (optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"CACHE_CONFIG")),(0,i.kt)("li",{parentName:"ul"},"Charting data queried from datasets (optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"DATA_CACHE_CONFIG"))),(0,i.kt)("p",null,"For example, to configure the filter state cache using redis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"FILTER_STATE_CACHE_CONFIG = {\n    'CACHE_TYPE': 'RedisCache',\n    'CACHE_DEFAULT_TIMEOUT': 86400,\n    'CACHE_KEY_PREFIX': 'superset_filter_cache',\n    'CACHE_REDIS_URL': 'redis://localhost:6379/0'\n}\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"In order to use dedicated cache stores, additional python libraries must be installed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Redis: we recommend the ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.python.org/pypi/redis"},"redis")," Python package"),(0,i.kt)("li",{parentName:"ul"},"Memcached: we recommend using ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/pylibmc/"},"pylibmc")," client library as\n",(0,i.kt)("inlineCode",{parentName:"li"},"python-memcached")," does not handle storing binary data correctly.")),(0,i.kt)("p",null,"These libraries can be installed using pip."),(0,i.kt)("h3",{id:"fallback-metastore-cache"},"Fallback Metastore Cache"),(0,i.kt)("p",null,"Note, that some form of Filter State and Explore caching are required. If either of these caches\nare undefined, Superset falls back to using a built-in cache that stores data in the metadata\ndatabase. While it is recommended to use a dedicated cache, the built-in cache can also be used\nto cache other data."),(0,i.kt)("p",null,"For example, to use the built-in cache to store chart data, use the following config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'DATA_CACHE_CONFIG = {\n    "CACHE_TYPE": "SupersetMetastoreCache",\n    "CACHE_KEY_PREFIX": "superset_results",  # make sure this string is unique to avoid collisions\n    "CACHE_DEFAULT_TIMEOUT": 86400,  # 60 seconds * 60 minutes * 24 hours\n}\n')),(0,i.kt)("h3",{id:"chart-cache-timeout"},"Chart Cache Timeout"),(0,i.kt)("p",null,"The cache timeout for charts may be overridden by the settings for an individual chart, dataset, or\ndatabase. Each of these configurations will be checked in order before falling back to the default\nvalue defined in `DATA_CACHE_CONFIG."),(0,i.kt)("h3",{id:"sql-lab-query-results"},"SQL Lab Query Results"),(0,i.kt)("p",null,"Caching for SQL Lab query results is used when async queries are enabled and is configured using\n",(0,i.kt)("inlineCode",{parentName:"p"},"RESULTS_BACKEND"),"."),(0,i.kt)("p",null,"Note that this configuration does not use a flask-caching dictionary for its configuration, but\ninstead requires a cachelib object."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation/async-queries-celery"},"Async Queries via Celery")," for details."),(0,i.kt)("h3",{id:"caching-thumbnails"},"Caching Thumbnails"),(0,i.kt)("p",null,"This is an optional feature that can be turned on by activating it\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/configuring-superset#feature-flags"},"feature flag")," on config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'FEATURE_FLAGS = {\n    "THUMBNAILS": True,\n    "THUMBNAILS_SQLA_LISTENERS": True,\n}\n')),(0,i.kt)("p",null,"By default thumbnails are rendered using the ",(0,i.kt)("inlineCode",{parentName:"p"},"THUMBNAIL_SELENIUM_USER")," user account. To render thumbnails as the\nlogged in user (e.g. in environments that are using user impersonation), use the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"THUMBNAIL_EXECUTE_AS = [ExecutorType.CURRENT_USER]\n")),(0,i.kt)("p",null,"For this feature you will need a cache system and celery workers. All thumbnails are stored on cache\nand are processed asynchronously by the workers."),(0,i.kt)("p",null,"An example config where images are stored on S3 could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\nfrom s3cache.s3cache import S3Cache\n\n...\n\nclass CeleryConfig(object):\n    broker_url = "redis://localhost:6379/0"\n    imports = ("superset.sql_lab", "superset.tasks", "superset.tasks.thumbnails")\n    result_backend = "redis://localhost:6379/0"\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n\n\nCELERY_CONFIG = CeleryConfig\n\ndef init_thumbnail_cache(app: Flask) -> S3Cache:\n    return S3Cache("bucket_name", \'thumbs_cache/\')\n\n\nTHUMBNAIL_CACHE_CONFIG = init_thumbnail_cache\n# Async selenium thumbnail task will use the following user\nTHUMBNAIL_SELENIUM_USER = "Admin"\n')),(0,i.kt)("p",null,"Using the above example cache keys for dashboards will be ",(0,i.kt)("inlineCode",{parentName:"p"},"superset_thumb__dashboard__{ID}"),". You can\noverride the base URL for selenium using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'WEBDRIVER_BASEURL = "https://superset.company.com"\n')),(0,i.kt)("p",null,"Additional selenium web drive configuration can be set using ",(0,i.kt)("inlineCode",{parentName:"p"},"WEBDRIVER_CONFIGURATION"),". You can\nimplement a custom function to authenticate selenium. The default function uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"flask-login"),"\nsession cookie. Here's an example of a custom function signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def auth_driver(driver: WebDriver, user: "User") -> WebDriver:\n    pass\n')),(0,i.kt)("p",null,"Then on configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WEBDRIVER_AUTH_FUNC = auth_driver\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);