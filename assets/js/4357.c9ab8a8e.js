(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4357],{42547:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var o=n(83117),a=n(67294),r=n(5730),l=n(34334),c=n(70524),i=n(96793);function s(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(18015),d=n(87594),m=n.n(d);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:r}=t;if(r&&f.test(r)){const e=r.match(f).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(o,a),c=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<c.length;){const e=c[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${m},`:u[t]?i[u[t]].start=m:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const p={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};function y(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,a]=e;const r=t[o];r&&"string"==typeof a&&(n[r]=a)})),n}(s());return a.createElement(t,(0,o.Z)({},n,{style:r,className:(0,l.Z)(n.className,b.codeBlockContainer,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return a.createElement(y,{as:"pre",tabIndex:0,className:(0,l.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:E.codeBlockLines},t))}var N=n(93478);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,a.useState)(),r=(0,a.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=C);const o=(0,N.zX)(t),r=(0,N.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()}),[e,o,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var _={Prism:n(11205).Z,theme:B};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}var T=/\r\n|\r|\n/,Z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},H=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function j(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var S=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=x({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=x({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),w(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=x({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==a&&(r.style=void 0!==r.style?x({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),w(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),w(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,l=x({},j(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?x({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),w(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,l=0,c=[],i=[c];l>-1;){for(;(r=o[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][r];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=H(u,d.type),d.alias&&(u=H(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(T),p=m.length;c.push({types:u,content:m[0]});for(var f=1;f<p;f++)Z(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),o.push(0),a.push(s.length)}l--,t.pop(),n.pop(),o.pop(),a.pop()}return Z(c),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const O=S,I={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function A(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:c,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=c({line:t,className:(0,l.Z)(n,r&&I.codeLine)}),u=t.map(((e,t)=>a.createElement("span",(0,o.Z)({key:t},i({token:e,key:t})))));return a.createElement("span",s,r?a.createElement(a.Fragment,null,a.createElement("span",{className:I.codeLineNumber}),a.createElement("span",{className:I.codeLineContent},u)):u,a.createElement("br",null))}var M=n(11614);function z(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function R(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const P={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){let{code:t,className:n}=e;const[o,r]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),l&&(r.removeAllRanges(),r.addRange(l)),a&&a.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,P.copyButton,o&&P.copyButtonCopied),onClick:i},a.createElement("span",{className:P.copyButtonIcons,"aria-hidden":"true"},a.createElement(z,{className:P.copyButtonIcon}),a.createElement(R,{className:P.copyButtonSuccessIcon})))}function D(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function V(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&W.wordWrapButtonEnabled),"aria-label":r,title:r},a.createElement(D,{className:W.wordWrapButtonIcon,"aria-hidden":"true"}))}function q(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:m,magicComments:f}}=(0,i.L)(),h=d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,g=s(),b=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");o(n)}),[r]);return L(r,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){return e?.match(p)?.groups.title??""}(r)||c,{lineClassNames:N,code:C}=v(t,{metastring:r,language:h,magicComments:f}),B=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return a.createElement(y,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&a.createElement("div",{className:E.codeBlockTitle},k),a.createElement("div",{className:E.codeBlockContent},a.createElement(O,(0,o.Z)({},_,{theme:g,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(t,E.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(E.codeBlockLines,B&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(A,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:N[t],showLineNumbers:B})))))})),a.createElement("div",{className:E.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&a.createElement(V,{className:E.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),a.createElement($,{className:E.codeButton,code:C}))))}function U(e){let{children:t,...n}=e;const l=(0,r.Z)(),c=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?q:k;return a.createElement(i,(0,o.Z)({key:String(l)},n),c)}},34448:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(83117),a=n(67294),r=n(34334),l=n(11614),c=n(96793),i=n(88746);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return a.createElement(t,(0,o.Z)({},u,{id:void 0}));const m=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return a.createElement(t,(0,o.Z)({},u,{className:(0,r.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,u.className),id:n}),u.children,a.createElement(i.Z,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},40477:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var o=n(67294),a=n(3905),r=n(83117),l=n(32411);var c=n(1841),i=n.n(c);var s=n(88746);var u=n(34334),d=n(87459),m=n(5730),p=n(17940);const f={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function v(e){let{summary:t,children:n,...a}=e;const l=(0,m.Z)(),c=(0,o.useRef)(null),{collapsed:i,setCollapsed:s}=(0,p.u)({initialState:!a.open}),[u,v]=(0,o.useState)(a.open),b=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,r.Z)({},a,{ref:c,open:u,"data-collapsed":i,className:(0,d.Z)(f.details,l&&f.isBrowser,a.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&g(t,c.current)&&(e.preventDefault(),i?(s(!1),v(!0)):s(!0))}}),b,o.createElement(p.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),v(!e)}},o.createElement("div",{className:f.collapsibleContent},n)))}const b={details:"details_b_Ee"},y="alert alert--info";function E(e){let{...t}=e;return o.createElement(v,(0,r.Z)({},t,{className:(0,u.Z)(y,b.details,t.className)}))}var k=n(34448);function N(e){return o.createElement(k.Z,e)}const C={containsTaskList:"containsTaskList_mC6p"};const L={img:"img_ev3q"};var B=n(18015),_=n(11614);const w={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const x={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(_.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(_.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(_.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(_.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(_.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},T={secondary:"note",important:"info",success:"tip",warning:"danger"};function Z(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}const H={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(i(),e)},a:function(e){return o.createElement(s.Z,e)},pre:function(e){return o.createElement(i(),(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(E,(0,r.Z)({},e,{summary:n}),a)},ul:function(e){return o.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,u.Z)(t,t?.includes("contains-task-list")&&C.containsTaskList))}));var t},img:function(e){return o.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,L.img))}));var t},h1:e=>o.createElement(N,(0,r.Z)({as:"h1"},e)),h2:e=>o.createElement(N,(0,r.Z)({as:"h2"},e)),h3:e=>o.createElement(N,(0,r.Z)({as:"h3"},e)),h4:e=>o.createElement(N,(0,r.Z)({as:"h4"},e)),h5:e=>o.createElement(N,(0,r.Z)({as:"h5"},e)),h6:e=>o.createElement(N,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:r}=Z(e),l=function(e){const t=T[e]??e,n=x[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),x.info)}(n),c=a??l.label,{iconComponent:i}=l,s=r??o.createElement(i,null);return o.createElement("div",{className:(0,u.Z)(B.k.common.admonition,B.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,w.admonition)},o.createElement("div",{className:w.admonitionHeading},o.createElement("span",{className:w.admonitionIcon},s),c),o.createElement("div",{className:w.admonitionContent},t))},mermaid:()=>null};function j(e){let{children:t}=e;return o.createElement(a.Zo,{components:H},t)}},47394:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(83117),a=n(67294),r=n(34334),l=n(21351);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",t)},a.createElement(l.Z,(0,o.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},21351:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(83117),a=n(67294),r=n(96793);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):o.push(a)})),o}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>i(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let a=t;a<=n;a+=1)o.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),i=s(c,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function m(e){let{toc:t,className:n,linkClassName:o,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const p=a.memo(m);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:m,...f}=e;const h=(0,r.L)(),g=u??h.tableOfContents.minHeadingLevel,v=m??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:v}}),[i,s,g,v])),a.createElement(p,(0,o.Z)({toc:b,className:n,linkClassName:i},f))}},1841:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(67294)),r=o(n(95665)),l=o(n(42547));e.exports=(l.default,e=>e.reference?a.default.createElement(r.default,{...e}):a.default.createElement(l.default,{...e}))},95665:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseReference=void 0;const c=n(8575),i=r(n(67294)),s=l(n(42547)),u={code:"loading...",error:null,loading:null},d={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function m(e){const t=e.slice(e.indexOf("https"),-1),[n,o]=t.split("#"),a=globalThis||{};a.URL||(a.URL=c.URL);const[r,l,i,s,...u]=new a.URL(n).pathname.split("/").slice(1),[d,m]=o?o.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${r}/${l}/${s}/${u.join("/")}`,fromLine:d,toLine:m,title:u.join("/")}}function p(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=m,t.codeReducer=p,t.default=function(e){var t,n,o;const[a,r]=i.useReducer(p,u),l=m(e.children);!1!==a.loading&&async function({url:e,fromLine:t,toLine:n},o){let a;try{a=await fetch(e)}catch(c){return o({type:"error",value:c})}if(200!==a.status)return o({type:"error",value:await a.text()});const r=(await a.text()).split("\n").slice(t,(n||t)+1),l=r.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);o({type:"loaded",value:r.map((e=>e.slice(l))).join("\n")})}(l,r);const c=null===(t=e.metastring)||void 0===t?void 0:t.match(/title="(?<title>.*)"/),f={...e,metastring:(null===(n=null==c?void 0:c.groups)||void 0===n?void 0:n.title)?` title="${null===(o=null==c?void 0:c.groups)||void 0===o?void 0:o.title}"`:` title="${l.title}"`,children:u.code};return i.default.createElement("div",null,i.default.createElement(s.default,{...f},a.code),i.default.createElement("div",{style:d},i.default.createElement("a",{href:e.children,target:"_blank"},"See full example on GitHub")))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);