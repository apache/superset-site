"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([["76809"],{277145(e,t,i){i.d(t,{A:()=>n});var r=i(422278),s=i(133126),o=i(474848);let a=(0,r.A)("section")`
  text-align: center;
  border-bottom: 1px solid var(--ifm-border-color);
  overflow: hidden;
  .blur {
    max-width: 635px;
    width: 100%;
    margin-top: -70px;
    margin-bottom: -35px;
    position: relative;
    z-index: -1;
    ${s.mq["1"]} {
      margin-top: -40px;
    }
  }
`,n=({children:e,id:t})=>(0,o.jsxs)(a,{id:t,children:[e,(0,o.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})},107824(e,t,i){i.d(t,{A:()=>p});var r=i(422278),s=i(133126),o=i(474848);let a=(0,r.A)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${s.mq["1"]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${e=>e.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,n=(0,r.A)(a)`
  .title {
    font-size: 96px;
    ${s.mq["1"]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${s.mq["1"]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${s.mq["1"]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,l=(0,r.A)(a)`
  .title {
    font-size: 48px;
    ${s.mq["1"]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${s.mq["1"]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${s.mq["1"]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,p=({level:e,title:t,subtitle:i,dark:r,link:s})=>{let a=s?(0,o.jsx)("a",{href:s,style:{color:"inherit",textDecoration:"none"},children:t}):t;return(0,o.jsxs)("h1"===e?n:l,{dark:!!r,children:[(0,o.jsx)(e,{className:"title",children:a}),(0,o.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),i&&(0,o.jsx)("div",{className:"subtitle",children:i})]})}},522985(e,t,i){i.r(t),i.d(t,{default:()=>x});var r=i(296540),s=i(422278),o=i(399616),a=i(133126),n=i(107824),l=i(277145),p=i(474848);let m=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://superset.apache.org/inTheWild/",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],c=(0,s.A)("section")`
  background-color: var(--ifm-background-color);
  border-bottom: 1px solid var(--ifm-border-color);
  .list {
    max-width: 540px;
    margin: 0 auto;
    padding: 40px 20px 20px 35px;
    list-style: none;
  }
  .item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 0;
    border: 0;
  }
  .icon {
    width: 40px;
    margin-top: 5px;
    ${a.mq["1"]} {
      width: 40px;
      margin-top: 0;
    }
  }
  .title {
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
    ${a.mq["1"]} {
      font-size: 23px;
      line-height: 26px;
    }
  }
  .description {
    font-size: 14px;
    line-height: 20px;
    color: var(--ifm-font-base-color);
    margin-top: -8px;
    margin-bottom: 23px;
    ${a.mq["1"]} {
      font-size: 17px;
      line-height: 22px;
      color: var(--ifm-primary-text);
      margin-bottom: 35px;
      margin-top: 0;
    }
  }
`,d=(0,s.A)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${a.mq["1"]} {
    width: calc(100% - 40px);
  }
`,g=(0,s.A)("a")`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 12px;
  ${a.mq["1"]} {
    font-size: 18px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    ${a.mq["1"]} {
      display: none;
    }
  }
`,u=(0,s.A)("div")`
  font-size: 14px;
  color: var(--ifm-secondary-text);
`,x=()=>{let[e,t]=(0,r.useState)(!1);return(0,p.jsx)(o.A,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",children:(0,p.jsxs)("main",{children:[(0,p.jsx)(l.A,{children:(0,p.jsx)(n.A,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})}),(0,p.jsx)(c,{children:(0,p.jsx)("ul",{className:"list",children:m.map(({url:e,title:t,description:i,image:r,ariaLabel:s})=>(0,p.jsxs)("li",{className:"item",children:[(0,p.jsx)("a",{className:"avatar",href:e,target:"_blank",rel:"noreferrer","aria-label":s,children:(0,p.jsx)("img",{className:"icon",src:`/img/community/${r}`})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,p.jsx)("p",{className:"title",style:{marginBottom:0},children:t})}),(0,p.jsx)("p",{className:"description",children:i})]})]},t))})}),(0,p.jsxs)(l.A,{id:"superset-community-calendar",children:[(0,p.jsx)(n.A,{level:"h2",title:"Superset Community Calendar",subtitle:(0,p.jsxs)(p.Fragment,{children:["Join us for live demos, meetups, discussions, and more!",(0,p.jsx)("br",{}),(0,p.jsxs)(g,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank",rel:"noreferrer",children:[(0,p.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"]}),(0,p.jsx)("br",{}),(0,p.jsxs)(g,{onClick:()=>{t(!e)},children:[(0,p.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),e?"Hide Calendar":"Display Calendar*"]}),!e&&(0,p.jsxs)(u,{children:[(0,p.jsx)("sup",{children:"*"}),"Clicking on this link will load and send data from and to Google."]})]})}),e&&(0,p.jsx)(d,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})]})]})})}}}]);