"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2720],{98564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(74848),t=s(28453),a=s(86025);const l={title:"PyPI",hide_title:!0,sidebar_position:2,version:1},r="Installing Superset from PyPI",o={id:"installation/pypi",title:"PyPI",description:"This page describes how to install Superset using the apache-superset package published on PyPI.",source:"@site/docs/installation/pypi.mdx",sourceDirName:"installation",slug:"/installation/pypi",permalink:"/docs/installation/pypi",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/pypi.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PyPI",hide_title:!0,sidebar_position:2,version:1},sidebar:"CustomSidebar",previous:{title:"Kubernetes",permalink:"/docs/installation/kubernetes"},next:{title:"Docker Compose",permalink:"/docs/installation/docker-compose"}},d={},c=[{value:"OS Dependencies",id:"os-dependencies",level:2},{value:"Python Virtual Environment",id:"python-virtual-environment",level:2},{value:"Installing and Initializing Superset",id:"installing-and-initializing-superset",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installing-superset-from-pypi",children:"Installing Superset from PyPI"}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("/img/pypi.png"),width:"150"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["This page describes how to install Superset using the ",(0,i.jsx)(n.code,{children:"apache-superset"})," package ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/apache-superset/",children:"published on PyPI"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"os-dependencies",children:"OS Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Superset stores database connection information in its metadata database. For that purpose, we use\nthe cryptography Python library to encrypt connection passwords. Unfortunately, this library has OS\nlevel dependencies."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Debian and Ubuntu"})}),"\n",(0,i.jsx)(n.p,{children:"The following command will ensure that the required dependencies are installed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install build-essential libssl-dev libffi-dev python-dev python-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n"})}),"\n",(0,i.jsx)(n.p,{children:"In Ubuntu 20.04 the following command will ensure that the required dependencies are installed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fedora and RHEL-derivative Linux distributions"})}),"\n",(0,i.jsxs)(n.p,{children:["Install the following packages using the ",(0,i.jsx)(n.code,{children:"yum"})," package manager:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo yum install gcc gcc-c++ libffi-devel python-devel python-pip python-wheel openssl-devel cyrus-sasl-devel openldap-devel\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In more recent versions of CentOS and Fedora, you may need to install a slightly different set of packages using ",(0,i.jsx)(n.code,{children:"dnf"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo dnf install gcc gcc-c++ libffi-devel python3-devel python3-pip python3-wheel openssl-devel cyrus-sasl-devel openldap-devel\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also, on CentOS, you may need to upgrade pip for the install to work:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip3 install --upgrade pip\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mac OS X"})}),"\n",(0,i.jsx)(n.p,{children:"If you're not on the latest version of OS X, we recommend upgrading because we've found that many\nissues people have run into are linked to older versions of Mac OS X. After updating, install the\nlatest version of XCode command line tools:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"xcode-select --install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We don't recommend using the system installed Python. Instead, first install the\n",(0,i.jsx)(n.a,{href:"https://brew.sh/",children:"homebrew"})," manager and then run the following commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install readline pkg-config libffi openssl mysql postgresql@14\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You should install a recent version of Python. Refer to the\n",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/pyproject.toml",children:"pyproject.toml"})," file for a list of Python\nversions officially supported by Superset. We'd recommend using a Python version manager\nlike ",(0,i.jsx)(n.a,{href:"https://github.com/pyenv/pyenv",children:"pyenv"}),"\n(and also ",(0,i.jsx)(n.a,{href:"https://github.com/pyenv/pyenv-virtualenv",children:"pyenv-virtualenv"}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To identify the Python version used by the official docker image, see the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/Dockerfile",children:"Dockerfile"}),". Additional docker images published for newer versions of Python can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/scripts/build_docker.py",children:"this file"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Let's also make sure we have the latest version of ",(0,i.jsx)(n.code,{children:"pip"})," and ",(0,i.jsx)(n.code,{children:"setuptools"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade setuptools pip\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lastly, you may need to set LDFLAGS and CFLAGS for certain Python packages to properly build. You can export these variables with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export LDFLAGS="-L$(brew --prefix openssl)/lib"\nexport CFLAGS="-I$(brew --prefix openssl)/include"\n'})}),"\n",(0,i.jsx)(n.p,{children:"These will now be available when pip installing requirements."}),"\n",(0,i.jsx)(n.h2,{id:"python-virtual-environment",children:"Python Virtual Environment"}),"\n",(0,i.jsxs)(n.p,{children:["We highly recommend installing Superset inside of a virtual environment. Python ships with\n",(0,i.jsx)(n.code,{children:"virtualenv"})," out of the box. If you're using ",(0,i.jsx)(n.a,{href:"https://github.com/pyenv/pyenv",children:"pyenv"}),", you can install ",(0,i.jsx)(n.a,{href:"https://github.com/pyenv/pyenv-virtualenv",children:"pyenv-virtualenv"}),". Or you can install it with ",(0,i.jsx)(n.code,{children:"pip"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install virtualenv\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can create and activate a virtual environment using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# virtualenv is shipped in Python 3.6+ as venv instead of pyvenv.\n# See https://docs.python.org/3.6/library/venv.html\npython3 -m venv venv\n. venv/bin/activate\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or with pyenv-virtualenv:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Here we name the virtual env 'superset'\npyenv virtualenv superset\npyenv activate superset\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once you activated your virtual environment, all of the Python packages you install or uninstall\nwill be confined to this environment. You can exit the environment by running ",(0,i.jsx)(n.code,{children:"deactivate"})," on the\ncommand line."]}),"\n",(0,i.jsx)(n.h3,{id:"installing-and-initializing-superset",children:"Installing and Initializing Superset"}),"\n",(0,i.jsxs)(n.p,{children:["First, start by installing ",(0,i.jsx)(n.code,{children:"apache-superset"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install apache-superset\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, you need to initialize the database:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"superset db upgrade\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Note that some configuration is mandatory for production instances of Superset. In particular, Superset will not start without a user-specified value of SECRET_KEY. Please see ",(0,i.jsx)(n.a,{href:"/docs/configuration/configuring-superset",children:"Configuring Superset"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Finish installing by running through the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)\nexport FLASK_APP=superset\nsuperset fab create-admin\n\n# Load some data to play with\nsuperset load_examples\n\n# Create default roles and permissions\nsuperset init\n\n# To start a development web server on port 8088, use -p to bind to another port\nsuperset run -p 8088 --with-threads --reload --debugger\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If everything worked, you should be able to navigate to ",(0,i.jsx)(n.code,{children:"hostname:port"})," in your browser (e.g.\nlocally by default at ",(0,i.jsx)(n.code,{children:"localhost:8088"}),") and login using the username and password you created."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);