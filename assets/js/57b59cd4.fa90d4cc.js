"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8880],{77145:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(96540),r=i(25390),n=i(33126);const o=(0,r.A)("section")`
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
`,l=e=>{let{children:t}=e;return a.createElement(o,null,t,a.createElement("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"}))}},7824:(e,t,i)=>{i.d(t,{A:()=>m});var a=i(96540),r=i(25390),n=i(33126);const o=(0,r.A)("div")`
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
`,l=(0,r.A)(o)`
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
`,s=(0,r.A)(o)`
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
`,m=e=>{let{level:t,title:i,subtitle:r,dark:n}=e;const o=t,m="h1"===t?l:s;return a.createElement(m,{dark:!!n},a.createElement(o,{className:"title"},i),a.createElement("img",{className:"line",src:"/img/community/line.png",alt:"line"}),r&&a.createElement("p",{className:"subtitle"},r))}},22985:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var a=i(96540),r=i(25390),n=i(94263),o=i(78511),l=i(33126),s=i(7824),m=i(77145);const p=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],c=(0,r.A)("section")`
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
`,u=(0,r.A)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${l.mq[1]} {
    width: calc(100% - 40px);
  }
`,g=((0,r.A)("iframe")`
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
`,(0,r.A)("a")`
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
`),d=(0,r.A)("div")`
  font-size: 14px;
  color: var(--ifm-secondary-text);
`,h=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(o.A,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform"},a.createElement("main",null,a.createElement(m.A,null,a.createElement(s.A,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})),a.createElement(c,null,a.createElement(n.Ay,{className:"list",itemLayout:"horizontal",dataSource:p,renderItem:e=>{let{url:t,title:i,description:r,image:o,ariaLabel:l}=e;return a.createElement(n.Ay.Item,{className:"item"},a.createElement(n.Ay.Item.Meta,{avatar:a.createElement("a",{className:"title",href:t,target:"_blank","aria-label":l},a.createElement("img",{className:"icon",src:`/img/community/${o}`})),title:a.createElement("a",{className:"title",href:t,target:"_blank"},i),description:a.createElement("p",{className:"description"},r),"aria-label":"Community link"}))}})),a.createElement(m.A,null,a.createElement(s.A,{level:"h2",title:"Superset Community Calendar",subtitle:a.createElement(a.Fragment,null,"Join us for live demos, meetups, discussions, and more!",a.createElement("br",null),a.createElement(g,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank"},a.createElement("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"),a.createElement("br",null),a.createElement(g,{onClick:()=>{t(!e)}},a.createElement("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),e?"Hide Calendar":"Display Calendar*"),!e&&a.createElement(d,null,a.createElement("sup",null,"*"),"Clicking on this link will load and send data from and to Google."))}),e&&a.createElement(u,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"}))))}},33126:(e,t,i)=>{i.d(t,{mq:()=>a});const a=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`))}}]);