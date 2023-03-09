"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8915],{6974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Alerts and Reports",hide_title:!0,sidebar_position:9,version:2},i=void 0,s={unversionedId:"installation/alerts-reports",id:"installation/alerts-reports",title:"Alerts and Reports",description:"Alerts and Reports",source:"@site/docs/installation/alerts-reports.mdx",sourceDirName:"installation",slug:"/installation/alerts-reports",permalink:"/docs/installation/alerts-reports",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/alerts-reports.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Alerts and Reports",hide_title:!0,sidebar_position:9,version:2},sidebar:"tutorialSidebar",previous:{title:"Async Queries via Celery",permalink:"/docs/installation/async-queries-celery"},next:{title:"SQL Templating",permalink:"/docs/installation/sql-templating"}},l={},u=[{value:"Alerts and Reports",id:"alerts-and-reports",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Commons",id:"commons",level:4},{value:"In your <code>superset_config.py</code> or <code>superset_config_docker.py</code>",id:"in-your-superset_configpy-or-superset_config_dockerpy",level:5},{value:"Disable dry-run mode",id:"disable-dry-run-mode",level:6},{value:"In your <code>Dockerfile</code>",id:"in-your-dockerfile",level:5},{value:"Slack integration",id:"slack-integration",level:4},{value:"Kubernetes-specific",id:"kubernetes-specific",level:4},{value:"Docker-compose specific",id:"docker-compose-specific",level:4},{value:"You must have in your <code>docker-compose.yml</code>",id:"you-must-have-in-your-docker-composeyml",level:5},{value:"Detailed config",id:"detailed-config",level:3},{value:"Custom Dockerfile",id:"custom-dockerfile",level:3},{value:"Using Firefox",id:"using-firefox",level:4},{value:"Using Chrome",id:"using-chrome",level:4},{value:"Schedule Reports",id:"schedule-reports",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alerts-and-reports"},"Alerts and Reports"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This covers versions 1.0.1 to current.")),(0,a.kt)("p",null,"Users can configure automated alerts and reports to send dashboards or charts to an email recipient or Slack channel."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alerts are sent when a SQL condition is reached"),(0,a.kt)("li",{parentName:"ul"},"Reports are sent on a schedule")),(0,a.kt)("p",null,"Alerts and reports are disabled by default. To turn them on, you need to do some setup, described here."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("h4",{id:"commons"},"Commons"),(0,a.kt)("h5",{id:"in-your-superset_configpy-or-superset_config_dockerpy"},"In your ",(0,a.kt)("inlineCode",{parentName:"h5"},"superset_config.py")," or ",(0,a.kt)("inlineCode",{parentName:"h5"},"superset_config_docker.py")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"ALERT_REPORTS"')," ",(0,a.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/configuring-superset#feature-flags"},"feature flag")," must be turned to True."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"beat_schedule")," in CeleryConfig must contain schedule for ",(0,a.kt)("inlineCode",{parentName:"li"},"reports.scheduler"),"."),(0,a.kt)("li",{parentName:"ul"},"At least one of those must be configured, depending on what you want to use:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"emails: ",(0,a.kt)("inlineCode",{parentName:"li"},"SMTP_*")," settings"),(0,a.kt)("li",{parentName:"ul"},"Slack messages: ",(0,a.kt)("inlineCode",{parentName:"li"},"SLACK_API_TOKEN"))))),(0,a.kt)("h6",{id:"disable-dry-run-mode"},"Disable dry-run mode"),(0,a.kt)("p",null,"Screenshots will be taken but no messages actually sent as long as ",(0,a.kt)("inlineCode",{parentName:"p"},"ALERT_REPORTS_NOTIFICATION_DRY_RUN = True"),", its default value in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),".  To disable dry-run mode and start receiving email/Slack notifications, set ",(0,a.kt)("inlineCode",{parentName:"p"},"ALERT_REPORTS_NOTIFICATION_DRY_RUN")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/docker/pythonpath_dev/superset_config.py"},"superset config"),"."),(0,a.kt)("h5",{id:"in-your-dockerfile"},"In your ",(0,a.kt)("inlineCode",{parentName:"h5"},"Dockerfile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must install a headless browser, for taking screenshots of the charts and dashboards. Only Firefox and Chrome are currently supported.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If you choose Chrome, you must also change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBDRIVER_TYPE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"chrome"')," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py"),".")))),(0,a.kt)("p",null,"Note: All the components required (Firefox headless browser, Redis, Postgres db, celery worker and celery beat) are present in the ",(0,a.kt)("em",{parentName:"p"},"dev")," docker image if you are following ",(0,a.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/"},"Installing Superset Locally"),".\nAll you need to do is add the required config variables described in this guide (See ",(0,a.kt)("inlineCode",{parentName:"p"},"Detailed Config"),")."),(0,a.kt)("p",null,"If you are running a non-dev docker image, e.g., a stable release like ",(0,a.kt)("inlineCode",{parentName:"p"},"apache/superset:2.0.1"),", that image does not include a headless browser.  Only the ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_worker"),' container needs this headless browser to browse to the target chart or dashboard.\nYou can either install and configure the headless browser - see "Custom Dockerfile" section below - or when deploying via ',(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),", modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to use a dev image for the worker container and a stable release image for the ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_app")," container."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),': In this context, a "dev image" is the same application software as its corresponding non-dev image, just bundled with additional tools.  So an image like ',(0,a.kt)("inlineCode",{parentName:"p"},"2.0.1-dev")," is identical to ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.1"),' when it comes to stability, functionality, and running in production.  The actual "in-development" versions of Superset - cutting-edge and unstable - are not tagged with version numbers on Docker Hub and will display version ',(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0-dev")," within the Superset UI."),(0,a.kt)("h4",{id:"slack-integration"},"Slack integration"),(0,a.kt)("p",null,"To send alerts and reports to Slack channels, you need to create a new Slack Application on your workspace."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect to your Slack workspace, then head to ",(0,a.kt)("a",{parentName:"li",href:"https://api.slack.com/apps"},"https://api.slack.com/apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new app."),(0,a.kt)("li",{parentName:"ol"},'Go to "OAuth & Permissions" section, and give the following scopes to your app:',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"incoming-webhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files:write")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chat:write")))),(0,a.kt)("li",{parentName:"ol"},'At the top of the "OAuth and Permissions" section, click "install to workspace".'),(0,a.kt)("li",{parentName:"ol"},"Select a default channel for your app and continue.\n(You can post to any channel by inviting your Superset app into that channel)."),(0,a.kt)("li",{parentName:"ol"},'The app should now be installed in your workspace, and a "Bot User OAuth Access Token" should have been created. Copy that token in the ',(0,a.kt)("inlineCode",{parentName:"li"},"SLACK_API_TOKEN")," variable of your ",(0,a.kt)("inlineCode",{parentName:"li"},"superset_config.py"),"."),(0,a.kt)("li",{parentName:"ol"},"Restart the service (or run ",(0,a.kt)("inlineCode",{parentName:"li"},"superset init"),") to pull in the new configuration.")),(0,a.kt)("p",null,"Note: when you configure an alert or a report, the Slack channel list takes channel names without the leading '#' e.g. use ",(0,a.kt)("inlineCode",{parentName:"p"},"alerts")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"#alerts"),"."),(0,a.kt)("h4",{id:"kubernetes-specific"},"Kubernetes-specific"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must have a ",(0,a.kt)("inlineCode",{parentName:"li"},"celery beat")," pod running. If you're using the chart included in the GitHub repository under ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/tree/master/helm/superset"},"helm/superset"),", you need to put ",(0,a.kt)("inlineCode",{parentName:"li"},"supersetCeleryBeat.enabled = true")," in your values override."),(0,a.kt)("li",{parentName:"ul"},"You can see the dedicated docs about ",(0,a.kt)("a",{parentName:"li",href:"/docs/installation/running-on-kubernetes"},"Kubernetes installation")," for more generic details.")),(0,a.kt)("h4",{id:"docker-compose-specific"},"Docker-compose specific"),(0,a.kt)("h5",{id:"you-must-have-in-your-docker-composeyml"},"You must have in your ",(0,a.kt)("inlineCode",{parentName:"h5"},"docker-compose.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Redis message broker"),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL DB instead of SQLlite"),(0,a.kt)("li",{parentName:"ul"},"One or more ",(0,a.kt)("inlineCode",{parentName:"li"},"celery worker")),(0,a.kt)("li",{parentName:"ul"},"A single ",(0,a.kt)("inlineCode",{parentName:"li"},"celery beat"))),(0,a.kt)("p",null,"This process also works in a Docker swarm environment, you would just need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy:")," to the Superset, Redis and Postgres services along with your specific configs for your swarm."),(0,a.kt)("h3",{id:"detailed-config"},"Detailed config"),(0,a.kt)("p",null,"The following configurations need to be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py")," file. This file is loaded when the image runs, and any configurations in it will override the default configurations found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),"."),(0,a.kt)("p",null,"You can find documentation about each field in the default ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," in the GitHub repository under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset/config.py"},"superset/config.py"),"."),(0,a.kt)("p",null,"You need to replace default values with your custom Redis, Slack and/or SMTP config."),(0,a.kt)("p",null,"Superset uses Celery beat and Celery worker(s) to send alerts and reports."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The beat is the scheduler that tells the worker when to perform its tasks. This schedule is defined when you create the alert or report."),(0,a.kt)("li",{parentName:"ul"},"The worker will process the  tasks that need to be performed when an alert or report is fired.")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"CeleryConfig"),", only the ",(0,a.kt)("inlineCode",{parentName:"p"},"beat_schedule")," is relevant to this feature, the rest of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CeleryConfig")," can be changed for your needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from celery.schedules import crontab\n\nFEATURE_FLAGS = {\n    "ALERT_REPORTS": True\n}\n\nREDIS_HOST = "redis-superset"\nREDIS_PORT = "6379"\n\nclass CeleryConfig:\n    broker_url = \'redis://%s:%s/0\' % (REDIS_HOST, REDIS_PORT)\n    imports = (\'superset.sql_lab\', "superset.tasks", "superset.tasks.thumbnails", )\n    result_backend = \'redis://%s:%s/0\' % (REDIS_HOST, REDIS_PORT)\n    worker_prefetch_multiplier = 10\n    task_acks_late = True\n    task_annotations = {\n        \'sql_lab.get_sql_results\': {\n            \'rate_limit\': \'100/s\',\n        },\n        \'email_reports.send\': {\n            \'rate_limit\': \'1/s\',\n            \'time_limit\': 600,\n            \'soft_time_limit\': 600,\n            \'ignore_result\': True,\n        },\n    }\n    beat_schedule = {\n        \'reports.scheduler\': {\n            \'task\': \'reports.scheduler\',\n            \'schedule\': crontab(minute=\'*\', hour=\'*\'),\n        },\n        \'reports.prune_log\': {\n            \'task\': \'reports.prune_log\',\n            \'schedule\': crontab(minute=0, hour=0),\n        },\n    }\nCELERY_CONFIG = CeleryConfig\n\nSCREENSHOT_LOCATE_WAIT = 100\nSCREENSHOT_LOAD_WAIT = 600\n\n# Slack configuration\nSLACK_API_TOKEN = "xoxb-"\n\n# Email configuration\nSMTP_HOST = "smtp.sendgrid.net" # change to your host\nSMTP_PORT = 2525 # your port, e.g. 587\nSMTP_STARTTLS = True\nSMTP_SSL_SERVER_AUTH = True # If your using an SMTP server with a valid certificate\nSMTP_SSL = False\nSMTP_USER = "your_user" # use the empty string "" if using an unauthenticated SMTP server\nSMTP_PASSWORD = "your_password" # use the empty string "" if using an unauthenticated SMTP server\nSMTP_MAIL_FROM = "noreply@youremail.com"\nEMAIL_REPORTS_SUBJECT_PREFIX = "[Superset] " # optional - overwrites default value in config.py of "[Report] "\n\n# WebDriver configuration\n# If you use Firefox, you can stick with default values\n# If you use Chrome, then add the following WEBDRIVER_TYPE and WEBDRIVER_OPTION_ARGS\nWEBDRIVER_TYPE = "chrome"\nWEBDRIVER_OPTION_ARGS = [\n    "--force-device-scale-factor=2.0",\n    "--high-dpi-support=2.0",\n    "--headless",\n    "--disable-gpu",\n    "--disable-dev-shm-usage",\n    "--no-sandbox",\n    "--disable-setuid-sandbox",\n    "--disable-extensions",\n]\n\n# This is for internal use, you can keep http\nWEBDRIVER_BASEURL = "http://superset:8088"\n# This is the link sent to the recipient. Change to your domain, e.g. https://superset.mydomain.com\nWEBDRIVER_BASEURL_USER_FRIENDLY = "http://localhost:8088"\n')),(0,a.kt)("p",null,"You also need\nto specify on behalf of which username to render the dashboards. In general dashboards and charts\nare not accessible to unauthorized requests, that is why the worker needs to take over credentials\nof an existing user to take a snapshot."),(0,a.kt)("p",null,"By default, Alerts and Reports are executed as the user that the ",(0,a.kt)("inlineCode",{parentName:"p"},"THUMBNAIL_SELENIUM_USER")," config\nparameter is set to. To change this user, just change the config as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"THUMBNAIL_SELENIUM_USER = 'username_with_permission_to_access_dashboards'\n")),(0,a.kt)("p",null,"In addition, it's also possible to execute the reports as the report owners/creators. This is typically\nneeded if there isn't a central service account that has access to all objects or databases (e.g.\nwhen using user impersonation on database connections). For this there's the config flag\n",(0,a.kt)("inlineCode",{parentName:"p"},"ALERTS_REPORTS_EXECUTE_AS")," which makes it possible to customize how alerts and reports are executed.\nTo first try to execute as the creator in the owners list (if present), then fall\nback to the creator, then the last modifier in the owners list (if present), then the\nlast modifier, then an owner (giving priority to the last modifier and then the\ncreator if either is contained within the list of owners, otherwise the first owner\nwill be used) and finally ",(0,a.kt)("inlineCode",{parentName:"p"},"THUMBNAIL_SELENIUM_USER"),", set as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superset.reports.types import ReportScheduleExecutor\n\nALERT_REPORTS_EXECUTE_AS = [\n    ReportScheduleExecutor.CREATOR_OWNER,\n    ReportScheduleExecutor.CREATOR,\n    ReportScheduleExecutor.MODIFIER_OWNER,\n    ReportScheduleExecutor.MODIFIER,\n    ReportScheduleExecutor.OWNER,\n    ReportScheduleExecutor.SELENIUM,\n]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important notes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be mindful of the concurrency setting for celery (using ",(0,a.kt)("inlineCode",{parentName:"li"},"-c 4"),"). Selenium/webdriver instances can\nconsume a lot of CPU / memory on your servers."),(0,a.kt)("li",{parentName:"ul"},"In some cases, if you notice a lot of leaked geckodriver processes, try running your celery\nprocesses with ",(0,a.kt)("inlineCode",{parentName:"li"},"celery worker --pool=prefork --max-tasks-per-child=128 ...")),(0,a.kt)("li",{parentName:"ul"},"It is recommended to run separate workers for the ",(0,a.kt)("inlineCode",{parentName:"li"},"sql_lab")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"email_reports")," tasks. This can be\ndone using the ",(0,a.kt)("inlineCode",{parentName:"li"},"queue")," field in ",(0,a.kt)("inlineCode",{parentName:"li"},"task_annotations"),"."),(0,a.kt)("li",{parentName:"ul"},"Adjust ",(0,a.kt)("inlineCode",{parentName:"li"},"WEBDRIVER_BASEURL")," in your configuration file if celery workers can\u2019t access Superset via\nits default value of ",(0,a.kt)("inlineCode",{parentName:"li"},"http://0.0.0.0:8080/"),".")),(0,a.kt)("h3",{id:"custom-dockerfile"},"Custom Dockerfile"),(0,a.kt)("p",null,"If you're running the dev version of a released Superset image, like ",(0,a.kt)("inlineCode",{parentName:"p"},"apache/superset:2.0.1-dev"),", you should be set with the above."),(0,a.kt)("p",null,"But if you're building your own image, or starting with a non-dev version, a webdriver (and headless browser) is needed to capture screenshots of the charts and dashboards which are then sent to the recipient.\nHere's how you can modify your Dockerfile to take the screenshots either with Firefox or Chrome."),(0,a.kt)("h4",{id:"using-firefox"},"Using Firefox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"FROM apache/superset:2.0.1\n\nUSER root\n\nRUN apt-get update && \\\n    apt-get install --no-install-recommends -y firefox-esr\n\nENV GECKODRIVER_VERSION=0.29.0\nRUN wget -q https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz && \\\n    tar -x geckodriver -zf geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz -O > /usr/bin/geckodriver && \\\n    chmod 755 /usr/bin/geckodriver && \\\n    rm geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz\n\nRUN pip install --no-cache gevent psycopg2 redis\n\nUSER superset\n")),(0,a.kt)("h4",{id:"using-chrome"},"Using Chrome"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"FROM apache/superset:2.0.1\n\nUSER root\n\nRUN apt-get update && \\\n    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \\\n    apt-get install -y --no-install-recommends ./google-chrome-stable_current_amd64.deb && \\\n    rm -f google-chrome-stable_current_amd64.deb\n\nRUN export CHROMEDRIVER_VERSION=$(curl --silent https://chromedriver.storage.googleapis.com/LATEST_RELEASE_102) && \\\n    wget -q https://chromedriver.storage.googleapis.com/${CHROMEDRIVER_VERSION}/chromedriver_linux64.zip && \\\n    unzip chromedriver_linux64.zip -d /usr/bin && \\\n    chmod 755 /usr/bin/chromedriver && \\\n    rm -f chromedriver_linux64.zip\n\nRUN pip install --no-cache gevent psycopg2 redis\n\nUSER superset\n")),(0,a.kt)("p",null,"Don't forget to set ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBDRIVER_TYPE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBDRIVER_OPTION_ARGS")," in your config if you use Chrome."),(0,a.kt)("h3",{id:"schedule-reports"},"Schedule Reports"),(0,a.kt)("p",null,"You can optionally allow your users to schedule queries directly in SQL Lab. This is done by adding\nextra metadata to saved queries, which are then picked up by an external scheduled (like\n",(0,a.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),")."),(0,a.kt)("p",null,"To allow scheduled queries, add the following to ",(0,a.kt)("inlineCode",{parentName:"p"},"SCHEDULED_QUERIES")," in your configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"SCHEDULED_QUERIES = {\n    # This information is collected when the user clicks \"Schedule query\",\n    # and saved into the `extra` field of saved queries.\n    # See: https://github.com/mozilla-services/react-jsonschema-form\n    'JSONSCHEMA': {\n        'title': 'Schedule',\n        'description': (\n            'In order to schedule a query, you need to specify when it '\n            'should start running, when it should stop running, and how '\n            'often it should run. You can also optionally specify '\n            'dependencies that should be met before the query is '\n            'executed. Please read the documentation for best practices '\n            'and more information on how to specify dependencies.'\n        ),\n        'type': 'object',\n        'properties': {\n            'output_table': {\n                'type': 'string',\n                'title': 'Output table name',\n            },\n            'start_date': {\n                'type': 'string',\n                'title': 'Start date',\n                # date-time is parsed using the chrono library, see\n                # https://www.npmjs.com/package/chrono-node#usage\n                'format': 'date-time',\n                'default': 'tomorrow at 9am',\n            },\n            'end_date': {\n                'type': 'string',\n                'title': 'End date',\n                # date-time is parsed using the chrono library, see\n                # https://www.npmjs.com/package/chrono-node#usage\n                'format': 'date-time',\n                'default': '9am in 30 days',\n            },\n            'schedule_interval': {\n                'type': 'string',\n                'title': 'Schedule interval',\n            },\n            'dependencies': {\n                'type': 'array',\n                'title': 'Dependencies',\n                'items': {\n                    'type': 'string',\n                },\n            },\n        },\n    },\n    'UISCHEMA': {\n        'schedule_interval': {\n            'ui:placeholder': '@daily, @weekly, etc.',\n        },\n        'dependencies': {\n            'ui:help': (\n                'Check the documentation for the correct format when '\n                'defining dependencies.'\n            ),\n        },\n    },\n    'VALIDATION': [\n        # ensure that start_date <= end_date\n        {\n            'name': 'less_equal',\n            'arguments': ['start_date', 'end_date'],\n            'message': 'End date cannot be before start date',\n            # this is where the error message is shown\n            'container': 'end_date',\n        },\n    ],\n    # link to the scheduler; this example links to an Airflow pipeline\n    # that uses the query id and the output table as its name\n    'linkback': (\n        'https://airflow.example.com/admin/airflow/tree?'\n        'dag_id=query_${id}_${extra_json.schedule_info.output_table}'\n    ),\n}\n")),(0,a.kt)("p",null,"This configuration is based on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla-services/react-jsonschema-form"},"react-jsonschema-form")," and will add a\nmenu item called \u201cSchedule\u201d to SQL Lab. When the menu item is clicked, a modal will show up where\nthe user can add the metadata required for scheduling the query."),(0,a.kt)("p",null,"This information can then be retrieved from the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/savedqueryviewapi/api/read")," and used to\nschedule the queries that have ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduled_queries")," in their JSON metadata. For schedulers other than\nAirflow, additional fields can be easily added to the configuration file above."))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);