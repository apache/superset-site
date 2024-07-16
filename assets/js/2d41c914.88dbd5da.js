"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[251],{40857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(74848),s=n(28453);n(86025);const i={title:"Architecture",hide_title:!0,sidebar_position:1,version:1},o="Architecture",r={id:"installation/architecture",title:"Architecture",description:"This page is meant to give new administrators an understanding of Superset's components.",source:"@site/docs/installation/architecture.mdx",sourceDirName:"installation",slug:"/installation/architecture",permalink:"/docs/installation/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/installation/architecture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Architecture",hide_title:!0,sidebar_position:1,version:1},sidebar:"CustomSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Kubernetes",permalink:"/docs/installation/kubernetes"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Optional components and associated features",id:"optional-components-and-associated-features",level:3},{value:"The Superset Application",id:"the-superset-application",level:3},{value:"Metadata Database",id:"metadata-database",level:3},{value:"Caching Layer",id:"caching-layer",level:3},{value:"Worker and Beat",id:"worker-and-beat",level:3},{value:"Other components",id:"other-components",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsx)(t.p,{children:"This page is meant to give new administrators an understanding of Superset's components."}),"\n",(0,a.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,a.jsx)(t.p,{children:"A Superset installation is made up of these components:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The Superset application itself"}),"\n",(0,a.jsx)(t.li,{children:"A metadata database"}),"\n",(0,a.jsx)(t.li,{children:"A caching layer (optional, but necessary for some features)"}),"\n",(0,a.jsx)(t.li,{children:"A worker & beat (optional, but necessary for some features)"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"optional-components-and-associated-features",children:"Optional components and associated features"}),"\n",(0,a.jsx)(t.p,{children:"The optional components above are necessary to enable these features:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/configuration/alerts-reports",children:"Alerts and Reports"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/configuration/cache",children:"Caching"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/configuration/async-queries-celery/",children:"Async Queries"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/configuration/cache/#caching-thumbnails",children:"Dashboard Thumbnails"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If you install with Kubernetes or Docker Compose, all of these components will be created."}),"\n",(0,a.jsx)(t.p,{children:"However, installing from PyPI only creates the application itself. Users installing from PyPI will need to configure a caching layer, worker, and beat on their own if they wish to enable the above features. Configuration of those components for a PyPI install is not currently covered in this documentation."}),"\n",(0,a.jsx)(t.p,{children:"Here are further details on each component."}),"\n",(0,a.jsx)(t.h3,{id:"the-superset-application",children:"The Superset Application"}),"\n",(0,a.jsx)(t.p,{children:"This is the core application. Superset operates like this:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A user visits a chart or dashboard"}),"\n",(0,a.jsx)(t.li,{children:"That triggers a SQL query to the data warehouse holding the underlying dataset"}),"\n",(0,a.jsx)(t.li,{children:"The resulting data is served up in a data visualization"}),"\n",(0,a.jsx)(t.li,{children:"The Superset application is comprised of the Python (Flask) backend application (server), API layer, and the React frontend, built via Webpack, and static assets needed for the application to work"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"metadata-database",children:"Metadata Database"}),"\n",(0,a.jsx)(t.p,{children:"This is where chart and dashboard definitions, user information, logs, etc. are stored. Superset is tested to work with PostgreSQL and MySQL databases as the metadata database (not be confused with a data source like your data warehouse, which could be a much greater variety of options like Snowflake, Redshift, etc.)."}),"\n",(0,a.jsx)(t.p,{children:"Some installation methods like our Quickstart and PyPI come configured by default to use a SQLite on-disk database. And in a Docker Compose installation, the data would be stored in a PostgresQL container volume. Neither of these cases are recommended for production instances of Superset."}),"\n",(0,a.jsx)(t.p,{children:"For production, a properly-configured, managed, standalone database is recommended. No matter what database you use, you should plan to back it up regularly."}),"\n",(0,a.jsx)(t.h3,{id:"caching-layer",children:"Caching Layer"}),"\n",(0,a.jsx)(t.p,{children:"The caching layer serves two main functions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Store the results of queries to your data warehouse so that when a chart is loaded twice, it pulls from the cache the second time, speeding up the application and reducing load on your data warehouse."}),"\n",(0,a.jsx)(t.li,{children:"Act as a message broker for the worker, enabling the Alerts & Reports, async queries, and thumbnail caching features."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Most people use Redis for their cache, but Superset supports other options too. See the ",(0,a.jsx)(t.a,{href:"/docs/configuration/cache/",children:"cache docs"})," for more."]}),"\n",(0,a.jsx)(t.h3,{id:"worker-and-beat",children:"Worker and Beat"}),"\n",(0,a.jsx)(t.p,{children:'This is one or more workers who execute tasks like run async queries or take snapshots of reports and send emails, and a "beat" that acts as the scheduler and tells workers when to perform their tasks. Most installations use Celery for these components.'}),"\n",(0,a.jsx)(t.h2,{id:"other-components",children:"Other components"}),"\n",(0,a.jsxs)(t.p,{children:["Other components can be incorporated into Superset. The best place to learn about additional configurations is the ",(0,a.jsx)(t.a,{href:"/docs/configuration/configuring-superset",children:"Configuration page"}),". For instance, you could set up a load balancer or reverse proxy to implement HTTPS in front of your Superset application, or specify a Mapbox URL to enable geospatial charts, etc."]}),"\n",(0,a.jsx)(t.p,{children:"Superset won't even start without certain configuration settings established, so it's essential to review that page."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);