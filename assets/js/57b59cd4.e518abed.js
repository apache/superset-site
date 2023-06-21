"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6849],{84439:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(67294),a=i(79175),n=i(62777);const o=(0,a.Z)("section")`
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
    ${n.mq[1]} {
      margin-top: -40px;
    }
  }
`,l=e=>{let{children:t}=e;return r.createElement(o,null,t,r.createElement("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"}))}},74964:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(67294),a=i(79175),n=i(62777);const o=(0,a.Z)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${n.mq[1]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${e=>e.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,l=(0,a.Z)(o)`
  .title {
    font-size: 96px;
    ${n.mq[1]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${n.mq[1]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${n.mq[1]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,s=(0,a.Z)(o)`
  .title {
    font-size: 48px;
    ${n.mq[1]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${n.mq[1]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${n.mq[1]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,m=e=>{let{level:t,title:i,subtitle:a,dark:n}=e;const o=t,m="h1"===t?l:s;return r.createElement(m,{dark:!!n},r.createElement(o,{className:"title"},i),r.createElement("img",{className:"line",src:"/img/community/line.png",alt:"line"}),a&&r.createElement("p",{className:"subtitle"},a))}},27272:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(67294),a=i(79175),n=i(75957),o=i(59532),l=i(62777),s=i(74964),m=i(84439);const p=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/superset+apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],c=(0,a.Z)("section")`
  background-color: var(--ifm-off-section-background);
  border-bottom: 1px solid var(--ifm-border-color);
  .list {
    max-width: 540px;
    margin: 0 auto;
    padding: 40px 20px 20px 35px;
  }
  .item {
    padding: 0;
    border: 0;
  }
  .icon {
    width: 40px;
    margin-top: 5px;
    ${l.mq[1]} {
      width: 40px;
      margin-top: 0;
    }
  }
  .title {
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
    ${l.mq[1]} {
      font-size: 23px;
      line-height: 26px;
    }
  }
  .description {
    font-size: 14px;
    line-height: 20px;
    color: var(--ifm-secondary-text);
    margin-top: -8px;
    margin-bottom: 23px;
    ${l.mq[1]} {
      font-size: 17px;
      line-height: 22px;
      color: var(--ifm-primary-text);
      margin-bottom: 35px;
      margin-top: 0;
    }
  }
`,u=(0,a.Z)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${l.mq[1]} {
    width: calc(100% - 40px);
  }
`,g=(0,a.Z)("iframe")`
  display: block;
  max-width: 1080px;
  width: calc(100% - 40px);
  height: 285px;
  margin: 30px auto 20px;
  border: 0;
  @media (max-width: 1200px) {
    height: 380px;
  }
  @media (max-width: 679px) {
    height: 680px;
    margin-top: 15px;
  }
`,d=(0,a.Z)("a")`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 12px;
  ${l.mq[1]} {
    font-size: 18px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    ${l.mq[1]} {
      display: none;
    }
  }
`,h=()=>r.createElement(o.Z,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform"},r.createElement("main",null,r.createElement(m.Z,null,r.createElement(s.Z,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})),r.createElement(c,null,r.createElement(n.ZP,{className:"list",itemLayout:"horizontal",dataSource:p,renderItem:e=>{let{url:t,title:i,description:a,image:o,ariaLabel:l}=e;return r.createElement(n.ZP.Item,{className:"item"},r.createElement(n.ZP.Item.Meta,{avatar:r.createElement("a",{className:"title",href:t,target:"_blank","aria-label":l},r.createElement("img",{className:"icon",src:`/img/community/${o}`})),title:r.createElement("a",{className:"title",href:t,target:"_blank"},i),description:r.createElement("p",{className:"description"},a),role:"group","aria-label":"Community link"}))}})),r.createElement(m.Z,null,r.createElement(s.Z,{level:"h2",title:"Superset Community Calendar",subtitle:r.createElement(r.Fragment,null,"Join us for live demos, meetups, discussions, and more!",r.createElement("br",null),r.createElement(d,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank"},r.createElement("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"))}),r.createElement(u,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})),r.createElement(m.Z,null,r.createElement(s.Z,{level:"h2",title:"Newsletter Archive"}),r.createElement(g,{src:"https://preset.io/embed/newsletter/",frameBorder:"0",scrolling:"no"}))))},62777:(e,t,i)=>{i.d(t,{mq:()=>r});const r=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`))}}]);