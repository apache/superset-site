"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[8880],{7824(e,t,i){i.d(t,{A:()=>m});var n=i(63650),a=i(33126),r=i(74848);const o=(0,n.A)("div")`
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
`,l=(0,n.A)(o)`
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
`,s=(0,n.A)(o)`
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
`,m=({level:e,title:t,subtitle:i,dark:n,link:a})=>{const o=e,m="h1"===e?l:s,c=a?(0,r.jsx)("a",{href:a,style:{color:"inherit",textDecoration:"none"},children:t}):t;return(0,r.jsxs)(m,{dark:!!n,children:[(0,r.jsx)(o,{className:"title",children:c}),(0,r.jsx)("img",{className:"line",src:"/img/community/line.png",alt:"line"}),i&&(0,r.jsx)("div",{className:"subtitle",children:i})]})}},33126(e,t,i){i.d(t,{mq:()=>n});const n=[576,768,992,1200].map(e=>`@media (max-width: ${e}px)`)},47142(e,t,i){i.r(t),i.d(t,{default:()=>_});var n=i(96540),a=i(63650),r=i(64241),o=i(34164),l=i(51679),s=i(24945),m=i(62279),c=i(35128),d=i(829),p=i(52808),g=i(78551),h=i(14741),u=i(45478);const $=n.createContext({});$.Consumer;var x=i(44496),f=i(40682),b=i(26606);const y=n.forwardRef((e,t)=>{const{prefixCls:i,children:a,actions:r,extra:l,styles:s,className:c,classNames:d,colStyle:p,...g}=e,{grid:h,itemLayout:u}=(0,n.useContext)($),{getPrefixCls:y,list:S}=(0,n.useContext)(m.QO),v=e=>(0,o.$)(S?.item?.classNames?.[e],d?.[e]),z=e=>({...S?.item?.styles?.[e],...s?.[e]}),k=y("list",i),w=r&&r.length>0&&n.createElement("ul",{className:(0,o.$)(`${k}-item-action`,v("actions")),key:"actions",style:z("actions")},r.map((e,t)=>n.createElement("li",{key:`${k}-item-action-${t}`},e,t!==r.length-1&&n.createElement("em",{className:`${k}-item-action-split`})))),A=h?"div":"li",C=n.createElement(A,{...g,...h?{}:{ref:t},className:(0,o.$)(`${k}-item`,{[`${k}-item-no-flex`]:!("vertical"===u?l:!(()=>{const e=(0,x.$r)(a);return e.some(e=>"string"==typeof e)&&e.length>1})())},c)},"vertical"===u&&l?[n.createElement("div",{className:`${k}-item-main`,key:"content"},a,w),n.createElement("div",{className:(0,o.$)(`${k}-item-extra`,v("extra")),key:"extra",style:z("extra")},l)]:[a,w,(0,f.Ob)(l,{key:"extra"})]);return h?n.createElement(b.A,{ref:t,flex:1,style:p},C):C}),S=y;S.Meta=({prefixCls:e,className:t,avatar:i,title:a,description:r,...l})=>{const{getPrefixCls:s}=(0,n.useContext)(m.QO),c=s("list",e),d=(0,o.$)(`${c}-item-meta`,t),p=n.createElement("div",{className:`${c}-item-meta-content`},a&&n.createElement("h4",{className:`${c}-item-meta-title`},a),r&&n.createElement("div",{className:`${c}-item-meta-description`},r));return n.createElement("div",{...l,className:d},i&&n.createElement("div",{className:`${c}-item-meta-avatar`},i),(a||r)&&p)};const v=S;var z=i(9777),k=i(25905),w=i(37358),A=i(70753);const C=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:r,itemPaddingLG:o,marginLG:l,borderRadiusLG:s}=e,m=(0,z.zA)(e.calc(s).sub(e.lineWidth).equal());return{[t]:{border:`${(0,z.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:s,[`${i}-header`]:{borderRadius:`${m} ${m} 0 0`},[`${i}-footer`]:{borderRadius:`0 0 ${m} ${m}`},[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${(0,z.zA)(a)} ${(0,z.zA)(l)}`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:r}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:o}}}},E=e=>{const{componentCls:t,screenSM:i,screenMD:n,marginLG:a,marginSM:r,margin:o}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:r}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${(0,z.zA)(o)}`}}}}}},j=e=>{const{componentCls:t,antCls:i,controlHeight:n,minHeight:a,paddingSM:r,marginLG:o,padding:l,itemPadding:s,colorPrimary:m,itemPaddingSM:c,itemPaddingLG:d,paddingXS:p,margin:g,colorText:h,colorTextDescription:u,motionDurationSlow:$,lineWidth:x,headerBg:f,footerBg:b,emptyTextPadding:y,metaMarginBottom:S,avatarMarginRight:v,titleMarginBottom:w,descriptionFontSize:A}=e;return{[t]:{...(0,k.dF)(e),position:"relative","--rc-virtual-list-scrollbar-bg":e.colorSplit,"*":{outline:"none"},[`${t}-header`]:{background:f},[`${t}-footer`]:{background:b},[`${t}-header, ${t}-footer`]:{paddingBlock:r},[`${t}-pagination`]:{marginBlockStart:o,[`${i}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:s,color:h,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:v},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:h},[`${t}-item-meta-title`]:{margin:`0 0 ${(0,z.zA)(e.marginXXS)} 0`,color:h,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:h,transition:`all ${$}`,"&:hover":{color:m}}},[`${t}-item-meta-description`]:{color:u,fontSize:A,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${(0,z.zA)(p)}`,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:x,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${(0,z.zA)(l)} 0`,color:u,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:y,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}},[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:g,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:o},[`${t}-item-meta`]:{marginBlockEnd:S,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:w,color:h,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:l,marginInlineStart:"auto","> li":{padding:`0 ${(0,z.zA)(l)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${(0,z.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${(0,z.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${(0,z.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${(0,z.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:d},[`${t}-sm ${t}-item`]:{padding:c},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},N=(0,w.OF)("List",e=>{const t=(0,A.oX)(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[j(t),C(t),E(t)]},e=>({contentWidth:220,itemPadding:`${(0,z.zA)(e.paddingContentVertical)} 0`,itemPaddingSM:`${(0,z.zA)(e.paddingContentVerticalSM)} ${(0,z.zA)(e.paddingContentHorizontal)}`,itemPaddingLG:`${(0,z.zA)(e.paddingContentVerticalLG)} ${(0,z.zA)(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})),L=(e,t)=>{const{pagination:i=!1,prefixCls:a,bordered:x=!1,split:f=!0,className:b,rootClassName:y,style:S,children:v,itemLayout:z,loadMore:k,grid:w,dataSource:A=[],size:C,header:E,footer:j,loading:L=!1,rowKey:B,renderItem:M,locale:I,...H}=e,G=i&&"object"==typeof i?i:{},[P,q]=n.useState(G.defaultCurrent||1),[T,W]=n.useState(G.defaultPageSize||10),{getPrefixCls:O,direction:R,className:X,style:_}=(0,m.TP)("list"),{renderEmpty:D}=n.useContext(m.QO),F=e=>(t,n)=>{q(t),W(n),i&&i?.[e]?.(t,n)},J=F("onChange"),Q=F("onShowSizeChange"),V=(e,t)=>{if(!M)return null;let i;return i="function"==typeof B?B(e):B?e[B]:e.key,i||(i=`list-item-${t}`),n.createElement(n.Fragment,{key:i},M(e,t))},K=!!(k||i||j),U=O("list",a),[Y,Z]=N(U);let ee=L;"boolean"==typeof ee&&(ee={spinning:ee});const te=!!ee?.spinning;let ie="";switch((0,d.A)(C)){case"large":ie="lg";break;case"small":ie="sm"}const ne=(0,o.$)(U,{[`${U}-vertical`]:"vertical"===z,[`${U}-${ie}`]:ie,[`${U}-split`]:f,[`${U}-bordered`]:x,[`${U}-loading`]:te,[`${U}-grid`]:!!w,[`${U}-something-after-last-item`]:K,[`${U}-rtl`]:"rtl"===R},X,b,y,Y,Z),ae=(0,l.A)({current:1,total:0,position:"bottom"},{total:A.length,current:P,pageSize:T},i||{}),re=Math.ceil(ae.total/ae.pageSize);ae.current=Math.min(ae.current,re);const oe=i&&n.createElement("div",{className:(0,o.$)(`${U}-pagination`)},n.createElement(h.A,{align:"end",...ae,onChange:J,onShowSizeChange:Q}));let le=(0,r.A)(A);i&&A.length>(ae.current-1)*ae.pageSize&&(le=(0,r.A)(A).splice((ae.current-1)*ae.pageSize,ae.pageSize));const se=Object.keys(w||{}).some(e=>["xs","sm","md","lg","xl","xxl"].includes(e)),me=(0,g.A)(se),ce=n.useMemo(()=>{for(let e=0;e<s.ye.length;e+=1){const t=s.ye[e];if(me[t])return t}},[me]),de=n.useMemo(()=>{if(!w)return;const e=ce&&w[ce]?w[ce]:w.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0},[JSON.stringify(w),ce]);let pe=te&&n.createElement("div",{style:{minHeight:53}});if(le.length>0){const e=le.map(V);pe=w?n.createElement(p.A,{gutter:w.gutter},n.Children.map(e,e=>n.createElement("div",{key:e?.key,style:de},e))):n.createElement("ul",{className:`${U}-items`},e)}else v||te||(pe=n.createElement("div",{className:`${U}-empty-text`},I?.emptyText||D?.("List")||n.createElement(c.A,{componentName:"List"})));const ge=ae.position,he=n.useMemo(()=>({grid:w,itemLayout:z}),[JSON.stringify(w),z]);return n.createElement($.Provider,{value:he},n.createElement("div",{ref:t,style:{..._,...S},className:ne,...H},("top"===ge||"both"===ge)&&oe,E&&n.createElement("div",{className:`${U}-header`},E),n.createElement(u.A,{...ee},pe,v),j&&n.createElement("div",{className:`${U}-footer`},j),k||("bottom"===ge||"both"===ge)&&oe))};const B=n.forwardRef(L);B.Item=v;const M=B;var I=i(61146),H=i(33126),G=i(7824),P=i(77145),q=i(74848);const T=[{url:"http://bit.ly/join-superset-slack",title:"Slack",description:"Interact with other Superset users and community members.",image:"slack-symbol.jpg",ariaLabel:"Interact with other Superset users and community members on Slack"},{url:"https://github.com/apache/superset",title:"GitHub",description:"Create tickets to report issues, report bugs, and suggest new features.",image:"github-symbol.jpg",ariaLabel:"Create tickets to report issues, report bugs, and suggest new features on Superset GitHub repo"},{url:"https://lists.apache.org/list.html?dev@superset.apache.org",title:"dev@ Mailing List",description:"Participate in conversations with committers and contributors.",image:"email-symbol.png",ariaLabel:"Participate in conversations with committers and contributors on Superset mailing list"},{url:"https://stackoverflow.com/questions/tagged/apache-superset",title:"Stack Overflow",description:"Our growing knowledge base.",image:"stackoverflow-symbol.jpg",ariaLabel:"See Superset issues on Stack Overflow"},{url:"https://www.meetup.com/Global-Apache-Superset-Community-Meetup/",title:"Superset Meetup Group",description:"Join our monthly virtual meetups and register for any upcoming events.",image:"coffee-symbol.png",ariaLabel:"Join our monthly virtual meetups and register for any upcoming events on Meetup"},{url:"https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md",title:"Organizations",description:"A list of some of the organizations using Superset in production.",image:"note-symbol.png",ariaLabel:"See a list of the organizations using Superset in production"},{url:"https://github.com/apache-superset/awesome-apache-superset",title:"Contributors Guide",description:"Interested in contributing? Learn how to contribute and best practices.",image:"writing-symbol.png",ariaLabel:"Learn how to contribute and best practices on Superset GitHub"}],W=(0,a.A)("section")`
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
    ${H.mq[1]} {
      width: 40px;
      margin-top: 0;
    }
  }
  .title {
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    color: var(--ifm-font-base-color);
    ${H.mq[1]} {
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
    ${H.mq[1]} {
      font-size: 17px;
      line-height: 22px;
      color: var(--ifm-primary-text);
      margin-bottom: 35px;
      margin-top: 0;
    }
  }
`,O=(0,a.A)("iframe")`
  display: block;
  margin: 20px auto 30px;
  max-width: 800px;
  width: 100%;
  height: 600px;
  border: 0;
  ${H.mq[1]} {
    width: calc(100% - 40px);
  }
`,R=(0,a.A)("a")`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 12px;
  ${H.mq[1]} {
    font-size: 18px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    ${H.mq[1]} {
      display: none;
    }
  }
`,X=(0,a.A)("div")`
  font-size: 14px;
  color: var(--ifm-secondary-text);
`,_=()=>{const[e,t]=(0,n.useState)(!1);return(0,q.jsx)(I.A,{title:"Community",description:"Community website for Apache Superset\u2122, a data visualization and data exploration platform",children:(0,q.jsxs)("main",{children:[(0,q.jsx)(P.A,{children:(0,q.jsx)(G.A,{level:"h1",title:"Community",subtitle:"Get involved in our welcoming, fast growing community!"})}),(0,q.jsx)(W,{children:(0,q.jsx)(M,{className:"list",itemLayout:"horizontal",dataSource:T,renderItem:({url:e,title:t,description:i,image:n,ariaLabel:a})=>(0,q.jsx)(M.Item,{className:"item",children:(0,q.jsx)(M.Item.Meta,{avatar:(0,q.jsx)("a",{className:"title",href:e,target:"_blank",rel:"noreferrer","aria-label":a,children:(0,q.jsx)("img",{className:"icon",src:`/img/community/${n}`})}),title:(0,q.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,q.jsx)("p",{className:"title",style:{marginBottom:0},children:t})}),description:(0,q.jsx)("p",{className:"description",children:i}),"aria-label":"Community link"})})})}),(0,q.jsxs)(P.A,{children:[(0,q.jsx)(G.A,{level:"h2",title:"Superset Community Calendar",subtitle:(0,q.jsxs)(q.Fragment,{children:["Join us for live demos, meetups, discussions, and more!",(0,q.jsx)("br",{}),(0,q.jsxs)(R,{href:"https://calendar.google.com/calendar/u/0/r?cid=superset.committers@gmail.com",target:"_blank",rel:"noreferrer",children:[(0,q.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),"Subscribe to the Superset Community Calendar"]}),(0,q.jsx)("br",{}),(0,q.jsxs)(R,{onClick:()=>{t(!e)},children:[(0,q.jsx)("img",{src:"/img/calendar-icon.svg",alt:"calendar-icon"}),e?"Hide Calendar":"Display Calendar*"]}),!e&&(0,q.jsxs)(X,{children:[(0,q.jsx)("sup",{children:"*"}),"Clicking on this link will load and send data from and to Google."]})]})}),e&&(0,q.jsx)(O,{src:"https://calendar.google.com/calendar/embed?src=superset.committers%40gmail.com&ctz=America%2FLos_Angeles",frameBorder:"0",scrolling:"no"})]})]})})}},77145(e,t,i){i.d(t,{A:()=>l});var n=i(63650),a=i(33126),r=i(74848);const o=(0,n.A)("section")`
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
`,l=({children:e})=>(0,r.jsxs)(o,{children:[e,(0,r.jsx)("img",{className:"blur",src:"/img/community/blur.png",alt:"Blur"})]})}}]);