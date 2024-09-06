(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2440],{16151:function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=s(n(96540)),i=s(n(55594)),a=s(n(21432));e.exports=(a.default,e=>e.reference?o.default.createElement(i.default,{...e}):o.default.createElement(a.default,{...e}))},55594:function(e,t,n){"use strict";var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,o)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseCustomization=t.parseReference=void 0;const r=i(n(96540)),c=a(n(21432)),l="See full example on GitHub",d={code:"loading...",error:null,loading:null},u={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function m(e){const t=e.slice(e.indexOf("https"),-1),[n,s]=t.split("#"),o=globalThis||{};o.URL||(o.URL=URL);const[i,a,r,c,...l]=new o.URL(n).pathname.split("/").slice(1),[d,u]=s?s.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${i}/${a}/${c}/${l.join("/")}`,fromLine:d,toLine:u,title:l.join("/")}}function h(e){var t,n,s,o;const i=null===(n=null===(t=null==e?void 0:e.match(/title="(?<title>.*?)"/))||void 0===t?void 0:t.groups)||void 0===n?void 0:n.title,a=null==e?void 0:e.match(/referenceLinkText="(?<referenceLinkText>.*?)"/),r=null!==(o=null===(s=null==a?void 0:a.groups)||void 0===s?void 0:s.referenceLinkText)&&void 0!==o?o:l,c=null==e?void 0:e.match(/customStyling/),d=1===(null==c?void 0:c.length);return{title:i,linkText:r,noteStyling:1===(null==c?void 0:c.length)?{}:u,useCustomStyling:d}}function f(e,{type:t,value:n}){switch(t){case"reset":return d;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=m,t.parseCustomization=h,t.codeReducer=f,t.default=function(e){const[t,n]=(0,r.useReducer)(f,d),s=m(e.children);!1!==t.loading&&async function({url:e,fromLine:t,toLine:n},s){let o;try{o=await fetch(e)}catch(r){return s({type:"error",value:r})}if(200!==o.status)return s({type:"error",value:await o.text()});const i=(await o.text()).split("\n").slice(t,(n||t)+1),a=i.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);s({type:"loaded",value:i.map((e=>e.slice(a))).join("\n")})}(s,n);const o=h(e.metastring),i={...e,metastring:o.title?` title="${o.title}"`:` title="${s.title}"`,children:d.code};return r.default.createElement("div",null,r.default.createElement(c.default,{...i},t.code),r.default.createElement("div",{style:o.noteStyling,className:o.useCustomStyling?"github-codeblock-reference-link":""},r.default.createElement("a",{href:e.children,target:"_blank"},o.linkText)))}},27293:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var s=n(96540),o=n(74848);function i(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,o.jsx)(o.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}var a=n(34164),r=n(21312),c=n(17559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,o.jsxs)(d,{type:t,className:a,children:[s||n?(0,o.jsx)(u,{title:s,icon:n}):null,(0,o.jsx)(m,{children:i})]})}function f(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,o.jsx)(h,{...p,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(h,{...v,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,o.jsx)(h,{...y,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const w={...{note:g,tip:b,info:N,warning:function(e){return(0,o.jsx)(h,{...C,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(g,{title:"secondary",...e}),important:e=>(0,o.jsx)(N,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...L,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=i(e),n=(s=t.type,w[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),w.info));var s;return(0,o.jsx)(n,{...t})}},21432:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var s=n(96540),o=n(92303),i=n(34164),a=n(95293),r=n(6342);function c(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,a.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var l=n(17559),d=n(18426),u=n.n(d);const m=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},p={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(f);function x(e,t){const n=e.map((e=>{const{start:n,end:s}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:i}=t;if(i&&h.test(i)){const e=i.match(h).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=u()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return x(["tex"],t);case"lua":case"haskell":case"sql":return x(["lua"],t);case"wasm":return x(["wasm"],t);case"vb":case"vba":case"visual-basic":return x(["vb","rem"],t);case"vbnet":return x(["vbnet","rem"],t);case"batch":return x(["rem"],t);case"basic":return x(["rem","f90"],t);case"fsharp":return x(["js","ml"],t);case"ocaml":case"sml":return x(["ml"],t);case"fortran":return x(["f90"],t);case"cobol":return x(["cobol"],t);default:return x(g,t)}}(s,o),r=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let u=0;u<r.length;){const e=r[u].match(a);if(!e){u+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${u},`:d[t]?c[d[t]].start=u:m[t]&&(c[m[t]].range+=`${c[m[t]].start}-${u-1},`),r.splice(u,1)}n=r.join("\n");const f={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;u()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};var j=n(74848);function y(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const i=t[s];i&&"string"==typeof o&&(n[i]=o)})),n}(c());return(0,j.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,b.codeBlockContainer,l.G.common.codeBlock)})}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function A(e){let{children:t,className:n}=e;return(0,j.jsx)(y,{as:"pre",tabIndex:0,className:(0,i.A)(N.codeBlockStandalone,"thin-scrollbar",n),children:(0,j.jsx)("code",{className:N.codeBlockLines,children:t})})}var C=n(89532);const k={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,o]=(0,s.useState)(),i=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=k);const o=(0,C._q)(t),i=(0,C.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,i),()=>t.disconnect()}),[e,o,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var L=n(71765);const w={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=o({line:t,className:(0,i.A)(n,s&&w.codeLine)}),c=t.map(((e,t)=>(0,j.jsx)("span",{...a({token:e})},t)));return(0,j.jsxs)("span",{...r,children:[s?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:w.codeLineNumber}),(0,j.jsx)("span",{className:w.codeLineContent,children:c})]}):c,(0,j.jsx)("br",{})]})}var E=n(21312);function T(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function H(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const i=document.getSelection(),a=i.rangeCount>0&&i.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),a&&(i.removeAllRanges(),i.addRange(a)),o&&o.focus()}(t),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,j.jsx)("button",{type:"button","aria-label":o?(0,E.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,S.copyButton,o&&S.copyButtonCopied),onClick:c,children:(0,j.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,j.jsx)(T,{className:S.copyButtonIcon}),(0,j.jsx)(H,{className:S.copyButtonSuccessIcon})]})})}function I(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const U={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function R(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,E.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,j.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&U.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,j.jsx)(I,{className:U.wordWrapButtonIcon,"aria-hidden":"true"})})}function O(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:l,language:d}=e;const{prism:{defaultLanguage:u,magicComments:h}}=(0,r.p)(),f=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),p=c(),g=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),i=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[i,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=i.current,n=e>t||i.current.querySelector("code").hasAttribute("style");o(n)}),[i]);return B(i,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:a}}(),x=function(e){return e?.match(m)?.groups.title??""}(o)||a,{lineClassNames:b,code:A}=v(t,{metastring:o,language:f,magicComments:h}),C=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,j.jsxs)(y,{as:"div",className:(0,i.A)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[x&&(0,j.jsx)("div",{className:N.codeBlockTitle,children:x}),(0,j.jsxs)("div",{className:N.codeBlockContent,children:[(0,j.jsx)(L.f4,{theme:p,code:A,language:f??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,j.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,i.A)(t,N.codeBlock,"thin-scrollbar"),style:n,children:(0,j.jsx)("code",{className:(0,i.A)(N.codeBlockLines,C&&N.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,j.jsx)(_,{line:e,getLineProps:o,getTokenProps:a,classNames:b[t],showLineNumbers:C},t)))})})}}),(0,j.jsxs)("div",{className:N.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,j.jsx)(R,{className:N.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,j.jsx)(M,{className:N.codeButton,code:A})]})]})]})}function z(e){let{children:t,...n}=e;const i=(0,o.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof a?O:A;return(0,j.jsx)(r,{...n,children:a},String(i))}},86896:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});n(96540);var s=n(34164),o=n(21312),i=n(5260),a=n(74848);function r(){return(0,a.jsx)(o.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,a.jsx)(o.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,a.jsx)(o.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,a.jsx)(o.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(17559),h=n(27293);function f(e){let{className:t}=e;return(0,a.jsx)(h.A,{type:"caution",title:(0,a.jsx)(d,{}),className:(0,s.A)(t,m.G.common.draftBanner),children:(0,a.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,a.jsx)(h.A,{type:"caution",title:(0,a.jsx)(r,{}),className:(0,s.A)(t,m.G.common.unlistedBanner),children:(0,a.jsx)(c,{})})}function g(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),(0,a.jsx)(p,{...e})]})}function x(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,a.jsxs)(a.Fragment,{children:[(n||s.unlisted)&&(0,a.jsx)(g,{}),s.draft&&(0,a.jsx)(f,{})]})}},12153:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});n(96540);var s=n(34164),o=n(21312),i=n(17559),a=n(28774);const r={iconEdit:"iconEdit_Z9Sw"};var c=n(74848);function l(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,c.jsxs)(a.A,{to:t,className:i.G.common.editThisPage,children:[(0,c.jsx)(l,{}),(0,c.jsx)(o.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(44586);function m(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,u.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,u.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function h(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=m({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,c.jsx)(o.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,c.jsx)(o.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,c.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,c.jsx)(o.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,c.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,c.jsx)(f,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const g={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:i}=e;return(0,c.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,c.jsx)("div",{className:"col",children:n&&(0,c.jsx)(d,{editUrl:n})}),(0,c.jsx)("div",{className:(0,s.A)("col",g.lastUpdated),children:(o||i)&&(0,c.jsx)(p,{lastUpdatedAt:o,lastUpdatedBy:i})})]})}},65425:(e,t,n)=>{"use strict";n.d(t,{A:()=>E});var s=n(96540),o=n(28453),i=n(5260),a=n(16151),r=n.n(a),c=n(74848);function l(e){return(0,c.jsx)("code",{...e})}var d=n(28774);var u=n(34164),m=n(63427),h=n(92303),f=n(41422);const p={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function x(e,t){return!!e&&(e===t||x(e.parentElement,t))}function v(e){let{summary:t,children:n,...o}=e;(0,m.A)().collectAnchor(o.id);const i=(0,h.A)(),a=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,f.u)({initialState:!o.open}),[d,v]=(0,s.useState)(o.open),b=s.isValidElement(t)?t:(0,c.jsx)("summary",{children:t??"Details"});return(0,c.jsxs)("details",{...o,ref:a,open:d,"data-collapsed":r,className:(0,u.A)(p.details,i&&p.isBrowser,o.className),onMouseDown:e=>{g(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;g(t)&&x(t,a.current)&&(e.preventDefault(),r?(l(!1),v(!0)):l(!0))},children:[b,(0,c.jsx)(f.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),v(!e)},children:(0,c.jsx)("div",{className:p.collapsibleContent,children:n})})]})}const b={details:"details_b_Ee"},j="alert alert--info";function y(e){let{...t}=e;return(0,c.jsx)(v,{...t,className:(0,u.A)(j,b.details,t.className)})}function N(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,c.jsx)(c.Fragment,{children:t.filter((e=>e!==n))});return(0,c.jsx)(y,{...e,summary:n,children:o})}var A=n(51107);function C(e){return(0,c.jsx)(A.A,{...e})}const k={containsTaskList:"containsTaskList_mC6p"};function B(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&k.containsTaskList)}const L={img:"img_ev3q"};var w=n(27293);const _={Head:i.A,details:N,Details:N,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,c.jsx)(l,{...e}):(0,c.jsx)(r(),{...e})},a:function(e){return(0,c.jsx)(d.A,{...e})},pre:function(e){return(0,c.jsx)(c.Fragment,{children:e.children})},ul:function(e){return(0,c.jsx)("ul",{...e,className:B(e.className)})},li:function(e){return(0,m.A)().collectAnchor(e.id),(0,c.jsx)("li",{...e})},img:function(e){return(0,c.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,L.img))});var t},h1:e=>(0,c.jsx)(C,{as:"h1",...e}),h2:e=>(0,c.jsx)(C,{as:"h2",...e}),h3:e=>(0,c.jsx)(C,{as:"h3",...e}),h4:e=>(0,c.jsx)(C,{as:"h4",...e}),h5:e=>(0,c.jsx)(C,{as:"h5",...e}),h6:e=>(0,c.jsx)(C,{as:"h6",...e}),admonition:w.A,mermaid:()=>null};function E(e){let{children:t}=e;return(0,c.jsx)(o.x,{components:_,children:t})}},67763:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(96540);var s=n(34164),o=n(65195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=n(74848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function l(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(o.A,{...n,linkClassName:r,linkActiveClassName:c})})}},65195:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var s=n(96540),o=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),l=c(r,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(28774),m=n(74848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const p=(0,o.p)(),g=l??p.tableOfContents.minHeadingLevel,x=u??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>a({toc:i(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:x});return d((0,s.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[r,c,g,x])),(0,m.jsx)(f,{toc:v,className:n,linkClassName:r,...h})}},18426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,i]=t;if(s&&i){s=parseInt(s),i=parseInt(i);const e=s<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=e);for(let t=s;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);