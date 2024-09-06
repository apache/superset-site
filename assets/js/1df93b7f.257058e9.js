"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4583],{77145:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(51322),s=i(33126),r=i(74848);const o=(0,a.A)("section")`
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
    ${s.mq[1]} {
      margin-top: -40px;
    }
  }
`,n=e=>{let{children:t}=e;return(0,r.jsxs)(o,{children:[t,(0,r.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})}},7824:(e,t,i)=>{i.d(t,{A:()=>c});var a=i(51322),s=i(33126),r=i(74848);const o=(0,a.A)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${s.mq[1]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${e=>e.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,n=(0,a.A)(o)`
  .title {
    font-size: 96px;
    ${s.mq[1]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${s.mq[1]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${s.mq[1]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,l=(0,a.A)(o)`
  .title {
    font-size: 48px;
    ${s.mq[1]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${s.mq[1]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${s.mq[1]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,c=e=>{let{level:t,title:i,subtitle:a,dark:s}=e;const o=t,c="h1"===t?n:l;return(0,r.jsxs)(c,{dark:!!s,children:[(0,r.jsx)(o,{className:"title",children:i}),(0,r.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),a&&(0,r.jsx)("p",{className:"subtitle",children:a})]})}},65986:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(96540),s=i(41957),r=i(28774),o=i(34751),n=i(51322),l=i(20072),c=i(33126);const d=[{title:"PostgreSQL",href:"https://www.postgresql.org/",imgName:"postgresql.svg"},{title:"BigQuery",href:"https://cloud.google.com/bigquery/",imgName:"google-big-query.svg"},{title:"Snowflake",href:"https://www.snowflake.com/",imgName:"snowflake.svg"},{title:"MySQL",href:"https://www.mysql.com/",imgName:"mysql.jpg"},{title:"Amazon Redshift",href:"https://aws.amazon.com/redshift/",imgName:"amazon-redshift.jpg"},{title:"Amazon Athena",href:"https://aws.amazon.com/pt/athena/",imgName:"amazon-athena.jpg"},{title:"Apache Druid",href:"http://druid.io/",imgName:"druid.png"},{title:"Databricks",href:"https://www.databricks.com",imgName:"databricks.png"},{title:"Google Sheets",href:"https://www.google.com/sheets/about/",imgName:"google-sheets.svg"},{title:"CSV",imgName:"csv.svg"},{title:"ClickHouse",href:"https://clickhouse.tech/",imgName:"clickhouse.png"},{title:"Rockset",href:"https://rockset.com/",imgName:"rockset.png"},{title:"Dremio",href:"https://dremio.com/",imgName:"dremio.png"},{title:"Trino",href:"https://trino.io/",imgName:"trino2.jpg"},{title:"Oracle",href:"https://www.oracle.com/database/",imgName:"oraclelogo.png"},{title:"Apache Pinot",href:"https://pinot.apache.org/",imgName:"apache-pinot.svg"},{title:"Presto",href:"https://prestodb.io/",imgName:"presto-og.png"},{title:"IBM Db2",href:"https://www.ibm.com/analytics/db2",imgName:"ibmdb2.png"},{title:"SAP Hana",href:"https://www.sap.com/products/technology-platform/hana.html",imgName:"sap-hana.jpg"},{title:"Microsoft SqlServer",href:"https://www.microsoft.com/en-us/sql-server",imgName:"msql.png"},{title:"Apache Doris",href:"https://doris.apache.org/",imgName:"doris.png"},{title:"OceanBase",href:"https://www.oceanbase.com/",imgName:"oceanbase.svg"},{title:"Couchbase",href:"https://www.couchbase.com/",imgName:"couchbase.svg"}];var p=i(7824),m=i(77145),h=i(74848);const g=[{image:"powerful-yet-easy.jpg",title:"Powerful yet easy to use",description:"Superset makes it easy to explore your data, using either our simple no-code viz builder or state-of-the-art SQL IDE."},{image:"modern-databases.jpg",title:"Integrates with modern databases",description:"Superset can connect to any SQL-based databases including modern cloud-native databases and engines at petabyte scale."},{image:"modern-architecture.jpg",title:"Modern architecture",description:"Superset is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},{image:"rich-visualizations.jpg",title:"Rich visualizations and dashboards",description:"Superset ships with 40+ pre-installed visualization types. Our plug-in architecture makes it easy to build custom visualizations."}],x=(0,n.A)("main")`
  text-align: center;
`,u=(0,n.A)("div")`
  position: relative;
  padding: 130px 20px 0;
  margin-bottom: 160px;
  background-image: url('/img/grid-background.jpg');
  background-size: cover;
  ${c.mq[1]} {
    margin-bottom: 100px;
  }
  .info-container {
    position: relative;
    z-index: 4;
  }
  .superset-mark {
    ${c.mq[1]} {
      width: 140px;
    }
  }
  .info-text {
    font-size: 30px;
    line-height: 37px;
    max-width: 720px;
    margin: 24px auto 10px;
    color: var(--ifm-font-base-color-inverse);
    ${c.mq[1]} {
      font-size: 25px;
      line-height: 30px;
    }
  }
  .github-section {
    margin-top: 9px;
    ${c.mq[1]} {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .github-button {
      margin: 5px;
      ${c.mq[1]} {
        transform: scale(1.25);
        margin: 8px;
        &:first-of-type {
          margin-top: 5px;
        }
        &:last-of-type {
          margin-bottom: 5px;
        }
      }
    }
  }
`,f=(0,n.A)(r.A)`
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 170px;
  padding: 10px 0;
  margin: 15px auto 0;
  ${c.mq[1]} {
    font-size: 19px;
    width: 175px;
    padding: 10px 0;
  }
`,b=(0,n.A)("div")`
  position: relative;
  display: inline-block;
  padding-top: 30px;
  margin-top: 25px;
  margin-bottom: -125px;
  max-width: 800px;
  ${c.mq[1]} {
    padding-top: 20px;
  }
  .screenshot {
    position: relative;
    z-index: 3;
    border-radius: 10px;
  }
  .screenshot-shadow-1 {
    position: absolute;
    top: 15px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 15px);
    background-color: #256b7c;
    border-radius: 10px;
    z-index: 2;
    ${c.mq[1]} {
      background-color: #335a64;
      top: 10px;
      left: 15px;
      width: calc(100% - 30px);
      height: calc(100% - 10px);
    }
  }
  .screenshot-shadow-2 {
    position: absolute;
    top: 0;
    left: 40px;
    width: calc(100% - 80px);
    height: 100%;
    background-color: #0d5262;
    border-radius: 10px;
    z-index: 1;
    ${c.mq[1]} {
      background-color: #1f4048;
      left: 30px;
      width: calc(100% - 60px);
    }
  }
  .screenshotBlur {
    display: none;
    background-color: #173036;
    filter: blur(45px);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
    opacity: 0.3;
    ${c.mq[1]} {
      display: block;
    }
  }
`,v=(0,n.A)("ul")`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1170px;
  margin: 15px auto 0;
  padding: 0 20px;
  ${c.mq[1]} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .item {
    text-align: left;
    border: 1px solid var(--ifm-border-color);
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    ${c.mq[1]} {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 35px;
    }
    .image {
      flex-shrink: 0;
      margin-right: 20px;
      width: 140px;
      text-align: center;
      ${c.mq[1]} {
        width: 115px;
      }
    }
    .title {
      font-size: 24px;
      color: var(--ifm-primary-text);
      margin: 10px 0 0;
      ${c.mq[1]} {
        font-size: 23px;
        margin-top: 20px;
      }
    }
    .description {
      font-size: 17px;
      line-height: 23px;
      color: var(--ifm-secondary-text);
      margin: 5px 0 0;
      ${c.mq[1]} {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`,j=(0,n.A)("div")`
  position: relative;
  padding: 60px 20px;
  ${c.mq[1]} {
    padding-top: 0;
    padding-bottom: 50px;
  }
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% - 320px);
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/img/grid-background.jpg');
    background-size: cover;
    z-index: -1;
    ${c.mq[1]} {
      height: 100%;
    }
  }
  .toggleBtns {
    display: flex;
    justify-content: space-between;
    list-style: none;
    max-width: 870px;
    width: 100%;
    margin: 0 auto 20px;
    padding: 0;
    ${c.mq[1]} {
      flex-direction: column;
      text-align: left;
      max-width: 140px;
      gap: 10px;
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .toggle {
      font-size: 24px;
      color: #b4c0c7;
      position: relative;
      padding-left: 32px;
      cursor: pointer;
      ${c.mq[1]} {
        font-size: 17px;
        font-weight: bold;
        padding-left: 22px;
      }
      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #457f8d;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate3d(0, -50%, 0);
        ${c.mq[1]} {
          width: 8px;
          height: 8px;
        }
      }
      &.active {
        font-weight: 700;
        color: var(--ifm-font-base-color-inverse);
      }
      &.active::before {
        background-color: var(--ifm-color-primary);
      }
    }
  }
  .slide {
    max-width: 920px;
    & > p {
      max-width: 560px;
      margin: 0 auto;
      font-size: 24px;
      line-height: 32px;
      color: var(--ifm-font-base-color-inverse);
      margin-bottom: 45px;
      ${c.mq[1]} {
        font-size: 17px;
        line-height: 23px;
      }
    }
  }
  video {
    width: 100%;
    max-width: 920px;
    margin-top: 10px;
    border-radius: 10px;
    ${c.mq[1]} {
      border-radius: 5px;
    }
  }
`,w=(0,n.A)("div")`
  margin-top: 50px;
  & > h3 {
    font-size: 30px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    max-width: 960px;
    margin: 30px auto 0;
    padding: 0 20px;
    text-align: left;
    ${c.mq[1]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      display: flex;
      font-size: 17px;
      ${c.mq[1]} {
        font-size: 15px;
      }
      & > img {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 12px;
        margin-top: 4px;
        ${c.mq[1]} {
          width: 18px;
          height: 18px;
          margin-top: 2px;
        }
      }
    }
  }
  .row {
    display: flex;
    max-width: 960px;
    margin: 30px auto 0;
    & > .column {
      width: 50%;
      & > ul {
        font-size: 17px;
        list-style: none;
        padding: 0 20px;
        text-align: left;
        margin: 0;
        & > li {
          display: flex;
          margin-bottom: 20px;
          & > img {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: 12px;
            margin-top: 4px;
          }
        }
      }
    }
  }
`,k=(0,n.A)("div")`
  padding: 0 20px;
  .database-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    max-width: 1160px;
    margin: 25px auto 0;
    ${c.mq[1]} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    ${c.mq[0]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      border: 1px solid var(--ifm-border-color);
      border-radius: 10px;
      overflow: hidden;
      height: 120px;
      padding: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > a {
        height: 100%;
      }
      & img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .database-sub {
    display: block;
    text-align: center;
    font-size: 17px;
    margin-top: 50px;
  }
`;function y(){const e=(0,a.useRef)(null),[t,i]=(0,a.useState)(0),r=()=>{const e=document.body.querySelector(".navbar"),t=document.body.querySelector(".navbar__logo img");e.classList.add("navbar--dark"),t.setAttribute("src","/img/superset-logo-horiz-dark.svg")},n=()=>{const e=document.body.querySelector(".navbar"),t=document.body.querySelector(".navbar__logo img");e.classList.remove("navbar--dark"),t.setAttribute("src","/img/superset-logo-horiz.svg")};return(0,a.useEffect)((()=>{r();document.body.querySelector(".navbar__toggle").addEventListener("click",(()=>n()));const e=()=>{window.scrollY>0?n():r()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e),n()}}),[]),(0,h.jsx)(s.A,{title:"Welcome",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",wrapperClassName:"under-navbar",children:(0,h.jsxs)(x,{children:[(0,h.jsxs)(u,{children:[(0,h.jsxs)("div",{className:"info-container",children:[(0,h.jsx)("img",{className:"superset-mark",src:"/img/superset-mark-dark.svg",alt:"Superset mark"}),(0,h.jsx)("div",{className:"info-text",children:"Apache Superset\u2122 is an open-source modern data exploration and visualization platform."}),(0,h.jsx)("img",{src:"/img/community/line.png",alt:"line"}),(0,h.jsxs)("div",{className:"github-section",children:[(0,h.jsx)("span",{className:"github-button",children:(0,h.jsx)(l.A,{href:"https://github.com/apache/superset","data-size":"large","data-show-count":"true","aria-label":"Star apache/superset on GitHub",children:"Star"})}),(0,h.jsx)("span",{className:"github-button",children:(0,h.jsx)(l.A,{href:"https://github.com/apache/superset/subscription","data-size":"large","data-show-count":"true","aria-label":"Watch apache/superset on GitHub",children:"Watch"})}),(0,h.jsx)("span",{className:"github-button",children:(0,h.jsx)(l.A,{href:"https://github.com/apache/superset/fork","data-size":"large","data-show-count":"true","aria-label":"Fork apache/superset on GitHub",children:"Fork"})})]}),(0,h.jsx)("img",{src:"/img/community/line.png",alt:"line"}),(0,h.jsx)(f,{className:"default-button-theme",href:"/docs/intro",children:"Get Started"})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)("img",{className:"screenshot",src:"/img/hero-screenshot.jpg",alt:"hero-screenshot"}),(0,h.jsx)("div",{className:"screenshot-shadow-1"}),(0,h.jsx)("div",{className:"screenshot-shadow-2"}),(0,h.jsx)("div",{className:"screenshotBlur"})]})]}),(0,h.jsxs)(m.A,{children:[(0,h.jsx)(p.A,{level:"h2",title:"Overview",subtitle:"Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple line charts to highly detailed geospatial charts."}),(0,h.jsx)(v,{children:g.map((e=>{let{image:t,title:i,description:a}=e;return(0,h.jsxs)("li",{className:"item",children:[(0,h.jsx)("div",{className:"image",children:(0,h.jsx)("img",{src:`/img/features/${t}`})}),(0,h.jsxs)("div",{className:"content",children:[(0,h.jsx)("h4",{className:"title",children:i}),(0,h.jsx)("p",{className:"description",children:a})]})]},i)}))})]}),(0,h.jsxs)(m.A,{children:[(0,h.jsxs)(j,{children:[(0,h.jsx)(p.A,{level:"h2",title:"Self-serve analytics for anyone",dark:!0}),(0,h.jsxs)("ul",{className:"toggleBtns",children:[(0,h.jsx)("li",{className:`toggle ${0===t?"active":null}`,onClick:()=>e.current.goTo(0),role:"button",children:"Dashboards"}),(0,h.jsx)("li",{className:`toggle ${1===t?"active":null}`,onClick:()=>e.current.goTo(1),role:"button",children:"Chart Builder"}),(0,h.jsx)("li",{className:`toggle ${2===t?"active":null}`,onClick:()=>e.current.goTo(2),role:"button",children:"SQL Lab"}),(0,h.jsx)("li",{className:`toggle ${3===t?"active":null}`,onClick:()=>e.current.goTo(3),role:"button",children:"Datasets"})]}),(0,h.jsxs)(o.A,{ref:e,effect:"scrollx",beforeChange:(e,t)=>{i(t)},children:[(0,h.jsx)("div",{className:"slide",children:(0,h.jsx)("p",{children:"Explore data and find insights from interactive dashboards."})}),(0,h.jsx)("div",{className:"slide",children:(0,h.jsx)("p",{children:"Drag and drop to create robust charts and tables."})}),(0,h.jsx)("div",{className:"slide",children:(0,h.jsx)("p",{children:"Write custom SQL queries, browse database metadata, use Jinja templating, and more."})}),(0,h.jsx)("div",{className:"slide",children:(0,h.jsx)("p",{children:"Create physical and virtual datasets to scale chart creation with unified metric definitions."})})]}),(0,h.jsx)("video",{autoPlay:!0,muted:!0,controls:!0,loop:!0,children:(0,h.jsx)("source",{src:"https://superset.staged.apache.org/superset-video-4k.mp4",type:"video/mp4"})})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)("h3",{children:"Key features"}),(0,h.jsxs)("div",{className:"grid",children:[(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsx)("div",{children:(0,h.jsx)("strong",{children:"40+ pre-installed visualizations"})})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:["Support for ",(0,h.jsx)("strong",{children:"drag-and-drop"})," and"," ",(0,h.jsx)("strong",{children:"SQL queries"})]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"Data caching"})," for the faster load time of charts and dashboards"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"Jinja templating and dashboard filters"})," for creating interactive dashboards"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"CSS templates"})," to customize charts and dashboards to your brand\u2019s look and feel"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"Semantic layer"})," for SQL data transformations"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"Cross-filters, drill-to-detail, and drill-by"})," ","features for deeper data analysis"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:"Virtual datasets"})," for ad-hoc data exploration"]})]}),(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,h.jsxs)("div",{children:["Access to new functionalities through"," ",(0,h.jsx)("strong",{children:"feature flags"})]})]})]})]})]}),(0,h.jsx)(m.A,{children:(0,h.jsxs)(k,{children:[(0,h.jsx)(p.A,{level:"h2",title:"Supported Databases"}),(0,h.jsx)("div",{className:"database-grid",children:d.map((e=>{let{title:t,href:i,imgName:a}=e;return(0,h.jsx)("div",{className:"item",children:i?(0,h.jsx)("a",{href:i,"aria-label":`Go to ${t} page`,children:(0,h.jsx)("img",{src:`/img/databases/${a}`,title:t})}):(0,h.jsx)("img",{src:`/img/databases/${a}`,title:t})},t)}))}),(0,h.jsxs)("span",{className:"database-sub",children:["...and many other"," ",(0,h.jsx)("a",{href:"/docs/configuration/databases#installing-database-drivers",children:"compatible databases"})]})]})})]})})}},33126:(e,t,i)=>{i.d(t,{mq:()=>a});const a=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`))}}]);