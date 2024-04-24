"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4315],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,d=u["".concat(s,".").concat(g)]||u[g]||y[g]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const o={title:"Conventions and Typing",hide_title:!0,sidebar_position:7,version:1},a=void 0,p={unversionedId:"contributing/conventions-and-typing",id:"contributing/conventions-and-typing",title:"Conventions and Typing",description:"Conventions",source:"@site/docs/contributing/conventions-and-typing.mdx",sourceDirName:"contributing",slug:"/contributing/conventions-and-typing",permalink:"/docs/contributing/conventions-and-typing",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/contributing/conventions-and-typing.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Conventions and Typing",hide_title:!0,sidebar_position:7,version:1},sidebar:"CustomSidebar",previous:{title:"Pre-commit Hooks and Linting",permalink:"/docs/contributing/hooks-and-linting"},next:{title:"Testing",permalink:"/docs/contributing/testing-locally"}},s={},l=[{value:"Conventions",id:"conventions",level:2},{value:"Python",id:"python",level:3},{value:"Typing",id:"typing",level:2},{value:"Python",id:"python-1",level:3},{value:"TypeScript",id:"typescript",level:3}],c={toc:l},u="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"conventions"},"Conventions"),(0,i.yg)("h3",{id:"python"},"Python"),(0,i.yg)("p",null,"Parameters in the ",(0,i.yg)("inlineCode",{parentName:"p"},"config.py")," (which are accessible via the Flask app.config dictionary) are assumed to always be defined and thus should be accessed directly via,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'blueprints = app.config["BLUEPRINTS"]\n')),(0,i.yg)("p",null,"rather than,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'blueprints = app.config.get("BLUEPRINTS")\n')),(0,i.yg)("p",null,"or similar as the later will cause typing issues. The former is of type ",(0,i.yg)("inlineCode",{parentName:"p"},"List[Callable]")," whereas the later is of type ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional[List[Callable]]"),"."),(0,i.yg)("h2",{id:"typing"},"Typing"),(0,i.yg)("h3",{id:"python-1"},"Python"),(0,i.yg)("p",null,"To ensure clarity, consistency, all readability, ",(0,i.yg)("em",{parentName:"p"},"all")," new functions should use\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/typing.html"},"type hints")," and include a\ndocstring."),(0,i.yg)("p",null,"Note per ",(0,i.yg)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0484/#exceptions"},"PEP-484")," no\nsyntax for listing explicitly raised exceptions is proposed and thus the\nrecommendation is to put this information in a docstring, i.e.,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'import math\nfrom typing import Union\n\n\ndef sqrt(x: Union[float, int]) -> Union[float, int]:\n    """\n    Return the square root of x.\n\n    :param x: A number\n    :returns: The square root of the given number\n    :raises ValueError: If the number is negative\n    """\n\n    return math.sqrt(x)\n')),(0,i.yg)("h3",{id:"typescript"},"TypeScript"),(0,i.yg)("p",null,"TypeScript is fully supported and is the recommended language for writing all new frontend components. When modifying existing functions/components, migrating to TypeScript is appreciated, but not required. Examples of migrating functions/components to TypeScript can be found in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/pull/9162"},"#9162")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/pull/9180"},"#9180"),"."))}y.isMDXComponent=!0}}]);