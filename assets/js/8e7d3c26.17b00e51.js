"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[477],{89068:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(74848),t=s(28453);const r={sidebar_position:6,version:1},c="Misc.",a={id:"contributing/misc",title:"Misc.",description:"Reporting a Security Vulnerability",source:"@site/docs/contributing/misc.mdx",sourceDirName:"contributing",slug:"/contributing/misc",permalink:"/docs/contributing/misc",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/contributing/misc.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,version:1},sidebar:"CustomSidebar",previous:{title:"Resources",permalink:"/docs/contributing/resources"},next:{title:"Security Configurations",permalink:"/docs/security/"}},o={},l=[{value:"Reporting a Security Vulnerability",id:"reporting-a-security-vulnerability",level:2},{value:"SQL Lab Async",id:"sql-lab-async",level:3},{value:"Async Chart Queries",id:"async-chart-queries",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"misc",children:"Misc."})}),"\n",(0,i.jsx)(n.h2,{id:"reporting-a-security-vulnerability",children:"Reporting a Security Vulnerability"}),"\n",(0,i.jsxs)(n.p,{children:["Please report security vulnerabilities to ",(0,i.jsx)(n.a,{href:"mailto:private@superset.apache.org",children:"private@superset.apache.org"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the event a community member discovers a security flaw in Superset, it is important to follow the ",(0,i.jsx)(n.a,{href:"https://www.apache.org/security/committers.html",children:"Apache Security Guidelines"})," and release a fix as quickly as possible before public disclosure. Reporting security vulnerabilities through the usual GitHub Issues channel is not ideal as it will publicize the flaw before a fix can be applied."]}),"\n",(0,i.jsx)(n.h3,{id:"sql-lab-async",children:"SQL Lab Async"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to configure a local database to operate in ",(0,i.jsx)(n.code,{children:"async"})," mode,\nto work on ",(0,i.jsx)(n.code,{children:"async"})," related features."]}),"\n",(0,i.jsx)(n.p,{children:"To do this, you'll need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add an additional database entry. We recommend you copy the connection\nstring from the database labeled ",(0,i.jsx)(n.code,{children:"main"}),", and then enable ",(0,i.jsx)(n.code,{children:"SQL Lab"})," and the\nfeatures you want to use. Don't forget to check the ",(0,i.jsx)(n.code,{children:"Async"})," box"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure a results backend, here's a local ",(0,i.jsx)(n.code,{children:"FileSystemCache"})," example,\nnot recommended for production,\nbut perfect for testing (stores cache in ",(0,i.jsx)(n.code,{children:"/tmp"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask_caching.backends.filesystemcache import FileSystemCache\nRESULTS_BACKEND = FileSystemCache('/tmp/sqllab')\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start up a celery worker"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"celery --app=superset.tasks.celery_app:app worker -O fair\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["for changes that affect the worker logic, you'll have to\nrestart the ",(0,i.jsx)(n.code,{children:"celery worker"})," process for the changes to be reflected."]}),"\n",(0,i.jsxs)(n.li,{children:["The message queue used is a ",(0,i.jsx)(n.code,{children:"sqlite"})," database using the ",(0,i.jsx)(n.code,{children:"SQLAlchemy"}),"\nexperimental broker. Ok for testing, but not recommended in production"]}),"\n",(0,i.jsx)(n.li,{children:"In some cases, you may want to create a context that is more aligned\nto your production environment, and use the similar broker as well as\nresults backend configuration"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"async-chart-queries",children:"Async Chart Queries"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to configure database queries for charts to operate in ",(0,i.jsx)(n.code,{children:"async"})," mode. This is especially useful for dashboards with many charts that may otherwise be affected by browser connection limits. To enable async queries for dashboards and Explore, the following dependencies are required:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Redis 5.0+ (the feature utilizes ",(0,i.jsx)(n.a,{href:"https://redis.io/topics/streams-intro",children:"Redis Streams"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Cache backends enabled via the ",(0,i.jsx)(n.code,{children:"CACHE_CONFIG"})," and ",(0,i.jsx)(n.code,{children:"DATA_CACHE_CONFIG"})," config settings"]}),"\n",(0,i.jsx)(n.li,{children:"Celery workers configured and running to process async tasks"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);