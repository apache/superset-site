"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6585],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,y=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return t?a.createElement(y,i(i({ref:n},u),{},{components:t})):a.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"Configuring Superset",hide_title:!0,sidebar_position:4,version:1},i=void 0,s={unversionedId:"installation/configuring-superset",id:"installation/configuring-superset",title:"Configuring Superset",description:"Configuring Superset",source:"@site/docs/installation/configuring-superset.mdx",sourceDirName:"installation",slug:"/installation/configuring-superset",permalink:"/docs/installation/configuring-superset",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/configuring-superset.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuring Superset",hide_title:!0,sidebar_position:4,version:1},sidebar:"tutorialSidebar",previous:{title:"Installing Locally Using Docker Compose",permalink:"/docs/installation/installing-superset-using-docker-compose"},next:{title:"Additional Networking Settings",permalink:"/docs/installation/networking-settings"}},l={},p=[{value:"Configuring Superset",id:"configuring-superset",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Specifying a SECRET_KEY",id:"specifying-a-secret_key",level:3},{value:"Adding an initial SECRET_KEY",id:"adding-an-initial-secret_key",level:4},{value:"Rotating to a newer SECRET_KEY",id:"rotating-to-a-newer-secret_key",level:4},{value:"Using a production metastore",id:"using-a-production-metastore",level:3},{value:"Running on a WSGI HTTP Server",id:"running-on-a-wsgi-http-server",level:3},{value:"HTTPS Configuration",id:"https-configuration",level:3},{value:"Configuration Behind a Load Balancer",id:"configuration-behind-a-load-balancer",level:3},{value:"Custom OAuth2 Configuration",id:"custom-oauth2-configuration",level:3},{value:"LDAP Authentication",id:"ldap-authentication",level:3},{value:"Mapping LDAP or OAUTH groups to Superset roles",id:"mapping-ldap-or-oauth-groups-to-superset-roles",level:3},{value:"Mapping OAUTH groups to Superset roles",id:"mapping-oauth-groups-to-superset-roles",level:4},{value:"Mapping LDAP groups to Superset roles",id:"mapping-ldap-groups-to-superset-roles",level:4},{value:"Syncing roles at login",id:"syncing-roles-at-login",level:4},{value:"Flask app Configuration Hook",id:"flask-app-configuration-hook",level:3},{value:"Feature Flags",id:"feature-flags",level:3}],u={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"configuring-superset"},"Configuring Superset"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"To configure your application, you need to create a file ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),". Add this file to your"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")," or create an environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"SUPERSET_CONFIG_PATH")," specifying the full path of the ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,r.yg)("p",null,"For example, if deploying on Superset directly on a Linux-based system where your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," is under ",(0,r.yg)("inlineCode",{parentName:"p"},"/app")," directory, you can run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export SUPERSET_CONFIG_PATH=/app/superset_config.py\n")),(0,r.yg)("p",null,"If you are using your own custom Dockerfile with official Superset image as base image, then you can add your overrides as shown below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"COPY --chown=superset superset_config.py /app/\nENV SUPERSET_CONFIG_PATH /app/superset_config.py\n")),(0,r.yg)("p",null,"Docker compose deployments handle application configuration differently. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/docker#readme"},"https://github.com/apache/superset/tree/master/docker#readme")," for details."),(0,r.yg)("p",null,"The following is an example of just a few of the parameters you can set in your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Superset specific config\nROW_LIMIT = 5000\n\n# Flask App Builder configuration\n# Your App secret key will be used for securely signing the session cookie\n# and encrypting sensitive information on the database\n# Make sure you are changing this key for your deployment with a strong key.\n# Alternatively you can set it with `SUPERSET_SECRET_KEY` environment variable.\n# You MUST set this for production environments or the server will refuse\n# to start and you will see an error in the logs accordingly.\nSECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n\n# The SQLAlchemy connection string to your database backend\n# This connection defines the path to the database that stores your\n# superset metadata (slices, connections, tables, dashboards, ...).\n# Note that the connection information to connect to the datasources\n# you want to explore are managed directly in the web UI\n# The check_same_thread=false property ensures the sqlite client does not attempt\n# to enforce single-threaded access, which may be problematic in some edge cases\nSQLALCHEMY_DATABASE_URI = 'sqlite:////path/to/superset.db?check_same_thread=false'\n\n# Flask-WTF flag for CSRF\nWTF_CSRF_ENABLED = True\n# Add endpoints that need to be exempt from CSRF protection\nWTF_CSRF_EXEMPT_LIST = []\n# A CSRF token that expires in 1 year\nWTF_CSRF_TIME_LIMIT = 60 * 60 * 24 * 365\n\n# Set this API key to enable Mapbox visualizations\nMAPBOX_API_KEY = ''\n")),(0,r.yg)("p",null,"All the parameters and default values defined in\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset/config.py"},"https://github.com/apache/superset/blob/master/superset/config.py"),"\ncan be altered in your local ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),". Administrators will want to read through the file\nto understand what can be configured locally as well as the default values in place."),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," acts as a Flask configuration module, it can be used to alter the\nsettings Flask itself, as well as Flask extensions like ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-wtf"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-caching"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-migrate"),",\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-appbuilder"),". Flask App Builder, the web framework used by Superset, offers many\nconfiguration settings. Please consult the\n",(0,r.yg)("a",{parentName:"p",href:"https://flask-appbuilder.readthedocs.org/en/latest/config.html"},"Flask App Builder Documentation"),"\nfor more information on how to configure it."),(0,r.yg)("p",null,"Make sure to change:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SQLALCHEMY_DATABASE_URI"),": by default it is stored at ~/.superset/superset.db"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SECRET_KEY"),": to a long random string")),(0,r.yg)("p",null,"If you need to exempt endpoints from CSRF (e.g. if you are running a custom auth postback endpoint),\nyou can add the endpoints to ",(0,r.yg)("inlineCode",{parentName:"p"},"WTF_CSRF_EXEMPT_LIST"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WTF_CSRF_EXEMPT_LIST = [\u2018\u2019]\n")),(0,r.yg)("h3",{id:"specifying-a-secret_key"},"Specifying a SECRET_KEY"),(0,r.yg)("h4",{id:"adding-an-initial-secret_key"},"Adding an initial SECRET_KEY"),(0,r.yg)("p",null,"Superset requires a user-specified SECRET_KEY to start up. This requirement was ",(0,r.yg)("a",{parentName:"p",href:"https://preset.io/blog/superset-security-update-default-secret_key-vulnerability/"},"added in version 2.1.0 to force secure configurations"),". Add a strong SECRET_KEY to your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," file like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n")),(0,r.yg)("p",null,"You can generate a strong secure key with ",(0,r.yg)("inlineCode",{parentName:"p"},"openssl rand -base64 42"),"."),(0,r.yg)("h4",{id:"rotating-to-a-newer-secret_key"},"Rotating to a newer SECRET_KEY"),(0,r.yg)("p",null,"If you wish to change your existing SECRET_KEY, add the existing SECRET_KEY to your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," file as\n",(0,r.yg)("inlineCode",{parentName:"p"},"PREVIOUS_SECRET_KEY = "),"and provide your new key as ",(0,r.yg)("inlineCode",{parentName:"p"},"SECRET_KEY ="),". You can find your current SECRET_KEY with these\ncommands - if running Superset with Docker, execute from within the Superset application container:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'superset shell\nfrom flask import current_app; print(current_app.config["SECRET_KEY"])\n')),(0,r.yg)("p",null,"Save your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," with these values and then run ",(0,r.yg)("inlineCode",{parentName:"p"},"superset re-encrypt-secrets"),"."),(0,r.yg)("h3",{id:"using-a-production-metastore"},"Using a production metastore"),(0,r.yg)("p",null,"By default, Superset is configured to use SQLite, which is a simple and fast way to get started\n(without requiring any installation). However, for production environments,\nusing SQLite is highly discouraged due to security, scalability, and data integrity reasons.\nIt's important to use only the supported database engines and consider using a different\ndatabase engine on a separate host or container."),(0,r.yg)("p",null,"Superset supports the following database engines/versions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Database Engine"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},"10.X, 11.X, 12.X, 13.X, 14.X, 15.X")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.mysql.com/"},"MySQL")),(0,r.yg)("td",{parentName:"tr",align:null},"5.7, 8.X")))),(0,r.yg)("p",null,"Use the following database drivers and connection strings:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Database"),(0,r.yg)("th",{parentName:"tr",align:null},"PyPI package"),(0,r.yg)("th",{parentName:"tr",align:null},"Connection String"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgresql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.mysql.com/"},"MySQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install mysqlclient")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mysql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))))),(0,r.yg)("p",null,"To configure Superset metastore set ",(0,r.yg)("inlineCode",{parentName:"p"},"SQLALCHEMY_DATABASE_URI")," config key on ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config"),"\nto the appropriate connection string."),(0,r.yg)("h3",{id:"running-on-a-wsgi-http-server"},"Running on a WSGI HTTP Server"),(0,r.yg)("p",null,"While you can run Superset on NGINX or Apache, we recommend using Gunicorn in async mode. This\nenables impressive concurrency even and is fairly easy to install and configure. Please refer to the\ndocumentation of your preferred technology to set up this Flask WSGI application in a way that works\nwell in your environment. Here\u2019s an async setup known to work well in production:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'      -w 10 \\\n      -k gevent \\\n      --worker-connections 1000 \\\n      --timeout 120 \\\n      -b  0.0.0.0:6666 \\\n      --limit-request-line 0 \\\n      --limit-request-field_size 0 \\\n      --statsd-host localhost:8125 \\\n      "superset.app:create_app()"\n')),(0,r.yg)("p",null,"Refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.gunicorn.org/en/stable/design.html"},"Gunicorn documentation")," for more\ninformation. ",(0,r.yg)("em",{parentName:"p"},"Note that the development web server (",(0,r.yg)("inlineCode",{parentName:"em"},"superset run")," or ",(0,r.yg)("inlineCode",{parentName:"em"},"flask run"),") is not intended\nfor production use.")),(0,r.yg)("p",null,"If you're not using Gunicorn, you may want to disable the use of ",(0,r.yg)("inlineCode",{parentName:"p"},"flask-compress")," by setting\n",(0,r.yg)("inlineCode",{parentName:"p"},"COMPRESS_REGISTER = False")," in your ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,r.yg)("p",null,"Currently, Google BigQuery python sdk is not compatible with ",(0,r.yg)("inlineCode",{parentName:"p"},"gevent"),", due to some dynamic monkeypatching on python core library by ",(0,r.yg)("inlineCode",{parentName:"p"},"gevent"),".\nSo, when you use ",(0,r.yg)("inlineCode",{parentName:"p"},"BigQuery")," datasource on Superset, you have to use ",(0,r.yg)("inlineCode",{parentName:"p"},"gunicorn")," worker type except ",(0,r.yg)("inlineCode",{parentName:"p"},"gevent"),"."),(0,r.yg)("h3",{id:"https-configuration"},"HTTPS Configuration"),(0,r.yg)("p",null,"You can configure HTTPS upstream via a load balancer or a reverse proxy (such as nginx) and do SSL/TLS Offloading before traffic reaches the Superset application. In this setup, local traffic from a Celery worker taking a snapshot of a chart for Alerts & Reports can access Superset at a ",(0,r.yg)("inlineCode",{parentName:"p"},"http://")," URL, from behind the ingress point.\nYou can also configure ",(0,r.yg)("a",{parentName:"p",href:"https://docs.gunicorn.org/en/stable/settings.html#ssl"},"SSL in Gunicorn")," (the Python webserver) if you are using an official Superset Docker image."),(0,r.yg)("h3",{id:"configuration-behind-a-load-balancer"},"Configuration Behind a Load Balancer"),(0,r.yg)("p",null,"If you are running superset behind a load balancer or reverse proxy (e.g. NGINX or ELB on AWS), you\nmay need to utilize a healthcheck endpoint so that your load balancer knows if your superset\ninstance is running. This is provided at ",(0,r.yg)("inlineCode",{parentName:"p"},"/health")," which will return a 200 response containing \u201cOK\u201d\nif the webserver is running."),(0,r.yg)("p",null,"If the load balancer is inserting ",(0,r.yg)("inlineCode",{parentName:"p"},"X-Forwarded-For/X-Forwarded-Proto")," headers, you should set\n",(0,r.yg)("inlineCode",{parentName:"p"},"ENABLE_PROXY_FIX = True")," in the superset config file (",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),") to extract and use the\nheaders."),(0,r.yg)("p",null,"In case the reverse proxy is used for providing SSL encryption, an explicit definition of the\n",(0,r.yg)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," may be required. For the Apache webserver this can be set as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'RequestHeader set X-Forwarded-Proto "https"\n')),(0,r.yg)("h3",{id:"custom-oauth2-configuration"},"Custom OAuth2 Configuration"),(0,r.yg)("p",null,"Superset is built on Flask-AppBuilder (FAB), which supports many providers out of the box\n(GitHub, Twitter, LinkedIn, Google, Azure, etc). Beyond those, Superset can be configured to connect\nwith other OAuth2 Authorization Server implementations that support \u201ccode\u201d authorization."),(0,r.yg)("p",null,"Make sure the pip package ",(0,r.yg)("a",{parentName:"p",href:"https://authlib.org/"},(0,r.yg)("inlineCode",{parentName:"a"},"Authlib"))," is installed on the webserver."),(0,r.yg)("p",null,"First, configure authorization in Superset ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from flask_appbuilder.security.manager import AUTH_OAUTH\n\n# Set the authentication type to OAuth\nAUTH_TYPE = AUTH_OAUTH\n\nOAUTH_PROVIDERS = [\n    {   'name':'egaSSO',\n        'token_key':'access_token', # Name of the token in the response of access_token_url\n        'icon':'fa-address-card',   # Icon for the provider\n        'remote_app': {\n            'client_id':'myClientId',  # Client Id (Identify Superset application)\n            'client_secret':'MySecret', # Secret for this Client Id (Identify Superset application)\n            'client_kwargs':{\n                'scope': 'read'               # Scope for the Authorization\n            },\n            'access_token_method':'POST',    # HTTP Method to call access_token_url\n            'access_token_params':{        # Additional parameters for calls to access_token_url\n                'client_id':'myClientId'\n            },\n            'jwks_uri':'https://myAuthorizationServe/adfs/discovery/keys', # may be required to generate token\n            'access_token_headers':{    # Additional headers for calls to access_token_url\n                'Authorization': 'Basic Base64EncodedClientIdAndSecret'\n            },\n            'api_base_url':'https://myAuthorizationServer/oauth2AuthorizationServer/',\n            'access_token_url':'https://myAuthorizationServer/oauth2AuthorizationServer/token',\n            'authorize_url':'https://myAuthorizationServer/oauth2AuthorizationServer/authorize'\n        }\n    }\n]\n\n# Will allow user self registration, allowing to create Flask users from Authorized User\nAUTH_USER_REGISTRATION = True\n\n# The default user self registration role\nAUTH_USER_REGISTRATION_ROLE = \"Public\"\n")),(0,r.yg)("p",null,"Then, create a ",(0,r.yg)("inlineCode",{parentName:"p"},"CustomSsoSecurityManager")," that extends ",(0,r.yg)("inlineCode",{parentName:"p"},"SupersetSecurityManager")," and overrides\n",(0,r.yg)("inlineCode",{parentName:"p"},"oauth_user_info"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import logging\nfrom superset.security import SupersetSecurityManager\n\nclass CustomSsoSecurityManager(SupersetSecurityManager):\n\n    def oauth_user_info(self, provider, response=None):\n        logging.debug(\"Oauth2 provider: {0}.\".format(provider))\n        if provider == 'egaSSO':\n            # As example, this line request a GET to base_url + '/' + userDetails with Bearer  Authentication,\n    # and expects that authorization server checks the token, and response with user details\n            me = self.appbuilder.sm.oauth_remotes[provider].get('userDetails').data\n            logging.debug(\"user_data: {0}\".format(me))\n            return { 'name' : me['name'], 'email' : me['email'], 'id' : me['user_name'], 'username' : me['user_name'], 'first_name':'', 'last_name':''}\n    ...\n")),(0,r.yg)("p",null,"This file must be located at the same directory than ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," with the name\n",(0,r.yg)("inlineCode",{parentName:"p"},"custom_sso_security_manager.py"),". Finally, add the following 2 lines to ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"from custom_sso_security_manager import CustomSsoSecurityManager\nCUSTOM_SECURITY_MANAGER = CustomSsoSecurityManager\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Notes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The redirect URL will be ",(0,r.yg)("inlineCode",{parentName:"p"},"https://<superset-webserver>/oauth-authorized/<provider-name>"),"\nWhen configuring an OAuth2 authorization provider if needed. For instance, the redirect URL will\nbe ",(0,r.yg)("inlineCode",{parentName:"p"},"https://<superset-webserver>/oauth-authorized/egaSSO")," for the above configuration.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If an OAuth2 authorization server supports OpenID Connect 1.0, you could configure its configuration\ndocument URL only without providing ",(0,r.yg)("inlineCode",{parentName:"p"},"api_base_url"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token_url"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"authorize_url")," and other\nrequired options like user info endpoint, jwks uri etc. For instance:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"OAUTH_PROVIDERS = [\n  {   'name':'egaSSO',\n      'token_key':'access_token', # Name of the token in the response of access_token_url\n      'icon':'fa-address-card',   # Icon for the provider\n      'remote_app': {\n          'client_id':'myClientId',  # Client Id (Identify Superset application)\n          'client_secret':'MySecret', # Secret for this Client Id (Identify Superset application)\n          'server_metadata_url': 'https://myAuthorizationServer/.well-known/openid-configuration'\n      }\n  }\n]\n")))),(0,r.yg)("h3",{id:"ldap-authentication"},"LDAP Authentication"),(0,r.yg)("p",null,"FAB supports authenticating user credentials against an LDAP server.\nTo use LDAP you must install the ",(0,r.yg)("a",{parentName:"p",href:"https://www.python-ldap.org/en/latest/installing.html"},"python-ldap")," package.\nSee ",(0,r.yg)("a",{parentName:"p",href:"https://flask-appbuilder.readthedocs.io/en/latest/security.html#authentication-ldap"},"FAB's LDAP documentation"),"\nfor details."),(0,r.yg)("h3",{id:"mapping-ldap-or-oauth-groups-to-superset-roles"},"Mapping LDAP or OAUTH groups to Superset roles"),(0,r.yg)("p",null,"AUTH_ROLES_MAPPING in Flask-AppBuilder is a dictionary that maps from LDAP/OAUTH group names to FAB roles.\nIt is used to assign roles to users who authenticate using LDAP or OAuth."),(0,r.yg)("h4",{id:"mapping-oauth-groups-to-superset-roles"},"Mapping OAUTH groups to Superset roles"),(0,r.yg)("p",null,'The following AUTH_ROLES_MAPPING dictionary would map the OAUTH group "superset_users" to the Superset roles "Gamma" as well as "Alpha", and the OAUTH group "superset_admins" to the Superset role "Admin".'),(0,r.yg)("p",null,'AUTH_ROLES_MAPPING = {\n"superset_users": ','["Gamma","Alpha"]',',\n"superset_admins": ','["Admin"]',",\n}"),(0,r.yg)("h4",{id:"mapping-ldap-groups-to-superset-roles"},"Mapping LDAP groups to Superset roles"),(0,r.yg)("p",null,'The following AUTH_ROLES_MAPPING dictionary would map the LDAP DN "cn=superset_users,ou=groups,dc=example,dc=com" to the Superset roles "Gamma" as well as "Alpha", and the LDAP DN "cn=superset_admins,ou=groups,dc=example,dc=com" to the Superset role "Admin".'),(0,r.yg)("p",null,'AUTH_ROLES_MAPPING = {\n"cn=superset_users,ou=groups,dc=example,dc=com": ','["Gamma","Alpha"]',',\n"cn=superset_admins,ou=groups,dc=example,dc=com": ','["Admin"]',",\n}"),(0,r.yg)("p",null,"Note: This requires AUTH_LDAP_SEARCH to be set. For more details, Please refer (FAB Security documentation)","[https://flask-appbuilder.readthedocs.io/en/latest/security.html]","."),(0,r.yg)("h4",{id:"syncing-roles-at-login"},"Syncing roles at login"),(0,r.yg)("p",null,"You can also use the AUTH_ROLES_SYNC_AT_LOGIN configuration variable to control how often Flask-AppBuilder syncs the user's roles with the LDAP/OAUTH groups. If AUTH_ROLES_SYNC_AT_LOGIN is set to True, Flask-AppBuilder will sync the user's roles each time they log in. If AUTH_ROLES_SYNC_AT_LOGIN is set to False, Flask-AppBuilder will only sync the user's roles when they first register."),(0,r.yg)("h3",{id:"flask-app-configuration-hook"},"Flask app Configuration Hook"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FLASK_APP_MUTATOR")," is a configuration function that can be provided in your environment, receives\nthe app object and can alter it in any way. For example, add ",(0,r.yg)("inlineCode",{parentName:"p"},"FLASK_APP_MUTATOR")," into your\n",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py")," to setup session cookie expiration time to 24 hours:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from flask import session\nfrom flask import Flask\n\n\ndef make_session_permanent():\n    '''\n    Enable maxAge for the cookie 'session'\n    '''\n    session.permanent = True\n\n# Set up max age of session to 24 hours\nPERMANENT_SESSION_LIFETIME = timedelta(hours=24)\ndef FLASK_APP_MUTATOR(app: Flask) -> None:\n    app.before_request_funcs.setdefault(None, []).append(make_session_permanent)\n")),(0,r.yg)("h3",{id:"feature-flags"},"Feature Flags"),(0,r.yg)("p",null,"To support a diverse set of users, Superset has some features that are not enabled by default. For\nexample, some users have stronger security restrictions, while some others may not. So Superset\nallow users to enable or disable some features by config. For feature owners, you can add optional\nfunctionalities in Superset, but will be only affected by a subset of users."),(0,r.yg)("p",null,"You can enable or disable features with flag from ",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"FEATURE_FLAGS = {\n    'PRESTO_EXPAND_DATA': False,\n}\n")),(0,r.yg)("p",null,"A current list of feature flags can be found in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/RESOURCES/FEATURE_FLAGS.md"},"RESOURCES/FEATURE_FLAGS.md"),"."))}c.isMDXComponent=!0}}]);