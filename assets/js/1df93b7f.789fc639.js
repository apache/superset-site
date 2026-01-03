(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[4583],{7824(t,e,i){"use strict";i.d(e,{A:()=>c});var a=i(63650),r=i(33126),o=i(74848);const s=(0,a.A)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${r.mq[1]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${t=>t.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,n=(0,a.A)(s)`
  .title {
    font-size: 96px;
    ${r.mq[1]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${r.mq[1]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${r.mq[1]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,l=(0,a.A)(s)`
  .title {
    font-size: 48px;
    ${r.mq[1]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${r.mq[1]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${r.mq[1]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,c=({level:t,title:e,subtitle:i,dark:a})=>{const r=t,s="h1"===t?n:l;return(0,o.jsxs)(s,{dark:!!a,children:[(0,o.jsx)(r,{className:"title",children:e}),(0,o.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),i&&(0,o.jsx)("div",{className:"subtitle",children:i})]})}},33126(t,e,i){"use strict";i.d(e,{mq:()=>a});const a=[576,768,992,1200].map(t=>`@media (max-width: ${t}px)`)},65986(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>C});var a=i(96540),r=i(62765),o=i(28774),s=i(36591),n=i(82985),l=i(97087),c=i(63650),m=i(20072),p=i(33126);const h=[{title:"PostgreSQL",href:"https://www.postgresql.org/",imgName:"postgresql.svg"},{title:"BigQuery",href:"https://cloud.google.com/bigquery/",imgName:"google-big-query.svg"},{title:"Snowflake",href:"https://www.snowflake.com/",imgName:"snowflake.svg"},{title:"MySQL",href:"https://www.mysql.com/",imgName:"mysql.jpg"},{title:"Amazon Redshift",href:"https://aws.amazon.com/redshift/",imgName:"amazon-redshift.jpg"},{title:"Amazon Athena",href:"https://aws.amazon.com/pt/athena/",imgName:"amazon-athena.jpg"},{title:"Apache Druid",href:"https://druid.apache.org/",imgName:"druid.png"},{title:"Databricks",href:"https://www.databricks.com",imgName:"databricks.png"},{title:"Google Sheets",href:"https://www.google.com/sheets/about/",imgName:"google-sheets.svg"},{title:"CSV",imgName:"csv.svg"},{title:"ClickHouse",href:"https://clickhouse.com/",imgName:"clickhouse.png"},{title:"Dremio",href:"https://www.dremio.com/",imgName:"dremio.png"},{title:"Trino",href:"https://trino.io/",imgName:"trino2.jpg"},{title:"Oracle",href:"https://www.oracle.com/database/",imgName:"oraclelogo.png"},{title:"Apache Pinot",href:"https://pinot.apache.org/",imgName:"apache-pinot.svg"},{title:"Presto",href:"https://prestodb.io/",imgName:"presto-og.png"},{title:"IBM Db2",href:"https://www.ibm.com/products/db2",imgName:"ibmdb2.png"},{title:"SAP Hana",href:"https://www.sap.com/products/data-cloud/hana.html",imgName:"sap-hana.jpg"},{title:"Microsoft SqlServer",href:"https://www.microsoft.com/en-us/sql-server",imgName:"msql.png"},{title:"Apache Doris",href:"https://doris.apache.org/",imgName:"doris.png"},{title:"OceanBase",href:"https://www.oceanbase.com/",imgName:"oceanbase.svg"},{title:"Couchbase",href:"https://www.couchbase.com/",imgName:"couchbase.svg"},{title:"Denodo",href:"https://www.denodo.com/",imgName:"denodo.png"},{title:"TDengine",href:"https://tdengine.com/",imgName:"tdengine.png"}];var u=i(7824),d=i(77145),g=i(84193),w=i.n(g),b=i(74848);const x=w(),f=Object.values(x.categories).flat().filter(t=>t.logo?.trim());const v=[{image:"powerful-yet-easy.jpg",title:"Powerful yet easy to use",description:"Superset makes it easy to explore your data, using either our simple no-code viz builder or state-of-the-art SQL IDE."},{image:"modern-databases.jpg",title:"Integrates with modern databases",description:"Superset can connect to any SQL-based databases including modern cloud-native databases and engines at petabyte scale."},{image:"modern-architecture.jpg",title:"Modern architecture",description:"Superset is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},{image:"rich-visualizations.jpg",title:"Rich visualizations and dashboards",description:"Superset ships with 40+ pre-installed visualization types. Our plug-in architecture makes it easy to build custom visualizations."}],k=(0,c.A)("main")`
  text-align: center;
`,y=(0,c.A)("div")`
  position: relative;
  padding: 130px 20px 0;
  margin-bottom: 160px;
  background-image: url('/img/grid-background.jpg');
  background-size: cover;
  ${p.mq[1]} {
    margin-bottom: 100px;
  }
  .info-container {
    position: relative;
    z-index: 4;
  }
  .superset-mark {
    ${p.mq[1]} {
      width: 140px;
    }
  }
  .info-text {
    font-size: 30px;
    line-height: 37px;
    max-width: 720px;
    margin: 24px auto 10px;
    color: var(--ifm-font-base-color-inverse);
    ${p.mq[1]} {
      font-size: 25px;
      line-height: 30px;
    }
  }
  .github-section {
    margin-top: 9px;
    ${p.mq[1]} {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .github-button {
      margin: 5px;
      ${p.mq[1]} {
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
`,j=(0,c.A)(o.A)`
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 170px;
  padding: 10px 0;
  margin: 15px auto 0;
  ${p.mq[1]} {
    font-size: 19px;
    width: 175px;
    padding: 10px 0;
  }
`,S=(0,c.A)("div")`
  position: relative;
  display: inline-block;
  padding-top: 30px;
  margin-top: 25px;
  margin-bottom: -125px;
  max-width: 800px;
  ${p.mq[1]} {
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
    ${p.mq[1]} {
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
    ${p.mq[1]} {
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
    ${p.mq[1]} {
      display: block;
    }
  }
`,z=(0,c.A)("ul")`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1170px;
  margin: 15px auto 0;
  padding: 0 20px;
  ${p.mq[1]} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .item {
    text-align: left;
    border: 1px solid var(--ifm-border-color);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    ${p.mq[1]} {
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
      ${p.mq[1]} {
        width: 115px;
      }
    }
    .title {
      font-size: 24px;
      margin: 10px 0 0;
      ${p.mq[1]} {
        font-size: 23px;
        margin-top: 20px;
      }
    }
    .description {
      font-size: 17px;
      line-height: 23px;
      margin: 5px 0 0;
      ${p.mq[1]} {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`,A=(0,c.A)("div")`
  position: relative;
  padding: 60px 20px;
  ${p.mq[1]} {
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
    ${p.mq[1]} {
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
    ${p.mq[1]} {
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
      ${p.mq[1]} {
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
        ${p.mq[1]} {
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
      ${p.mq[1]} {
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
    ${p.mq[1]} {
      border-radius: 5px;
    }
  }
`,N=(0,c.A)("div")`
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
    ${p.mq[1]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      display: flex;
      font-size: 17px;
      ${p.mq[1]} {
        font-size: 15px;
      }
      & > img {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 12px;
        margin-top: 4px;
        ${p.mq[1]} {
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
`,q=(0,c.A)("div")`
  padding: 0 20px;
  .database-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    max-width: 1160px;
    margin: 25px auto 0;
    ${p.mq[1]} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    ${p.mq[0]} {
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
`;function C(){const t=(0,a.useRef)(null),[e,i]=(0,a.useState)(0),[c,p]=(0,a.useState)(f),g=()=>{const t=document.body.querySelector(".navbar"),e=document.body.querySelector(".navbar__logo img");t&&t.classList.add("navbar--dark"),e&&e.setAttribute("src","/img/superset-logo-horiz-dark.svg")},w=()=>{const t=document.body.querySelector(".navbar"),e=document.body.querySelector(".navbar__logo img");t&&t.classList.remove("navbar--dark"),e&&e.setAttribute("src","/img/superset-logo-horiz.svg")};return(0,a.useEffect)(()=>{p(function(t){const e=[...t];for(let i=e.length-1;i>0;i--){const t=Math.floor(Math.random()*(i+1));[e[i],e[t]]=[e[t],e[i]]}return e}(f))},[]),(0,a.useEffect)(()=>{g();const t=document.body.querySelector(".navbar__toggle");t&&t.addEventListener("click",()=>w());const e=()=>{window.scrollY>0?w():g()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e),w()}},[]),(0,b.jsx)(r.A,{title:"Welcome",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",wrapperClassName:"under-navbar",children:(0,b.jsxs)(k,{children:[(0,b.jsxs)(y,{children:[(0,b.jsxs)("div",{className:"info-container",children:[(0,b.jsx)("img",{className:"superset-mark",src:"/img/superset-mark-dark.svg",alt:"Superset mark"}),(0,b.jsx)("div",{className:"info-text",children:"Apache Superset\u2122 is an open-source modern data exploration and visualization platform."}),(0,b.jsx)("img",{src:"/img/community/line.png",alt:"line"}),(0,b.jsxs)("div",{className:"github-section",children:[(0,b.jsx)("span",{className:"github-button",children:(0,b.jsx)(m.A,{href:"https://github.com/apache/superset","data-size":"large","data-show-count":"true","aria-label":"Star apache/superset on GitHub",children:"Star"})}),(0,b.jsx)("span",{className:"github-button",children:(0,b.jsx)(m.A,{href:"https://github.com/apache/superset/subscription","data-size":"large","data-show-count":"true","aria-label":"Watch apache/superset on GitHub",children:"Watch"})}),(0,b.jsx)("span",{className:"github-button",children:(0,b.jsx)(m.A,{href:"https://github.com/apache/superset/fork","data-size":"large","data-show-count":"true","aria-label":"Fork apache/superset on GitHub",children:"Fork"})})]}),(0,b.jsx)("img",{src:"/img/community/line.png",alt:"line"}),(0,b.jsx)(j,{className:"default-button-theme",href:"/docs/intro",children:"Get Started"})]}),(0,b.jsxs)(S,{children:[(0,b.jsx)("img",{className:"screenshot",src:"/img/hero-screenshot.jpg",alt:"hero-screenshot"}),(0,b.jsx)("div",{className:"screenshot-shadow-1"}),(0,b.jsx)("div",{className:"screenshot-shadow-2"}),(0,b.jsx)("div",{className:"screenshotBlur"})]})]}),(0,b.jsxs)(d.A,{children:[(0,b.jsx)(u.A,{level:"h2",title:"Overview",subtitle:"Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple line charts to highly detailed geospatial charts."}),(0,b.jsx)(z,{children:v.map(({image:t,title:e,description:i})=>(0,b.jsxs)("li",{className:"item",children:[(0,b.jsx)("div",{className:"image",children:(0,b.jsx)("img",{src:`/img/features/${t}`})}),(0,b.jsxs)("div",{className:"content",children:[(0,b.jsx)("h4",{className:"title",children:e}),(0,b.jsx)("p",{className:"description",children:i})]})]},e))})]}),(0,b.jsxs)(d.A,{children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(u.A,{level:"h2",title:"Self-serve analytics for anyone",dark:!0}),(0,b.jsxs)("ul",{className:"toggleBtns",children:[(0,b.jsx)("li",{className:`toggle ${0===e?"active":null}`,onClick:()=>t.current.goTo(0),role:"button",children:"Dashboards"}),(0,b.jsx)("li",{className:`toggle ${1===e?"active":null}`,onClick:()=>t.current.goTo(1),role:"button",children:"Chart Builder"}),(0,b.jsx)("li",{className:`toggle ${2===e?"active":null}`,onClick:()=>t.current.goTo(2),role:"button",children:"SQL Lab"}),(0,b.jsx)("li",{className:`toggle ${3===e?"active":null}`,onClick:()=>t.current.goTo(3),role:"button",children:"Datasets"})]}),(0,b.jsxs)(s.A,{ref:t,effect:"scrollx",beforeChange:(t,e)=>{i(e)},children:[(0,b.jsx)("div",{className:"slide",children:(0,b.jsx)("p",{children:"Explore data and find insights from interactive dashboards."})}),(0,b.jsx)("div",{className:"slide",children:(0,b.jsx)("p",{children:"Drag and drop to create robust charts and tables."})}),(0,b.jsx)("div",{className:"slide",children:(0,b.jsx)("p",{children:"Write custom SQL queries, browse database metadata, use Jinja templating, and more."})}),(0,b.jsx)("div",{className:"slide",children:(0,b.jsx)("p",{children:"Create physical and virtual datasets to scale chart creation with unified metric definitions."})})]}),(0,b.jsx)("video",{autoPlay:!0,muted:!0,controls:!0,loop:!0,children:(0,b.jsx)("source",{src:"https://superset.staged.apache.org/superset-video-4k.mp4",type:"video/mp4"})})]}),(0,b.jsxs)(N,{children:[(0,b.jsx)("h3",{children:"Key features"}),(0,b.jsxs)("div",{className:"grid",children:[(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsx)("div",{children:(0,b.jsx)("strong",{children:"40+ pre-installed visualizations"})})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:["Support for ",(0,b.jsx)("strong",{children:"drag-and-drop"})," and"," ",(0,b.jsx)("strong",{children:"SQL queries"})]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Data caching"})," for the faster load time of charts and dashboards"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Jinja templating and dashboard filters"})," for creating interactive dashboards"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"CSS templates"})," to customize charts and dashboards to your brand\u2019s look and feel"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Semantic layer"})," for SQL data transformations"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Cross-filters, drill-to-detail, and drill-by"})," ","features for deeper data analysis"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Virtual datasets"})," for ad-hoc data exploration"]})]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("img",{src:"/img/check-icon.svg",alt:"check-icon"}),(0,b.jsxs)("div",{children:["Access to new functionalities through"," ",(0,b.jsx)("strong",{children:"feature flags"})]})]})]})]})]}),(0,b.jsx)(d.A,{children:(0,b.jsxs)(q,{children:[(0,b.jsx)(u.A,{level:"h2",title:"Supported Databases"}),(0,b.jsx)("div",{className:"database-grid",children:h.map(({title:t,href:e,imgName:i})=>(0,b.jsx)("div",{className:"item",children:e?(0,b.jsx)("a",{href:e,"aria-label":`Go to ${t} page`,children:(0,b.jsx)("img",{src:`/img/databases/${i}`,title:t})}):(0,b.jsx)("img",{src:`/img/databases/${i}`,title:t})},t))}),(0,b.jsxs)("span",{className:"database-sub",children:["...and many other"," ",(0,b.jsx)("a",{href:"/docs/configuration/databases#installing-database-drivers",children:"compatible databases"})]})]})}),f.length>10&&(0,b.jsx)(d.A,{children:(0,b.jsxs)("div",{style:{padding:"0 20px"},children:[(0,b.jsx)(u.A,{level:"h2",title:"Trusted by teams everywhere",subtitle:"Join thousands of companies using Superset to explore and visualize their data"}),(0,b.jsx)("div",{style:{maxWidth:1160,margin:"25px auto 0"},children:(0,b.jsx)(s.A,{autoplay:!0,autoplaySpeed:2e3,slidesToShow:6,slidesToScroll:1,dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}],children:c.map(({name:t,url:e,logo:i})=>(0,b.jsx)("div",{children:(0,b.jsx)("a",{href:e,target:"_blank",rel:"noreferrer","aria-label":`Visit ${t}`,children:(0,b.jsx)(n.A,{style:{margin:"0 8px"},styles:{body:{height:80,display:"flex",alignItems:"center",justifyContent:"center",padding:16}},children:(0,b.jsx)("img",{src:`/img/logos/${i}`,alt:t,title:t,style:{maxHeight:48,maxWidth:"100%",objectFit:"contain"}})})})},t))})}),(0,b.jsxs)(l.A,{justify:"center",style:{marginTop:30,fontSize:17},children:[(0,b.jsx)(o.A,{to:"/inTheWild",children:"See all companies"}),(0,b.jsx)("span",{style:{margin:"0 8px"},children:"\xb7"}),(0,b.jsx)("a",{href:"https://github.com/apache/superset/edit/master/RESOURCES/INTHEWILD.yaml",target:"_blank",rel:"noreferrer",children:"Add yours to the list!"})]})]})})]})})}},77145(t,e,i){"use strict";i.d(e,{A:()=>n});var a=i(63650),r=i(33126),o=i(74848);const s=(0,a.A)("section")`
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
    ${r.mq[1]} {
      margin-top: -40px;
    }
  }
`,n=({children:t})=>(0,o.jsxs)(s,{children:[t,(0,o.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})},84193(t){const e=[{categories:{"Sharing Economy":[{name:"Airbnb",url:"https://github.com/airbnb"},{name:"Faasos",url:"https://faasos.com/",contributors:["@shashanksingh"]},{name:"Free2Move",url:"https://www.free2move.com/",contributors:["@PaoloTerzi"]},{name:"Hostnfly",url:"https://www.hostnfly.com/",contributors:["@alexisrosuel"]},{name:"Lime",url:"https://www.li.me/",contributors:["@cxmcc"]},{name:"Lyft",url:"https://www.lyft.com/"},{name:"Ontruck",url:"https://www.ontruck.com/"}],"Financial Services":[{name:"Aktia Bank plc",url:"https://www.aktia.com"},{name:"American Express",url:"https://www.americanexpress.com",contributors:["@TheLastSultan"]},{name:"bumper",url:"https://www.bumper.co/",contributors:["@vasu-ram","@JamiePercival"]},{name:"Cape Crypto",url:"https://capecrypto.com"},{name:"Capital Service S.A.",url:"https://capitalservice.pl",contributors:["@pkonarzewski"]},{name:"Clark.de",url:"https://clark.de/"},{name:"EnquiryLabs",url:"https://www.enquirylabs.co.uk"},{name:"Europace",url:"https://europace.de"},{name:"KarrotPay",url:"https://www.daangnpay.com/"},{name:"Remita",url:"https://remita.net",contributors:["@mujibishola"]},{name:"Taveo",url:"https://www.taveo.com",contributors:["@codek"]},{name:"Unit",url:"https://www.unit.co/about-us",contributors:["@amitmiran137"]},{name:"Wise",url:"https://wise.com",contributors:["@koszti"]},{name:"Xendit",url:"https://xendit.co/",contributors:["@LieAlbertTriAdrian"]},{name:"Cover Genius",url:"https://covergenius.com/"}],Gaming:[{name:"Popoko VM Games Studio",url:"https://popoko.live"}],"E-Commerce":[{name:"AiHello",url:"https://www.aihello.com",contributors:["@ganeshkrishnan1"]},{name:"Bazaar Technologies",url:"https://www.bazaartech.com",contributors:["@umair-abro"]},{name:"Dragonpass",url:"https://www.dragonpass.com.cn/",contributors:["@zhxjdwh"]},{name:"Dropit Shopping",url:"https://www.dropit.shop/",contributors:["@dropit-dev"]},{name:"Fanatics",url:"https://www.fanatics.com/",contributors:["@coderfender"]},{name:"Fordeal",url:"https://www.fordeal.com",contributors:["@Renkai"]},{name:"Fynd",url:"https://www.fynd.com/",contributors:["@darpanjain07"]},{name:"GFG - Global Fashion Group",url:"https://global-fashion-group.com",contributors:["@ksaagariconic"]},{name:"GoTo/Gojek",url:"https://www.gojek.io/",contributors:["@gwthm-in"]},{name:"HuiShouBao",url:"https://www.huishoubao.com/",contributors:["@Yukinoshita-Yukino"]},{name:"Now",url:"https://www.now.vn/",contributors:["@davidkohcw"]},{name:"Qunar",url:"https://www.qunar.com/",contributors:["@flametest"]},{name:"Rakuten Viki",url:"https://www.viki.com"},{name:"Shopee",url:"https://shopee.sg",contributors:["@xiaohanyu"]},{name:"Shopkick",url:"https://www.shopkick.com",contributors:["@LAlbertalli"]},{name:"ShopUp",url:"https://www.shopup.org/",contributors:["@gwthm-in"]},{name:"Tails.com",url:"https://tails.com/gb/",contributors:["@alanmcruickshank"]},{name:"THE ICONIC",url:"https://theiconic.com.au/",contributors:["@ksaagariconic"]},{name:"Utair",url:"https://www.utair.ru",contributors:["@utair-digital"]},{name:"VkusVill",url:"https://vkusvill.ru/",contributors:["@ETselikov"]},{name:"Zalando",url:"https://www.zalando.com",contributors:["@dmigo"]},{name:"Zalora",url:"https://www.zalora.com",contributors:["@ksaagariconic"]},{name:"Zepto",url:"https://www.zeptonow.com/",contributors:["@gwthm-in"]}],"Enterprise Technology":[{name:"A3Data",url:"https://a3data.com.br",contributors:["@neylsoncrepalde"]},{name:"Analytics Aura",url:"https://analyticsaura.com/",contributors:["@Analytics-Aura"]},{name:"Apollo GraphQL",url:"https://www.apollographql.com/",contributors:["@evans"]},{name:"Astronomer",url:"https://www.astronomer.io",contributors:["@ryw"]},{name:"Avesta Technologies",url:"https://avestatechnologies.com/",contributors:["@TheRum"]},{name:"Caizin",url:"https://caizin.com/",contributors:["@tejaskatariya"]},{name:"Canonical",url:"https://canonical.com"},{name:"Careem",url:"https://www.careem.com/",contributors:["@samraHanif0340"]},{name:"Cloudsmith",url:"https://cloudsmith.io",contributors:["@alancarson"]},{name:"Cyberhaven",url:"https://www.cyberhaven.com/",contributors:["@toliver-ch"]},{name:"Deepomatic",url:"https://deepomatic.com/",contributors:["@Zanoellia"]},{name:"Dial Once",url:"https://www.dial-once.com/"},{name:"Dremio",url:"https://dremio.com",contributors:["@narendrans"]},{name:"EFinance",url:"https://www.efinance.com.eg",contributors:["@habeeb556"]},{name:"Elestio",url:"https://elest.io/",contributors:["@kaiwalyakoparkar"]},{name:"ELMO Cloud HR & Payroll",url:"https://elmosoftware.com.au/"},{name:"Endress+Hauser",url:"https://www.endress.com/",contributors:["@rumbin"]},{name:"FBK - ICT center",url:"https://ict.fbk.eu"},{name:"Formbricks",url:"https://formbricks.com"},{name:"Gavagai",url:"https://gavagai.io",contributors:["@gavagai-corp"]},{name:"GfK Data Lab",url:"https://www.gfk.com/home",contributors:["@mherr"]},{name:"HPE",url:"https://www.hpe.com/in/en/home.html",contributors:["@anmol-hpe"]},{name:"Hydrolix",url:"https://www.hydrolix.io/"},{name:"Intercom",url:"https://www.intercom.com/",contributors:["@kate-gallo"]},{name:"jampp",url:"https://jampp.com/"},{name:"Konf\xedo",url:"https://konfio.mx",contributors:["@uis-rodriguez"]},{name:"Mainstrat",url:"https://mainstrat.com/"},{name:"mishmash io",url:"https://mishmash.io/",contributors:["@mishmash-io"]},{name:"Myra Labs",url:"https://www.myralabs.com/",contributors:["@viksit"]},{name:"Nielsen",url:"https://www.nielsen.com/",contributors:["@amitNielsen"]},{name:"Ona",url:"https://ona.io",contributors:["@pld"]},{name:"Orange",url:"https://www.orange.com",contributors:["@icsu"]},{name:"Oslandia",url:"https://oslandia.com"},{name:"Oxylabs",url:"https://oxylabs.io/",contributors:["@rytis-ulys"]},{name:"Peak AI",url:"https://www.peak.ai/",contributors:["@azhar22k"]},{name:"PeopleDoc",url:"https://www.people-doc.com",contributors:["@rodo"]},{name:"PlaidCloud",url:"https://www.plaidcloud.com"},{name:"Preset, Inc.",url:"https://preset.io",logo:"preset.svg",contributors:["@mistercrunch","@betodealmeida","@dpgaspar","@rusackas","@sadpandajoe","@Vitor-Avila","@kgabryje","@geido","@eschutho","@Antonio-RiveroMartnez","@yousoph"]},{name:"PubNub",url:"https://pubnub.com",contributors:["@jzucker2"]},{name:"ReadyTech",url:"https://www.readytech.io"},{name:"Reward Gateway",url:"https://www.rewardgateway.com"},{name:"RIADVICE",url:"https://riadvice.tn",contributors:["@riadvice"]},{name:"ScopeAI",url:"https://www.getscopeai.com",contributors:["@iloveluce"]},{name:"shipmnts",url:"https://shipmnts.com"},{name:"Showmax",url:"https://showmax.com",contributors:["@bobek"]},{name:"SingleStore",url:"https://www.singlestore.com/"},{name:"TechAudit",url:"https://www.techaudit.info",contributors:["@ETselikov"]},{name:"Tenable",url:"https://www.tenable.com",contributors:["@dflionis"]},{name:"Tentacle",url:"https://www.linkedin.com/company/tentacle-cmi/",contributors:["@jdclarke5"]},{name:"timbr.ai",url:"https://timbr.ai/",contributors:["@semantiDan"]},{name:"Tobii",url:"https://www.tobii.com/",contributors:["@dwa"]},{name:"Tooploox",url:"https://www.tooploox.com/",contributors:["@jakubczaplicki"]},{name:"Unvired",url:"https://unvired.com",contributors:["@srinisubramanian"]},{name:"Virtuoso QA",url:"https://www.virtuosoqa.com"},{name:"Whale",url:"https://whale.im"},{name:"Windsor.ai",url:"https://www.windsor.ai/",contributors:["@octaviancorlade"]},{name:"WinWin Network\u9a6c\u4e0a\u8d62",url:"https://brandct.cn/",contributors:["@wenbinye"]},{name:"Zeta",url:"https://www.zeta.tech/",contributors:["@shaikidris"]}],"Media & Entertainment":[{name:"6play",url:"https://www.6play.fr",contributors:["@CoryChaplin"]},{name:"bilibili",url:"https://www.bilibili.com",contributors:["@Moinheart"]},{name:"BurdaForward",url:"https://www.burda-forward.de/en/"},{name:"Douban",url:"https://www.douban.com/",contributors:["@luchuan"]},{name:"Kuaishou",url:"https://www.kuaishou.com/",contributors:["@zhaoyu89730105"]},{name:"Netflix",url:"https://www.netflix.com/"},{name:"Prensa Iberica",url:"https://www.prensaiberica.es/",contributors:["@zamar-roura"]},{name:"TME QQMUSIC/WESING",url:"https://www.tencentmusic.com/",contributors:["@shenyuanli","@marklaw"]},{name:"Xite",url:"https://xite.com/",contributors:["@shashankkoppar"]},{name:"Zaihang",url:"https://www.zaih.com/"}],Education:[{name:"Aveti Learning",url:"https://avetilearning.com/",contributors:["@TheShubhendra"]},{name:"Brilliant.org",url:"https://brilliant.org/"},{name:"Open edX",url:"https://openedx.org/"},{name:"Platzi.com",url:"https://platzi.com/"},{name:"Sunbird",url:"https://www.sunbird.org/",contributors:["@eksteporg"]},{name:"The GRAPH Network",url:"https://thegraphnetwork.org/",contributors:["@fccoelho"]},{name:"Udemy",url:"https://www.udemy.com/",contributors:["@sungjuly"]},{name:"VIPKID",url:"https://www.vipkid.com.cn/",contributors:["@illpanda"]},{name:"WikiMedia Foundation",url:"https://wikimediafoundation.org",contributors:["@vg"]}],Energy:[{name:"Airboxlab",url:"https://foobot.io",contributors:["@antoine-galataud"]},{name:"DouroECI",url:"https://www.douroeci.com/",contributors:["@nunohelibeires"]},{name:"Safaricom",url:"https://www.safaricom.co.ke/",contributors:["@mmutiso"]},{name:"Scoot",url:"https://scoot.co/",contributors:["@haaspt"]},{name:"Wattbewerb",url:"https://wattbewerb.de/",contributors:["@wattbewerb"]},{name:"Rogow",url:"https://rogow.com.br/",contributors:["@nilmonto"]}],Healthcare:[{name:"Amino",url:"https://amino.com",contributors:["@shkr"]},{name:"Bluesquare",url:"https://www.bluesquarehub.com/",contributors:["@madewulf"]},{name:"Care",url:"https://www.getcare.io/",contributors:["@alandao2021"]},{name:"Living Goods",url:"https://www.livinggoods.org",contributors:["@chelule"]},{name:"Maieutical Labs",url:"https://maieuticallabs.it",contributors:["@xrmx"]},{name:"Medic",url:"https://medic.org",contributors:["@1yuv"]},{name:"REDCap Cloud",url:"https://www.redcapcloud.com/"},{name:"TrustMedis",url:"https://trustmedis.com/",contributors:["@famasya"]},{name:"WeSure",url:"https://www.wesure.cn/"},{name:"2070Health",url:"https://2070health.com/"}],"HR / Staffing":[{name:"Swile",url:"https://www.swile.co/",contributors:["@PaoloTerzi"]},{name:"Symmetrics",url:"https://www.symmetrics.fyi"},{name:"bluquist",url:"https://bluquist.com/"}],Government:[{name:"City of Ann Arbor, MI",url:"https://www.a2gov.org/",contributors:["@sfirke"]},{name:"RIS3 Strategy of CZ, MIT CR",url:"https://www.ris3.cz/",contributors:["@RIS3CZ"]},{name:"NRLM - Sarathi, India",url:"https://pib.gov.in/PressReleasePage.aspx?PRID=1999586"}],"Mobile Software":[{name:"VLMedia",url:"https://www.vlmedia.com.tr",logo:"vlmedia.svg",contributors:["@iercan"]}],Travel:[{name:"Agoda",url:"https://www.agoda.com/",contributors:["@lostseaway","@maiake","@obombayo"]},{name:"HomeToGo",url:"https://hometogo.com/",contributors:["@pedromartinsteenstrup"]},{name:"Skyscanner",url:"https://www.skyscanner.net/",contributors:["@cleslie","@stanhoucke"]}],Others:[{name:"10Web",url:"https://10web.io/"},{name:"AI inside",url:"https://inside.ai/en/"},{name:"Automattic",url:"https://automattic.com/",contributors:["@Khrol","@Usiel"]},{name:"Dropbox",url:"https://www.dropbox.com/",contributors:["@bkyryliuk"]},{name:"Flowbird",url:"https://flowbird.com",contributors:["@EmmanuelCbd"]},{name:"GEOTAB",url:"https://www.geotab.com",contributors:["@JZ6"]},{name:"Grassroot",url:"https://www.grassrootinstitute.org/"},{name:"Increff",url:"https://www.increff.com/",contributors:["@ishansinghania"]},{name:"komoot",url:"https://www.komoot.com/",contributors:["@christophlingg"]},{name:"Let's Roam",url:"https://www.letsroam.com/"},{name:"Machrent SA",url:"https://www.machrent.com/"},{name:"Onebeat",url:"https://1beat.com/",contributors:["@GuyAttia"]},{name:"X",url:"https://x.com/"},{name:"Yahoo!",url:"https://yahoo.com/"}]}}];t.exports=e.length<=1?e[0]:e}}]);