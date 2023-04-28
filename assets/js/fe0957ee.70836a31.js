"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9822],{25079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(83117),a=(t(67294),t(3905));const s={title:"Running on Kubernetes",hide_title:!0,sidebar_position:12,version:1},l=void 0,i={unversionedId:"installation/running-on-kubernetes",id:"installation/running-on-kubernetes",title:"Running on Kubernetes",description:"Running on Kubernetes",source:"@site/docs/installation/running-on-kubernetes.mdx",sourceDirName:"installation",slug:"/installation/running-on-kubernetes",permalink:"/docs/installation/running-on-kubernetes",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/running-on-kubernetes.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Running on Kubernetes",hide_title:!0,sidebar_position:12,version:1},sidebar:"tutorialSidebar",previous:{title:"SQL Templating",permalink:"/docs/installation/sql-templating"},next:{title:"Setup SSH Tunneling",permalink:"/docs/installation/setup-ssh-tunneling"}},o={},p=[{value:"Running on Kubernetes",id:"running-on-kubernetes",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running",id:"running",level:3},{value:"Important settings",id:"important-settings",level:3},{value:"Security settings",id:"security-settings",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"superset_config.py",id:"superset_configpy",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"System packages",id:"system-packages",level:4},{value:"Data sources",id:"data-sources",level:4},{value:"Configuration Examples",id:"configuration-examples",level:3},{value:"Setting up OAuth",id:"setting-up-oauth",level:4},{value:"Enable Alerts and Reports",id:"enable-alerts-and-reports",level:4},{value:"Install a supported webdriver in the Celery worker",id:"install-a-supported-webdriver-in-the-celery-worker",level:5},{value:"Run the Celery beat",id:"run-the-celery-beat",level:5},{value:"Configure the appropriate Celery jobs and SMTP/Slack settings",id:"configure-the-appropriate-celery-jobs-and-smtpslack-settings",level:5}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"running-on-kubernetes"},"Running on Kubernetes"),(0,a.kt)("p",null,"Running on Kubernetes is supported with the provided ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," chart found in the official ",(0,a.kt)("a",{parentName:"p",href:"https://apache.github.io/superset/index.yaml"},"Superset helm repository"),"."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},"Helm installed")),(0,a.kt)("h3",{id:"running"},"Running"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the Superset helm repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'helm repo add superset https://apache.github.io/superset\n"superset" has been added to your repositories\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"View charts in repo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm search repo superset\nNAME                    CHART VERSION   APP VERSION     DESCRIPTION\nsuperset/superset       0.1.1           1.0             Apache Superset is a modern, enterprise-ready b...\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Configure your setting overrides")),(0,a.kt)("p",null,"Just like any typical Helm chart, you'll need to craft a ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that would define/override any of the values exposed into the default ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/helm/superset/values.yaml"},"values.yaml"),", or from any of the dependent charts it depends on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/bitnami/redis"},"bitnami/redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/bitnami/postgresql"},"bitnami/postgresql"))),(0,a.kt)("p",null,"More info down below on some important overrides you might need."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Install and run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade --install --values my-values.yaml superset superset/superset\n")),(0,a.kt)("p",null,"You should see various pods popping up, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\nNAME                                    READY   STATUS      RESTARTS   AGE\nsuperset-celerybeat-7cdcc9575f-k6xmc    1/1     Running     0          119s\nsuperset-f5c9c667-dw9lp                 1/1     Running     0          4m7s\nsuperset-f5c9c667-fk8bk                 1/1     Running     0          4m11s\nsuperset-init-db-zlm9z                  0/1     Completed   0          111s\nsuperset-postgresql-0                   1/1     Running     0          6d20h\nsuperset-redis-master-0                 1/1     Running     0          6d20h\nsuperset-worker-75b48bbcc-jmmjr         1/1     Running     0          4m8s\nsuperset-worker-75b48bbcc-qrq49         1/1     Running     0          4m12s\n")),(0,a.kt)("p",null,"The exact list will depend on some of your specific configuration overrides but you should generally expect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N ",(0,a.kt)("inlineCode",{parentName:"li"},"superset-xxxx-yyyy")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"superset-worker-xxxx-yyyy")," pods (depending on your ",(0,a.kt)("inlineCode",{parentName:"li"},"supersetNode.replicaCount")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"supersetWorker.replicaCount")," values)"),(0,a.kt)("li",{parentName:"ul"},"1 ",(0,a.kt)("inlineCode",{parentName:"li"},"superset-postgresql-0")," depending on your postgres settings"),(0,a.kt)("li",{parentName:"ul"},"1 ",(0,a.kt)("inlineCode",{parentName:"li"},"superset-redis-master-0")," depending on your redis settings"),(0,a.kt)("li",{parentName:"ul"},"1 ",(0,a.kt)("inlineCode",{parentName:"li"},"superset-celerybeat-xxxx-yyyy")," pod if you have ",(0,a.kt)("inlineCode",{parentName:"li"},"supersetCeleryBeat.enabled = true")," in your values overrides")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access it")),(0,a.kt)("p",null,"The chart will publish appropriate services to expose the Superset UI internally within your k8s cluster. To access it externally you will have to either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the Service as a ",(0,a.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"NodePort")),(0,a.kt)("li",{parentName:"ul"},"Set up an ",(0,a.kt)("inlineCode",{parentName:"li"},"Ingress")," for it - the chart includes a definition, but will need to be tuned to your needs (hostname, tls, annotations etc...)"),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl port-forward superset-xxxx-yyyy :8088")," to directly tunnel one pod's port into your localhost")),(0,a.kt)("p",null,"Depending how you configured external access, the URL will vary. Once you've identified the appropriate URL you can log in with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user: ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")),(0,a.kt)("li",{parentName:"ul"},"password: ",(0,a.kt)("inlineCode",{parentName:"li"},"admin"))),(0,a.kt)("h3",{id:"important-settings"},"Important settings"),(0,a.kt)("h4",{id:"security-settings"},"Security settings"),(0,a.kt)("p",null,"Default security settings and passwords are included but you ",(0,a.kt)("strong",{parentName:"p"},"SHOULD")," override those with your own, in particular:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"postgresql:\n  postgresqlPassword: superset\n")),(0,a.kt)("p",null,"Make sure, you set a unique strong complex alphanumeric string for your SECRET_KEY and use a tool to help you generate\na sufficiently random sequence."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To generate a good key you can run, ",(0,a.kt)("inlineCode",{parentName:"li"},"openssl rand -base64 42"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"configOverrides:\n  secret: |\n    SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n")),(0,a.kt)("p",null,"If you want to change the previous secret key then you should rotate the keys.\nDefault secret key for kubernetes deployment is ",(0,a.kt)("inlineCode",{parentName:"p"},"thisISaSECRET_1234")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"configOverrides:\n  my_override: |\n    PREVIOUS_SECRET_KEY = 'YOUR_PREVIOUS_SECRET_KEY'\n    SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\ninit:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh\n      superset re-encrypt-secrets\n      . {{ .Values.configMountPath }}/superset_init.sh\n")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Install additional packages and do any other bootstrap configuration in the bootstrap script.\nFor production clusters it's recommended to build own image with this step done in CI."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Superset requires a Python DB-API database driver and a SQLAlchemy\ndialect to be installed for each datastore you want to connect to."),(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers"},"Install Database Drivers")," for more information")),(0,a.kt)("p",null,"The following example installs the Big Query and Elasticsearch database drivers so that you can\nconnect to those datasources in your Superset installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'bootstrapScript: |\n  #!/bin/bash\n  pip install psycopg2==2.9.6 \\\n    sqlalchemy-bigquery==1.5.0 \\\n    elasticsearch-dbapi==0.2.5 &&\\\n  if [ ! -f ~/bootstrap ]; then echo "Running Superset with uid {{ .Values.runAsUser }}" > ~/bootstrap; fi\n')),(0,a.kt)("h4",{id:"superset_configpy"},"superset_config.py"),(0,a.kt)("p",null,"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py")," is fairly minimal and you will very likely need to extend it. This is done by specifying one or more key/value entries in ",(0,a.kt)("inlineCode",{parentName:"p"},"configOverrides"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'configOverrides:\n  my_override: |\n    # This will make sure the redirect_uri is properly computed, even with SSL offloading\n    ENABLE_PROXY_FIX = True\n    FEATURE_FLAGS = {\n        "DYNAMIC_PLUGINS": True\n    }\n')),(0,a.kt)("p",null,"Those will be evaluated as Helm templates and therefore will be able to reference other ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," variables e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ .Values.ingress.hosts[0] }}")," will resolve to your ingress external domain."),(0,a.kt)("p",null,"The entire ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py")," will be installed as a secret, so it is safe to pass sensitive parameters directly... however it might be more readable to use secret env variables for that."),(0,a.kt)("p",null,"Full python files can be provided by running ",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade --install --values my-values.yaml --set-file configOverrides.oauth=set_oauth.py")),(0,a.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Those can be passed as key/values either with ",(0,a.kt)("inlineCode",{parentName:"p"},"extraEnv")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"extraSecretEnv")," if they're sensitive. They can then be referenced from ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py")," using e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'os.environ.get("VAR")'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  SMTP_HOST: smtp.gmail.com\n  SMTP_USER: user@gmail.com\n  SMTP_PORT: "587"\n  SMTP_MAIL_FROM: user@gmail.com\n\nextraSecretEnv:\n  SMTP_PASSWORD: xxxx\n\nconfigOverrides:\n  smtp: |\n    import ast\n    SMTP_HOST = os.getenv("SMTP_HOST","localhost")\n    SMTP_STARTTLS = ast.literal_eval(os.getenv("SMTP_STARTTLS", "True"))\n    SMTP_SSL = ast.literal_eval(os.getenv("SMTP_SSL", "False"))\n    SMTP_USER = os.getenv("SMTP_USER","superset")\n    SMTP_PORT = os.getenv("SMTP_PORT",25)\n    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD","superset")\n')),(0,a.kt)("h4",{id:"system-packages"},"System packages"),(0,a.kt)("p",null,"If new system packages are required, they can be installed before application startup by overriding the container's ",(0,a.kt)("inlineCode",{parentName:"p"},"command"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetWorker:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      apt update\n      apt install -y somepackage\n      apt autoremove -yqq --purge\n      apt clean\n\n      # Run celery worker\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh; celery --app=superset.tasks.celery_app:app worker\n")),(0,a.kt)("h4",{id:"data-sources"},"Data sources"),(0,a.kt)("p",null,"Data source definitions can be automatically declared by providing key/value yaml definitions in ",(0,a.kt)("inlineCode",{parentName:"p"},"extraConfigs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'extraConfigs:\n  import_datasources.yaml: |\n    databases:\n    - allow_file_upload: true\n      allow_ctas: true\n      allow_cvas: true\n      database_name: example-db\n      extra: "{\\r\\n    \\"metadata_params\\": {},\\r\\n    \\"engine_params\\": {},\\r\\n    \\"\\\n        metadata_cache_timeout\\": {},\\r\\n    \\"schemas_allowed_for_file_upload\\": []\\r\\n\\\n        }"\n      sqlalchemy_uri: example://example-db.local\n      tables: []\n')),(0,a.kt)("p",null,"Those will also be mounted as secrets and can include sensitive parameters."),(0,a.kt)("h3",{id:"configuration-examples"},"Configuration Examples"),(0,a.kt)("h4",{id:"setting-up-oauth"},"Setting up OAuth"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"OAuth setup requires that the ",(0,a.kt)("a",{parentName:"p",href:"https://authlib.org/"},"authlib")," Python library is installed. This can\nbe done using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrapScript"),". See the ",(0,a.kt)("a",{parentName:"p",href:"#dependencies"},"Dependencies")," section\nfor more information.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  AUTH_DOMAIN: example.com\n\nextraSecretEnv:\n  GOOGLE_KEY: xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com\n  GOOGLE_SECRET: xxxxxxxxxxxxxxxxxxxxxxxx\n\nconfigOverrides:\n  enable_oauth: |\n    # This will make sure the redirect_uri is properly computed, even with SSL offloading\n    ENABLE_PROXY_FIX = True\n\n    from flask_appbuilder.security.manager import AUTH_OAUTH\n    AUTH_TYPE = AUTH_OAUTH\n    OAUTH_PROVIDERS = [\n        {\n            "name": "google",\n            "icon": "fa-google",\n            "token_key": "access_token",\n            "remote_app": {\n                "client_id": os.getenv("GOOGLE_KEY"),\n                "client_secret": os.getenv("GOOGLE_SECRET"),\n                "api_base_url": "https://www.googleapis.com/oauth2/v2/",\n                "client_kwargs": {"scope": "email profile"},\n                "request_token_url": None,\n                "access_token_url": "https://accounts.google.com/o/oauth2/token",\n                "authorize_url": "https://accounts.google.com/o/oauth2/auth",\n                "authorize_params": {"hd": os.getenv("AUTH_DOMAIN", "")}\n            },\n        }\n    ]\n\n    # Map Authlib roles to superset roles\n    AUTH_ROLE_ADMIN = \'Admin\'\n    AUTH_ROLE_PUBLIC = \'Public\'\n\n    # Will allow user self registration, allowing to create Flask users from Authorized User\n    AUTH_USER_REGISTRATION = True\n\n    # The default user self registration role\n    AUTH_USER_REGISTRATION_ROLE = "Admin"\n')),(0,a.kt)("h4",{id:"enable-alerts-and-reports"},"Enable Alerts and Reports"),(0,a.kt)("p",null,"For this, as per the ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/email-reports"},"Alerts and Reports doc"),", you will need to:"),(0,a.kt)("h5",{id:"install-a-supported-webdriver-in-the-celery-worker"},"Install a supported webdriver in the Celery worker"),(0,a.kt)("p",null,"This is done either by using a custom image that has the webdriver pre-installed, or installing at startup time by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"command"),". Here's a working example for ",(0,a.kt)("inlineCode",{parentName:"p"},"chromedriver"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetWorker:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      # Install chrome webdriver\n      # See https://github.com/apache/superset/blob/4fa3b6c7185629b87c27fc2c0e5435d458f7b73d/docs/src/pages/docs/installation/email_reports.mdx\n      apt update\n      wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n      apt install -y --no-install-recommends ./google-chrome-stable_current_amd64.deb\n      wget https://chromedriver.storage.googleapis.com/88.0.4324.96/chromedriver_linux64.zip\n      unzip chromedriver_linux64.zip\n      chmod +x chromedriver\n      mv chromedriver /usr/bin\n      apt autoremove -yqq --purge\n      apt clean\n      rm -f google-chrome-stable_current_amd64.deb chromedriver_linux64.zip\n\n      # Run\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh; celery --app=superset.tasks.celery_app:app worker\n")),(0,a.kt)("h5",{id:"run-the-celery-beat"},"Run the Celery beat"),(0,a.kt)("p",null,"This pod will trigger the scheduled tasks configured in the alerts and reports UI section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetCeleryBeat:\n  enabled: true\n")),(0,a.kt)("h5",{id:"configure-the-appropriate-celery-jobs-and-smtpslack-settings"},"Configure the appropriate Celery jobs and SMTP/Slack settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"extraEnv:\n  SMTP_HOST: smtp.gmail.com\n  SMTP_USER: user@gmail.com\n  SMTP_PORT: \"587\"\n  SMTP_MAIL_FROM: user@gmail.com\n\nextraSecretEnv:\n  SLACK_API_TOKEN: xoxb-xxxx-yyyy\n  SMTP_PASSWORD: xxxx-yyyy\n\nconfigOverrides:\n  feature_flags: |\n    import ast\n\n    FEATURE_FLAGS = {\n        \"ALERT_REPORTS\": True\n    }\n\n    SMTP_HOST = os.getenv(\"SMTP_HOST\",\"localhost\")\n    SMTP_STARTTLS = ast.literal_eval(os.getenv(\"SMTP_STARTTLS\", \"True\"))\n    SMTP_SSL = ast.literal_eval(os.getenv(\"SMTP_SSL\", \"False\"))\n    SMTP_USER = os.getenv(\"SMTP_USER\",\"superset\")\n    SMTP_PORT = os.getenv(\"SMTP_PORT\",25)\n    SMTP_PASSWORD = os.getenv(\"SMTP_PASSWORD\",\"superset\")\n    SMTP_MAIL_FROM = os.getenv(\"SMTP_MAIL_FROM\",\"superset@superset.com\")\n\n    SLACK_API_TOKEN = os.getenv(\"SLACK_API_TOKEN\",None)\n  celery_conf: |\n    from celery.schedules import crontab\n\n    class CeleryConfig(object):\n      broker_url = f\"redis://{env('REDIS_HOST')}:{env('REDIS_PORT')}/0\"\n      imports = ('superset.sql_lab', \"superset.tasks\", \"superset.tasks.thumbnails\", )\n      result_backend = f\"redis://{env('REDIS_HOST')}:{env('REDIS_PORT')}/0\"\n      task_annotations = {\n          'sql_lab.get_sql_results': {\n              'rate_limit': '100/s',\n          },\n          'email_reports.send': {\n              'rate_limit': '1/s',\n              'time_limit': 600,\n              'soft_time_limit': 600,\n              'ignore_result': True,\n          },\n      }\n      beat_schedule = {\n          'reports.scheduler': {\n              'task': 'reports.scheduler',\n              'schedule': crontab(minute='*', hour='*'),\n          },\n          'reports.prune_log': {\n              'task': 'reports.prune_log',\n              'schedule': crontab(minute=0, hour=0),\n          },\n          'cache-warmup-hourly': {\n              'task': 'cache-warmup',\n              'schedule': crontab(minute='*/30', hour='*'),\n              'kwargs': {\n                  'strategy_name': 'top_n_dashboards',\n                  'top_n': 10,\n                  'since': '7 days ago',\n              },\n          }\n      }\n\n    CELERY_CONFIG = CeleryConfig\n  reports: |\n    EMAIL_PAGE_RENDER_WAIT = 60\n    WEBDRIVER_BASEURL = \"http://{{ template \"superset.fullname\" . }}:{{ .Values.service.port }}/\"\n    WEBDRIVER_BASEURL_USER_FRIENDLY = \"https://www.example.com/\"\n    WEBDRIVER_TYPE= \"chrome\"\n    WEBDRIVER_OPTION_ARGS = [\n        \"--force-device-scale-factor=2.0\",\n        \"--high-dpi-support=2.0\",\n        \"--headless\",\n        \"--disable-gpu\",\n        \"--disable-dev-shm-usage\",\n        # This is required because our process runs as root (in order to install pip packages)\n        \"--no-sandbox\",\n        \"--disable-setuid-sandbox\",\n        \"--disable-extensions\",\n    ]\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);