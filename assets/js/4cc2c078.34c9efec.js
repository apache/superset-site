"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4244],{66995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(83117),a=(t(67294),t(3905));const o={title:"Running a Local Flask Backend",hide_title:!0,sidebar_position:5,version:1},i=void 0,s={unversionedId:"contributing/local-backend",id:"contributing/local-backend",title:"Running a Local Flask Backend",description:"Flask server",source:"@site/docs/contributing/local-backend.mdx",sourceDirName:"contributing",slug:"/contributing/local-backend",permalink:"/docs/contributing/local-backend",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/local-backend.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Running a Local Flask Backend",hide_title:!0,sidebar_position:5,version:1},sidebar:"tutorialSidebar",previous:{title:"Style Guide",permalink:"/docs/contributing/style-guide"},next:{title:"Pre-commit Hooks and Linting",permalink:"/docs/contributing/hooks-and-linting"}},l={},p=[{value:"Flask server",id:"flask-server",level:3},{value:"OS Dependencies",id:"os-dependencies",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"Logging to the browser console",id:"logging-to-the-browser-console",level:4},{value:"Frontend Assets",id:"frontend-assets",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"flask-server"},"Flask server"),(0,a.kt)("h4",{id:"os-dependencies"},"OS Dependencies"),(0,a.kt)("p",null,"Make sure your machine meets the ",(0,a.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/installing-superset-from-scratch#os-dependencies"},"OS dependencies")," before following these steps.\nYou also need to install MySQL or ",(0,a.kt)("a",{parentName:"p",href:"https://mariadb.com/downloads"},"MariaDB"),"."),(0,a.kt)("p",null,"Ensure that you are using Python version 3.9 or 3.10, then proceed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a virtual environment and activate it (recommended)\npython3 -m venv venv # setup a python3 virtualenv\nsource venv/bin/activate\n\n# Install external dependencies\npip install -r requirements/testing.txt\n\n# Install Superset in editable (development) mode\npip install -e .\n\n# Initialize the database\n# Note: For generating a SECRET_KEY if you haven't done already, you can use the command:\n# echo \"SECRET_KEY='$(openssl rand -base64 42)'\" | tee -a superset_config.py\nsuperset db upgrade\n\n# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)\nsuperset fab create-admin\n\n# Create default roles and permissions\nsuperset init\n\n# Load some data to play with.\n# Note: you MUST have previously created an admin user with the username `admin` for this command to work.\nsuperset load-examples\n\n# Start the Flask dev web server from inside your virtualenv.\n# Note that your page may not have CSS at this point.\nFLASK_ENV=development superset run -p 8088 --with-threads --reload --debugger\n")),(0,a.kt)("p",null,"Or you can install via our Makefile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a virtual environment and activate it (recommended)\npython3 -m venv venv # setup a python3 virtualenv\nsource venv/bin/activate\n\n# install pip packages + pre-commit\nmake install\n\n# Install superset pip packages and setup env only\nmake superset\n\n# Setup pre-commit only\nmake pre-commit\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: the FLASK_APP env var should not need to be set, as it's currently controlled\nvia ",(0,a.kt)("inlineCode",{parentName:"strong"},".flaskenv"),", however if needed, it should be set to ",(0,a.kt)("inlineCode",{parentName:"strong"},"superset.app:create_app()"))),(0,a.kt)("p",null,"If you have made changes to the FAB-managed templates, which are not built the same way as the newer, React-powered front-end assets, you need to start the app without the ",(0,a.kt)("inlineCode",{parentName:"p"},"--with-threads")," argument like so:\n",(0,a.kt)("inlineCode",{parentName:"p"},"FLASK_ENV=development superset run -p 8088 --reload --debugger")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"If you add a new requirement or update an existing requirement (per the ",(0,a.kt)("inlineCode",{parentName:"p"},"install_requires")," section in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),") you must recompile (freeze) the Python dependencies to ensure that for CI, testing, etc. the build is deterministic. This can be achieved via,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 -m venv venv\n$ source venv/bin/activate\n$ python3 -m pip install -r requirements/integration.txt\n$ pip-compile-multi --no-upgrade\n")),(0,a.kt)("h4",{id:"logging-to-the-browser-console"},"Logging to the browser console"),(0,a.kt)("p",null,"This feature is only available on Python 3. When debugging your application, you can have the server logs sent directly to the browser console using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/betodealmeida/consolelog"},"ConsoleLog")," package. You need to mutate the app, by adding the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"superset_config.py"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from console_log import ConsoleLog\n\ndef FLASK_APP_MUTATOR(app):\n    app.wsgi_app = ConsoleLog(app.wsgi_app, app.logger)\n")),(0,a.kt)("p",null,"Then make sure you run your WSGI server using the right worker type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'FLASK_ENV=development gunicorn "superset.app:create_app()" -k "geventwebsocket.gunicorn.workers.GeventWebSocketWorker" -b 127.0.0.1:8088 --reload\n')),(0,a.kt)("p",null,"You can log anything to the browser console, including objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superset import app\napp.logger.error('An exception occurred!')\napp.logger.info(form_data)\n")),(0,a.kt)("h3",{id:"frontend-assets"},"Frontend Assets"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/CONTRIBUTING.md#frontend"},"Building Frontend Assets Locally")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);