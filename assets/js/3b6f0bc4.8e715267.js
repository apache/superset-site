"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5935],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return a?t.createElement(g,o(o({ref:n},u),{},{components:a})):t.createElement(g,o({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95291:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const i={title:"Caching",hide_title:!0,sidebar_position:3,version:1},o="Caching",s={unversionedId:"configuration/cache",id:"configuration/cache",title:"Caching",description:"Superset uses Flask-Caching for caching purposes.",source:"@site/docs/configuration/cache.mdx",sourceDirName:"configuration",slug:"/configuration/cache",permalink:"/docs/configuration/cache",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/cache.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Caching",hide_title:!0,sidebar_position:3,version:1},sidebar:"CustomSidebar",previous:{title:"Alerts and Reports",permalink:"/docs/configuration/alerts-reports"},next:{title:"Async Queries via Celery",permalink:"/docs/configuration/async-queries-celery"}},c={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Fallback Metastore Cache",id:"fallback-metastore-cache",level:2},{value:"Chart Cache Timeout",id:"chart-cache-timeout",level:2},{value:"SQL Lab Query Results",id:"sql-lab-query-results",level:2},{value:"Caching Thumbnails",id:"caching-thumbnails",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"caching"},"Caching"),(0,r.yg)("p",null,"Superset uses ",(0,r.yg)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/"},"Flask-Caching")," for caching purposes.\nFlask-Caching supports various caching backends, including Redis (recommended), Memcached,\nSimpleCache (in-memory), or the local filesystem.\n",(0,r.yg)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/en/latest/#custom-cache-backends"},"Custom cache backends"),"\nare also supported."),(0,r.yg)("p",null,"Caching can be configured by providing a dictionaries in\n",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," that comply with",(0,r.yg)("a",{parentName:"p",href:"https://flask-caching.readthedocs.io/en/latest/#configuring-flask-caching"},"the Flask-Caching config specifications"),"."),(0,r.yg)("p",null,"The following cache configurations can be customized in this way:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Dashboard filter state (required): ",(0,r.yg)("inlineCode",{parentName:"li"},"FILTER_STATE_CACHE_CONFIG"),"."),(0,r.yg)("li",{parentName:"ul"},"Explore chart form data (required): ",(0,r.yg)("inlineCode",{parentName:"li"},"EXPLORE_FORM_DATA_CACHE_CONFIG")),(0,r.yg)("li",{parentName:"ul"},"Metadata cache (optional): ",(0,r.yg)("inlineCode",{parentName:"li"},"CACHE_CONFIG")),(0,r.yg)("li",{parentName:"ul"},"Charting data queried from datasets (optional): ",(0,r.yg)("inlineCode",{parentName:"li"},"DATA_CACHE_CONFIG"))),(0,r.yg)("p",null,"For example, to configure the filter state cache using redis:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"FILTER_STATE_CACHE_CONFIG = {\n    'CACHE_TYPE': 'RedisCache',\n    'CACHE_DEFAULT_TIMEOUT': 86400,\n    'CACHE_KEY_PREFIX': 'superset_filter_cache',\n    'CACHE_REDIS_URL': 'redis://localhost:6379/0'\n}\n")),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to use dedicated cache stores, additional python libraries must be installed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Redis: we recommend the ",(0,r.yg)("a",{parentName:"li",href:"https://pypi.python.org/pypi/redis"},"redis")," Python package"),(0,r.yg)("li",{parentName:"ul"},"Memcached: we recommend using ",(0,r.yg)("a",{parentName:"li",href:"https://pypi.org/project/pylibmc/"},"pylibmc")," client library as\n",(0,r.yg)("inlineCode",{parentName:"li"},"python-memcached")," does not handle storing binary data correctly.")),(0,r.yg)("p",null,"These libraries can be installed using pip."),(0,r.yg)("h2",{id:"fallback-metastore-cache"},"Fallback Metastore Cache"),(0,r.yg)("p",null,"Note, that some form of Filter State and Explore caching are required. If either of these caches\nare undefined, Superset falls back to using a built-in cache that stores data in the metadata\ndatabase. While it is recommended to use a dedicated cache, the built-in cache can also be used\nto cache other data."),(0,r.yg)("p",null,"For example, to use the built-in cache to store chart data, use the following config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'DATA_CACHE_CONFIG = {\n    "CACHE_TYPE": "SupersetMetastoreCache",\n    "CACHE_KEY_PREFIX": "superset_results",  # make sure this string is unique to avoid collisions\n    "CACHE_DEFAULT_TIMEOUT": 86400,  # 60 seconds * 60 minutes * 24 hours\n}\n')),(0,r.yg)("h2",{id:"chart-cache-timeout"},"Chart Cache Timeout"),(0,r.yg)("p",null,"The cache timeout for charts may be overridden by the settings for an individual chart, dataset, or\ndatabase. Each of these configurations will be checked in order before falling back to the default\nvalue defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"DATA_CACHE_CONFIG"),"."),(0,r.yg)("p",null,"Note, that by setting the cache timeout to ",(0,r.yg)("inlineCode",{parentName:"p"},"-1"),", caching for charting data can be disabled, either\nper chart, dataset or database, or by default if set in ",(0,r.yg)("inlineCode",{parentName:"p"},"DATA_CACHE_CONFIG"),"."),(0,r.yg)("h2",{id:"sql-lab-query-results"},"SQL Lab Query Results"),(0,r.yg)("p",null,"Caching for SQL Lab query results is used when async queries are enabled and is configured using\n",(0,r.yg)("inlineCode",{parentName:"p"},"RESULTS_BACKEND"),"."),(0,r.yg)("p",null,"Note that this configuration does not use a flask-caching dictionary for its configuration, but\ninstead requires a cachelib object."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/async-queries-celery"},"Async Queries via Celery")," for details."),(0,r.yg)("h2",{id:"caching-thumbnails"},"Caching Thumbnails"),(0,r.yg)("p",null,"This is an optional feature that can be turned on by activating it\u2019s ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/configuring-superset#feature-flags"},"feature flag")," on config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'FEATURE_FLAGS = {\n    "THUMBNAILS": True,\n    "THUMBNAILS_SQLA_LISTENERS": True,\n}\n')),(0,r.yg)("p",null,"By default thumbnails are rendered per user, and will fall back to the Selenium user for anonymous users.\nTo always render thumbnails as a fixed user (",(0,r.yg)("inlineCode",{parentName:"p"},"admin")," in this example), use the following configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from superset.tasks.types import ExecutorType\n\nTHUMBNAIL_SELENIUM_USER = "admin"\nTHUMBNAIL_EXECUTE_AS = [ExecutorType.SELENIUM]\n')),(0,r.yg)("p",null,"For this feature you will need a cache system and celery workers. All thumbnails are stored on cache\nand are processed asynchronously by the workers."),(0,r.yg)("p",null,"An example config where images are stored on S3 could be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\nfrom s3cache.s3cache import S3Cache\n\n...\n\nclass CeleryConfig(object):\n    broker_url = "redis://localhost:6379/0"\n    imports = (\n        "superset.sql_lab",\n        "superset.tasks.thumbnails",\n    )\n    result_backend = "redis://localhost:6379/0"\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n\n\nCELERY_CONFIG = CeleryConfig\n\ndef init_thumbnail_cache(app: Flask) -> S3Cache:\n    return S3Cache("bucket_name", \'thumbs_cache/\')\n\n\nTHUMBNAIL_CACHE_CONFIG = init_thumbnail_cache\n# Async selenium thumbnail task will use the following user\nTHUMBNAIL_SELENIUM_USER = "Admin"\n')),(0,r.yg)("p",null,"Using the above example cache keys for dashboards will be ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_thumb__dashboard__{ID}"),". You can\noverride the base URL for selenium using:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'WEBDRIVER_BASEURL = "https://superset.company.com"\n')),(0,r.yg)("p",null,"Additional selenium web drive configuration can be set using ",(0,r.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_CONFIGURATION"),". You can\nimplement a custom function to authenticate selenium. The default function uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-login"),"\nsession cookie. Here's an example of a custom function signature:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'def auth_driver(driver: WebDriver, user: "User") -> WebDriver:\n    pass\n')),(0,r.yg)("p",null,"Then on configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WEBDRIVER_AUTH_FUNC = auth_driver\n")))}d.isMDXComponent=!0}}]);