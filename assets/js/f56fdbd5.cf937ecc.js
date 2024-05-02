"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4983],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(58168),a=(t(96540),t(15680)),r=t(86025);const i={title:"Docker Compose",hide_title:!0,sidebar_position:3,version:1},s="Using Docker Compose",l={unversionedId:"installation/docker-compose",id:"installation/docker-compose",title:"Docker Compose",description:"Since docker-compose is primarily designed to run a set of containers on a single host",source:"@site/docs/installation/docker-compose.mdx",sourceDirName:"installation",slug:"/installation/docker-compose",permalink:"/docs/installation/docker-compose",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/docker-compose.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Docker Compose",hide_title:!0,sidebar_position:3,version:1},sidebar:"CustomSidebar",previous:{title:"PyPI",permalink:"/docs/installation/pypi"},next:{title:"Upgrading Superset",permalink:"/docs/installation/upgrading-superset"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"1. Clone Superset&#39;s GitHub repository",id:"1-clone-supersets-github-repository",level:2},{value:"2. Launch Superset Through Docker Compose",id:"2-launch-superset-through-docker-compose",level:2},{value:"Option #1 - for an interactive development environment",id:"option-1---for-an-interactive-development-environment",level:3},{value:"Option #2 - build a set of immutable images from the local branch",id:"option-2---build-a-set-of-immutable-images-from-the-local-branch",level:3},{value:"Option #3 - boot up an official release",id:"option-3---boot-up-an-official-release",level:3},{value:"docker-compose tips &amp; configuration",id:"docker-compose-tips--configuration",level:2},{value:"Configuring Further",id:"configuring-further",level:3},{value:"3. Log in to Superset",id:"3-log-in-to-superset",level:2},{value:"4. Connecting Superset to your local database instance",id:"4-connecting-superset-to-your-local-database-instance",level:2}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"using-docker-compose"},"Using Docker Compose"),(0,a.yg)("img",{src:(0,r.A)("/img/docker-compose.webp"),width:"150"}),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Since ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose")," is primarily designed to run a set of containers on ",(0,a.yg)("strong",{parentName:"p"},"a single host"),"\nand can't support requirements for ",(0,a.yg)("strong",{parentName:"p"},"high availability"),", we do not support nor recommend\nusing our ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose")," constructs to support production-type use-cases. For single host\nenvironments, we recommend using ",(0,a.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," along\nour ",(0,a.yg)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/running-on-kubernetes"},"installing on k8s"),"\ndocumentation.")),(0,a.yg)("p",null,"As mentioned in our ",(0,a.yg)("a",{parentName:"p",href:"/docs/quickstart"},"quickstart guide"),", The fastest way to try\nSuperset locally is using Docker Compose on a Linux or Mac OSX\ncomputer. ",(0,a.yg)("strong",{parentName:"p"},"Superset does not have official support for Windows"),". It's also the easiest\nway to launch a fully functioning ",(0,a.yg)("strong",{parentName:"p"},"development environment")," quickly."),(0,a.yg)("p",null,"Note that there are 3 major ways we support to run docker-compose:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose.yml:")," for interactive development, where we mount your local folder with the\nfrontend/backend files that you can edit and experience the changes you\nmake in the app in real time"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose-non-dev.yml")," where we just build a more immutable image based on the\nlocal branch and get all the required images running. Changes in the local branch\nat the time you fire this up will be reflected, but changes to the code\nwhile ",(0,a.yg)("inlineCode",{parentName:"li"},"up")," won't be reflected in the app"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"docker-compose-image-tag.yml")," where we fetch an image from docker-hub say for the\n",(0,a.yg)("inlineCode",{parentName:"li"},"3.0.0")," release for instance, and fire it up so you can try it. Here what's in\nthe local branch has no effects on what's running, we just fetch and run\npre-built images from docker-hub")),(0,a.yg)("p",null,"More on these two approaches after setting up the requirements for either."),(0,a.yg)("h2",{id:"requirements"},"Requirements"),(0,a.yg)("p",null,"Note that this documentation assumes that you have ",(0,a.yg)("a",{parentName:"p",href:"https://www.docker.com"},"Docker"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),", and\n",(0,a.yg)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," installed."),(0,a.yg)("h2",{id:"1-clone-supersets-github-repository"},"1. Clone Superset's GitHub repository"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset"},"Clone Superset's repo")," in your terminal with the\nfollowing command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1  https://github.com/apache/superset.git\n")),(0,a.yg)("p",null,"Once that command completes successfully, you should see a new ",(0,a.yg)("inlineCode",{parentName:"p"},"superset")," folder in your\ncurrent directory."),(0,a.yg)("h2",{id:"2-launch-superset-through-docker-compose"},"2. Launch Superset Through Docker Compose"),(0,a.yg)("p",null,"First let's assume you're familiar with docker-compose mechanics. Here we'll refer generally\nto ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose up")," even though in some cases you may want to force a check for newer remote\nimages using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose pull"),", force a build with ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose build")," or force a build\non latest base images using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose build --pull"),". In most cases though, the simple\n",(0,a.yg)("inlineCode",{parentName:"p"},"up")," command should do just fine. Refer to docker compose docs for more information on the topic."),(0,a.yg)("h3",{id:"option-1---for-an-interactive-development-environment"},"Option #1 - for an interactive development environment"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When running in development mode the ",(0,a.yg)("inlineCode",{parentName:"p"},"superset-node"),"\ncontainer needs to finish building assets in order for the UI to render properly. If you would just\nlike to try out Superset without making any code changes follow the steps documented for\n",(0,a.yg)("inlineCode",{parentName:"p"},"production")," or a specific version below.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"By default, we mount the local superset-frontend folder here and run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," as well\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," which triggers webpack to compile/bundle the frontend code. Depending\non your local setup, especially if you have less than 16GB of memory,  it may be very slow to\nperform those operations. In this case, we recommend you set the env var\n",(0,a.yg)("inlineCode",{parentName:"p"},"BUILD_SUPERSET_FRONTEND_IN_DOCKER")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", and to run this locally instead in a terminal.\nSimply trigger ",(0,a.yg)("inlineCode",{parentName:"p"},"npm i && npm run dev"),", this should be MUCH faster.")),(0,a.yg)("h3",{id:"option-2---build-a-set-of-immutable-images-from-the-local-branch"},"Option #2 - build a set of immutable images from the local branch"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-non-dev.yml up\n")),(0,a.yg)("h3",{id:"option-3---boot-up-an-official-release"},"Option #3 - boot up an official release"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export TAG=3.1.1\ndocker compose -f docker-compose-image-tag.yml up\n")),(0,a.yg)("p",null,"Here various release tags, github SHA, and latest ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," can be referenced by the TAG env var.\nRefer to the docker-related documentation to learn more about existing tags you can point to\nfrom Docker Hub."),(0,a.yg)("h2",{id:"docker-compose-tips--configuration"},"docker-compose tips & configuration"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"All of the content belonging to a Superset instance - charts, dashboards, users, etc. - is stored in\nits metadata database. In production, this database should be backed up.  The default installation\nwith docker compose will store that data in a PostgreSQL database contained in a Docker\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume"),", which is not backed up."),(0,a.yg)("p",{parentName:"admonition"},"Again ",(0,a.yg)("strong",{parentName:"p"},"DO NOT USE THIS FOR PRODUCTION"))),(0,a.yg)("p",null,"You should see a wall of logging output from the containers being launched on your machine. Once\nthis output slows, you should have a running instance of Superset on your local machine!  To avoid\nthe wall of text on future runs, add the ",(0,a.yg)("inlineCode",{parentName:"p"},"-d")," option to the end of the ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose up")," command."),(0,a.yg)("h3",{id:"configuring-further"},"Configuring Further"),(0,a.yg)("p",null,"The following is for users who want to configure how Superset runs in Docker Compose; otherwise, you\ncan skip to the next section."),(0,a.yg)("p",null,"You can install additional python packages and apply config overrides by following the steps\nmentioned in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/docker#configuration"},"docker/README.md")),(0,a.yg)("p",null,"Note that ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env")," sets the default environment variables for all the docker images\nused by ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose"),", and that ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env-local")," can be used to override those defaults.\nAlso note that ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env-local")," is referenced in our ",(0,a.yg)("inlineCode",{parentName:"p"},".gitignore"),",\npreventing developers from risking committing potentially sensitive configuration to the repository."),(0,a.yg)("p",null,"One important variable is ",(0,a.yg)("inlineCode",{parentName:"p"},"SUPERSET_LOAD_EXAMPLES")," which determines whether the ",(0,a.yg)("inlineCode",{parentName:"p"},"superset_init"),"\ncontainer will populate example data and visualizations into the metadata database. These examples\nare helpful for learning and testing out Superset but unnecessary for experienced users and\nproduction deployments. The loading process can sometimes take a few minutes and a good amount of\nCPU, so you may want to disable it on a resource-constrained device."),(0,a.yg)("p",null,"For more advanced or dynamic configurations that are typically managed in a ",(0,a.yg)("inlineCode",{parentName:"p"},"superset_config.py")," file\nlocated in your ",(0,a.yg)("inlineCode",{parentName:"p"},"PYTHONPATH"),", note that it can be done by providing a\n",(0,a.yg)("inlineCode",{parentName:"p"},"docker/pythonpath_dev/superset_config_docker.py")," that will be ignored by git\n(preventing you to commit/push your local configuration back to the repository).\nThe mechanics of this are in ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/pythonpath_dev/superset_config.py")," where you can see\nthat the logic runs a ",(0,a.yg)("inlineCode",{parentName:"p"},"from superset_config_docker import *")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Users often want to connect to other databases from Superset. Currently, the easiest way to\ndo this is to modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml")," file and add your database as a service that\nthe other services depend on (via ",(0,a.yg)("inlineCode",{parentName:"p"},"x-superset-depends-on"),"). Others have attempted to set\n",(0,a.yg)("inlineCode",{parentName:"p"},"network_mode: host")," on the Superset services, but these generally break the installation,\nbecause the configuration requires use of the Docker Compose DNS resolver for the service names.\nIf you have a good solution for this, let us know!")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Superset uses ",(0,a.yg)("a",{parentName:"p",href:"https://about.scarf.sh/scarf-gateway"},"Scarf Gateway")," to collect telemetry\ndata. Knowing the installation counts for different Superset versions informs the project's\ndecisions about patching and long-term support. Scarf purges personally identifiable information\n(PII) and provides only aggregated statistics."),(0,a.yg)("p",{parentName:"admonition"},"To opt-out of this data collection for packages downloaded through the Scarf Gateway by your docker\ncompose based installation, edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"x-superset-image:")," line in your ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml")," files, replacing ",(0,a.yg)("inlineCode",{parentName:"p"},"apachesuperset.docker.scarf.sh/apache/superset")," with\n",(0,a.yg)("inlineCode",{parentName:"p"},"apache/superset")," to pull the image directly from Docker Hub."),(0,a.yg)("p",{parentName:"admonition"},"To disable the Scarf telemetry pixel, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"SCARF_ANALYTICS")," environment variable to ",(0,a.yg)("inlineCode",{parentName:"p"},"False")," in\nyour terminal and/or in your ",(0,a.yg)("inlineCode",{parentName:"p"},"docker/.env")," file.")),(0,a.yg)("h2",{id:"3-log-in-to-superset"},"3. Log in to Superset"),(0,a.yg)("p",null,"Your local Superset instance also includes a Postgres server to store your data and is already\npre-loaded with some example datasets that ship with Superset. You can access Superset now via your\nweb browser by visiting ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:8088"),". Note that many browsers now default to ",(0,a.yg)("inlineCode",{parentName:"p"},"https")," - if\nyours is one of them, please make sure it uses ",(0,a.yg)("inlineCode",{parentName:"p"},"http"),"."),(0,a.yg)("p",null,"Log in with the default username and password:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"username: admin\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"password: admin\n")),(0,a.yg)("h2",{id:"4-connecting-superset-to-your-local-database-instance"},"4. Connecting Superset to your local database instance"),(0,a.yg)("p",null,"When running Superset using ",(0,a.yg)("inlineCode",{parentName:"p"},"docker")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose")," it runs in its own docker container, as if\nthe Superset was running in a separate machine entirely. Therefore attempts to connect to your local\ndatabase with the hostname ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," won't work as ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," refers to the docker container\nSuperset is running in, and not your actual host machine. Fortunately, docker provides an easy way\nto access network resources in the host machine from inside a container, and we will leverage this\ncapability to connect to our local database instance."),(0,a.yg)("p",null,"Here the instructions are for connecting to postgresql (which is running on your host machine) from\nSuperset (which is running in its docker container). Other databases may have slightly different\nconfigurations but gist would be same and boils down to 2 steps -"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"(Mac users may skip this step)")," Configuring the local postgresql/database instance to accept\npublic incoming connections. By default, postgresql only allows incoming connections from\n",(0,a.yg)("inlineCode",{parentName:"li"},"localhost")," and under Docker, unless you use ",(0,a.yg)("inlineCode",{parentName:"li"},"--network=host"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"localhost")," will refer to different\nendpoints on the host machine and in a docker container respectively. Allowing postgresql to accept\nconnections from the Docker involves making one-line changes to the files ",(0,a.yg)("inlineCode",{parentName:"li"},"postgresql.conf")," and\n",(0,a.yg)("inlineCode",{parentName:"li"},"pg_hba.conf"),"; you can find helpful links tailored to your OS / PG version on the web easily for\nthis task. For Docker it suffices to only whitelist IPs ",(0,a.yg)("inlineCode",{parentName:"li"},"172.0.0.0/8")," instead of ",(0,a.yg)("inlineCode",{parentName:"li"},"*"),", but in any\ncase you are ",(0,a.yg)("em",{parentName:"li"},"warned")," that doing this in a production database ",(0,a.yg)("em",{parentName:"li"},"may")," have disastrous consequences as\nyou are opening your database to the public internet.  2. Instead of ",(0,a.yg)("inlineCode",{parentName:"li"},"localhost"),", try using\n",(0,a.yg)("inlineCode",{parentName:"li"},"host.docker.internal")," (Mac users, Ubuntu) or ",(0,a.yg)("inlineCode",{parentName:"li"},"172.18.0.1")," (Linux users) as the hostname when\nattempting to connect to the database. This is a Docker internal detail -- what is happening is\nthat, in Mac systems, Docker Desktop creates a dns entry for the hostname ",(0,a.yg)("inlineCode",{parentName:"li"},"host.docker.internal"),"\nwhich resolves to the correct address for the host machine, whereas in Linux this is not the case\n(at least by default). If neither of these 2 hostnames work then you may want to find the exact\nhostname you want to use, for that you can do ",(0,a.yg)("inlineCode",{parentName:"li"},"ifconfig")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"ip addr show")," and look at the IP\naddress of ",(0,a.yg)("inlineCode",{parentName:"li"},"docker0")," interface that must have been created by Docker for you. Alternately if you\ndon't even see the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker0")," interface try (if needed with sudo) ",(0,a.yg)("inlineCode",{parentName:"li"},"docker network inspect bridge")," and\nsee if there is an entry for ",(0,a.yg)("inlineCode",{parentName:"li"},'"Gateway"')," and note the IP address.")))}m.isMDXComponent=!0}}]);