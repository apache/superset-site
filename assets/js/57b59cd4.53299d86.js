"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6849],{80920:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(67294),r=i(79175),n=i(19641);const o=(0,r.Z)("section")`
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
`,l=e=>{let{children:t}=e;return a.createElement(o,null,t,a.createElement("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"}))}},66182:(e,t,i)=>{i.d(t,{Z:()=>m});var a=i(67294),r=i(79175),n=i(19641);const o=(0,r.Z)("div")`
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
`,l=(0,r.Z)(o)`
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
`,s=(0,r.Z)(o)`
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
`,m=e=>{let{level:t,title:i,subtitle:r,dark:n}=e;const o=t,m="h1"===t?l:s;return a.createElement(m,{dark:!!n},a.createElement(o,{className:"title"},i),a.createElement("img",{className:"line",src:"/img/community/line.png",alt:"line"}),r&&a.createElement("p",{className:"subtitle"},r))}},62592:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var a=i(67294),r=i(79175),n=i(75957),o=i(7452),l=i(19641),s=i(66182),m=i(80920);const p=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],c=(0,r.Z)("section")`
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
`,u=(0,r.Z)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${l.mq[1]} {
    width: calc(100% - 40px);
  }
`,g=(0,r.Z)("iframe")`
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
`,d=(0,r.Z)("a")`
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
`,h=()=>a.createElement(o.Z,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform"},a.createElement("main",null,a.createElement(m.Z,null,a.createElement(s.Z,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})),a.createElement(c,null,a.createElement(n.ZP,{className:"list",itemLayout:"horizontal",dataSource:p,renderItem:e=>{let{url:t,title:i,description:r,image:o,ariaLabel:l}=e;return a.createElement(n.ZP.Item,{className:"item"},a.createElement(n.ZP.Item.Meta,{avatar:a.createElement("a",{className:"title",href:t,target:"_blank","aria-label":l},a.createElement("img",{className:"icon",src:`/img/community/${o}`})),title:a.createElement("a",{className:"title",href:t,target:"_blank"},i),description:a.createElement("p",{className:"description"},r),"aria-label":"Community link"}))}})),a.createElement(m.Z,null,a.createElement(s.Z,{level:"h2",title:"Superset Community Calendar",subtitle:a.createElement(a.Fragment,null,"Join us for live demos, meetups, discussions, and more!",a.createElement("br",null),a.createElement(d,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank"},a.createElement("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"))}),a.createElement(u,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})),a.createElement(m.Z,null,a.createElement(s.Z,{level:"h2",title:"Newsletter Archive"}),a.createElement(g,{src:"https://preset.io/embed/newsletter/",frameBorder:"0",scrolling:"no"}))))},19641:(e,t,i)=>{i.d(t,{mq:()=>a});const a=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`))}}]);