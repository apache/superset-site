(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{ip22:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t("wx14"),l=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("hhGP"),s=(t("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/installing_scratch.mdx"}});var o={_frontmatter:s},p=r.a;function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installing-superset-from-scratch"},"Installing Superset from Scratch"),Object(i.b)("h3",{id:"os-dependencies"},"OS Dependencies"),Object(i.b)("p",null,"Superset stores database connection information in its metadata database. For that purpose, we use\nthe cryptography Python library to encrypt connection passwords. Unfortunately, this library has OS\nlevel dependencies."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Debian and Ubuntu")),Object(i.b)("p",null,"The following command will ensure that the required dependencies are installed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python-dev python-pip libsasl2-dev libldap2-dev\n")),Object(i.b)("p",null,"In Ubuntu 20.04 the following command will ensure that the required dependencies are installed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Fedora and RHEL-derivative Linux distributions")),Object(i.b)("p",null,"Install the following packages using the ",Object(i.b)("inlineCode",{parentName:"p"},"yum")," package manager:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo yum install gcc gcc-c++ libffi-devel python-devel python-pip python-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mac OS X")),Object(i.b)("p",null,"If you're not on the latest version of OS X, we recommend upgrading because we've found that many\nissues people have run into are linked to older versions of Mac OS X. After updating, install the\nlatest version of XCode command line tools:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"xcode-select --install\n")),Object(i.b)("p",null,"We don't recommend using the system installed Python. Instead, first install the\n",Object(i.b)("a",{href:"https://brew.sh/",parentName:"p"},"homebrew")," manager and then run the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'brew install pkg-config libffi openssl python\n\nenv LDFLAGS="-L$(brew --prefix openssl)/lib" CFLAGS="-I$(brew --prefix openssl)/include" pip install cryptography==2.4.2\n')),Object(i.b)("p",null,"Let's also make sure we have the latest version of ",Object(i.b)("inlineCode",{parentName:"p"},"pip")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setuptools"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install --upgrade setuptools pip\n")),Object(i.b)("h3",{id:"python-virtual-environment"},"Python Virtual Environment"),Object(i.b)("p",null,"We highly recommend installing Superset insode of a virtual environment. Python 3 ships with\n",Object(i.b)("inlineCode",{parentName:"p"},"virtualenv")," out of the box but you can install it using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install virtualenv\n")),Object(i.b)("p",null,"You can create and activate a virtual environment using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# virtualenv is shipped in Python 3.6+ as venv instead of pyvenv.\n# See https://docs.python.org/3.6/library/venv.html\npython3 -m venv venv\n. venv/bin/activate\n")),Object(i.b)("p",null,"Once you activated your virtual environment, all of the Python packages you install or uninstall\nwill be confined to this environment. You can exit the environment by running ",Object(i.b)("inlineCode",{parentName:"p"},"deactivate")," on the\ncommand line."),Object(i.b)("h3",{id:"installing-and-initializing-superset"},"Installing and Initializing Superset"),Object(i.b)("p",null,"First, start by installing ",Object(i.b)("inlineCode",{parentName:"p"},"apache-superset"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install apache-superset\n")),Object(i.b)("p",null,"Then, you need to initialize the database:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"superset db upgrade\n")),Object(i.b)("p",null,"Finish installing by running through the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# Create an admin user (you will be prompted to set a username, first and last name before setting a password)\n$ export FLASK_APP=superset\nsuperset fab create-admin\n\n# Load some data to play with\nsuperset load_examples\n\n# Create default roles and permissions\nsuperset init\n\n# To start a development web server on port 8088, use -p to bind to another port\nsuperset run -p 8088 --with-threads --reload --debugger\n")),Object(i.b)("p",null,"If everything worked, you should be able to navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"hostname:port")," in your browser (e.g.\nlocally by default at ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8088"),") and login using the username and password you created."),Object(i.b)("h3",{id:"installing-superset-with-helm-in-kubernetes"},"Installing Superset with Helm in Kubernetes"),Object(i.b)("p",null,"You can install Superset into Kubernetes with ",Object(i.b)("a",{href:"https://helm.sh/",parentName:"p"},"Helm"),". The chart is located in\n",Object(i.b)("inlineCode",{parentName:"p"},"install/helm"),"."),Object(i.b)("p",null,"To install Superset in Kubernetes, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"helm upgrade --install superset ./install/helm/superset\n")),Object(i.b)("p",null,"Note that the above command will install Superset into ",Object(i.b)("inlineCode",{parentName:"p"},"default")," namespace of your Kubernetes\ncluster."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/installing_scratch.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-installing-scratch-mdx-9698cafa1dbc4ae72c85.js.map