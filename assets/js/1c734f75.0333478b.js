"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4281],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Adding New Drivers in Docker",hide_title:!0,sidebar_position:2,version:1},s=void 0,c={unversionedId:"databases/docker-add-drivers",id:"databases/docker-add-drivers",title:"Adding New Drivers in Docker",description:"Adding New Database Drivers in Docker",source:"@site/docs/databases/docker-add-drivers.mdx",sourceDirName:"databases",slug:"/databases/docker-add-drivers",permalink:"/docs/databases/docker-add-drivers",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/docker-add-drivers.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Adding New Drivers in Docker",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Installing Database Drivers",permalink:"/docs/databases/installing-database-drivers"},next:{title:"Using Database Connection UI",permalink:"/docs/databases/db-connection-ui"}},d=[{value:"Adding New Database Drivers in Docker",id:"adding-new-database-drivers-in-docker",children:[{value:"1. Determine the driver you need",id:"1-determine-the-driver-you-need",children:[],level:3},{value:"2. Install MySQL Driver",id:"2-install-mysql-driver",children:[],level:3},{value:"3. Connect to MySQL",id:"3-connect-to-mysql",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adding-new-database-drivers-in-docker"},"Adding New Database Drivers in Docker"),(0,a.kt)("p",null,"Superset requires a Python database driver to be installed for each additional type of database you\nwant to connect to. When setting up Superset locally via ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),", the drivers and packages\ncontained in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/requirements.txt"},"requirements.txt")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/requirements-dev.txt"},"requirements-dev.txt"),"\nwill be installed automatically."),(0,a.kt)("p",null,"In this section, we'll walk through how to install the MySQL connector library. The connector\nlibrary installation process is the same for all additional libraries and we'll end this section\nwith the recommended connector library for each database."),(0,a.kt)("h3",{id:"1-determine-the-driver-you-need"},"1. Determine the driver you need"),(0,a.kt)("p",null,"To figure out how to install the ",(0,a.kt)("a",{parentName:"p",href:"/docs/databases/installing-database-drivers"},"database driver")," of your choice."),(0,a.kt)("p",null,"In the example, we'll walk through the process of installing a MySQL driver in Superset."),(0,a.kt)("h3",{id:"2-install-mysql-driver"},"2. Install MySQL Driver"),(0,a.kt)("p",null,"As we are currently running inside of a Docker container via ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose"),", we cannot simply run\n",(0,a.kt)("inlineCode",{parentName:"p"},"pip install mysqlclient")," on our local shell and expect the drivers to be installed within the\nDocker containers for superset."),(0,a.kt)("p",null,"In order to address this, the Superset ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," setup comes with a mechanism for you to\ninstall packages locally, which will be ignored by Git for the purposes of local development. Please\nfollow these steps:"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements-local.txt")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# From the repo root...\ntouch ./docker/requirements-local.txt\n")),(0,a.kt)("p",null,"Add the driver selected in step above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'echo "mysqlclient" >> ./docker/requirements-local.txt\n')),(0,a.kt)("p",null,"Rebuild your local image with the new driver baked in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose build --force-rm\n")),(0,a.kt)("p",null,"After the rebuild of the Docker images is complete (which make take a few minutes) you can relaunch using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,a.kt)("p",null,"The other option is to start Superset via Docker Compose is using the recipe in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml"),", which will use pre-built frontend assets and skip the building of front-end assets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose-non-dev.yml pull\ndocker-compose -f docker-compose-non-dev.yml up\n")),(0,a.kt)("h3",{id:"3-connect-to-mysql"},"3. Connect to MySQL"),(0,a.kt)("p",null,"Now that you've got a MySQL driver installed locally, you should be able to test it out."),(0,a.kt)("p",null,"We can now create a Datasource in Superset that can be used to connect to a MySQL instance. Assuming\nyour MySQL instance is running locally and can be accessed via localhost, use the following\nconnection string in \u201cSQL Alchemy URI\u201d, by going to Sources > Databases > + icon (to add a new\ndatasource) in Superset."),(0,a.kt)("p",null,"For Docker running in Linux:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql://mysqluser:mysqluserpassword@localhost/example?charset=utf8\n")),(0,a.kt)("p",null,"For Docker running in OSX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql://mysqluser:mysqluserpassword@docker.for.mac.host.internal/example?charset=utf8\n")),(0,a.kt)("p",null,"Then click \u201cTest Connection\u201d, which should give you an \u201cOK\u201d message. If not, please look at your\nterminal for error messages, and reach out for help."),(0,a.kt)("p",null,"You can repeat this process for every database you want superset to be able to connect to."))}p.isMDXComponent=!0}}]);