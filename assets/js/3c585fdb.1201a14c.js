"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[599],{76726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Configuring Superset",hide_title:!0,sidebar_position:3,version:1},l=void 0,p={unversionedId:"installation/configuring-superset",id:"installation/configuring-superset",title:"Configuring Superset",description:"Configuring Superset",source:"@site/docs/installation/configuring-superset.mdx",sourceDirName:"installation",slug:"/installation/configuring-superset",permalink:"/docs/installation/configuring-superset",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/configuring-superset.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuring Superset",hide_title:!0,sidebar_position:3,version:1},sidebar:"tutorialSidebar",previous:{title:"Installing From Scratch",permalink:"/docs/installation/installing-superset-from-scratch"},next:{title:"Additional Networking Settings",permalink:"/docs/installation/networking-settings"}},u={},d=[{value:"Configuring Superset",id:"configuring-superset",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Using a production metastore",id:"using-a-production-metastore",level:3},{value:"Running on a WSGI HTTP Server",id:"running-on-a-wsgi-http-server",level:3},{value:"Configuration Behind a Load Balancer",id:"configuration-behind-a-load-balancer",level:3},{value:"Custom OAuth2 Configuration",id:"custom-oauth2-configuration",level:3},{value:"Flask app Configuration Hook",id:"flask-app-configuration-hook",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"SECRET_KEY Rotation",id:"secret_key-rotation",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-superset"},"Configuring Superset"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To configure your application, you need to create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py")," and add it to your\n",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH"),". If your application was installed using docker-compose an alternative configuration is required. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/docker#readme"},"https://github.com/apache/superset/tree/master/docker#readme")," for details."),(0,o.kt)("p",null,"Here are some of the parameters you can set in that file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Superset specific config\nROW_LIMIT = 5000\n\nSUPERSET_WEBSERVER_PORT = 8088\n\n# Flask App Builder configuration\n# Your App secret key will be used for securely signing the session cookie\n# and encrypting sensitive information on the database\n# Make sure you are changing this key for your deployment with a strong key.\n# You can generate a strong key using `openssl rand -base64 42`\n\nSECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n\n# The SQLAlchemy connection string to your database backend\n# This connection defines the path to the database that stores your\n# superset metadata (slices, connections, tables, dashboards, ...).\n# Note that the connection information to connect to the datasources\n# you want to explore are managed directly in the web UI\nSQLALCHEMY_DATABASE_URI = 'sqlite:////path/to/superset.db'\n\n# Flask-WTF flag for CSRF\nWTF_CSRF_ENABLED = True\n# Add endpoints that need to be exempt from CSRF protection\nWTF_CSRF_EXEMPT_LIST = []\n# A CSRF token that expires in 1 year\nWTF_CSRF_TIME_LIMIT = 60 * 60 * 24 * 365\n\n# Set this API key to enable Mapbox visualizations\nMAPBOX_API_KEY = ''\n")),(0,o.kt)("p",null,"All the parameters and default values defined in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset/config.py"},"https://github.com/apache/superset/blob/master/superset/config.py"),"\ncan be altered in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),". Administrators will want to read through the file\nto understand what can be configured locally as well as the default values in place."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py")," acts as a Flask configuration module, it can be used to alter the\nsettings Flask itself, as well as Flask extensions like ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-wtf"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-caching"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-migrate"),",\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-appbuilder"),". Flask App Builder, the web framework used by Superset, offers many\nconfiguration settings. Please consult the\n",(0,o.kt)("a",{parentName:"p",href:"https://flask-appbuilder.readthedocs.org/en/latest/config.html"},"Flask App Builder Documentation"),"\nfor more information on how to configure it."),(0,o.kt)("p",null,"Make sure to change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SQLALCHEMY_DATABASE_URI"),": by default it is stored at ~/.superset/superset.db"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SECRET_KEY"),": to a long random string")),(0,o.kt)("p",null,"If you need to exempt endpoints from CSRF (e.g. if you are running a custom auth postback endpoint),\nyou can add the endpoints to ",(0,o.kt)("inlineCode",{parentName:"p"},"WTF_CSRF_EXEMPT_LIST"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WTF_CSRF_EXEMPT_LIST = [\u2018\u2019]\n")),(0,o.kt)("h3",{id:"using-a-production-metastore"},"Using a production metastore"),(0,o.kt)("p",null,"By default Superset is configured to use SQLite, it's a simple and fast way to get you started\n(no installation needed). But for production environments you should use a different database engine on\na separate host or container."),(0,o.kt)("p",null,"Superset supports the following database engines/versions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Database Engine"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,o.kt)("td",{parentName:"tr",align:null},"10.X, 11.X, 12.X, 13.X, 14.X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.mysql.com/"},"MySQL")),(0,o.kt)("td",{parentName:"tr",align:null},"5.X")))),(0,o.kt)("p",null,"Use the following database drivers and connection strings:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"PyPI package"),(0,o.kt)("th",{parentName:"tr",align:null},"Connection String"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"postgresql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.mysql.com/"},"MySQL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pip install mysqlclient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mysql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,o.kt)("td",{parentName:"tr",align:null},"No additional library needed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sqlite://"))))),(0,o.kt)("p",null,"To configure Superset metastore set ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLALCHEMY_DATABASE_URI")," config key on ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config"),"\nto the appropriate connection string."),(0,o.kt)("h3",{id:"running-on-a-wsgi-http-server"},"Running on a WSGI HTTP Server"),(0,o.kt)("p",null,"While you can run Superset on NGINX or Apache, we recommend using Gunicorn in async mode. This\nenables impressive concurrency even and is fairly easy to install and configure. Please refer to the\ndocumentation of your preferred technology to set up this Flask WSGI application in a way that works\nwell in your environment. Here\u2019s an async setup known to work well in production:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      -w 10 \\\n      -k gevent \\\n      --timeout 120 \\\n      -b  0.0.0.0:6666 \\\n      --limit-request-line 0 \\\n      --limit-request-field_size 0 \\\n      --statsd-host localhost:8125 \\\n      "superset.app:create_app()"\n')),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gunicorn.org/en/stable/design.html"},"Gunicorn documentation")," for more\ninformation. ",(0,o.kt)("em",{parentName:"p"},"Note that the development web server (",(0,o.kt)("inlineCode",{parentName:"em"},"superset run")," or ",(0,o.kt)("inlineCode",{parentName:"em"},"flask run"),") is not intended\nfor production use.")),(0,o.kt)("p",null,"If you're not using Gunicorn, you may want to disable the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-compress")," by setting\n",(0,o.kt)("inlineCode",{parentName:"p"},"COMPRESS_REGISTER = False")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,o.kt)("h3",{id:"configuration-behind-a-load-balancer"},"Configuration Behind a Load Balancer"),(0,o.kt)("p",null,"If you are running superset behind a load balancer or reverse proxy (e.g. NGINX or ELB on AWS), you\nmay need to utilize a healthcheck endpoint so that your load balancer knows if your superset\ninstance is running. This is provided at ",(0,o.kt)("inlineCode",{parentName:"p"},"/health")," which will return a 200 response containing \u201cOK\u201d\nif the webserver is running."),(0,o.kt)("p",null,"If the load balancer is inserting ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For/X-Forwarded-Proto")," headers, you should set\n",(0,o.kt)("inlineCode",{parentName:"p"},"ENABLE_PROXY_FIX = True")," in the superset config file (",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),") to extract and use the\nheaders."),(0,o.kt)("p",null,"In case the reverse proxy is used for providing SSL encryption, an explicit definition of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," may be required. For the Apache webserver this can be set as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'RequestHeader set X-Forwarded-Proto "https"\n')),(0,o.kt)("h3",{id:"custom-oauth2-configuration"},"Custom OAuth2 Configuration"),(0,o.kt)("p",null,"Beyond FAB supported providers (GitHub, Twitter, LinkedIn, Google, Azure, etc), its easy to connect\nSuperset with other OAuth2 Authorization Server implementations that support \u201ccode\u201d authorization."),(0,o.kt)("p",null,"Make sure the pip package ",(0,o.kt)("a",{parentName:"p",href:"https://authlib.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Authlib"))," is installed on the webserver."),(0,o.kt)("p",null,"First, configure authorization in Superset ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"AUTH_TYPE = AUTH_OAUTH\nOAUTH_PROVIDERS = [\n    {   'name':'egaSSO',\n        'token_key':'access_token', # Name of the token in the response of access_token_url\n        'icon':'fa-address-card',   # Icon for the provider\n        'remote_app': {\n            'client_id':'myClientId',  # Client Id (Identify Superset application)\n            'client_secret':'MySecret', # Secret for this Client Id (Identify Superset application)\n            'client_kwargs':{\n                'scope': 'read'               # Scope for the Authorization\n            },\n            'access_token_method':'POST',    # HTTP Method to call access_token_url\n            'access_token_params':{        # Additional parameters for calls to access_token_url\n                'client_id':'myClientId'\n            },\n            'access_token_headers':{    # Additional headers for calls to access_token_url\n                'Authorization': 'Basic Base64EncodedClientIdAndSecret'\n            },\n            'api_base_url':'https://myAuthorizationServer/oauth2AuthorizationServer/',\n            'access_token_url':'https://myAuthorizationServer/oauth2AuthorizationServer/token',\n            'authorize_url':'https://myAuthorizationServer/oauth2AuthorizationServer/authorize'\n        }\n    }\n]\n\n# Will allow user self registration, allowing to create Flask users from Authorized User\nAUTH_USER_REGISTRATION = True\n\n# The default user self registration role\nAUTH_USER_REGISTRATION_ROLE = \"Public\"\n")),(0,o.kt)("p",null,"Then, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSsoSecurityManager")," that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"SupersetSecurityManager")," and overrides\n",(0,o.kt)("inlineCode",{parentName:"p"},"oauth_user_info"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import logging\nfrom superset.security import SupersetSecurityManager\n\nclass CustomSsoSecurityManager(SupersetSecurityManager):\n\n    def oauth_user_info(self, provider, response=None):\n        logging.debug(\"Oauth2 provider: {0}.\".format(provider))\n        if provider == 'egaSSO':\n            # As example, this line request a GET to base_url + '/' + userDetails with Bearer  Authentication,\n    # and expects that authorization server checks the token, and response with user details\n            me = self.appbuilder.sm.oauth_remotes[provider].get('userDetails').data\n            logging.debug(\"user_data: {0}\".format(me))\n            return { 'name' : me['name'], 'email' : me['email'], 'id' : me['user_name'], 'username' : me['user_name'], 'first_name':'', 'last_name':''}\n    ...\n")),(0,o.kt)("p",null,"This file must be located at the same directory than ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py")," with the name\n",(0,o.kt)("inlineCode",{parentName:"p"},"custom_sso_security_manager.py"),". Finally, add the following 2 lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from custom_sso_security_manager import CustomSsoSecurityManager\nCUSTOM_SECURITY_MANAGER = CustomSsoSecurityManager\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The redirect URL will be ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<superset-webserver>/oauth-authorized/<provider-name>"),"\nWhen configuring an OAuth2 authorization provider if needed. For instance, the redirect URL will\nbe ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<superset-webserver>/oauth-authorized/egaSSO")," for the above configuration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If an OAuth2 authorization server supports OpenID Connect 1.0, you could configure its configuration\ndocument URL only without providing ",(0,o.kt)("inlineCode",{parentName:"p"},"api_base_url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token_url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"authorize_url")," and other\nrequired options like user info endpoint, jwks uri etc. For instance:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"OAUTH_PROVIDERS = [\n  {   'name':'egaSSO',\n      'token_key':'access_token', # Name of the token in the response of access_token_url\n      'icon':'fa-address-card',   # Icon for the provider\n      'remote_app': {\n          'client_id':'myClientId',  # Client Id (Identify Superset application)\n          'client_secret':'MySecret', # Secret for this Client Id (Identify Superset application)\n          'server_metadata_url': 'https://myAuthorizationServer/.well-known/openid-configuration'\n      }\n  }\n]\n")))),(0,o.kt)("h3",{id:"flask-app-configuration-hook"},"Flask app Configuration Hook"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FLASK_APP_MUTATOR")," is a configuration function that can be provided in your environment, receives\nthe app object and can alter it in any way. For example, add ",(0,o.kt)("inlineCode",{parentName:"p"},"FLASK_APP_MUTATOR")," into your\n",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py")," to setup session cookie expiration time to 24 hours:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from flask import session\nfrom flask import Flask\n\n\ndef make_session_permanent():\n    '''\n    Enable maxAge for the cookie 'session'\n    '''\n    session.permanent = True\n\n# Set up max age of session to 24 hours\nPERMANENT_SESSION_LIFETIME = timedelta(hours=24)\ndef FLASK_APP_MUTATOR(app: Flask) -> None:\n    app.before_request_funcs.setdefault(None, []).append(make_session_permanent)\n")),(0,o.kt)("h3",{id:"feature-flags"},"Feature Flags"),(0,o.kt)("p",null,"To support a diverse set of users, Superset has some features that are not enabled by default. For\nexample, some users have stronger security restrictions, while some others may not. So Superset\nallow users to enable or disable some features by config. For feature owners, you can add optional\nfunctionalities in Superset, but will be only affected by a subset of users."),(0,o.kt)("p",null,"You can enable or disable features with flag from ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"FEATURE_FLAGS = {\n    'CLIENT_CACHE': False,\n    'ENABLE_EXPLORE_JSON_CSRF_PROTECTION': False,\n    'PRESTO_EXPAND_DATA': False,\n}\n")),(0,o.kt)("p",null,"A current list of feature flags can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/RESOURCES/FEATURE_FLAGS.md"},"RESOURCES/FEATURE_FLAGS.md"),"."),(0,o.kt)("h3",{id:"secret_key-rotation"},"SECRET_KEY Rotation"),(0,o.kt)("p",null,"If you want to rotate the SECRET_KEY(change the existing secret key), follow the below steps."),(0,o.kt)("p",null,"Add the new SECRET_KEY and PREVIOUS_SECRET_KEY to ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"PREVIOUS_SECRET_KEY = 'CURRENT_SECRET_KEY' # The default SECRET_KEY for deployment is '21thisismyscretkey12eyyh'\nSECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'\n")),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"superset re-encrypt-secrets")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);