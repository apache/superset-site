"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(83117),i=(n(67294),n(3905));const o={title:"Conventions and Typing",hide_title:!0,sidebar_position:7,version:1},a=void 0,p={unversionedId:"contributing/conventions-and-typing",id:"contributing/conventions-and-typing",title:"Conventions and Typing",description:"Conventions",source:"@site/docs/contributing/conventions-and-typing.mdx",sourceDirName:"contributing",slug:"/contributing/conventions-and-typing",permalink:"/docs/contributing/conventions-and-typing",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/conventions-and-typing.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Conventions and Typing",hide_title:!0,sidebar_position:7,version:1},sidebar:"tutorialSidebar",previous:{title:"Pre-commit Hooks and Linting",permalink:"/docs/contributing/hooks-and-linting"},next:{title:"Testing",permalink:"/docs/contributing/testing-locally"}},s={},l=[{value:"Conventions",id:"conventions",level:2},{value:"Python",id:"python",level:3},{value:"Typing",id:"typing",level:2},{value:"Python",id:"python-1",level:3},{value:"TypeScript",id:"typescript",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"conventions"},"Conventions"),(0,i.kt)("h3",{id:"python"},"Python"),(0,i.kt)("p",null,"Parameters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.py")," (which are accessible via the Flask app.config dictionary) are assumed to always be defined and thus should be accessed directly via,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'blueprints = app.config["BLUEPRINTS"]\n')),(0,i.kt)("p",null,"rather than,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'blueprints = app.config.get("BLUEPRINTS")\n')),(0,i.kt)("p",null,"or similar as the later will cause typing issues. The former is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"List[Callable]")," whereas the later is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional[List[Callable]]"),"."),(0,i.kt)("h2",{id:"typing"},"Typing"),(0,i.kt)("h3",{id:"python-1"},"Python"),(0,i.kt)("p",null,"To ensure clarity, consistency, all readability, ",(0,i.kt)("em",{parentName:"p"},"all")," new functions should use\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/typing.html"},"type hints")," and include a\ndocstring."),(0,i.kt)("p",null,"Note per ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0484/#exceptions"},"PEP-484")," no\nsyntax for listing explicitly raised exceptions is proposed and thus the\nrecommendation is to put this information in a docstring, i.e.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import math\nfrom typing import Union\n\n\ndef sqrt(x: Union[float, int]) -> Union[float, int]:\n    """\n    Return the square root of x.\n\n    :param x: A number\n    :returns: The square root of the given number\n    :raises ValueError: If the number is negative\n    """\n\n    return math.sqrt(x)\n')),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"TypeScript is fully supported and is the recommended language for writing all new frontend components. When modifying existing functions/components, migrating to TypeScript is appreciated, but not required. Examples of migrating functions/components to TypeScript can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/pull/9162"},"#9162")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/pull/9180"},"#9180"),"."))}d.isMDXComponent=!0}}]);