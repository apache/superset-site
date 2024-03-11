"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5164],{95788:(e,n,o)=>{o.d(n,{Iu:()=>c,yg:()=>g});var t=o(11504);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return o?t.createElement(g,i(i({ref:n},c),{},{components:o})):t.createElement(g,i({ref:n},c))}));function g(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},30612:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=o(45072),a=(o(11504),o(95788));const r={title:"Installing Locally Using Docker Compose",hide_title:!0,sidebar_position:1,version:1},i=void 0,s={unversionedId:"installation/installing-superset-using-docker-compose",id:"installation/installing-superset-using-docker-compose",title:"Installing Locally Using Docker Compose",description:"Using Docker Compose",source:"@site/docs/installation/installing-superset-using-docker-compose.mdx",sourceDirName:"installation",slug:"/installation/installing-superset-using-docker-compose",permalink:"/docs/installation/installing-superset-using-docker-compose",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/installing-superset-using-docker-compose.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installing Locally Using Docker Compose",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Installing from PyPI",permalink:"/docs/installation/installing-superset-from-pypi"}},l={},p=[{value:"Using Docker Compose",id:"using-docker-compose",level:2},{value:"1. Install a Docker Engine and Docker Compose",id:"1-install-a-docker-engine-and-docker-compose",level:3},{value:"2. Clone Superset&#39;s GitHub repository",id:"2-clone-supersets-github-repository",level:3},{value:"3. Launch Superset Through Docker Compose",id:"3-launch-superset-through-docker-compose",level:3},{value:"Option #1 - for an interactive development environment",id:"option-1---for-an-interactive-development-environment",level:3},{value:"Option #2 - build an immutable image from the local branch",id:"option-2---build-an-immutable-image-from-the-local-branch",level:3},{value:"Option #3 - pull and build a release image from docker-hub",id:"option-3---pull-and-build-a-release-image-from-docker-hub",level:3},{value:"General tips &amp; configuration",id:"general-tips--configuration",level:2},{value:"Configuring Further",id:"configuring-further",level:4},{value:"4. Log in to Superset",id:"4-log-in-to-superset",level:3},{value:"5. Connecting Superset to your local database instance",id:"5-connecting-superset-to-your-local-database-instance",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(d,(0,t.c)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"using-docker-compose"},"Using Docker Compose"),(0,a.yg)("p",null,"The fastest way to try Superset locally is using Docker and Docker Compose on a Linux or Mac OSX\ncomputer. Superset does not have official support for Windows, so we have provided a VM workaround\nbelow."),(0,a.yg)("p",null,"It's ",(0,a.yg)("strong",{parentName:"p"},"not")," typical, nor recommended to use docker-compose to productionize an\napplication like Superset. docker-compose should be used for local development\nor testing the app."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"DO NOT USE THIS FOR PRODUCTION!")),(0,a.yg)("p",null,"Note that there are 3 major ways we support to run docker-compose:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose.yml:")," for interactive development, where we mount your local folder with the\nfrontend/backend files that you can edit and experience the changes you\nmake in the app in real time"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose-non-dev.yml")," where we just build a more immutable image based on the\nlocal branch and get all the required images running. Changes in the local branch\nat the time you fire this up will be reflected, but changes to the code\nwhile ",(0,a.yg)("inlineCode",{parentName:"li"},"up")," won't be reflected in the app"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose-image-tag.yml")," where we fetch an image from docker-hub say for the\n",(0,a.yg)("inlineCode",{parentName:"li"},"3.0.0")," release for instance, and fire it up so you can try it. Here what's in\nthe local branch has no effects on what's running, we just fetch and run\npre-built images from docker-hub")),(0,a.yg)("p",null,"More on these two approaches after setting up the requirements for either."),(0,a.yg)("h3",{id:"1-install-a-docker-engine-and-docker-compose"},"1. Install a Docker Engine and Docker Compose"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mac OSX")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"Install Docker for Mac"),", which includes the Docker\nengine and a recent version of ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose")," out of the box."),(0,a.yg)("p",null,'Once you have Docker for Mac installed, open up the preferences pane for Docker, go to the\n"Resources" section and increase the allocated memory to 6GB. With only the 2GB of RAM allocated by\ndefault, Superset will fail to start.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Linux")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker on Linux")," by following Docker\u2019s\ninstructions for whichever flavor of Linux suits you. Because ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose")," is not installed as\npart of the base Docker installation on Linux, once you have a working engine, follow the\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker compose installation instructions")," for Linux."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Windows")),(0,a.yg)("p",null,"Superset is not officially supported on Windows unfortunately. One option for Windows users to try\nout Superset locally is to install an Ubuntu Desktop VM via\n",(0,a.yg)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," and proceed with the Docker on Linux instructions inside\nof that VM. We recommend assigning at least 8GB of RAM to the virtual machine as well as\nprovisioning a hard drive of at least 40GB, so that there will be enough space for both the OS and\nall of the required dependencies. Docker Desktop ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/wsl/"},"recently added support for Windows Subsystem for\nLinux (WSL) 2"),", which may be another option."),(0,a.yg)("h3",{id:"2-clone-supersets-github-repository"},"2. Clone Superset's GitHub repository"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset"},"Clone Superset's repo")," in your terminal with the\nfollowing command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/superset.git\n")),(0,a.yg)("p",null,"Once that command completes successfully, you should see a new ",(0,a.yg)("inlineCode",{parentName:"p"},"superset")," folder in your\ncurrent directory."),(0,a.yg)("h3",{id:"3-launch-superset-through-docker-compose"},"3. Launch Superset Through Docker Compose"),(0,a.yg)("p",null,"First let's assume you're familiar with docker-compose mechanics. Here we'll refer generally\nto ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose up")," even though in some cases you may want to force a check for newer remote\nimages using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose pull"),", force a build with ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose build")," or force a build\non latest base images using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose build --pull"),". In most cases though, the simple\n",(0,a.yg)("inlineCode",{parentName:"p"},"up")," command should do just fine. Refer to docker compose docs for more information on the topic."),(0,a.yg)("h3",{id:"option-1---for-an-interactive-development-environment"},"Option #1 - for an interactive development environment"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When running in development mode the ",(0,a.yg)("inlineCode",{parentName:"p"},"superset-node"),"\ncontainer needs to finish building assets in order for the UI to render properly. If you would just\nlike to try out Superset without making any code changes follow the steps documented for\n",(0,a.yg)("inlineCode",{parentName:"p"},"production")," or a specific version below.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"By default, we mount the local superset-frontend folder here and run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," as well\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," which triggers webpack to compile/bundle the frontend code. Depending\non your local setup, especially if you have less than 16GB of memory,  it may be very slow to\nperform those operations. In this case, we recommend you set the env var\n",(0,a.yg)("inlineCode",{parentName:"p"},"BUILD_SUPERSET_FRONTEND_IN_DOCKER")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", and to run this locally instead in a terminal.\nSimply trigger ",(0,a.yg)("inlineCode",{parentName:"p"},"npm i && npm run dev"),", this should be MUCH faster.")),(0,a.yg)("h3",{id:"option-2---build-an-immutable-image-from-the-local-branch"},"Option #2 - build an immutable image from the local branch"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-non-dev.yml up\n")),(0,a.yg)("h3",{id:"option-3---pull-and-build-a-release-image-from-docker-hub"},"Option #3 - pull and build a release image from docker-hub"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export TAG=3.1.1\ndocker compose -f docker-compose-image-tag.yml up\n")),(0,a.yg)("p",null,"Here various release tags, github SHA, and latest ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," can be referenced by the TAG env var.\nRefer to the docker-related documentation to learn more about existing tags you can point to\nfrom Docker Hub."),(0,a.yg)("h2",{id:"general-tips--configuration"},"General tips & configuration"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"All of the content belonging to a Superset instance - charts, dashboards, users, etc. - is stored in\nits metadata database. In production, this database should be backed up.  The default installation\nwith docker compose will store that data in a PostgreSQL database contained in a Docker\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume"),", which is not backed up."),(0,a.yg)("p",{parentName:"admonition"},"Again ",(0,a.yg)("strong",{parentName:"p"},"DO NOT USE THIS FOR PRODUCTION"))),(0,a.yg)("p",null,"You should see a wall of logging output from the containers being launched on your machine. Once\nthis output slows, you should have a running instance of Superset on your local machine!  To avoid\nthe wall of text on future runs, add the ",(0,a.yg)("inlineCode",{parentName:"p"},"-d")," option to the end of the ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose up")," command."),(0,a.yg)("h4",{id:"configuring-further"},"Configuring Further"),(0,a.yg)("p",null,"The following is for users who want to configure how Superset runs in Docker Compose; otherwise, you\ncan skip to the next section."),(0,a.yg)("p",null,"You can install additional python packages and apply config overrides by following the steps\nmentioned in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/docker#configuration"},"docker/README.md")),(0,a.yg)("p",null,"You can configure the Docker Compose environment variables for dev and non-dev mode with\n",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env"),". This environment file sets the environment\nfor most containers in the Docker Compose setup, and some variables affect multiple containers and\nothers only single ones."),(0,a.yg)("p",null,"One important variable is ",(0,a.yg)("inlineCode",{parentName:"p"},"SUPERSET_LOAD_EXAMPLES")," which determines whether the ",(0,a.yg)("inlineCode",{parentName:"p"},"superset_init"),"\ncontainer will populate example data and visualizations into the metadata database. These examples\nare helpful for learning and testing out Superset but unnecessary for experienced users and\nproduction deployments. The loading process can sometimes take a few minutes and a good amount of\nCPU, so you may want to disable it on a resource-constrained device."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Users often want to connect to other databases from Superset. Currently, the easiest way to\ndo this is to modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml")," file and add your database as a service that\nthe other services depend on (via ",(0,a.yg)("inlineCode",{parentName:"p"},"x-superset-depends-on"),"). Others have attempted to set\n",(0,a.yg)("inlineCode",{parentName:"p"},"network_mode: host")," on the Superset services, but these generally break the installation,\nbecause the configuration requires use of the Docker Compose DNS resolver for the service names.\nIf you have a good solution for this, let us know!")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Superset uses ",(0,a.yg)("a",{parentName:"p",href:"https://about.scarf.sh/scarf-gateway"},"Scarf Gateway")," to collect telemetry\ndata. Knowing the installation counts for different Superset versions informs the project's\ndecisions about patching and long-term support. Scarf purges personally identifiable information\n(PII) and provides only aggregated statistics."),(0,a.yg)("p",{parentName:"admonition"},"To opt-out of this data collection for packages downloaded through the Scarf Gateway by your docker\ncompose based installation, edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"x-superset-image:")," line in your ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml")," files, replacing ",(0,a.yg)("inlineCode",{parentName:"p"},"apachesuperset.docker.scarf.sh/apache/superset")," with\n",(0,a.yg)("inlineCode",{parentName:"p"},"apache/superset")," to pull the image directly from Docker Hub."),(0,a.yg)("p",{parentName:"admonition"},"To disable the Scarf telemetry pixel, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"SCARF_ANALYTICS")," environment variable to ",(0,a.yg)("inlineCode",{parentName:"p"},"False")," in\nyour terminal and/or in your ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env")," file.")),(0,a.yg)("h3",{id:"4-log-in-to-superset"},"4. Log in to Superset"),(0,a.yg)("p",null,"Your local Superset instance also includes a Postgres server to store your data and is already\npre-loaded with some example datasets that ship with Superset. You can access Superset now via your\nweb browser by visiting ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:8088"),". Note that many browsers now default to ",(0,a.yg)("inlineCode",{parentName:"p"},"https")," - if\nyours is one of them, please make sure it uses ",(0,a.yg)("inlineCode",{parentName:"p"},"http"),"."),(0,a.yg)("p",null,"Log in with the default username and password:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"username: admin\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"password: admin\n")),(0,a.yg)("h3",{id:"5-connecting-superset-to-your-local-database-instance"},"5. Connecting Superset to your local database instance"),(0,a.yg)("p",null,"When running Superset using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose")," it runs in its own docker container, as if\nthe Superset was running in a separate machine entirely. Therefore attempts to connect to your local\ndatabase with the hostname ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," won't work as ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," refers to the docker container\nSuperset is running in, and not your actual host machine. Fortunately, docker provides an easy way\nto access network resources in the host machine from inside a container, and we will leverage this\ncapability to connect to our local database instance."),(0,a.yg)("p",null,"Here the instructions are for connecting to postgresql (which is running on your host machine) from\nSuperset (which is running in its docker container). Other databases may have slightly different\nconfigurations but gist would be same and boils down to 2 steps -"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"(Mac users may skip this step)")," Configuring the local postgresql/database instance to accept\npublic incoming connections. By default, postgresql only allows incoming connections from\n",(0,a.yg)("inlineCode",{parentName:"li"},"localhost")," and under Docker, unless you use ",(0,a.yg)("inlineCode",{parentName:"li"},"--network=host"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"localhost")," will refer to different\nendpoints on the host machine and in a docker container respectively. Allowing postgresql to accept\nconnections from the Docker involves making one-line changes to the files ",(0,a.yg)("inlineCode",{parentName:"li"},"postgresql.conf")," and\n",(0,a.yg)("inlineCode",{parentName:"li"},"pg_hba.conf"),"; you can find helpful links tailored to your OS / PG version on the web easily for\nthis task. For Docker it suffices to only whitelist IPs ",(0,a.yg)("inlineCode",{parentName:"li"},"172.0.0.0/8")," instead of ",(0,a.yg)("inlineCode",{parentName:"li"},"*"),", but in any\ncase you are ",(0,a.yg)("em",{parentName:"li"},"warned")," that doing this in a production database ",(0,a.yg)("em",{parentName:"li"},"may")," have disastrous consequences as\nyou are opening your database to the public internet.  2. Instead of ",(0,a.yg)("inlineCode",{parentName:"li"},"localhost"),", try using\n",(0,a.yg)("inlineCode",{parentName:"li"},"host.docker.internal")," (Mac users, Ubuntu) or ",(0,a.yg)("inlineCode",{parentName:"li"},"172.18.0.1")," (Linux users) as the hostname when\nattempting to connect to the database. This is a Docker internal detail -- what is happening is\nthat, in Mac systems, Docker Desktop creates a dns entry for the hostname ",(0,a.yg)("inlineCode",{parentName:"li"},"host.docker.internal"),"\nwhich resolves to the correct address for the host machine, whereas in Linux this is not the case\n(at least by default). If neither of these 2 hostnames work then you may want to find the exact\nhostname you want to use, for that you can do ",(0,a.yg)("inlineCode",{parentName:"li"},"ifconfig")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"ip addr show")," and look at the IP\naddress of ",(0,a.yg)("inlineCode",{parentName:"li"},"docker0")," interface that must have been created by Docker for you. Alternately if you\ndon't even see the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker0")," interface try (if needed with sudo) ",(0,a.yg)("inlineCode",{parentName:"li"},"docker network inspect bridge")," and\nsee if there is an entry for ",(0,a.yg)("inlineCode",{parentName:"li"},'"Gateway"')," and note the IP address.")))}u.isMDXComponent=!0}}]);