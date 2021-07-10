(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ae8A:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n("k1TG"),a=n("8o2o"),r=(n("q1tI"),n("7ljp")),c=n("hhGP"),l=(n("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Connecting to Databases/docker-add-drivers.mdx"}});var s={_frontmatter:l},i=c.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"adding-new-database-drivers-in-docker"},"Adding New Database Drivers in Docker"),Object(r.b)("p",null,"Superset requires a Python database driver to be installed for each additional type of database you\nwant to connect to. When setting up Superset locally via ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),", the drivers and packages\ncontained in\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/apache/superset/blob/master/requirements.txt"}),"requirements.txt")," and\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/apache/superset/blob/master/requirements-dev.txt"}),"requirements-dev.txt"),"\nwill be installed automatically."),Object(r.b)("p",null,"In this section, we'll walk through how to install the MySQL connector library. The connector\nlibrary installation process is the same for all additional libraries and we'll end this section\nwith the recommended connector library for each database."),Object(r.b)("h3",{id:"1-determine-the-driver-you-need"},"1. Determine the driver you need"),Object(r.b)("p",null,"To figure out how to install the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/databases/installing-database-drivers"}),"database driver")," of your choice."),Object(r.b)("p",null,"In the example, we'll walk through the process of installing a MySQL driver in Superset."),Object(r.b)("h3",{id:"2-install-mysql-driver"},"2. Install MySQL Driver"),Object(r.b)("p",null,"As we are currently running inside of a Docker container via ",Object(r.b)("inlineCode",{parentName:"p"},"docker compose"),", we cannot simply run\n",Object(r.b)("inlineCode",{parentName:"p"},"pip install mysqlclient")," on our local shell and expect the drivers to be installed within the\nDocker containers for superset."),Object(r.b)("p",null,"In order to address this, the Superset ",Object(r.b)("inlineCode",{parentName:"p"},"docker compose")," setup comes with a mechanism for you to\ninstall packages locally, which will be ignored by Git for the purposes of local development. Please\nfollow these steps:"),Object(r.b)("p",null,"Create ",Object(r.b)("inlineCode",{parentName:"p"},"requirements-local.txt")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"# From the repo root...\ntouch ./docker/requirements-local.txt\n")),Object(r.b)("p",null,"Add the driver selected in step above:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'echo "mysqlclient" >> ./docker/requirements-local.txt\n')),Object(r.b)("p",null,"Rebuild your local image with the new driver baked in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker-compose build --force-rm\n")),Object(r.b)("p",null,"After the rebuild of the Docker images is complete (which make take a few minutes) you can relaunch using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker-compose up\n")),Object(r.b)("p",null,"The other option is to start Superset via Docker Compose is using the recipe in ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml"),", which will use pre-built frontend assets and skip the building of front-end assets:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker-compose -f docker-compose-non-dev.yml up\n")),Object(r.b)("h3",{id:"3-connect-to-mysql"},"3. Connect to MySQL"),Object(r.b)("p",null,"Now that you've got a MySQL driver installed locally, you should be able to test it out."),Object(r.b)("p",null,"We can now create a Datasource in Superset that can be used to connect to a MySQL instance. Assuming\nyour MySQL instance is running locally and can be accessed via localhost, use the following\nconnection string in “SQL Alchemy URI”, by going to Sources > Databases > + icon (to add a new\ndatasource) in Superset."),Object(r.b)("p",null,"For Docker running in Linux:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"mysql://mysqluser:mysqluserpassword@localhost/example?charset=utf8\n")),Object(r.b)("p",null,"For Docker running in OSX:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"mysql://mysqluser:mysqluserpassword@docker.for.mac.host.internal/example?charset=utf8\n")),Object(r.b)("p",null,"Then click “Test Connection”, which should give you an “OK” message. If not, please look at your\nterminal for error messages, and reach out for help."),Object(r.b)("p",null,"You can repeat this process for every database you want superset to be able to connect to."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Connecting to Databases/docker-add-drivers.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-connecting-to-databases-docker-add-drivers-mdx-9cc39b74ea18398c8bd0.js.map