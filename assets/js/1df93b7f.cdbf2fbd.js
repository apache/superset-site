"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4583],{77145:(e,t,a)=>{a.d(t,{A:()=>o});var i=a(96540),r=a(25390),n=a(33126);const l=(0,r.A)("section")`
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
`,o=e=>{let{children:t}=e;return i.createElement(l,null,t,i.createElement("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"}))}},7824:(e,t,a)=>{a.d(t,{A:()=>m});var i=a(96540),r=a(25390),n=a(33126);const l=(0,r.A)("div")`
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
`,o=(0,r.A)(l)`
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
`,s=(0,r.A)(l)`
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
`,m=e=>{let{level:t,title:a,subtitle:r,dark:n}=e;const l=t,m="h1"===t?o:s;return i.createElement(m,{dark:!!n},i.createElement(l,{className:"title"},a),i.createElement("img",{className:"line",src:"/img/community/line.png",alt:"line"}),r&&i.createElement("p",{className:"subtitle"},r))}},65986:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(96540),r=a(78511),n=a(75489),l=a(36489),o=a(25390),s=a(20072),m=a(33126);const c=[{title:"PostgreSQL",href:"https://www.postgresql.org/",imgName:"postgresql.svg"},{title:"BigQuery",href:"https://cloud.google.com/bigquery/",imgName:"google-big-query.svg"},{title:"Snowflake",href:"https://www.snowflake.com/",imgName:"snowflake.svg"},{title:"MySQL",href:"https://www.mysql.com/",imgName:"mysql.jpg"},{title:"Amazon Redshift",href:"https://aws.amazon.com/redshift/",imgName:"amazon-redshift.jpg"},{title:"Amazon Athena",href:"https://aws.amazon.com/pt/athena/",imgName:"amazon-athena.jpg"},{title:"Apache Druid",href:"http://druid.io/",imgName:"druid.png"},{title:"Databricks",href:"https://www.databricks.com",imgName:"databricks.png"},{title:"Google Sheets",href:"https://www.google.com/sheets/about/",imgName:"google-sheets.svg"},{title:"CSV",imgName:"csv.svg"},{title:"ClickHouse",href:"https://clickhouse.tech/",imgName:"clickhouse.png"},{title:"Rockset",href:"https://rockset.com/",imgName:"rockset.png"},{title:"Dremio",href:"https://dremio.com/",imgName:"dremio.png"},{title:"Trino",href:"https://trino.io/",imgName:"trino2.jpg"},{title:"Oracle",href:"https://www.oracle.com/database/",imgName:"oraclelogo.png"},{title:"Apache Pinot",href:"https://pinot.apache.org/",imgName:"apache-pinot.svg"},{title:"Presto",href:"https://prestodb.io/",imgName:"presto-og.png"},{title:"IBM Db2",href:"https://www.ibm.com/analytics/db2",imgName:"ibmdb2.png"},{title:"SAP Hana",href:"https://www.sap.com/products/technology-platform/hana.html",imgName:"sap-hana.jpg"},{title:"Microsoft SqlServer",href:"https://www.microsoft.com/en-us/sql-server",imgName:"msql.png"},{title:"Apache Doris",href:"https://doris.apache.org/",imgName:"doris.png"}];var p=a(7824),d=a(77145);const g=[{image:"powerful-yet-easy.jpg",title:"Powerful yet easy to use",description:"Superset makes it easy to explore your data, using either our simple no-code viz builder or state-of-the-art SQL IDE."},{image:"modern-databases.jpg",title:"Integrates with modern databases",description:"Superset can connect to any SQL-based databases including modern cloud-native databases and engines at petabyte scale."},{image:"modern-architecture.jpg",title:"Modern architecture",description:"Superset is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},{image:"rich-visualizations.jpg",title:"Rich visualizations and dashboards",description:"Superset ships with 40+ pre-installed visualization types. Our plug-in architecture makes it easy to build custom visualizations."}],h=(0,o.A)("main")`
  text-align: center;
