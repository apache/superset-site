"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8401],{76795:(e,t,n)=>{n.d(t,{A:()=>o});const o=function(e){for(var t,n=0,o=0,a=e.length;a>=4;++o,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(o+2))<<16;case 2:n^=(255&e.charCodeAt(o+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(o)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}},17103:(e,t,n)=>{n.d(t,{A:()=>o});const o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},9332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var o=n(51322),a=n(96540),s=n(69024),i=n(89532),r=n(74848);const l=a.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(l.Provider,{value:o,children:t})}function d(){const e=(0,a.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function u(){const{metadata:e,frontMatter:t,assets:n}=d();return(0,r.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(34164),h=n(24581),b=n(21312),p=n(28774);function g(e){const{permalink:t,title:n,subLabel:o,isNext:a}=e;return(0,r.jsxs)(p.A,{className:(0,m.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(g,{...t,subLabel:(0,r.jsx)(b.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(g,{...n,subLabel:(0,r.jsx)(b.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=d();return(0,r.jsx)(x,{previous:e.previous,next:e.next})}var f=n(44586),j=n(44070),A=n(17559),C=n(53886),_=n(23025);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(b.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(b.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const t=k[e.versionMetadata.banner];return(0,r.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:o}=e;return(0,r.jsx)(b.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(p.A,{to:n,onClick:o,children:(0,r.jsx)(b.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,f.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:s}=(0,C.g1)(a),{latestDocSuggestion:i,latestVersionSuggestion:l}=(0,j.HW)(a),c=i??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,r.jsxs)("div",{className:(0,m.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(N,{siteTitle:o,versionMetadata:n})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(L,{versionLabel:l.label,to:c.path,onClick:()=>s(l.name)})})]})}function y(e){let{className:t}=e;const n=(0,_.r)();return n.banner?(0,r.jsx)(T,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,_.r)();return n.badge?(0,r.jsx)("span",{className:(0,m.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(b.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const S={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function M(e){let{permalink:t,label:n,count:o,description:a}=e;return(0,r.jsxs)(p.A,{href:t,title:a,className:(0,m.A)(S.tag,o?S.tagWithCount:S.tagRegular),children:[n,o&&(0,r.jsx)("span",{children:o})]})}const I={tags:"tags_jXut",tag:"tag_QGVx"};function G(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(b.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,m.A)(I.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:I.tag,children:(0,r.jsx)(M,{...e})},e.permalink)))})]})}var H=n(12153);function B(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,tags:a}=e,s=a.length>0,i=!!(t||n||o);return s||i?(0,r.jsxs)("footer",{className:(0,m.A)(A.G.docs.docFooter,"docusaurus-mt-lg"),children:[s&&(0,r.jsx)("div",{className:(0,m.A)("row margin-top--sm",A.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(G,{tags:a})})}),i&&(0,r.jsx)(H.A,{className:(0,m.A)("margin-top--sm",A.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o})]}):null}var V=n(41422),E=n(65195);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function P(e){let{collapsed:t,...n}=e;return(0,r.jsx)("button",{type:"button",...n,className:(0,m.A)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(b.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:a}=e;const{collapsed:s,toggleCollapsed:i}=(0,V.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,m.A)(R.tocCollapsible,!s&&R.tocCollapsibleExpanded,n),children:[(0,r.jsx)(P,{collapsed:s,onClick:i}),(0,r.jsx)(V.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:s,children:(0,r.jsx)(E.A,{toc:t,minHeadingLevel:o,maxHeadingLevel:a})})]})}const D={tocMobile:"tocMobile_ITEo"};function z(){const{toc:e,frontMatter:t}=d();return(0,r.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(A.G.docs.docTocMobile,D.tocMobile)})}var U=n(67763);function W(){const{toc:e,frontMatter:t}=d();return(0,r.jsx)(U.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var Q=n(51107),X=n(65425);function Y(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=d();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,m.A)(A.G.docs.docMarkdown,"markdown"),children:[n&&(0,r.jsx)("header",{children:(0,r.jsx)(Q.A,{as:"h1",children:n})}),(0,r.jsx)(X.A,{children:t})]})}var Z=n(44718),$=n(99169),q=n(86025);function J(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ee(){const e=(0,q.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(p.A,{"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(J,{className:K.breadcrumbHomeIcon})})})}const te={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ne(e){let{children:t,href:n,isLast:o}=e;const a="breadcrumbs__link";return o?(0,r.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,r.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:a,children:t})}function oe(e){let{children:t,active:n,index:o,addMicrodata:a}=e;return(0,r.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(o+1)})]})}function ae(){const e=(0,Z.OF)(),t=(0,$.Dt)();return e?(0,r.jsx)("nav",{className:(0,m.A)(A.G.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(ee,{}),e.map(((t,n)=>{const o=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(oe,{active:o,index:n,addMicrodata:!!a,children:(0,r.jsx)(ne,{href:a,isLast:o,children:t.label})},n)}))]})}):null}var se=n(86896);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function re(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=d(),n=(0,h.l)(),o=e.hide_table_of_contents,a=!o&&t.length>0;return{hidden:o,mobile:a?(0,r.jsx)(z,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)(W,{})}}(),{metadata:o}=d();return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,m.A)("col",!n.hidden&&ie.docItemCol),children:[(0,r.jsx)(se.A,{metadata:o}),(0,r.jsx)(y,{}),(0,r.jsxs)("div",{className:ie.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(ae,{}),(0,r.jsx)(w,{}),n.mobile,(0,r.jsx)(Y,{children:t}),(0,r.jsx)(B,{})]}),(0,r.jsx)(v,{})]})]}),n.desktop&&(0,r.jsx)("div",{className:"col col--3",children:n.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,r.jsx)(c,{content:e.content,children:(0,r.jsxs)(s.e3,{className:t,children:[(0,r.jsx)(u,{}),(0,r.jsx)(re,{children:(0,r.jsx)(n,{})})]})})}const ce=(0,o.A)("a")`
  position: fixed;
  bottom: 40px;
  right: 10px;
  padding: 1rem;
  padding-left: 4rem;
  background-color: #444;
  border-radius: 10px;
  z-index: 9999;
  background-image: url('/img/github-dark.png');
  background-size: 2rem;
  background-position: 1rem center;
  background-repeat: no-repeat;
  transition: background-color 0.3s; /* Smooth transition for hover effect */
  bpx-shadow: 0 0 0 0 rgba(0,0,0,0); /* Smooth transition for hover effect */
  scale: .9;
  transition: all 0.3s;
  transform-origin: bottom right;

  &:hover {
    background-color: #333;
    box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.3);
    scale: 1;
  }
`;function de(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ce,{href:e.content.metadata.editUrl,target:"_blank",rel:"noopener noreferrer",children:"Edit this page on GitHub"}),(0,r.jsx)(le,{...e})]})}},64467:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(98406);function a(e,t,n){return(t=(0,o.A)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},98406:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(82284);function a(e){var t=function(e,t){if("object"!=(0,o.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=(0,o.A)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,o.A)(t)?t:t+""}},82284:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n.d(t,{A:()=>o})}}]);