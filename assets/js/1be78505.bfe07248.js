"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9514,713],{66316:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(67294),o=n(34334),l=n(44873),r=n(18015),i=n(39105),c=n(21976),s=n(6141),d=n(50003),m=n(59532),u=n(11614),b=n(63735),p=n(68265);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(i(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(39657),v=n(16550),g=n(94980),_=n(96793),k=n(49627),C=n(83117);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var T=n(69061),x=n(93478);const Z=Symbol("EmptyContext"),B=a.createContext(Z);function y(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var w=n(17940),L=n(18407),A=n(88746),H=n(5730);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,l),g=(0,L.Mg)(h,l),{collapsed:k,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===Z)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:v,collapsed:k,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(A.Z,(0,C.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:i+1})))}var P=n(71699),W=n(99631);const D={menuExternalLink:"menuExternalLink_NmtK"};function R(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,l),E=(0,P.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(A.Z,(0,C.Z)({className:(0,o.Z)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const V={menuHtmlItem:"menuHtmlItem_M9Kj"};function z(e){let{item:t,level:n,index:l}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[V.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,C.Z)({item:t},n));case"html":return a.createElement(z,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(y,null,t.map(((e,t)=>a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(K),q={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function G(e){let{path:t,sidebar:n,className:l}=e;const i=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",q.menu,i&&q.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const Y={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function O(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,o.Z)(Y.sidebar,i&&Y.sidebarWithHideableNavbar,r&&Y.sidebarHidden)},i&&a.createElement(k.Z,{tabIndex:-1,className:Y.sidebarLogo}),a.createElement(G,{path:t,sidebar:n}),c&&a.createElement(N,{onClick:l}))}const X=a.memo(O);var J=n(82306),Q=n(35022);const $=e=>{let{sidebar:t,path:n}=e;const l=(0,Q.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ee(e){return a.createElement(J.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(X,e),o&&a.createElement(te,e))}const ae={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ae.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:ae.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function re(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:i}=(0,v.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,f.n)()&&s(!0),l((e=>!e))}),[l,c]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&s(!0)}},a.createElement(re,null,a.createElement("div",{className:(0,o.Z)(le.sidebarViewport,c&&le.sidebarViewportHidden)},a.createElement(ne,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(oe,{toggleSidebar:d}))))}const ce={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(ce.docMainContainer,(t||!l)&&ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced)},n))}const de={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function me(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:de.docsWrapper},a.createElement(E,null),a.createElement("div",{className:de.docPage},n&&a.createElement(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(se,{hiddenSidebarContainer:o},t)))}var ue=n(30713),be=n(26145);function pe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(be.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function he(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(ue.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(pe,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(me,null,i)))))}},30713:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),o=n(11614),l=n(44873),r=n(59532);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6141:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>r});var a=n(67294),o=n(93478);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);