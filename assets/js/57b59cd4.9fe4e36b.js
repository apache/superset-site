"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[8880],{7824(e,i,t){t.d(i,{A:()=>c});var r=t(63650),o=t(33126),s=t(74848);const a=(0,r.A)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${o.mq[1]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${e=>e.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,n=(0,r.A)(a)`
  .title {
    font-size: 96px;
    ${o.mq[1]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${o.mq[1]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${o.mq[1]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,l=(0,r.A)(a)`
  .title {
    font-size: 48px;
    ${o.mq[1]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${o.mq[1]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${o.mq[1]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,c=({level:e,title:i,subtitle:t,dark:r,link:o})=>{const a=e,c="h1"===e?n:l,m=o?(0,s.jsx)("a",{href:o,style:{color:"inherit",textDecoration:"none"},children:i}):i;return(0,s.jsxs)(c,{dark:!!r,children:[(0,s.jsx)(a,{className:"title",children:m}),(0,s.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),t&&(0,s.jsx)("div",{className:"subtitle",children:t})]})}},22985(e,i,t){t.r(i),t.d(i,{default:()=>b});var r=t(96540),o=t(63650),s=t(61146),a=t(33126),n=t(7824),l=t(77145),c=t(74848);const m=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors. Subscribe by emailing dev-subscribe@superset.apache.org.",image:"email-symbol.png"},{url:"https://superset.apache.org/inTheWild",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"globe-symbol.svg"},{url:"https://superset.apache.org/developer_portal/contributing/overview",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png"}],p=[{url:"https://x.com/ApacheSuperset",title:"X (Twitter)",image:"x-symbol.svg"},{url:"https://www.linkedin.com/company/apache-superset/",title:"LinkedIn",image:"linkedin-symbol.svg"},{url:"https://bsky.app/profile/apachesuperset.bsky.social",title:"Bluesky",image:"bluesky-symbol.svg"}],d=(0,o.A)("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
  ${a.mq[2]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${a.mq[1]} {
    grid-template-columns: 1fr;
  }
  .card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    border: 1px solid var(--ifm-border-color);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
    &:hover {
      border-color: var(--ifm-color-primary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      text-decoration: none;
      color: inherit;
    }
  }
  .icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
  .card-body {
    min-width: 0;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
    margin-bottom: 4px;
  }
  .description {
    font-size: 14px;
    line-height: 1.4;
    color: var(--ifm-secondary-text);
  }
`,x=(0,o.A)("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 20px;
  ${a.mq[1]} {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 20px;
    border: 1px solid var(--ifm-border-color);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
    &:hover {
      border-color: var(--ifm-color-primary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      text-decoration: none;
      color: inherit;
    }
  }
  .icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
  }
`,g=(0,o.A)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${a.mq[1]} {
    width: calc(100% - 40px);
  }
`,h=(0,o.A)("a")`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 12px;
  ${a.mq[1]} {
    font-size: 18px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    ${a.mq[1]} {
      display: none;
    }
  }
`,u=(0,o.A)("div")`
  font-size: 14px;
  color: var(--ifm-secondary-text);
`,b=()=>{const[e,i]=(0,r.useState)(!1);return(0,c.jsx)(s.A,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",children:(0,c.jsxs)("main",{children:[(0,c.jsx)(l.A,{children:(0,c.jsx)(n.A,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})}),(0,c.jsx)("section",{children:(0,c.jsx)(d,{children:m.map(({url:e,title:i,description:t,image:r})=>(0,c.jsxs)("a",{className:"card",href:e,target:"_blank",rel:"noreferrer",children:[(0,c.jsx)("img",{className:"icon",src:`/img/community/${r}`,alt:i}),(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("div",{className:"title",children:i}),(0,c.jsx)("div",{className:"description",children:t})]})]},i))})}),(0,c.jsxs)(l.A,{children:[(0,c.jsx)(n.A,{level:"h2",title:"Follow Us"}),(0,c.jsx)(x,{children:p.map(({url:e,title:i,image:t})=>(0,c.jsxs)("a",{className:"card",href:e,target:"_blank",rel:"noreferrer",children:[(0,c.jsx)("img",{className:"icon",src:`/img/community/${t}`,alt:i}),(0,c.jsx)("span",{className:"title",children:i})]},i))})]}),(0,c.jsxs)(l.A,{children:[(0,c.jsx)(n.A,{level:"h2",title:"Superset Community Calendar",subtitle:(0,c.jsxs)(c.Fragment,{children:["Join us for live demos, meetups, discussions, and more!",(0,c.jsx)("br",{}),(0,c.jsxs)(h,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank",rel:"noreferrer",children:[(0,c.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"]}),(0,c.jsx)("br",{}),(0,c.jsxs)(h,{onClick:()=>{i(!e)},children:[(0,c.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),e?"Hide Calendar":"Display Calendar*"]}),!e&&(0,c.jsxs)(u,{children:[(0,c.jsx)("sup",{children:"*"}),"Clicking on this link will load and send data from and to Google."]})]})}),e&&(0,c.jsx)(g,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})]})]})})}},33126(e,i,t){t.d(i,{mq:()=>r});const r=[576,768,992,1200].map(e=>`@media (max-width: ${e}px)`)},77145(e,i,t){t.d(i,{A:()=>n});var r=t(63650),o=t(33126),s=t(74848);const a=(0,r.A)("section")`
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
    ${o.mq[1]} {
      margin-top: -40px;
    }
  }
`,n=({children:e})=>(0,s.jsxs)(a,{children:[e,(0,s.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})}}]);