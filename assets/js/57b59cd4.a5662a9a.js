/*! For license information please see 57b59cd4.a5662a9a.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[8880],{7824(e,t,i){i.d(t,{A:()=>c});var n=i(63650),a=i(33126),o=i(74848);const r=(0,n.A)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 20px 0;
  max-width: 720px;
  margin: 0 auto;
  ${a.mq[1]} {
    padding-top: 55px;
  }
  .title,
  .subtitle {
    color: ${e=>e.dark?"var(--ifm-font-base-color-inverse)":"var(--ifm-font-base-color)"};
  }
`,l=(0,n.A)(r)`
  .title {
    font-size: 96px;
    ${a.mq[1]} {
      font-size: 46px;
    }
  }
  .line {
    margin-top: -45px;
    margin-bottom: 15px;
    ${a.mq[1]} {
      margin-top: -20px;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-size: 30px;
    line-height: 40px;
    ${a.mq[1]} {
      font-size: 25px;
      line-height: 29px;
    }
  }
`,s=(0,n.A)(r)`
  .title {
    font-size: 48px;
    ${a.mq[1]} {
      font-size: 34px;
    }
  }
  .line {
    margin-top: -15px;
    margin-bottom: 15px;
    ${a.mq[1]} {
      margin-top: -5px;
    }
  }
  .subtitle {
    font-size: 24px;
    line-height: 32px;
    ${a.mq[1]} {
      font-size: 18px;
      line-height: 26px;
    }
  }
`,c=({level:e,title:t,subtitle:i,dark:n,link:a})=>{const r=e,c="h1"===e?l:s,m=a?(0,o.jsx)("a",{href:a,style:{color:"inherit",textDecoration:"none"},children:t}):t;return(0,o.jsxs)(c,{dark:!!n,children:[(0,o.jsx)(r,{className:"title",children:m}),(0,o.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),i&&(0,o.jsx)("div",{className:"subtitle",children:i})]})}},14754(e,t,i){i.d(t,{A:()=>s});var n=i(96540);const a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};var o=i(26653);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}const l=(e,t)=>n.createElement(o.A,r({},e,{ref:t,icon:a}));const s=n.forwardRef(l)},33126(e,t,i){i.d(t,{mq:()=>n});const n=[576,768,992,1200].map(e=>`@media (max-width: ${e}px)`)},47142(e,t,i){i.r(t),i.d(t,{default:()=>F});var n=i(96540),a=i(63650),o=i(64241),r=i(34164),l=i(51679),s=i(24945),c=i(62279),m=i(35128),d=i(829),p=i(52808),g=i(78551),u=i(14741),h=i(45478);const x=n.createContext({});x.Consumer;var f=i(44496),$=i(40682),b=i(26606);const y=n.forwardRef((e,t)=>{const{prefixCls:i,children:a,actions:o,extra:l,styles:s,className:m,classNames:d,colStyle:p,...g}=e,{grid:u,itemLayout:h}=(0,n.useContext)(x),{getPrefixCls:y,list:v}=(0,n.useContext)(c.QO),S=e=>(0,r.$)(v?.item?.classNames?.[e],d?.[e]),C=e=>({...v?.item?.styles?.[e],...s?.[e]}),k=y("list",i),z=o&&o.length>0&&n.createElement("ul",{className:(0,r.$)(`${k}-item-action`,S("actions")),key:"actions",style:C("actions")},o.map((e,t)=>n.createElement("li",{key:`${k}-item-action-${t}`},e,t!==o.length-1&&n.createElement("em",{className:`${k}-item-action-split`})))),w=u?"div":"li",A=n.createElement(w,{...g,...u?{}:{ref:t},className:(0,r.$)(`${k}-item`,{[`${k}-item-no-flex`]:!("vertical"===h?l:!(()=>{const e=(0,f.$r)(a);return e.some(e=>"string"==typeof e)&&e.length>1})())},m)},"vertical"===h&&l?[n.createElement("div",{className:`${k}-item-main`,key:"content"},a,z),n.createElement("div",{className:(0,r.$)(`${k}-item-extra`,S("extra")),key:"extra",style:C("extra")},l)]:[a,z,(0,$.Ob)(l,{key:"extra"})]);return u?n.createElement(b.A,{ref:t,flex:1,style:p},A):A}),v=y;v.Meta=({prefixCls:e,className:t,avatar:i,title:a,description:o,...l})=>{const{getPrefixCls:s}=(0,n.useContext)(c.QO),m=s("list",e),d=(0,r.$)(`${m}-item-meta`,t),p=n.createElement("div",{className:`${m}-item-meta-content`},a&&n.createElement("h4",{className:`${m}-item-meta-title`},a),o&&n.createElement("div",{className:`${m}-item-meta-description`},o));return n.createElement("div",{...l,className:d},i&&n.createElement("div",{className:`${m}-item-meta-avatar`},i),(a||o)&&p)};const S=v;var C=i(9777),k=i(25905),z=i(37358),w=i(70753);const A=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:o,itemPaddingLG:r,marginLG:l,borderRadiusLG:s}=e,c=(0,C.zA)(e.calc(s).sub(e.lineWidth).equal());return{[t]:{border:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:s,[`${i}-header`]:{borderRadius:`${c} ${c} 0 0`},[`${i}-footer`]:{borderRadius:`0 0 ${c} ${c}`},[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${(0,C.zA)(a)} ${(0,C.zA)(l)}`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:o}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:r}}}},E=e=>{const{componentCls:t,screenSM:i,screenMD:n,marginLG:a,marginSM:o,margin:r}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:o}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${(0,C.zA)(r)}`}}}}}},L=e=>{const{componentCls:t,antCls:i,controlHeight:n,minHeight:a,paddingSM:o,marginLG:r,padding:l,itemPadding:s,colorPrimary:c,itemPaddingSM:m,itemPaddingLG:d,paddingXS:p,margin:g,colorText:u,colorTextDescription:h,motionDurationSlow:x,lineWidth:f,headerBg:$,footerBg:b,emptyTextPadding:y,metaMarginBottom:v,avatarMarginRight:S,titleMarginBottom:z,descriptionFontSize:w}=e;return{[t]:{...(0,k.dF)(e),position:"relative","--rc-virtual-list-scrollbar-bg":e.colorSplit,"*":{outline:"none"},[`${t}-header`]:{background:$},[`${t}-footer`]:{background:b},[`${t}-header, ${t}-footer`]:{paddingBlock:o},[`${t}-pagination`]:{marginBlockStart:r,[`${i}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:s,color:u,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:S},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:u},[`${t}-item-meta-title`]:{margin:`0 0 ${(0,C.zA)(e.marginXXS)} 0`,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:u,transition:`all ${x}`,"&:hover":{color:c}}},[`${t}-item-meta-description`]:{color:h,fontSize:w,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${(0,C.zA)(p)}`,color:h,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:f,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${(0,C.zA)(l)} 0`,color:h,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:y,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}},[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:g,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:r},[`${t}-item-meta`]:{marginBlockEnd:v,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:z,color:u,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:l,marginInlineStart:"auto","> li":{padding:`0 ${(0,C.zA)(l)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:d},[`${t}-sm ${t}-item`]:{padding:m},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},j=(0,z.OF)("List",e=>{const t=(0,w.oX)(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[L(t),A(t),E(t)]},e=>({contentWidth:220,itemPadding:`${(0,C.zA)(e.paddingContentVertical)} 0`,itemPaddingSM:`${(0,C.zA)(e.paddingContentVerticalSM)} ${(0,C.zA)(e.paddingContentHorizontal)}`,itemPaddingLG:`${(0,C.zA)(e.paddingContentVerticalLG)} ${(0,C.zA)(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})),M=(e,t)=>{const{pagination:i=!1,prefixCls:a,bordered:f=!1,split:$=!0,className:b,rootClassName:y,style:v,children:S,itemLayout:C,loadMore:k,grid:z,dataSource:w=[],size:A,header:E,footer:L,loading:M=!1,rowKey:N,renderItem:B,locale:P,...O}=e,T=i&&"object"==typeof i?i:{},[I,H]=n.useState(T.defaultCurrent||1),[G,D]=n.useState(T.defaultPageSize||10),{getPrefixCls:q,direction:W,className:R,style:F}=(0,c.TP)("list"),{renderEmpty:X}=n.useContext(c.QO),_=e=>(t,n)=>{H(t),D(n),i&&i?.[e]?.(t,n)},V=_("onChange"),J=_("onShowSizeChange"),K=(e,t)=>{if(!B)return null;let i;return i="function"==typeof N?N(e):N?e[N]:e.key,i||(i=`list-item-${t}`),n.createElement(n.Fragment,{key:i},B(e,t))},U=!!(k||i||L),Q=q("list",a),[Y,Z]=j(Q);let ee=M;"boolean"==typeof ee&&(ee={spinning:ee});const te=!!ee?.spinning;let ie="";switch((0,d.A)(A)){case"large":ie="lg";break;case"small":ie="sm"}const ne=(0,r.$)(Q,{[`${Q}-vertical`]:"vertical"===C,[`${Q}-${ie}`]:ie,[`${Q}-split`]:$,[`${Q}-bordered`]:f,[`${Q}-loading`]:te,[`${Q}-grid`]:!!z,[`${Q}-something-after-last-item`]:U,[`${Q}-rtl`]:"rtl"===W},R,b,y,Y,Z),ae=(0,l.A)({current:1,total:0,position:"bottom"},{total:w.length,current:I,pageSize:G},i||{}),oe=Math.ceil(ae.total/ae.pageSize);ae.current=Math.min(ae.current,oe);const re=i&&n.createElement("div",{className:(0,r.$)(`${Q}-pagination`)},n.createElement(u.A,{align:"end",...ae,onChange:V,onShowSizeChange:J}));let le=(0,o.A)(w);i&&w.length>(ae.current-1)*ae.pageSize&&(le=(0,o.A)(w).splice((ae.current-1)*ae.pageSize,ae.pageSize));const se=Object.keys(z||{}).some(e=>["xs","sm","md","lg","xl","xxl"].includes(e)),ce=(0,g.A)(se),me=n.useMemo(()=>{for(let e=0;e<s.ye.length;e+=1){const t=s.ye[e];if(ce[t])return t}},[ce]),de=n.useMemo(()=>{if(!z)return;const e=me&&z[me]?z[me]:z.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0},[JSON.stringify(z),me]);let pe=te&&n.createElement("div",{style:{minHeight:53}});if(le.length>0){const e=le.map(K);pe=z?n.createElement(p.A,{gutter:z.gutter},n.Children.map(e,e=>n.createElement("div",{key:e?.key,style:de},e))):n.createElement("ul",{className:`${Q}-items`},e)}else S||te||(pe=n.createElement("div",{className:`${Q}-empty-text`},P?.emptyText||X?.("List")||n.createElement(m.A,{componentName:"List"})));const ge=ae.position,ue=n.useMemo(()=>({grid:z,itemLayout:C}),[JSON.stringify(z),C]);return n.createElement(x.Provider,{value:ue},n.createElement("div",{ref:t,style:{...F,...v},className:ne,...O},("top"===ge||"both"===ge)&&re,E&&n.createElement("div",{className:`${Q}-header`},E),n.createElement(h.A,{...ee},pe,S),L&&n.createElement("div",{className:`${Q}-footer`},L),k||("bottom"===ge||"both"===ge)&&re))};const N=n.forwardRef(M);N.Item=S;const B=N;var P=i(62765),O=i(33126),T=i(7824),I=i(77145),H=i(74848);const G=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],D=(0,a.A)("section")`
  background-color: var(--ifm-background-color);
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
    ${O.mq[1]} {
      width: 40px;
      margin-top: 0;
    }
  }
  .title {
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
    ${O.mq[1]} {
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
    ${O.mq[1]} {
      font-size: 17px;
      line-height: 22px;
      color: var(--ifm-primary-text);
      margin-bottom: 35px;
      margin-top: 0;
    }
  }
`,q=(0,a.A)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${O.mq[1]} {
    width: calc(100% - 40px);
  }
`,W=(0,a.A)("a")`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 12px;
  ${O.mq[1]} {
    font-size: 18px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    ${O.mq[1]} {
      display: none;
    }
  }
`,R=(0,a.A)("div")`
  font-size: 14px;
  color: var(--ifm-secondary-text);
`,F=()=>{const[e,t]=(0,n.useState)(!1);return(0,H.jsx)(P.A,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",children:(0,H.jsxs)("main",{children:[(0,H.jsx)(I.A,{children:(0,H.jsx)(T.A,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})}),(0,H.jsx)(D,{children:(0,H.jsx)(B,{className:"list",itemLayout:"horizontal",dataSource:G,renderItem:({url:e,title:t,description:i,image:n,ariaLabel:a})=>(0,H.jsx)(B.Item,{className:"item",children:(0,H.jsx)(B.Item.Meta,{avatar:(0,H.jsx)("a",{className:"title",href:e,target:"_blank",rel:"noreferrer","aria-label":a,children:(0,H.jsx)("img",{className:"icon",src:`/img/community/${n}`})}),title:(0,H.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,H.jsx)("p",{className:"title",style:{marginBottom:0},children:t})}),description:(0,H.jsx)("p",{className:"description",children:i}),"aria-label":"Community link"})})})}),(0,H.jsxs)(I.A,{children:[(0,H.jsx)(T.A,{level:"h2",title:"Superset Community Calendar",subtitle:(0,H.jsxs)(H.Fragment,{children:["Join us for live demos, meetups, discussions, and more!",(0,H.jsx)("br",{}),(0,H.jsxs)(W,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank",rel:"noreferrer",children:[(0,H.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"]}),(0,H.jsx)("br",{}),(0,H.jsxs)(W,{onClick:()=>{t(!e)},children:[(0,H.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),e?"Hide Calendar":"Display Calendar*"]}),!e&&(0,H.jsxs)(R,{children:[(0,H.jsx)("sup",{children:"*"}),"Clicking on this link will load and send data from and to Google."]})]})}),e&&(0,H.jsx)(q,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})]})]})})}},51679(e,t,i){i.d(t,{A:()=>n});const n=function(...e){const t={};return e.forEach(e=>{e&&Object.keys(e).forEach(i=>{void 0!==e[i]&&(t[i]=e[i])})}),t}},59758(e,t,i){i.d(t,{A:()=>s});var n=i(96540);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};var o=i(26653);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}const l=(e,t)=>n.createElement(o.A,r({},e,{ref:t,icon:a}));const s=n.forwardRef(l)},77145(e,t,i){i.d(t,{A:()=>l});var n=i(63650),a=i(33126),o=i(74848);const r=(0,n.A)("section")`
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
    ${a.mq[1]} {
      margin-top: -40px;
    }
  }
`,l=({children:e})=>(0,o.jsxs)(r,{children:[e,(0,o.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})},87795(e,t,i){i.d(t,{A:()=>o});const n="accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError".split(/[\s\n]+/);function a(e,t){return 0===e.indexOf(t)}function o(e,t=!1){let i;i=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:{...t};const o={};return Object.keys(e).forEach(t=>{(i.aria&&("role"===t||a(t,"aria-"))||i.data&&a(t,"data-")||i.attr&&n.includes(t))&&(o[t]=e[t])}),o}}}]);