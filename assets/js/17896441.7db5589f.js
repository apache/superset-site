"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8401],{9332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var s=n(25390),a=n(96540),o=n(69024),i=n(89532),l=n(74848);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(r.Provider,{value:s,children:t})}function d(){const e=(0,a.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}function m(){const{metadata:e,frontMatter:t,assets:n}=d();return(0,l.jsx)(o.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(34164),h=n(24581),b=n(21312),x=n(28774);function p(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(x.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function g(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(b.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(p,{...n,subLabel:(0,l.jsx)(b.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=d();return(0,l.jsx)(g,{previous:e.previous,next:e.next})}var j=n(44586),f=n(44070),_=n(17559),A=n(53886),N=n(23025);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(b.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(b.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(b.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.A,{to:n,onClick:s,children:(0,l.jsx)(b.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,j.A)(),{pluginId:a}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,A.g1)(a),{latestDocSuggestion:i,latestVersionSuggestion:r}=(0,f.HW)(a),c=i??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,_.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(k,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>o(r.name)})})]})}function M(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,l.jsx)(T,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,_.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(b.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const B={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,l.jsxs)(x.A,{href:t,title:a,className:(0,u.A)(B.tag,s?B.tagWithCount:B.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const I={tags:"tags_jXut",tag:"tag_QGVx"};function V(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(I.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:I.tag,children:(0,l.jsx)(H,{...e})},e.permalink)))})]})}var y=n(12153);function E(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,i=!!(t||n||s);return o||i?(0,l.jsxs)("footer",{className:(0,u.A)(_.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",_.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(V,{tags:a})})}),i&&(0,l.jsx)(y.A,{className:(0,u.A)("margin-top--sm",_.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var G=n(41422),P=n(65195);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function S(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(b.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function U(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:i}=(0,G.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(R.tocCollapsible,!o&&R.tocCollapsibleExpanded,n),children:[(0,l.jsx)(S,{collapsed:o,onClick:i}),(0,l.jsx)(G.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:o,children:(0,l.jsx)(P.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const D={tocMobile:"tocMobile_ITEo"};function O(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(U,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(_.G.docs.docTocMobile,D.tocMobile)})}var z=n(67763);function W(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:_.G.docs.docTocDesktop})}var Q=n(51107),X=n(65425);function Y(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=d();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(_.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(Q.A,{as:"h1",children:n})}),(0,l.jsx)(X.A,{children:t})]})}var Z=n(44718),$=n(99169),q=n(86025);function J(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ee(){const e=(0,q.Ay)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.A,{"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(J,{className:K.breadcrumbHomeIcon})})})}const te={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ne(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(x.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function se(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ae(){const e=(0,Z.OF)(),t=(0,$.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(_.G.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ee,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(se,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(ne,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var oe=n(86896);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function le(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=d(),n=(0,h.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(O,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(W,{})}}(),{metadata:s}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ie.docItemCol),children:[(0,l.jsx)(oe.A,{metadata:s}),(0,l.jsx)(M,{}),(0,l.jsxs)("div",{className:ie.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ae,{}),(0,l.jsx)(w,{}),n.mobile,(0,l.jsx)(Y,{children:t}),(0,l.jsx)(E,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function re(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(c,{content:e.content,children:(0,l.jsxs)(o.e3,{className:t,children:[(0,l.jsx)(m,{}),(0,l.jsx)(le,{children:(0,l.jsx)(n,{})})]})})}const ce=(0,s.A)("a")`
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
`;function de(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ce,{href:e.content.metadata.editUrl,target:"_blank",rel:"noopener noreferrer",children:"Edit this page on GitHub"}),(0,l.jsx)(re,{...e})]})}}}]);