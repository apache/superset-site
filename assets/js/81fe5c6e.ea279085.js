"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9506],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const a={title:"Alerts and Reports",hide_title:!0,sidebar_position:2,version:2},i="Alerts and Reports",s={unversionedId:"configuration/alerts-reports",id:"configuration/alerts-reports",title:"Alerts and Reports",description:"Users can configure automated alerts and reports to send dashboards or charts to an email recipient or Slack channel.",source:"@site/docs/configuration/alerts-reports.mdx",sourceDirName:"configuration",slug:"/configuration/alerts-reports",permalink:"/docs/configuration/alerts-reports",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/alerts-reports.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Alerts and Reports",hide_title:!0,sidebar_position:2,version:2},sidebar:"CustomSidebar",previous:{title:"Connecting to Databases",permalink:"/docs/configuration/databases"},next:{title:"Caching",permalink:"/docs/configuration/cache"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Commons",id:"commons",level:3},{value:"In your <code>superset_config.py</code> or <code>superset_config_docker.py</code>",id:"in-your-superset_configpy-or-superset_config_dockerpy",level:4},{value:"Disable dry-run mode",id:"disable-dry-run-mode",level:5},{value:"In your <code>Dockerfile</code>",id:"in-your-dockerfile",level:4},{value:"Slack integration",id:"slack-integration",level:3},{value:"Kubernetes-specific",id:"kubernetes-specific",level:3},{value:"Docker Compose specific",id:"docker-compose-specific",level:3},{value:"You must have in your <code>docker-compose.yml</code>",id:"you-must-have-in-your-docker-composeyml",level:4},{value:"Detailed config",id:"detailed-config",level:3},{value:"Custom Dockerfile",id:"custom-dockerfile",level:2},{value:"Using Firefox",id:"using-firefox",level:3},{value:"Using Chrome",id:"using-chrome",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Confirm feature flag is enabled and you have sufficient permissions",id:"confirm-feature-flag-is-enabled-and-you-have-sufficient-permissions",level:3},{value:"Check the logs of your Celery worker",id:"check-the-logs-of-your-celery-worker",level:3},{value:"Check web browser and webdriver installation",id:"check-web-browser-and-webdriver-installation",level:3},{value:"Send a test email",id:"send-a-test-email",level:3},{value:"Browse to your report from the worker",id:"browse-to-your-report-from-the-worker",level:3},{value:"Scheduling Queries as Reports",id:"scheduling-queries-as-reports",level:2}],d={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"alerts-and-reports"},"Alerts and Reports"),(0,o.yg)("p",null,"Users can configure automated alerts and reports to send dashboards or charts to an email recipient or Slack channel."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Alerts")," are sent when a SQL condition is reached"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Reports")," are sent on a schedule")),(0,o.yg)("p",null,"Alerts and reports are disabled by default. To turn them on, you need to do some setup, described here."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("h3",{id:"commons"},"Commons"),(0,o.yg)("h4",{id:"in-your-superset_configpy-or-superset_config_dockerpy"},"In your ",(0,o.yg)("inlineCode",{parentName:"h4"},"superset_config.py")," or ",(0,o.yg)("inlineCode",{parentName:"h4"},"superset_config_docker.py")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},'"ALERT_REPORTS"')," ",(0,o.yg)("a",{parentName:"li",href:"/docs/configuration/configuring-superset#feature-flags"},"feature flag")," must be turned to True."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"beat_schedule")," in CeleryConfig must contain schedule for ",(0,o.yg)("inlineCode",{parentName:"li"},"reports.scheduler"),"."),(0,o.yg)("li",{parentName:"ul"},"At least one of those must be configured, depending on what you want to use:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"emails: ",(0,o.yg)("inlineCode",{parentName:"li"},"SMTP_*")," settings"),(0,o.yg)("li",{parentName:"ul"},"Slack messages: ",(0,o.yg)("inlineCode",{parentName:"li"},"SLACK_API_TOKEN"))))),(0,o.yg)("h5",{id:"disable-dry-run-mode"},"Disable dry-run mode"),(0,o.yg)("p",null,"Screenshots will be taken but no messages actually sent as long as ",(0,o.yg)("inlineCode",{parentName:"p"},"ALERT_REPORTS_NOTIFICATION_DRY_RUN = True"),", its default value in ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/pythonpath_dev/superset_config.py"),".  To disable dry-run mode and start receiving email/Slack notifications, set ",(0,o.yg)("inlineCode",{parentName:"p"},"ALERT_REPORTS_NOTIFICATION_DRY_RUN")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"False")," in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/docker/pythonpath_dev/superset_config.py"},"superset config"),"."),(0,o.yg)("h4",{id:"in-your-dockerfile"},"In your ",(0,o.yg)("inlineCode",{parentName:"h4"},"Dockerfile")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You must install a headless browser, for taking screenshots of the charts and dashboards. Only Firefox and Chrome are currently supported.",(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"If you choose Chrome, you must also change the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_TYPE")," to ",(0,o.yg)("inlineCode",{parentName:"p"},'"chrome"')," in your ",(0,o.yg)("inlineCode",{parentName:"p"},"superset_config.py"),".")))),(0,o.yg)("p",null,"Note: All the components required (Firefox headless browser, Redis, Postgres db, celery worker and celery beat) are present in the ",(0,o.yg)("em",{parentName:"p"},"dev")," docker image if you are following ",(0,o.yg)("a",{parentName:"p",href:"/docs/installation/docker-compose/"},"Installing Superset Locally"),".\nAll you need to do is add the required config variables described in this guide (See ",(0,o.yg)("inlineCode",{parentName:"p"},"Detailed Config"),")."),(0,o.yg)("p",null,"If you are running a non-dev docker image, e.g., a stable release like ",(0,o.yg)("inlineCode",{parentName:"p"},"apache/superset:3.1.0"),", that image does not include a headless browser.  Only the ",(0,o.yg)("inlineCode",{parentName:"p"},"superset_worker"),' container needs this headless browser to browse to the target chart or dashboard.\nYou can either install and configure the headless browser - see "Custom Dockerfile" section below - or when deploying via ',(0,o.yg)("inlineCode",{parentName:"p"},"docker compose"),", modify your ",(0,o.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to use a dev image for the worker container and a stable release image for the ",(0,o.yg)("inlineCode",{parentName:"p"},"superset_app")," container."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Note"),': In this context, a "dev image" is the same application software as its corresponding non-dev image, just bundled with additional tools.  So an image like ',(0,o.yg)("inlineCode",{parentName:"p"},"3.1.0-dev")," is identical to ",(0,o.yg)("inlineCode",{parentName:"p"},"3.1.0"),' when it comes to stability, functionality, and running in production.  The actual "in-development" versions of Superset - cutting-edge and unstable - are not tagged with version numbers on Docker Hub and will display version ',(0,o.yg)("inlineCode",{parentName:"p"},"0.0.0-dev")," within the Superset UI."),(0,o.yg)("h3",{id:"slack-integration"},"Slack integration"),(0,o.yg)("p",null,"To send alerts and reports to Slack channels, you need to create a new Slack Application on your workspace."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Connect to your Slack workspace, then head to ","[https://api.slack.com/apps]","."),(0,o.yg)("li",{parentName:"ol"},"Create a new app."),(0,o.yg)("li",{parentName:"ol"},'Go to "OAuth & Permissions" section, and give the following scopes to your app:',(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"incoming-webhook")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"files:write")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"chat:write")))),(0,o.yg)("li",{parentName:"ol"},'At the top of the "OAuth and Permissions" section, click "install to workspace".'),(0,o.yg)("li",{parentName:"ol"},"Select a default channel for your app and continue.\n(You can post to any channel by inviting your Superset app into that channel)."),(0,o.yg)("li",{parentName:"ol"},'The app should now be installed in your workspace, and a "Bot User OAuth Access Token" should have been created. Copy that token in the ',(0,o.yg)("inlineCode",{parentName:"li"},"SLACK_API_TOKEN")," variable of your ",(0,o.yg)("inlineCode",{parentName:"li"},"superset_config.py"),"."),(0,o.yg)("li",{parentName:"ol"},"Restart the service (or run ",(0,o.yg)("inlineCode",{parentName:"li"},"superset init"),") to pull in the new configuration.")),(0,o.yg)("p",null,"Note: when you configure an alert or a report, the Slack channel list takes channel names without the leading '#' e.g. use ",(0,o.yg)("inlineCode",{parentName:"p"},"alerts")," instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"#alerts"),"."),(0,o.yg)("h3",{id:"kubernetes-specific"},"Kubernetes-specific"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You must have a ",(0,o.yg)("inlineCode",{parentName:"li"},"celery beat")," pod running. If you're using the chart included in the GitHub repository under ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/superset/tree/master/helm/superset"},"helm/superset"),", you need to put ",(0,o.yg)("inlineCode",{parentName:"li"},"supersetCeleryBeat.enabled = true")," in your values override."),(0,o.yg)("li",{parentName:"ul"},"You can see the dedicated docs about ",(0,o.yg)("a",{parentName:"li",href:"/docs/installation/kubernetes"},"Kubernetes installation")," for more details.")),(0,o.yg)("h3",{id:"docker-compose-specific"},"Docker Compose specific"),(0,o.yg)("h4",{id:"you-must-have-in-your-docker-composeyml"},"You must have in your ",(0,o.yg)("inlineCode",{parentName:"h4"},"docker-compose.yml")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A Redis message broker"),(0,o.yg)("li",{parentName:"ul"},"PostgreSQL DB instead of SQLlite"),(0,o.yg)("li",{parentName:"ul"},"One or more ",(0,o.yg)("inlineCode",{parentName:"li"},"celery worker")),(0,o.yg)("li",{parentName:"ul"},"A single ",(0,o.yg)("inlineCode",{parentName:"li"},"celery beat"))),(0,o.yg)("p",null,"This process also works in a Docker swarm environment, you would just need to add ",(0,o.yg)("inlineCode",{parentName:"p"},"Deploy:")," to the Superset, Redis and Postgres services along with your specific configs for your swarm."),(0,o.yg)("h3",{id:"detailed-config"},"Detailed config"),(0,o.yg)("p",null,"The following configurations need to be added to the ",(0,o.yg)("inlineCode",{parentName:"p"},"superset_config.py")," file. This file is loaded when the image runs, and any configurations in it will override the default configurations found in the ",(0,o.yg)("inlineCode",{parentName:"p"},"config.py"),"."),(0,o.yg)("p",null,"You can find documentation about each field in the default ",(0,o.yg)("inlineCode",{parentName:"p"},"config.py")," in the GitHub repository under ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset/config.py"},"superset/config.py"),"."),(0,o.yg)("p",null,"You need to replace default values with your custom Redis, Slack and/or SMTP config."),(0,o.yg)("p",null,"Superset uses Celery beat and Celery worker(s) to send alerts and reports."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The beat is the scheduler that tells the worker when to perform its tasks. This schedule is defined when you create the alert or report."),(0,o.yg)("li",{parentName:"ul"},"The worker will process the  tasks that need to be performed when an alert or report is fired.")),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"CeleryConfig"),", only the ",(0,o.yg)("inlineCode",{parentName:"p"},"beat_schedule")," is relevant to this feature, the rest of the ",(0,o.yg)("inlineCode",{parentName:"p"},"CeleryConfig")," can be changed for your needs."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from celery.schedules import crontab\n\nFEATURE_FLAGS = {\n    "ALERT_REPORTS": True\n}\n\nREDIS_HOST = "superset_cache"\nREDIS_PORT = "6379"\n\nclass CeleryConfig:\n    broker_url = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"\n    imports = (\n        "superset.sql_lab",\n        "superset.tasks.scheduler",\n    )\n    result_backend = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n    task_annotations = {\n        "sql_lab.get_sql_results": {\n            "rate_limit": "100/s",\n        },\n    }\n    beat_schedule = {\n        "reports.scheduler": {\n            "task": "reports.scheduler",\n            "schedule": crontab(minute="*", hour="*"),\n        },\n        "reports.prune_log": {\n            "task": "reports.prune_log",\n            "schedule": crontab(minute=0, hour=0),\n        },\n    }\nCELERY_CONFIG = CeleryConfig\n\nSCREENSHOT_LOCATE_WAIT = 100\nSCREENSHOT_LOAD_WAIT = 600\n\n# Slack configuration\nSLACK_API_TOKEN = "xoxb-"\n\n# Email configuration\nSMTP_HOST = "smtp.sendgrid.net" # change to your host\nSMTP_PORT = 2525 # your port, e.g. 587\nSMTP_STARTTLS = True\nSMTP_SSL_SERVER_AUTH = True # If your using an SMTP server with a valid certificate\nSMTP_SSL = False\nSMTP_USER = "your_user" # use the empty string "" if using an unauthenticated SMTP server\nSMTP_PASSWORD = "your_password" # use the empty string "" if using an unauthenticated SMTP server\nSMTP_MAIL_FROM = "noreply@youremail.com"\nEMAIL_REPORTS_SUBJECT_PREFIX = "[Superset] " # optional - overwrites default value in config.py of "[Report] "\n\n# WebDriver configuration\n# If you use Firefox, you can stick with default values\n# If you use Chrome, then add the following WEBDRIVER_TYPE and WEBDRIVER_OPTION_ARGS\nWEBDRIVER_TYPE = "chrome"\nWEBDRIVER_OPTION_ARGS = [\n    "--force-device-scale-factor=2.0",\n    "--high-dpi-support=2.0",\n    "--headless",\n    "--disable-gpu",\n    "--disable-dev-shm-usage",\n    "--no-sandbox",\n    "--disable-setuid-sandbox",\n    "--disable-extensions",\n]\n\n# This is for internal use, you can keep http\nWEBDRIVER_BASEURL = "http://superset:8088"\n# This is the link sent to the recipient. Change to your domain, e.g. https://superset.mydomain.com\nWEBDRIVER_BASEURL_USER_FRIENDLY = "http://localhost:8088"\n')),(0,o.yg)("p",null,"You also need\nto specify on behalf of which username to render the dashboards. In general dashboards and charts\nare not accessible to unauthorized requests, that is why the worker needs to take over credentials\nof an existing user to take a snapshot."),(0,o.yg)("p",null,"By default, Alerts and Reports are executed as the owner of the alert/report object. To use a fixed user account,\njust change the config as follows (",(0,o.yg)("inlineCode",{parentName:"p"},"admin")," in this example):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"from superset.tasks.types import ExecutorType\n\nTHUMBNAIL_SELENIUM_USER = 'admin'\nALERT_REPORTS_EXECUTE_AS = [ExecutorType.SELENIUM]\n")),(0,o.yg)("p",null,"Please refer to ",(0,o.yg)("inlineCode",{parentName:"p"},"ExecutorType")," in the codebase for other executor types."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Important notes")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Be mindful of the concurrency setting for celery (using ",(0,o.yg)("inlineCode",{parentName:"li"},"-c 4"),"). Selenium/webdriver instances can\nconsume a lot of CPU / memory on your servers."),(0,o.yg)("li",{parentName:"ul"},"In some cases, if you notice a lot of leaked geckodriver processes, try running your celery\nprocesses with ",(0,o.yg)("inlineCode",{parentName:"li"},"celery worker --pool=prefork --max-tasks-per-child=128 ...")),(0,o.yg)("li",{parentName:"ul"},"It is recommended to run separate workers for the ",(0,o.yg)("inlineCode",{parentName:"li"},"sql_lab")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"email_reports")," tasks. This can be\ndone using the ",(0,o.yg)("inlineCode",{parentName:"li"},"queue")," field in ",(0,o.yg)("inlineCode",{parentName:"li"},"task_annotations"),"."),(0,o.yg)("li",{parentName:"ul"},"Adjust ",(0,o.yg)("inlineCode",{parentName:"li"},"WEBDRIVER_BASEURL")," in your configuration file if celery workers can\u2019t access Superset via\nits default value of ",(0,o.yg)("inlineCode",{parentName:"li"},"http://0.0.0.0:8080/"),".")),(0,o.yg)("h2",{id:"custom-dockerfile"},"Custom Dockerfile"),(0,o.yg)("p",null,"If you're running the dev version of a released Superset image, like ",(0,o.yg)("inlineCode",{parentName:"p"},"apache/superset:3.1.0-dev"),", you should be set with the above."),(0,o.yg)("p",null,"But if you're building your own image, or starting with a non-dev version, a webdriver (and headless browser) is needed to capture screenshots of the charts and dashboards which are then sent to the recipient.\nHere's how you can modify your Dockerfile to take the screenshots either with Firefox or Chrome."),(0,o.yg)("h3",{id:"using-firefox"},"Using Firefox"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-docker"},"FROM apache/superset:3.1.0\n\nUSER root\n\nRUN apt-get update && \\\n    apt-get install --no-install-recommends -y firefox-esr\n\nENV GECKODRIVER_VERSION=0.29.0\nRUN wget -q https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz && \\\n    tar -x geckodriver -zf geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz -O > /usr/bin/geckodriver && \\\n    chmod 755 /usr/bin/geckodriver && \\\n    rm geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz\n\nRUN pip install --no-cache gevent psycopg2 redis\n\nUSER superset\n")),(0,o.yg)("h3",{id:"using-chrome"},"Using Chrome"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-docker"},"FROM apache/superset:3.1.0\n\nUSER root\n\nRUN apt-get update && \\\n    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \\\n    apt-get install -y --no-install-recommends ./google-chrome-stable_current_amd64.deb && \\\n    rm -f google-chrome-stable_current_amd64.deb\n\nRUN export CHROMEDRIVER_VERSION=$(curl --silent https://chromedriver.storage.googleapis.com/LATEST_RELEASE_102) && \\\n    wget -q https://chromedriver.storage.googleapis.com/${CHROMEDRIVER_VERSION}/chromedriver_linux64.zip && \\\n    unzip chromedriver_linux64.zip -d /usr/bin && \\\n    chmod 755 /usr/bin/chromedriver && \\\n    rm -f chromedriver_linux64.zip\n\nRUN pip install --no-cache gevent psycopg2 redis\n\nUSER superset\n")),(0,o.yg)("p",null,"Don't forget to set ",(0,o.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_TYPE")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_OPTION_ARGS")," in your config if you use Chrome."),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"There are many reasons that reports might not be working.  Try these steps to check for specific issues."),(0,o.yg)("h3",{id:"confirm-feature-flag-is-enabled-and-you-have-sufficient-permissions"},"Confirm feature flag is enabled and you have sufficient permissions"),(0,o.yg)("p",null,'If you don\'t see "Alerts & Reports" under the ',(0,o.yg)("em",{parentName:"p"},"Manage")," section of the Settings dropdown in the Superset UI, you need to enable the ",(0,o.yg)("inlineCode",{parentName:"p"},"ALERT_REPORTS")," feature flag (see above). Enable another feature flag and check to see that it took effect, to verify that your config file is getting loaded."),(0,o.yg)("p",null,"Log in as an admin user to ensure you have adequate permissions."),(0,o.yg)("h3",{id:"check-the-logs-of-your-celery-worker"},"Check the logs of your Celery worker"),(0,o.yg)("p",null,"This is the best source of information about the problem.  In a docker compose deployment, you can do this with a command like ",(0,o.yg)("inlineCode",{parentName:"p"},"docker logs superset_worker --since 1h"),"."),(0,o.yg)("h3",{id:"check-web-browser-and-webdriver-installation"},"Check web browser and webdriver installation"),(0,o.yg)("p",null,"To take a screenshot, the worker visits the dashboard or chart using a headless browser, then takes a screenshot. If you are able to send a chart as CSV or text but can't send as PNG, your problem may lie with the browser."),(0,o.yg)("p",null,"Superset docker images that have a tag ending with ",(0,o.yg)("inlineCode",{parentName:"p"},"-dev")," have the Firefox headless browser and geckodriver already installed. You can test that these are installed and in the proper path by entering your Superset worker and running ",(0,o.yg)("inlineCode",{parentName:"p"},"firefox --headless")," and then ",(0,o.yg)("inlineCode",{parentName:"p"},"geckodriver"),". Both commands should start those applications."),(0,o.yg)("p",null,"If you are handling the installation of that software on your own, or wish to use Chromium instead, do your own verification to ensure that the headless browser opens successfully in the worker environment."),(0,o.yg)("h3",{id:"send-a-test-email"},"Send a test email"),(0,o.yg)("p",null,"One symptom of an invalid connection to an email server is receiving an error of ",(0,o.yg)("inlineCode",{parentName:"p"},"[Errno 110] Connection timed out")," in your logs when the report tries to send."),(0,o.yg)("p",null,"Confirm via testing that your outbound email configuration is correct.  Here is the simplest test, for an un-authenticated email SMTP email service running on port 25.  If you are sending over SSL, for instance, study how ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset/utils/core.py#L818"},"Superset's codebase sends emails")," and then test with those commands and arguments."),(0,o.yg)("p",null,"Start Python in your worker environment, replace all example values, and run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"import smtplib\nfrom email.mime.multipart import MIMEMultipart\nfrom email.mime.text import MIMEText\n\nfrom_email = 'superset_emails@example.com'\nto_email = 'your_email@example.com'\nmsg = MIMEMultipart()\nmsg['From'] = from_email\nmsg['To'] = to_email\nmsg['Subject'] = 'Superset SMTP config test'\nmessage = 'It worked'\nmsg.attach(MIMEText(message))\nmailserver = smtplib.SMTP('smtpmail.example.com', 25)\nmailserver.sendmail(from_email, to_email, msg.as_string())\nmailserver.quit()\n")),(0,o.yg)("p",null,"This should send an email."),(0,o.yg)("p",null,"Possible fixes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Some cloud hosts disable outgoing unauthenticated SMTP email to prevent spam.  For instance, ",(0,o.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/virtual-network/troubleshoot-outbound-smtp-connectivity"},"Azure blocks port 25 by default on some machines"),". Enable that port or use another sending method."),(0,o.yg)("li",{parentName:"ul"},"Use another set of SMTP credentials that you verify works in this setup.")),(0,o.yg)("h3",{id:"browse-to-your-report-from-the-worker"},"Browse to your report from the worker"),(0,o.yg)("p",null,"The worker may be unable to reach the report. It will use the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_BASEURL")," to browse to the report.  If that route is invalid, or presents an authentication challenge that the worker can't pass, the report screenshot will fail."),(0,o.yg)("p",null,"Check this by attempting to ",(0,o.yg)("inlineCode",{parentName:"p"},"curl")," the URL of a report that you see in the error logs of your worker. For instance, from the worker environment, run ",(0,o.yg)("inlineCode",{parentName:"p"},"curl http://superset_app:8088/superset/dashboard/1/"),". You may get different responses depending on whether the dashboard exists - for example, you may need to change the ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," in that URL. If there's a URL in your logs from a failed report screenshot, that's a good place to start. The goal is to determine a valid value for ",(0,o.yg)("inlineCode",{parentName:"p"},"WEBDRIVER_BASEURL")," and determine if an issue like HTTPS or authentication is redirecting your worker."),(0,o.yg)("p",null,"In a deployment with authentication measures enabled like HTTPS and Single Sign-On, it may make sense to have the worker navigate directly to the Superset application running in the same location, avoiding the need to sign in.  For instance, you could use ",(0,o.yg)("inlineCode",{parentName:"p"},'WEBDRIVER_BASEURL="http://superset_app:8088"')," for a docker compose deployment, and set ",(0,o.yg)("inlineCode",{parentName:"p"},'"force_https": False,')," in your ",(0,o.yg)("inlineCode",{parentName:"p"},"TALISMAN_CONFIG"),"."),(0,o.yg)("h2",{id:"scheduling-queries-as-reports"},"Scheduling Queries as Reports"),(0,o.yg)("p",null,"You can optionally allow your users to schedule queries directly in SQL Lab. This is done by adding\nextra metadata to saved queries, which are then picked up by an external scheduled (like\n",(0,o.yg)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),")."),(0,o.yg)("p",null,"To allow scheduled queries, add the following to ",(0,o.yg)("inlineCode",{parentName:"p"},"SCHEDULED_QUERIES")," in your configuration file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"SCHEDULED_QUERIES = {\n    # This information is collected when the user clicks \"Schedule query\",\n    # and saved into the `extra` field of saved queries.\n    # See: https://github.com/mozilla-services/react-jsonschema-form\n    'JSONSCHEMA': {\n        'title': 'Schedule',\n        'description': (\n            'In order to schedule a query, you need to specify when it '\n            'should start running, when it should stop running, and how '\n            'often it should run. You can also optionally specify '\n            'dependencies that should be met before the query is '\n            'executed. Please read the documentation for best practices '\n            'and more information on how to specify dependencies.'\n        ),\n        'type': 'object',\n        'properties': {\n            'output_table': {\n                'type': 'string',\n                'title': 'Output table name',\n            },\n            'start_date': {\n                'type': 'string',\n                'title': 'Start date',\n                # date-time is parsed using the chrono library, see\n                # https://www.npmjs.com/package/chrono-node#usage\n                'format': 'date-time',\n                'default': 'tomorrow at 9am',\n            },\n            'end_date': {\n                'type': 'string',\n                'title': 'End date',\n                # date-time is parsed using the chrono library, see\n                # https://www.npmjs.com/package/chrono-node#usage\n                'format': 'date-time',\n                'default': '9am in 30 days',\n            },\n            'schedule_interval': {\n                'type': 'string',\n                'title': 'Schedule interval',\n            },\n            'dependencies': {\n                'type': 'array',\n                'title': 'Dependencies',\n                'items': {\n                    'type': 'string',\n                },\n            },\n        },\n    },\n    'UISCHEMA': {\n        'schedule_interval': {\n            'ui:placeholder': '@daily, @weekly, etc.',\n        },\n        'dependencies': {\n            'ui:help': (\n                'Check the documentation for the correct format when '\n                'defining dependencies.'\n            ),\n        },\n    },\n    'VALIDATION': [\n        # ensure that start_date <= end_date\n        {\n            'name': 'less_equal',\n            'arguments': ['start_date', 'end_date'],\n            'message': 'End date cannot be before start date',\n            # this is where the error message is shown\n            'container': 'end_date',\n        },\n    ],\n    # link to the scheduler; this example links to an Airflow pipeline\n    # that uses the query id and the output table as its name\n    'linkback': (\n        'https://airflow.example.com/admin/airflow/tree?'\n        'dag_id=query_${id}_${extra_json.schedule_info.output_table}'\n    ),\n}\n")),(0,o.yg)("p",null,"This configuration is based on\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mozilla-services/react-jsonschema-form"},"react-jsonschema-form")," and will add a\nmenu item called \u201cSchedule\u201d to SQL Lab. When the menu item is clicked, a modal will show up where\nthe user can add the metadata required for scheduling the query."),(0,o.yg)("p",null,"This information can then be retrieved from the endpoint ",(0,o.yg)("inlineCode",{parentName:"p"},"/savedqueryviewapi/api/read")," and used to\nschedule the queries that have ",(0,o.yg)("inlineCode",{parentName:"p"},"scheduled_queries")," in their JSON metadata. For schedulers other than\nAirflow, additional fields can be easily added to the configuration file above."))}c.isMDXComponent=!0}}]);