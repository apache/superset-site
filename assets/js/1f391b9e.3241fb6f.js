"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3085],{51761:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(67294),l=n(86010),i=n(4450),c=n(3905),s=n(23262),m=n(78473),r=n(80624),o="mdxPageWrapper_zHyg";function d(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,f=n.frontMatter,N=f.wrapperClassName,g=f.hide_table_of_contents;return t.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!g&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(m.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},78473:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(83117),l=n(80102),i=n(67294),c=n(86010),s=n(14569),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(83117),l=n(80102),i=n(67294),c=n(80624),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=N?N:_.tableOfContents.maxHeadingLevel,p=(0,c.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,c.Si)(h),i.createElement(m,(0,t.Z)({toc:p,className:r,linkClassName:d},g))}}}]);