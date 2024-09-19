"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5935],{16626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var i=s(74848),a=s(28453);const c={title:"Caching",hide_title:!0,sidebar_position:3,version:1},r="Caching",t={id:"configuration/cache",title:"Caching",description:"Superset uses Flask-Caching for caching purposes.",source:"@site/docs/configuration/cache.mdx",sourceDirName:"configuration",slug:"/configuration/cache",permalink:"/docs/configuration/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/cache.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Caching",hide_title:!0,sidebar_position:3,version:1},sidebar:"CustomSidebar",previous:{title:"Alerts and Reports",permalink:"/docs/configuration/alerts-reports"},next:{title:"Async Queries via Celery",permalink:"/docs/configuration/async-queries-celery"}},o={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Fallback Metastore Cache",id:"fallback-metastore-cache",level:2},{value:"Chart Cache Timeout",id:"chart-cache-timeout",level:2},{value:"SQL Lab Query Results",id:"sql-lab-query-results",level:2},{value:"Caching Thumbnails",id:"caching-thumbnails",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"caching",children:"Caching"})}),"\n",(0,i.jsxs)(n.p,{children:["Superset uses ",(0,i.jsx)(n.a,{href:"https://flask-caching.readthedocs.io/",children:"Flask-Caching"})," for caching purposes.\nFlask-Caching supports various caching backends, including Redis (recommended), Memcached,\nSimpleCache (in-memory), or the local filesystem.\n",(0,i.jsx)(n.a,{href:"https://flask-caching.readthedocs.io/en/latest/#custom-cache-backends",children:"Custom cache backends"}),"\nare also supported."]}),"\n",(0,i.jsxs)(n.p,{children:["Caching can be configured by providing a dictionaries in\n",(0,i.jsx)(n.code,{children:"superset_config.py"})," that comply with ",(0,i.jsx)(n.a,{href:"https://flask-caching.readthedocs.io/en/latest/#configuring-flask-caching",children:"the Flask-Caching config specifications"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following cache configurations can be customized in this way:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dashboard filter state (required): ",(0,i.jsx)(n.code,{children:"FILTER_STATE_CACHE_CONFIG"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Explore chart form data (required): ",(0,i.jsx)(n.code,{children:"EXPLORE_FORM_DATA_CACHE_CONFIG"})]}),"\n",(0,i.jsxs)(n.li,{children:["Metadata cache (optional): ",(0,i.jsx)(n.code,{children:"CACHE_CONFIG"})]}),"\n",(0,i.jsxs)(n.li,{children:["Charting data queried from datasets (optional): ",(0,i.jsx)(n.code,{children:"DATA_CACHE_CONFIG"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, to configure the filter state cache using redis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"FILTER_STATE_CACHE_CONFIG = {\n    'CACHE_TYPE': 'RedisCache',\n    'CACHE_DEFAULT_TIMEOUT': 86400,\n    'CACHE_KEY_PREFIX': 'superset_filter_cache',\n    'CACHE_REDIS_URL': 'redis://localhost:6379/0'\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"In order to use dedicated cache stores, additional python libraries must be installed"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For Redis: we recommend the ",(0,i.jsx)(n.a,{href:"https://pypi.python.org/pypi/redis",children:"redis"})," Python package"]}),"\n",(0,i.jsxs)(n.li,{children:["Memcached: we recommend using ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/pylibmc/",children:"pylibmc"})," client library as\n",(0,i.jsx)(n.code,{children:"python-memcached"})," does not handle storing binary data correctly."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These libraries can be installed using pip."}),"\n",(0,i.jsx)(n.h2,{id:"fallback-metastore-cache",children:"Fallback Metastore Cache"}),"\n",(0,i.jsx)(n.p,{children:"Note, that some form of Filter State and Explore caching are required. If either of these caches\nare undefined, Superset falls back to using a built-in cache that stores data in the metadata\ndatabase. While it is recommended to use a dedicated cache, the built-in cache can also be used\nto cache other data."}),"\n",(0,i.jsx)(n.p,{children:"For example, to use the built-in cache to store chart data, use the following config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'DATA_CACHE_CONFIG = {\n    "CACHE_TYPE": "SupersetMetastoreCache",\n    "CACHE_KEY_PREFIX": "superset_results",  # make sure this string is unique to avoid collisions\n    "CACHE_DEFAULT_TIMEOUT": 86400,  # 60 seconds * 60 minutes * 24 hours\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"chart-cache-timeout",children:"Chart Cache Timeout"}),"\n",(0,i.jsxs)(n.p,{children:["The cache timeout for charts may be overridden by the settings for an individual chart, dataset, or\ndatabase. Each of these configurations will be checked in order before falling back to the default\nvalue defined in ",(0,i.jsx)(n.code,{children:"DATA_CACHE_CONFIG"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note, that by setting the cache timeout to ",(0,i.jsx)(n.code,{children:"-1"}),", caching for charting data can be disabled, either\nper chart, dataset or database, or by default if set in ",(0,i.jsx)(n.code,{children:"DATA_CACHE_CONFIG"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sql-lab-query-results",children:"SQL Lab Query Results"}),"\n",(0,i.jsxs)(n.p,{children:["Caching for SQL Lab query results is used when async queries are enabled and is configured using\n",(0,i.jsx)(n.code,{children:"RESULTS_BACKEND"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note that this configuration does not use a flask-caching dictionary for its configuration, but\ninstead requires a cachelib object."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/configuration/async-queries-celery",children:"Async Queries via Celery"})," for details."]}),"\n",(0,i.jsx)(n.h2,{id:"caching-thumbnails",children:"Caching Thumbnails"}),"\n",(0,i.jsxs)(n.p,{children:["This is an optional feature that can be turned on by activating it\u2019s ",(0,i.jsx)(n.a,{href:"/docs/configuration/configuring-superset#feature-flags",children:"feature flag"})," on config:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'FEATURE_FLAGS = {\n    "THUMBNAILS": True,\n    "THUMBNAILS_SQLA_LISTENERS": True,\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By default thumbnails are rendered per user, and will fall back to the Selenium user for anonymous users.\nTo always render thumbnails as a fixed user (",(0,i.jsx)(n.code,{children:"admin"})," in this example), use the following configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superset.tasks.types import ExecutorType\n\nTHUMBNAIL_SELENIUM_USER = "admin"\nTHUMBNAIL_EXECUTE_AS = [ExecutorType.SELENIUM]\n'})}),"\n",(0,i.jsx)(n.p,{children:"For this feature you will need a cache system and celery workers. All thumbnails are stored on cache\nand are processed asynchronously by the workers."}),"\n",(0,i.jsx)(n.p,{children:"An example config where images are stored on S3 could be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from flask import Flask\nfrom s3cache.s3cache import S3Cache\n\n...\n\nclass CeleryConfig(object):\n    broker_url = "redis://localhost:6379/0"\n    imports = (\n        "superset.sql_lab",\n        "superset.tasks.thumbnails",\n    )\n    result_backend = "redis://localhost:6379/0"\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n\n\nCELERY_CONFIG = CeleryConfig\n\ndef init_thumbnail_cache(app: Flask) -> S3Cache:\n    return S3Cache("bucket_name", \'thumbs_cache/\')\n\n\nTHUMBNAIL_CACHE_CONFIG = init_thumbnail_cache\n# Async selenium thumbnail task will use the following user\nTHUMBNAIL_SELENIUM_USER = "Admin"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Using the above example cache keys for dashboards will be ",(0,i.jsx)(n.code,{children:"superset_thumb__dashboard__{ID}"}),". You can\noverride the base URL for selenium using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'WEBDRIVER_BASEURL = "https://superset.company.com"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Additional selenium web drive configuration can be set using ",(0,i.jsx)(n.code,{children:"WEBDRIVER_CONFIGURATION"}),". You can\nimplement a custom function to authenticate selenium. The default function uses the ",(0,i.jsx)(n.code,{children:"flask-login"}),"\nsession cookie. Here's an example of a custom function signature:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def auth_driver(driver: WebDriver, user: "User") -> WebDriver:\n    pass\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then on configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WEBDRIVER_AUTH_FUNC = auth_driver\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(96540);const a={},c=i.createContext(a);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);