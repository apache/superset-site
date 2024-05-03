(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3444],{15680:(e,t,n)=>{"use strict";n.d(t,{xA:()=>u,yg:()=>f});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16151:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(96540)),a=o(n(55594)),l=o(n(79087));e.exports=(l.default,e=>e.reference?r.default.createElement(a.default,{...e}):r.default.createElement(l.default,{...e}))},55594:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseCustomization=t.parseReference=void 0;const c=a(n(96540)),i=l(n(79087)),s="See full example on GitHub",u={code:"loading...",error:null,loading:null},d={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function m(e){const t=e.slice(e.indexOf("https"),-1),[n,o]=t.split("#"),r=globalThis||{};r.URL||(r.URL=URL);const[a,l,c,i,...s]=new r.URL(n).pathname.split("/").slice(1),[u,d]=o?o.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${a}/${l}/${i}/${s.join("/")}`,fromLine:u,toLine:d,title:s.join("/")}}function p(e){var t,n,o,r;const a=null===(n=null===(t=null==e?void 0:e.match(/title="(?<title>.*?)"/))||void 0===t?void 0:t.groups)||void 0===n?void 0:n.title,l=null==e?void 0:e.match(/referenceLinkText="(?<referenceLinkText>.*?)"/),c=null!==(r=null===(o=null==l?void 0:l.groups)||void 0===o?void 0:o.referenceLinkText)&&void 0!==r?r:s,i=null==e?void 0:e.match(/customStyling/),u=1===(null==i?void 0:i.length);return{title:a,linkText:c,noteStyling:1===(null==i?void 0:i.length)?{}:d,useCustomStyling:u}}function f(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=m,t.parseCustomization=p,t.codeReducer=f,t.default=function(e){const[t,n]=(0,c.useReducer)(f,u),o=m(e.children);!1!==t.loading&&async function({url:e,fromLine:t,toLine:n},o){let r;try{r=await fetch(e)}catch(c){return o({type:"error",value:c})}if(200!==r.status)return o({type:"error",value:await r.text()});const a=(await r.text()).split("\n").slice(t,(n||t)+1),l=a.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);o({type:"loaded",value:a.map((e=>e.slice(l))).join("\n")})}(o,n);const r=p(e.metastring),a={...e,metastring:r.title?` title="${r.title}"`:` title="${o.title}"`,children:u.code};return c.default.createElement("div",null,c.default.createElement(i.default,{...a},t.code),c.default.createElement("div",{style:r.noteStyling,className:r.useCustomStyling?"github-codeblock-reference-link":""},c.default.createElement("a",{href:e.children,target:"_blank"},r.linkText)))}},79087:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var o=n(58168),r=n(96540),a=n(92303),l=n(40870),c=n(95293),i=n(6342);function s(){const{prism:e}=(0,i.p)(),{colorMode:t}=(0,c.G)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(17559),d=n(18426),m=n.n(d);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&f.test(a)){const e=a.match(f).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(o,r),c=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<c.length;){const e=c[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${m},`:u[t]?i[u[t]].start=m:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const p={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};function b(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(s());return r.createElement(t,(0,o.A)({},n,{style:a,className:(0,l.A)(n.className,y.codeBlockContainer,u.G.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return r.createElement(b,{as:"pre",tabIndex:0,className:(0,l.A)(E.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:E.codeBlockLines},t))}var N=n(89532);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=C);const o=(0,N._q)(t),a=(0,N.Be)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const A={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(2725).A,theme:A};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}var T=/\r\n|\r|\n/,B=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function j(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var S=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=_({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=_({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=_({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?_({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),x(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),x(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=_({},j(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?_({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),x(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=o[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][a];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=O(u,d.type),d.alias&&(u=O(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(T),p=m.length;c.push({types:u,content:m[0]});for(var f=1;f<p;f++)B(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),o.push(0),r.push(s.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return B(c),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const H=S,P={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function M(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=c({line:t,className:(0,l.A)(n,a&&P.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,o.A)({key:t},i({token:e,key:t})))));return r.createElement("span",s,a?r.createElement(r.Fragment,null,r.createElement("span",{className:P.codeLineNumber}),r.createElement("span",{className:P.codeLineContent},u)):u,r.createElement("br",null))}var z=n(21312);function R(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function D(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),l=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,z.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:i},r.createElement("span",{className:I.copyButtonIcons,"aria-hidden":"true"},r.createElement(R,{className:I.copyButtonIcon}),r.createElement(D,{className:I.copyButtonSuccessIcon})))}function W(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const V={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function q(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,z.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,o&&V.wordWrapButtonEnabled),"aria-label":a,title:a},r.createElement(W,{className:V.wordWrapButtonIcon,"aria-hidden":"true"}))}function G(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:m,magicComments:f}}=(0,i.p)(),h=d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,g=s(),y=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return L(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){return e?.match(p)?.groups.title??""}(a)||c,{lineClassNames:N,code:C}=v(t,{metastring:a,language:h,magicComments:f}),A=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return r.createElement(b,{as:"div",className:(0,l.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&r.createElement("div",{className:E.codeBlockTitle},k),r.createElement("div",{className:E.codeBlockContent},r.createElement(H,(0,o.A)({},w,{theme:g,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,l.A)(t,E.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.A)(E.codeBlockLines,A&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(M,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:N[t],showLineNumbers:A})))))})),r.createElement("div",{className:E.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&r.createElement(q,{className:E.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),r.createElement($,{className:E.codeButton,code:C}))))}function U(e){let{children:t,...n}=e;const l=(0,a.A)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?G:k;return r.createElement(i,(0,o.A)({key:String(l)},n),c)}},51107:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var o=n(58168),r=n(96540),a=n(40870),l=n(21312),c=n(6342),i=n(75489);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,c.p)();if("h1"===t||!n)return r.createElement(t,(0,o.A)({},u,{id:void 0}));const m=(0,l.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return r.createElement(t,(0,o.A)({},u,{className:(0,a.A)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,u.className),id:n}),u.children,r.createElement(i.A,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},66886:(e,t,n)=>{"use strict";n.d(t,{A:()=>M});var o=n(96540),r=n(15680),a=n(58168),l=n(5260);var c=n(16151),i=n.n(c);var s=n(75489);var u=n(40870),d=n(29423),m=n(92303),p=n(41422);const f={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function v(e){let{summary:t,children:n,...r}=e;const l=(0,m.A)(),c=(0,o.useRef)(null),{collapsed:i,setCollapsed:s}=(0,p.u)({initialState:!r.open}),[u,v]=(0,o.useState)(r.open),y=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,a.A)({},r,{ref:c,open:u,"data-collapsed":i,className:(0,d.A)(f.details,l&&f.isBrowser,r.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&g(t,c.current)&&(e.preventDefault(),i?(s(!1),v(!0)):s(!0))}}),y,o.createElement(p.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),v(!e)}},o.createElement("div",{className:f.collapsibleContent},n)))}const y={details:"details_b_Ee"},b="alert alert--info";function E(e){let{...t}=e;return o.createElement(v,(0,a.A)({},t,{className:(0,u.A)(b,y.details,t.className)}))}var k=n(51107);function N(e){return o.createElement(k.A,e)}const C={containsTaskList:"containsTaskList_mC6p"};function L(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&C.containsTaskList)}const A={img:"img_ev3q"};var w=n(17559),x=n(21312);const _="admonition_LlT9",T="admonitionHeading_tbUL",B="admonitionIcon_kALy",O="admonitionContent_S0QG";const j={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(x.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(x.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(x.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(x.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(x.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},S={secondary:"note",important:"info",success:"tip",warning:"danger"};function H(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const P={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(l.A,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(i(),e)},a:function(e){return o.createElement(s.A,e)},pre:function(e){return o.createElement(i(),(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(E,(0,a.A)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,a.A)({},e,{className:L(e.className)}))},img:function(e){return o.createElement("img",(0,a.A)({loading:"lazy"},e,{className:(t=e.className,(0,u.A)(t,A.img))}));var t},h1:e=>o.createElement(N,(0,a.A)({as:"h1"},e)),h2:e=>o.createElement(N,(0,a.A)({as:"h2"},e)),h3:e=>o.createElement(N,(0,a.A)({as:"h3"},e)),h4:e=>o.createElement(N,(0,a.A)({as:"h4"},e)),h5:e=>o.createElement(N,(0,a.A)({as:"h5"},e)),h6:e=>o.createElement(N,(0,a.A)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:a}=H(e),l=function(e){const t=S[e]??e,n=j[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),j.info)}(n),c=r??l.label,{iconComponent:i}=l,s=a??o.createElement(i,null);return o.createElement("div",{className:(0,u.A)(w.G.common.admonition,w.G.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,_)},o.createElement("div",{className:T},o.createElement("span",{className:B},s),c),o.createElement("div",{className:O},t))},mermaid:()=>null};function M(e){let{children:t}=e;return o.createElement(r.xA,{components:P},t)}},67763:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var o=n(58168),r=n(96540),a=n(40870),l=n(65195);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.A)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(l.A,(0,o.A)({},n,{linkClassName:i,linkActiveClassName:s})))}},65195:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var o=n(58168),r=n(96540),a=n(6342);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>i(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),i=s(c,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function m(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const p=r.memo(m);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:m,...f}=e;const h=(0,a.p)(),g=u??h.tableOfContents.minHeadingLevel,v=m??h.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,r.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:v}}),[i,s,g,v])),r.createElement(p,(0,o.A)({toc:y,className:n,linkClassName:i},f))}},18426:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);