"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2720],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,g=d["".concat(p,".").concat(c)]||d[c]||y[c]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(58168),r=(t(96540),t(15680)),i=t(86025);const l={title:"PyPI",hide_title:!0,sidebar_position:2,version:1},o="Installing Superset from PyPI",p={unversionedId:"installation/pypi",id:"installation/pypi",title:"PyPI",description:"This page describes how to install Superset using the apache-superset package published on PyPI.",source:"@site/docs/installation/pypi.mdx",sourceDirName:"installation",slug:"/installation/pypi",permalink:"/docs/installation/pypi",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/pypi.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PyPI",hide_title:!0,sidebar_position:2,version:1},sidebar:"CustomSidebar",previous:{title:"Kubernetes",permalink:"/docs/installation/kubernetes"},next:{title:"Docker Compose",permalink:"/docs/installation/docker-compose"}},s={},u=[{value:"OS Dependencies",id:"os-dependencies",level:2},{value:"Python Virtual Environment",id:"python-virtual-environment",level:2},{value:"Installing and Initializing Superset",id:"installing-and-initializing-superset",level:3}],d={toc:u},y="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"installing-superset-from-pypi"},"Installing Superset from PyPI"),(0,r.yg)("img",{src:(0,i.A)("/img/pypi.png"),width:"150"}),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("p",null,"This page describes how to install Superset using the ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-superset")," package ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/apache-superset/"},"published on PyPI"),"."),(0,r.yg)("h2",{id:"os-dependencies"},"OS Dependencies"),(0,r.yg)("p",null,"Superset stores database connection information in its metadata database. For that purpose, we use\nthe cryptography Python library to encrypt connection passwords. Unfortunately, this library has OS\nlevel dependencies."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Debian and Ubuntu")),(0,r.yg)("p",null,"The following command will ensure that the required dependencies are installed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python-dev python-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n")),(0,r.yg)("p",null,"In Ubuntu 20.04 the following command will ensure that the required dependencies are installed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Fedora and RHEL-derivative Linux distributions")),(0,r.yg)("p",null,"Install the following packages using the ",(0,r.yg)("inlineCode",{parentName:"p"},"yum")," package manager:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo yum install gcc gcc-c++ libffi-devel python-devel python-pip python-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,r.yg)("p",null,"In more recent versions of CentOS and Fedora, you may need to install a slightly different set of packages using ",(0,r.yg)("inlineCode",{parentName:"p"},"dnf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo dnf install gcc gcc-c++ libffi-devel python3-devel python3-pip python3-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,r.yg)("p",null,"Also, on CentOS, you may need to upgrade pip for the install to work:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip3 install --upgrade pip\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Mac OS X")),(0,r.yg)("p",null,"If you're not on the latest version of OS X, we recommend upgrading because we've found that many\nissues people have run into are linked to older versions of Mac OS X. After updating, install the\nlatest version of XCode command line tools:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"xcode-select --install\n")),(0,r.yg)("p",null,"We don't recommend using the system installed Python. Instead, first install the\n",(0,r.yg)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," manager and then run the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"brew install readline pkg-config libffi openssl mysql postgresql@14\n")),(0,r.yg)("p",null,"You should install a recent version of Python. Refer to the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/pyproject.toml"},"pyproject.toml")," file for a list of Python\nversions officially supported by Superset. We'd recommend using a Python version manager\nlike ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),"\n(and also ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),")."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To identify the Python version used by the official docker image, see the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/Dockerfile"},"Dockerfile"),". Additional docker images published for newer versions of Python can be found in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/scripts/build_docker.py"},"this file"),".")),(0,r.yg)("p",null,"Let's also make sure we have the latest version of ",(0,r.yg)("inlineCode",{parentName:"p"},"pip")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"setuptools"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip install --upgrade setuptools pip\n")),(0,r.yg)("p",null,"Lastly, you may need to set LDFLAGS and CFLAGS for certain Python packages to properly build. You can export these variables with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'export LDFLAGS="-L$(brew --prefix openssl)/lib"\nexport CFLAGS="-I$(brew --prefix openssl)/include"\n')),(0,r.yg)("p",null,"These will now be available when pip installing requirements."),(0,r.yg)("h2",{id:"python-virtual-environment"},"Python Virtual Environment"),(0,r.yg)("p",null,"We highly recommend installing Superset inside of a virtual environment. Python ships with\n",(0,r.yg)("inlineCode",{parentName:"p"},"virtualenv")," out of the box. If you're using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),", you can install ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),". Or you can install it with ",(0,r.yg)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip install virtualenv\n")),(0,r.yg)("p",null,"You can create and activate a virtual environment using:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# virtualenv is shipped in Python 3.6+ as venv instead of pyvenv.\n# See https://docs.python.org/3.6/library/venv.html\npython3 -m venv venv\n. venv/bin/activate\n")),(0,r.yg)("p",null,"Or with pyenv-virtualenv:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Here we name the virtual env 'superset'\npyenv virtualenv superset\npyenv activate superset\n")),(0,r.yg)("p",null,"Once you activated your virtual environment, all of the Python packages you install or uninstall\nwill be confined to this environment. You can exit the environment by running ",(0,r.yg)("inlineCode",{parentName:"p"},"deactivate")," on the\ncommand line."),(0,r.yg)("h3",{id:"installing-and-initializing-superset"},"Installing and Initializing Superset"),(0,r.yg)("p",null,"First, start by installing ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-superset"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip install apache-superset\n")),(0,r.yg)("p",null,"Then, you need to initialize the database:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"superset db upgrade\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Note that some configuration is mandatory for production instances of Superset. In particular, Superset will not start without a user-specified value of SECRET_KEY. Please see ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/configuring-superset"},"Configuring Superset"),".")),(0,r.yg)("p",null,"Finish installing by running through the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)\nexport FLASK_APP=superset\nsuperset fab create-admin\n\n# Load some data to play with\nsuperset load_examples\n\n# Create default roles and permissions\nsuperset init\n\n# To start a development web server on port 8088, use -p to bind to another port\nsuperset run -p 8088 --with-threads --reload --debugger\n")),(0,r.yg)("p",null,"If everything worked, you should be able to navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"hostname:port")," in your browser (e.g.\nlocally by default at ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:8088"),") and login using the username and password you created."))}c.isMDXComponent=!0}}]);