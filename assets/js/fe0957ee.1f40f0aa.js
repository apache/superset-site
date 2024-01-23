"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const s={title:"Installing on Kubernetes",hide_title:!0,sidebar_position:3,version:1},l=void 0,i={unversionedId:"installation/running-on-kubernetes",id:"installation/running-on-kubernetes",title:"Installing on Kubernetes",description:"Installing on Kubernetes",source:"@site/docs/installation/running-on-kubernetes.mdx",sourceDirName:"installation",slug:"/installation/running-on-kubernetes",permalink:"/docs/installation/running-on-kubernetes",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/running-on-kubernetes.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Installing on Kubernetes",hide_title:!0,sidebar_position:3,version:1},sidebar:"tutorialSidebar",previous:{title:"Installing From Scratch",permalink:"/docs/installation/installing-superset-from-scratch"},next:{title:"Configuring Superset",permalink:"/docs/installation/configuring-superset"}},o={},p=[{value:"Installing on Kubernetes",id:"installing-on-kubernetes",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running",id:"running",level:3},{value:"Important settings",id:"important-settings",level:3},{value:"Security settings",id:"security-settings",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"superset_config.py",id:"superset_configpy",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"System packages",id:"system-packages",level:4},{value:"Data sources",id:"data-sources",level:4},{value:"Configuration Examples",id:"configuration-examples",level:3},{value:"Setting up OAuth",id:"setting-up-oauth",level:4},{value:"Enable Alerts and Reports",id:"enable-alerts-and-reports",level:4},{value:"Install a supported webdriver in the Celery worker",id:"install-a-supported-webdriver-in-the-celery-worker",level:5},{value:"Run the Celery beat",id:"run-the-celery-beat",level:5},{value:"Configure the appropriate Celery jobs and SMTP/Slack settings",id:"configure-the-appropriate-celery-jobs-and-smtpslack-settings",level:5},{value:"Load the Examples data and dashboards",id:"load-the-examples-data-and-dashboards",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-on-kubernetes"},"Installing on Kubernetes"),(0,r.kt)("p",null,"Running Superset on Kubernetes is supported with the provided ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," chart found in the official ",(0,r.kt)("a",{parentName:"p",href:"https://apache.github.io/superset/index.yaml"},"Superset helm repository"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"Helm installed")),(0,r.kt)("h3",{id:"running"},"Running"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the Superset helm repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'helm repo add superset https://apache.github.io/superset\n"superset" has been added to your repositories\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"View charts in repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm search repo superset\nNAME                    CHART VERSION   APP VERSION     DESCRIPTION\nsuperset/superset       0.1.1           1.0             Apache Superset is a modern, enterprise-ready b...\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Configure your setting overrides")),(0,r.kt)("p",null,"Just like any typical Helm chart, you'll need to craft a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that would define/override any of the values exposed into the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/helm/superset/values.yaml"},"values.yaml"),", or from any of the dependent charts it depends on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/bitnami/redis"},"bitnami/redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/bitnami/postgresql"},"bitnami/postgresql"))),(0,r.kt)("p",null,"More info down below on some important overrides you might need."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install and run")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade --install --values my-values.yaml superset superset/superset\n")),(0,r.kt)("p",null,"You should see various pods popping up, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\nNAME                                    READY   STATUS      RESTARTS   AGE\nsuperset-celerybeat-7cdcc9575f-k6xmc    1/1     Running     0          119s\nsuperset-f5c9c667-dw9lp                 1/1     Running     0          4m7s\nsuperset-f5c9c667-fk8bk                 1/1     Running     0          4m11s\nsuperset-init-db-zlm9z                  0/1     Completed   0          111s\nsuperset-postgresql-0                   1/1     Running     0          6d20h\nsuperset-redis-master-0                 1/1     Running     0          6d20h\nsuperset-worker-75b48bbcc-jmmjr         1/1     Running     0          4m8s\nsuperset-worker-75b48bbcc-qrq49         1/1     Running     0          4m12s\n")),(0,r.kt)("p",null,"The exact list will depend on some of your specific configuration overrides but you should generally expect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N ",(0,r.kt)("inlineCode",{parentName:"li"},"superset-xxxx-yyyy")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"superset-worker-xxxx-yyyy")," pods (depending on your ",(0,r.kt)("inlineCode",{parentName:"li"},"supersetNode.replicaCount")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"supersetWorker.replicaCount")," values)"),(0,r.kt)("li",{parentName:"ul"},"1 ",(0,r.kt)("inlineCode",{parentName:"li"},"superset-postgresql-0")," depending on your postgres settings"),(0,r.kt)("li",{parentName:"ul"},"1 ",(0,r.kt)("inlineCode",{parentName:"li"},"superset-redis-master-0")," depending on your redis settings"),(0,r.kt)("li",{parentName:"ul"},"1 ",(0,r.kt)("inlineCode",{parentName:"li"},"superset-celerybeat-xxxx-yyyy")," pod if you have ",(0,r.kt)("inlineCode",{parentName:"li"},"supersetCeleryBeat.enabled = true")," in your values overrides")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access it")),(0,r.kt)("p",null,"The chart will publish appropriate services to expose the Superset UI internally within your k8s cluster. To access it externally you will have to either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure the Service as a ",(0,r.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"NodePort")),(0,r.kt)("li",{parentName:"ul"},"Set up an ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," for it - the chart includes a definition, but will need to be tuned to your needs (hostname, tls, annotations etc...)"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl port-forward superset-xxxx-yyyy :8088")," to directly tunnel one pod's port into your localhost")),(0,r.kt)("p",null,"Depending how you configured external access, the URL will vary. Once you've identified the appropriate URL you can log in with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"password: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"))),(0,r.kt)("h3",{id:"important-settings"},"Important settings"),(0,r.kt)("h4",{id:"security-settings"},"Security settings"),(0,r.kt)("p",null,"Default security settings and passwords are included but you ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," override those with your own, in particular:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"postgresql:\n  postgresqlPassword: superset\n")),(0,r.kt)("p",null,"Make sure, you set a unique strong complex alphanumeric string for your SECRET_KEY and use a tool to help you generate\na sufficiently random sequence."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To generate a good key you can run, ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl rand -base64 42"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"configOverrides:\n  secret: |\n    SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n")),(0,r.kt)("p",null,"If you want to change the previous secret key then you should rotate the keys.\nDefault secret key for kubernetes deployment is ",(0,r.kt)("inlineCode",{parentName:"p"},"thisISaSECRET_1234")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"configOverrides:\n  my_override: |\n    PREVIOUS_SECRET_KEY = 'YOUR_PREVIOUS_SECRET_KEY'\n    SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\ninit:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh\n      superset re-encrypt-secrets\n      . {{ .Values.configMountPath }}/superset_init.sh\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Superset uses ",(0,r.kt)("a",{parentName:"p",href:"https://about.scarf.sh/scarf-gateway"},"Scarf Gateway")," to collect telemetry data.  Knowing the installation counts for different Superset versions informs the  project's decisions about patching and long-term support. Scarf purges personally identifiable information (PII) and provides only aggregated statistics."),(0,r.kt)("p",{parentName:"admonition"},"To opt-out of this data collection in your Helm-based installation, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"repository:")," line in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helm/superset/values.yaml")," file, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"apachesuperset.docker.scarf.sh/apache/superset")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"apache/superset")," to pull the image directly from Docker Hub.")),(0,r.kt)("h4",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Install additional packages and do any other bootstrap configuration in the bootstrap script.\nFor production clusters it's recommended to build own image with this step done in CI."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Superset requires a Python DB-API database driver and a SQLAlchemy\ndialect to be installed for each datastore you want to connect to."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers"},"Install Database Drivers")," for more information.")),(0,r.kt)("p",null,"The following example installs the Big Query and Elasticsearch database drivers so that you can\nconnect to those datasources in your Superset installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'bootstrapScript: |\n  #!/bin/bash\n  pip install psycopg2==2.9.6 \\\n    sqlalchemy-bigquery==1.6.1 \\\n    elasticsearch-dbapi==0.2.5 &&\\\n  if [ ! -f ~/bootstrap ]; then echo "Running Superset with uid {{ .Values.runAsUser }}" > ~/bootstrap; fi\n')),(0,r.kt)("h4",{id:"superset_configpy"},"superset_config.py"),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_config.py")," is fairly minimal and you will very likely need to extend it. This is done by specifying one or more key/value entries in ",(0,r.kt)("inlineCode",{parentName:"p"},"configOverrides"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'configOverrides:\n  my_override: |\n    # This will make sure the redirect_uri is properly computed, even with SSL offloading\n    ENABLE_PROXY_FIX = True\n    FEATURE_FLAGS = {\n        "DYNAMIC_PLUGINS": True\n    }\n')),(0,r.kt)("p",null,"Those will be evaluated as Helm templates and therefore will be able to reference other ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," variables e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .Values.ingress.hosts[0] }}")," will resolve to your ingress external domain."),(0,r.kt)("p",null,"The entire ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_config.py")," will be installed as a secret, so it is safe to pass sensitive parameters directly... however it might be more readable to use secret env variables for that."),(0,r.kt)("p",null,"Full python files can be provided by running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade --install --values my-values.yaml --set-file configOverrides.oauth=set_oauth.py")),(0,r.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Those can be passed as key/values either with ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"extraSecretEnv")," if they're sensitive. They can then be referenced from ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_config.py")," using e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'os.environ.get("VAR")'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  SMTP_HOST: smtp.gmail.com\n  SMTP_USER: user@gmail.com\n  SMTP_PORT: "587"\n  SMTP_MAIL_FROM: user@gmail.com\n\nextraSecretEnv:\n  SMTP_PASSWORD: xxxx\n\nconfigOverrides:\n  smtp: |\n    import ast\n    SMTP_HOST = os.getenv("SMTP_HOST","localhost")\n    SMTP_STARTTLS = ast.literal_eval(os.getenv("SMTP_STARTTLS", "True"))\n    SMTP_SSL = ast.literal_eval(os.getenv("SMTP_SSL", "False"))\n    SMTP_USER = os.getenv("SMTP_USER","superset")\n    SMTP_PORT = os.getenv("SMTP_PORT",25)\n    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD","superset")\n')),(0,r.kt)("h4",{id:"system-packages"},"System packages"),(0,r.kt)("p",null,"If new system packages are required, they can be installed before application startup by overriding the container's ",(0,r.kt)("inlineCode",{parentName:"p"},"command"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetWorker:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      apt update\n      apt install -y somepackage\n      apt autoremove -yqq --purge\n      apt clean\n\n      # Run celery worker\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh; celery --app=superset.tasks.celery_app:app worker\n")),(0,r.kt)("h4",{id:"data-sources"},"Data sources"),(0,r.kt)("p",null,"Data source definitions can be automatically declared by providing key/value yaml definitions in ",(0,r.kt)("inlineCode",{parentName:"p"},"extraConfigs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'extraConfigs:\n  import_datasources.yaml: |\n    databases:\n    - allow_file_upload: true\n      allow_ctas: true\n      allow_cvas: true\n      database_name: example-db\n      extra: "{\\r\\n    \\"metadata_params\\": {},\\r\\n    \\"engine_params\\": {},\\r\\n    \\"\\\n        metadata_cache_timeout\\": {},\\r\\n    \\"schemas_allowed_for_file_upload\\": []\\r\\n\\\n        }"\n      sqlalchemy_uri: example://example-db.local\n      tables: []\n')),(0,r.kt)("p",null,"Those will also be mounted as secrets and can include sensitive parameters."),(0,r.kt)("h3",{id:"configuration-examples"},"Configuration Examples"),(0,r.kt)("h4",{id:"setting-up-oauth"},"Setting up OAuth"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OAuth setup requires that the ",(0,r.kt)("a",{parentName:"p",href:"https://authlib.org/"},"authlib")," Python library is installed. This can\nbe done using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," by updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrapScript"),". See the ",(0,r.kt)("a",{parentName:"p",href:"#dependencies"},"Dependencies")," section\nfor more information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  AUTH_DOMAIN: example.com\n\nextraSecretEnv:\n  GOOGLE_KEY: xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com\n  GOOGLE_SECRET: xxxxxxxxxxxxxxxxxxxxxxxx\n\nconfigOverrides:\n  enable_oauth: |\n    # This will make sure the redirect_uri is properly computed, even with SSL offloading\n    ENABLE_PROXY_FIX = True\n\n    from flask_appbuilder.security.manager import AUTH_OAUTH\n    AUTH_TYPE = AUTH_OAUTH\n    OAUTH_PROVIDERS = [\n        {\n            "name": "google",\n            "icon": "fa-google",\n            "token_key": "access_token",\n            "remote_app": {\n                "client_id": os.getenv("GOOGLE_KEY"),\n                "client_secret": os.getenv("GOOGLE_SECRET"),\n                "api_base_url": "https://www.googleapis.com/oauth2/v2/",\n                "client_kwargs": {"scope": "email profile"},\n                "request_token_url": None,\n                "access_token_url": "https://accounts.google.com/o/oauth2/token",\n                "authorize_url": "https://accounts.google.com/o/oauth2/auth",\n                "authorize_params": {"hd": os.getenv("AUTH_DOMAIN", "")}\n            },\n        }\n    ]\n\n    # Map Authlib roles to superset roles\n    AUTH_ROLE_ADMIN = \'Admin\'\n    AUTH_ROLE_PUBLIC = \'Public\'\n\n    # Will allow user self registration, allowing to create Flask users from Authorized User\n    AUTH_USER_REGISTRATION = True\n\n    # The default user self registration role\n    AUTH_USER_REGISTRATION_ROLE = "Admin"\n')),(0,r.kt)("h4",{id:"enable-alerts-and-reports"},"Enable Alerts and Reports"),(0,r.kt)("p",null,"For this, as per the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/email-reports"},"Alerts and Reports doc"),", you will need to:"),(0,r.kt)("h5",{id:"install-a-supported-webdriver-in-the-celery-worker"},"Install a supported webdriver in the Celery worker"),(0,r.kt)("p",null,"This is done either by using a custom image that has the webdriver pre-installed, or installing at startup time by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"command"),". Here's a working example for ",(0,r.kt)("inlineCode",{parentName:"p"},"chromedriver"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetWorker:\n  command:\n    - /bin/sh\n    - -c\n    - |\n      # Install chrome webdriver\n      # See https://github.com/apache/superset/blob/4fa3b6c7185629b87c27fc2c0e5435d458f7b73d/docs/src/pages/docs/installation/email_reports.mdx\n      apt-get update\n      apt-get install -y wget\n      wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n      apt-get install -y --no-install-recommends ./google-chrome-stable_current_amd64.deb\n      wget https://chromedriver.storage.googleapis.com/88.0.4324.96/chromedriver_linux64.zip\n      apt-get install -y zip\n      unzip chromedriver_linux64.zip\n      chmod +x chromedriver\n      mv chromedriver /usr/bin\n      apt-get autoremove -yqq --purge\n      apt-get clean\n      rm -f google-chrome-stable_current_amd64.deb chromedriver_linux64.zip\n\n      # Run\n      . {{ .Values.configMountPath }}/superset_bootstrap.sh; celery --app=superset.tasks.celery_app:app worker\n")),(0,r.kt)("h5",{id:"run-the-celery-beat"},"Run the Celery beat"),(0,r.kt)("p",null,"This pod will trigger the scheduled tasks configured in the alerts and reports UI section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"supersetCeleryBeat:\n  enabled: true\n")),(0,r.kt)("h5",{id:"configure-the-appropriate-celery-jobs-and-smtpslack-settings"},"Configure the appropriate Celery jobs and SMTP/Slack settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  SMTP_HOST: smtp.gmail.com\n  SMTP_USER: user@gmail.com\n  SMTP_PORT: "587"\n  SMTP_MAIL_FROM: user@gmail.com\n\nextraSecretEnv:\n  SLACK_API_TOKEN: xoxb-xxxx-yyyy\n  SMTP_PASSWORD: xxxx-yyyy\n\nconfigOverrides:\n  feature_flags: |\n    import ast\n\n    FEATURE_FLAGS = {\n        "ALERT_REPORTS": True\n    }\n\n    SMTP_HOST = os.getenv("SMTP_HOST","localhost")\n    SMTP_STARTTLS = ast.literal_eval(os.getenv("SMTP_STARTTLS", "True"))\n    SMTP_SSL = ast.literal_eval(os.getenv("SMTP_SSL", "False"))\n    SMTP_USER = os.getenv("SMTP_USER","superset")\n    SMTP_PORT = os.getenv("SMTP_PORT",25)\n    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD","superset")\n    SMTP_MAIL_FROM = os.getenv("SMTP_MAIL_FROM","superset@superset.com")\n\n    SLACK_API_TOKEN = os.getenv("SLACK_API_TOKEN",None)\n  celery_conf: |\n    from celery.schedules import crontab\n\n    class CeleryConfig:\n      broker_url = f"redis://{env(\'REDIS_HOST\')}:{env(\'REDIS_PORT\')}/0"\n      imports = (\n          "superset.sql_lab",\n          "superset.tasks.cache",\n          "superset.tasks.scheduler",\n      )\n      result_backend = f"redis://{env(\'REDIS_HOST\')}:{env(\'REDIS_PORT\')}/0"\n      task_annotations = {\n          "sql_lab.get_sql_results": {\n              "rate_limit": "100/s",\n          },\n      }\n      beat_schedule = {\n          "reports.scheduler": {\n              "task": "reports.scheduler",\n              "schedule": crontab(minute="*", hour="*"),\n          },\n          "reports.prune_log": {\n              "task": "reports.prune_log",\n              \'schedule\': crontab(minute=0, hour=0),\n          },\n          \'cache-warmup-hourly\': {\n              "task": "cache-warmup",\n              "schedule": crontab(minute="*/30", hour="*"),\n              "kwargs": {\n                  "strategy_name": "top_n_dashboards",\n                  "top_n": 10,\n                  "since": "7 days ago",\n              },\n          }\n      }\n\n    CELERY_CONFIG = CeleryConfig\n  reports: |\n    EMAIL_PAGE_RENDER_WAIT = 60\n    WEBDRIVER_BASEURL = "http://{{ template "superset.fullname" . }}:{{ .Values.service.port }}/"\n    WEBDRIVER_BASEURL_USER_FRIENDLY = "https://www.example.com/"\n    WEBDRIVER_TYPE= "chrome"\n    WEBDRIVER_OPTION_ARGS = [\n        "--force-device-scale-factor=2.0",\n        "--high-dpi-support=2.0",\n        "--headless",\n        "--disable-gpu",\n        "--disable-dev-shm-usage",\n        # This is required because our process runs as root (in order to install pip packages)\n        "--no-sandbox",\n        "--disable-setuid-sandbox",\n        "--disable-extensions",\n    ]\n')),(0,r.kt)("h4",{id:"load-the-examples-data-and-dashboards"},"Load the Examples data and dashboards"),(0,r.kt)("p",null,"If you are trying Superset out and want some data and dashboards to explore, you can load some examples by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"my_values.yaml")," and deploying it as described above in the ",(0,r.kt)("strong",{parentName:"p"},"Configure your setting overrides")," step of the ",(0,r.kt)("strong",{parentName:"p"},"Running")," section.\nTo load the examples, add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_values.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"init:\n  loadExamples: true\n")))}c.isMDXComponent=!0}}]);