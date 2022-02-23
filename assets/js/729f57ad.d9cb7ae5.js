"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5542],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20257:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={title:"Installing From Scratch",hide_title:!0,sidebar_position:2,version:1},s=void 0,p={unversionedId:"installation/installing-superset-from-scratch",id:"installation/installing-superset-from-scratch",title:"Installing From Scratch",description:"Installing Superset from Scratch",source:"@site/docs/installation/installing-superset-from-scratch.mdx",sourceDirName:"installation",slug:"/installation/installing-superset-from-scratch",permalink:"/docs/installation/installing-superset-from-scratch",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/installing-superset-from-scratch.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installing From Scratch",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Installing Locally Using Docker Compose",permalink:"/docs/installation/installing-superset-using-docker-compose"},next:{title:"Configuring Superset",permalink:"/docs/installation/configuring-superset"}},u=[{value:"Installing Superset from Scratch",id:"installing-superset-from-scratch",children:[{value:"OS Dependencies",id:"os-dependencies",children:[],level:3},{value:"Python Virtual Environment",id:"python-virtual-environment",children:[],level:3},{value:"Installing and Initializing Superset",id:"installing-and-initializing-superset",children:[],level:3},{value:"Installing Superset with Helm in Kubernetes",id:"installing-superset-with-helm-in-kubernetes",children:[],level:3}],level:2}],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installing-superset-from-scratch"},"Installing Superset from Scratch"),(0,l.kt)("h3",{id:"os-dependencies"},"OS Dependencies"),(0,l.kt)("p",null,"Superset stores database connection information in its metadata database. For that purpose, we use\nthe cryptography Python library to encrypt connection passwords. Unfortunately, this library has OS\nlevel dependencies."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debian and Ubuntu")),(0,l.kt)("p",null,"The following command will ensure that the required dependencies are installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python-dev python-pip libsasl2-dev libldap2-dev\n")),(0,l.kt)("p",null,"In Ubuntu 20.04 the following command will ensure that the required dependencies are installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Fedora and RHEL-derivative Linux distributions")),(0,l.kt)("p",null,"Install the following packages using the ",(0,l.kt)("inlineCode",{parentName:"p"},"yum")," package manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo yum install gcc gcc-c++ libffi-devel python-devel python-pip python-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,l.kt)("p",null,"In more recent versions of CentOS and Fedora, you may need to install a slightly different set of packages using ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo dnf install gcc gcc-c++ libffi-devel python3-devel python3-pip python3-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,l.kt)("p",null,"Also, on CentOS, you may need to upgrade pip for the install to work:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip3 install --upgrade pip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mac OS X")),(0,l.kt)("p",null,"If you're not on the latest version of OS X, we recommend upgrading because we've found that many\nissues people have run into are linked to older versions of Mac OS X. After updating, install the\nlatest version of XCode command line tools:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xcode-select --install\n")),(0,l.kt)("p",null,"We don't recommend using the system installed Python. Instead, first install the\n",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," manager and then run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install readline pkg-config libffi openssl mysql postgres\n")),(0,l.kt)("p",null,"You should install a recent version of Python (the official docker image uses 3.8.12). We'd recommend using a Python version manager like ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," (and also ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),")."),(0,l.kt)("p",null,"Let's also make sure we have the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setuptools"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install --upgrade setuptools pip\n")),(0,l.kt)("p",null,"Lastly, you may need to set LDFLAGS and CFLAGS for certain Python packages to properly build. You can export these variables with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export LDFLAGS="-L$(brew --prefix openssl)/lib"\nexport CFLAGS="-I$(brew --prefix openssl)/include"\n')),(0,l.kt)("p",null,"These will now be available when pip installing requirements."),(0,l.kt)("h3",{id:"python-virtual-environment"},"Python Virtual Environment"),(0,l.kt)("p",null,"We highly recommend installing Superset inside of a virtual environment. Python ships with\n",(0,l.kt)("inlineCode",{parentName:"p"},"virtualenv")," out of the box. If you're using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),", you can install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),". Or you can install it with ",(0,l.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install virtualenv\n")),(0,l.kt)("p",null,"You can create and activate a virtual environment using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virtualenv is shipped in Python 3.6+ as venv instead of pyvenv.\n# See https://docs.python.org/3.6/library/venv.html\npython3 -m venv venv\n. venv/bin/activate\n")),(0,l.kt)("p",null,"Or with pyenv-virtualenv:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Here we name the virtual env 'superset'\npyenv virtualenv superset\npyenv activate superset\n")),(0,l.kt)("p",null,"Once you activated your virtual environment, all of the Python packages you install or uninstall\nwill be confined to this environment. You can exit the environment by running ",(0,l.kt)("inlineCode",{parentName:"p"},"deactivate")," on the\ncommand line."),(0,l.kt)("h3",{id:"installing-and-initializing-superset"},"Installing and Initializing Superset"),(0,l.kt)("p",null,"First, start by installing ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-superset"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install apache-superset\n")),(0,l.kt)("p",null,"Then, you need to initialize the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"superset db upgrade\n")),(0,l.kt)("p",null,"Finish installing by running through the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)\n$ export FLASK_APP=superset\nsuperset fab create-admin\n\n# Load some data to play with\nsuperset load_examples\n\n# Create default roles and permissions\nsuperset init\n\n# To start a development web server on port 8088, use -p to bind to another port\nsuperset run -p 8088 --with-threads --reload --debugger\n")),(0,l.kt)("p",null,"If everything worked, you should be able to navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname:port")," in your browser (e.g.\nlocally by default at ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8088"),") and login using the username and password you created."),(0,l.kt)("h3",{id:"installing-superset-with-helm-in-kubernetes"},"Installing Superset with Helm in Kubernetes"),(0,l.kt)("p",null,"You can install Superset into Kubernetes with ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". The chart is located in\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"helm/")," directory."),(0,l.kt)("p",null,"To install Superset in your Kubernetes cluster with Helm 3, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm dep up ./helm/superset\nhelm upgrade --install superset ./helm/superset\n")),(0,l.kt)("p",null,"Note that the above command will install Superset into ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace of your Kubernetes\ncluster."))}c.isMDXComponent=!0}}]);