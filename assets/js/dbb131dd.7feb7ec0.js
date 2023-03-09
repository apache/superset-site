"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6860],{18683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=(n(67294),n(3905));const a={title:"Creating Visualization Plugins",hide_title:!0,sidebar_position:10,version:1},o=void 0,l={unversionedId:"contributing/creating-viz-plugins",id:"contributing/creating-viz-plugins",title:"Creating Visualization Plugins",description:"Creating Visualization Plugins",source:"@site/docs/contributing/creating-viz-plugins.mdx",sourceDirName:"contributing",slug:"/contributing/creating-viz-plugins",permalink:"/docs/contributing/creating-viz-plugins",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/creating-viz-plugins.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Creating Visualization Plugins",hide_title:!0,sidebar_position:10,version:1},sidebar:"tutorialSidebar",previous:{title:"Translating",permalink:"/docs/contributing/translations"},next:{title:"Frequently Asked Questions",permalink:"/docs/frequently-asked-questions"}},s={},u=[{value:"Creating Visualization Plugins",id:"creating-visualization-plugins",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a simple Hello World viz plugin",id:"creating-a-simple-hello-world-viz-plugin",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-visualization-plugins"},"Creating Visualization Plugins"),(0,i.kt)("p",null,'Visualizations in Superset are implemented in JavaScript or TypeScript. Superset\ncomes preinstalled with several visualizations types (hereafter "viz plugins") that\ncan be found under the ',(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/plugins")," directory. Viz plugins are added to\nthe application in the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/src/visualizations/presets/MainPreset.js"),".\nThe Superset project is always happy to review proposals for new high quality viz\nplugins. However, for highly custom viz types it is recommended to maintain a fork\nof Superset, and add the custom built viz plugins by hand."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to create a new viz plugin, you need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run MacOS or Linux (Windows is not officially supported, but may work)"),(0,i.kt)("li",{parentName:"ul"},"Node.js 16"),(0,i.kt)("li",{parentName:"ul"},"npm 7 or 8")),(0,i.kt)("p",null,"A general familiarity with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and the npm/Node system is\nalso recommended."),(0,i.kt)("h3",{id:"creating-a-simple-hello-world-viz-plugin"},"Creating a simple Hello World viz plugin"),(0,i.kt)("p",null,"To get started, you need the Superset Yeoman Generator. It is recommended to use the\nversion of the template that ships with the version of Superset you are using. This\ncan be installed by doing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g yo\ncd superset-frontend/packages/generator-superset\nnpm i\nnpm link\n")),(0,i.kt)("p",null,"After this you can proceed to create your viz plugin. Create a new directory for your\nviz plugin with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-plugin-chart")," and run the Yeoman generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /tmp/superset-plugin-chart-hello-world\ncd /tmp/superset-plugin-chart-hello-world\n")),(0,i.kt)("p",null,"Initialize the viz plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yo @superset-ui/superset\n")),(0,i.kt)("p",null,"After that the generator will ask a few questions (the defaults should be fine):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yo @superset-ui/superset\n     _-----_     \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n    |       |    \u2502      Welcome to the      \u2502\n    |--(o)--|    \u2502    generator-superset    \u2502\n   `---------\xb4   \u2502        generator!        \u2502\n    ( _\xb4U`_ )    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n    /___A___\\   /\n     |  ~  |\n   __'.___.'__\n \xb4   `  |\xb0 \xb4 Y `\n? Package name: superset-plugin-chart-hello-world\n? Description: Hello World\n? What type of chart would you like? Time-series chart\n   create package.json\n   create .gitignore\n   create babel.config.js\n   create jest.config.js\n   create README.md\n   create tsconfig.json\n   create src/index.ts\n   create src/plugin/buildQuery.ts\n   create src/plugin/controlPanel.ts\n   create src/plugin/index.ts\n   create src/plugin/transformProps.ts\n   create src/types.ts\n   create src/SupersetPluginChartHelloWorld.tsx\n   create test/index.test.ts\n   create test/__mocks__/mockExportString.js\n   create test/plugin/buildQuery.test.ts\n   create test/plugin/transformProps.test.ts\n   create types/external.d.ts\n   create src/images/thumbnail.png\n")),(0,i.kt)("p",null,"To build the viz plugin, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i --force\nnpm run build\n")),(0,i.kt)("p",null,"Alternatively, to run the viz plugin in development mode (=rebuilding whenever changes\nare made), start the dev server with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,i.kt)("p",null,"To add the package to Superset, go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend")," subdirectory in your\nSuperset source folder run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S /tmp/superset-plugin-chart-hello-world\n")),(0,i.kt)("p",null,"If you publish your package to npm, you can naturally install directly from there, too.\nAfter this edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/src/visualizations/presets/MainPreset.js"),"\nand make the following changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SupersetPluginChartHelloWorld } from 'superset-plugin-chart-hello-world';\n")),(0,i.kt)("p",null,"to import the viz plugin and later add the following to the array that's passed to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new SupersetPluginChartHelloWorld().configure({ key: 'ext-hello-world' }),\n")),(0,i.kt)("p",null,"After that the viz plugin should show up when you run Superset, e.g. the development\nserver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev-server\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);