`,u=(0,o.A)("div")`
  position: relative;
  padding: 130px 20px 0;
  margin-bottom: 160px;
  background-image: url('/img/grid-background.jpg');
  background-size: cover;
  ${m.mq[1]} {
    margin-bottom: 100px;
  }
  .info-container {
    position: relative;
    z-index: 4;
  }
  .superset-mark {
    ${m.mq[1]} {
      width: 140px;
    }
  }
  .info-text {
    font-size: 30px;
    line-height: 37px;
    max-width: 720px;
    margin: 24px auto 10px;
    color: var(--ifm-font-base-color-inverse);
    ${m.mq[1]} {
      font-size: 25px;
      line-height: 30px;
    }
  }
  .github-section {
    margin-top: 9px;
    ${m.mq[1]} {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .github-button {
      margin: 5px;
      ${m.mq[1]} {
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
`,x=(0,o.A)(n.A)`
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 170px;
  padding: 10px 0;
  margin: 15px auto 0;
  ${m.mq[1]} {
    font-size: 19px;
    width: 175px;
    padding: 10px 0;
  }
`,f=(0,o.A)("div")`
  position: relative;
  display: inline-block;
  padding-top: 30px;
  margin-top: 25px;
  margin-bottom: -125px;
  max-width: 800px;
  ${m.mq[1]} {
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
    ${m.mq[1]} {
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
    ${m.mq[1]} {
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
    ${m.mq[1]} {
      display: block;
    }
  }
`,b=(0,o.A)("ul")`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1170px;
  margin: 15px auto 0;
  padding: 0 20px;
  ${m.mq[1]} {
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
    ${m.mq[1]} {
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
      ${m.mq[1]} {
        width: 115px;
      }
    }
    .title {
      font-size: 24px;
      color: var(--ifm-primary-text);
      margin: 10px 0 0;
      ${m.mq[1]} {
        font-size: 23px;
        margin-top: 20px;
      }
    }
    .description {
      font-size: 17px;
      line-height: 23px;
      color: var(--ifm-secondary-text);
      margin: 5px 0 0;
      ${m.mq[1]} {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`,v=(0,o.A)("div")`
  position: relative;
  padding: 60px 20px;
  ${m.mq[1]} {
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
    ${m.mq[1]} {
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
    ${m.mq[1]} {
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
      ${m.mq[1]} {
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
        ${m.mq[1]} {
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
      ${m.mq[1]} {
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
    ${m.mq[1]} {
      border-radius: 5px;
    }
  }
`,E=(0,o.A)("div")`
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
    ${m.mq[1]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      display: flex;
      font-size: 17px;
      ${m.mq[1]} {
        font-size: 15px;
      }
      & > img {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 12px;
        margin-top: 4px;
        ${m.mq[1]} {
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
`,w=(0,o.A)("div")`
  padding: 0 20px;
  .database-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    max-width: 1160px;
    margin: 25px auto 0;
    ${m.mq[1]} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    ${m.mq[0]} {
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
`;function k(){const e=(0,i.useRef)(null),[t,a]=(0,i.useState)(0),n=()=>{const e=document.body.querySelector(".navbar"),t=document.body.querySelector(".navbar__logo img");e.classList.add("navbar--dark"),t.setAttribute("src","/img/superset-logo-horiz-dark.svg")},o=()=>{const e=document.body.querySelector(".navbar"),t=document.body.querySelector(".navbar__logo img");e.classList.remove("navbar--dark"),t.setAttribute("src","/img/superset-logo-horiz.svg")};return(0,i.useEffect)((()=>{n();document.body.querySelector(".navbar__toggle").addEventListener("click",(()=>o()));const e=()=>{window.scrollY>0?o():n()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e),o()}}),[]),i.createElement(r.A,{title:"Welcome",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",wrapperClassName:"under-navbar"},i.createElement(h,null,i.createElement(u,null,i.createElement("div",{className:"info-container"},i.createElement("img",{className:"superset-mark",src:"/img/superset-mark-dark.svg",alt:"Superset mark"}),i.createElement("div",{className:"info-text"},"Apache Superset\u2122 is an open-source modern data exploration and visualization platform."),i.createElement("img",{src:"/img/community/line.png",alt:"line"}),i.createElement("div",{className:"github-section"},i.createElement("span",{className:"github-button"},i.createElement(s.A,{href:"https://github.com/apache/superset","data-size":"large","data-show-count":"true","aria-label":"Star apache/superset on GitHub"},"Star")),i.createElement("span",{className:"github-button"},i.createElement(s.A,{href:"https://github.com/apache/superset/subscription","data-size":"large","data-show-count":"true","aria-label":"Watch apache/superset on GitHub"},"Watch")),i.createElement("span",{className:"github-button"},i.createElement(s.A,{href:"https://github.com/apache/superset/fork","data-size":"large","data-show-count":"true","aria-label":"Fork apache/superset on GitHub"},"Fork"))),i.createElement("img",{src:"/img/community/line.png",alt:"line"}),i.createElement(x,{className:"default-button-theme",href:"/docs/intro"},"Get Started")),i.createElement(f,null,i.createElement("img",{className:"screenshot",src:"/img/hero-screenshot.jpg",alt:"hero-screenshot"}),i.createElement("div",{className:"screenshot-shadow-1"}),i.createElement("div",{className:"screenshot-shadow-2"}),i.createElement("div",{className:"screenshotBlur"}))),i.createElement(d.A,null,i.createElement(p.A,{level:"h2",title:"Overview",subtitle:"Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple line charts to highly detailed geospatial charts."}),i.createElement(b,null,g.map((e=>{let{image:t,title:a,description:r}=e;return i.createElement("li",{className:"item",key:a},i.createElement("div",{className:"image"},i.createElement("img",{src:`/img/features/${t}`})),i.createElement("div",{className:"content"},i.createElement("h4",{className:"title"},a),i.createElement("p",{className:"description"},r)))})))),i.createElement(d.A,null,i.createElement(v,null,i.createElement(p.A,{level:"h2",title:"Self-serve analytics for anyone",dark:!0}),i.createElement("ul",{className:"toggleBtns"},i.createElement("li",{className:`toggle ${0===t?"active":null}`,onClick:()=>e.current.goTo(0),role:"button"},"Dashboards"),i.createElement("li",{className:`toggle ${1===t?"active":null}`,onClick:()=>e.current.goTo(1),role:"button"},"Chart Builder"),i.createElement("li",{className:`toggle ${2===t?"active":null}`,onClick:()=>e.current.goTo(2),role:"button"},"SQL Lab"),i.createElement("li",{className:`toggle ${3===t?"active":null}`,onClick:()=>e.current.goTo(3),role:"button"},"Datasets")),i.createElement(l.A,{ref:e,effect:"scrollx",beforeChange:(e,t)=>{a(t)}},i.createElement("div",{className:"slide"},i.createElement("p",null,"Explore data and find insights from interactive dashboards.")),i.createElement("div",{className:"slide"},i.createElement("p",null,"Drag and drop to create robust charts and tables.")),i.createElement("div",{className:"slide"},i.createElement("p",null,"Write custom SQL queries, browse database metadata, use Jinja templating, and more.")),i.createElement("div",{className:"slide"},i.createElement("p",null,"Create physical and virtual datasets to scale chart creation with unified metric definitions."))),i.createElement("video",{autoPlay:!0,muted:!0,controls:!0,loop:!0},i.createElement("source",{src:"https://user-images.githubusercontent.com/64562059/234390129-321d4f35-cb4b-45e8-89d9-20ae292f34fc.mp4",type:"video/mp4"}))),i.createElement(E,null,i.createElement("h3",null,"Key features"),i.createElement("div",{className:"grid"},i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"40+ pre-installed visualizations"))),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,"Support for ",i.createElement("strong",null,"drag-and-drop")," and"," ",i.createElement("strong",null,"SQL queries"))),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"Data caching")," for the faster load time of charts and dashboards")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"Jinja templating and dashboard filters")," for creating interactive dashboards")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"CSS templates")," to customize charts and dashboards to your brand\u2019s look and feel")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"Semantic layer")," for SQL data transformations")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"Cross-filters, drill-to-detail, and drill-by")," ","features for deeper data analysis")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,i.createElement("strong",null,"Virtual datasets")," for ad-hoc data exploration")),i.createElement("div",{className:"item"},i.createElement("img",{src:"/img/check-icon.svg",alt:"check-icon"}),i.createElement("div",null,"Access to new functionalities through"," ",i.createElement("strong",null,"feature flags")))))),i.createElement(d.A,null,i.createElement(w,null,i.createElement(p.A,{level:"h2",title:"Supported Databases"}),i.createElement("div",{className:"database-grid"},c.map((e=>{let{title:t,href:a,imgName:r}=e;return i.createElement("div",{className:"item",key:t},a?i.createElement("a",{href:a,"aria-label":`Go to ${t} page`},i.createElement("img",{src:`/img/databases/${r}`,title:t})):i.createElement("img",{src:`/img/databases/${r}`,title:t}))}))),i.createElement("span",{className:"database-sub"},"...and many other"," ",i.createElement("a",{href:"/docs/databases/installing-database-drivers"},"compatible databases"))))))}},33126:(e,t,a)=>{a.d(t,{mq:()=>i});const i=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`))}}]);