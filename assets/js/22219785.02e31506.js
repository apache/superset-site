"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[829],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=a,d=c["".concat(u,".").concat(g)]||c[g]||y[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o=JSON.parse('{"X":["Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Belgium","Bolivia","Brazil","Bulgaria","Burundi","Canada","Chile","China","Colombia","Costa Rica","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","France","France (regions)","Finland","Germany","Guatemala","Haiti","Honduras","Iceland","India","Indonesia","Iran","Italy","Italy (regions)","Japan","Jordan","Kazakhstan","Kenya","Korea","Kuwait","Kyrgyzstan","Latvia","Liechtenstein","Lithuania","Malaysia","Mexico","Morocco","Myanmar","Netherlands","Nicaragua","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Philippines (regions)","Portugal","Poland","Puerto Rico","Qatar","Russia","Rwanda","Saint Barthelemy","Saint Martin","Saudi Arabia","Singapore","Slovenia","Spain","Sri Lanka","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timorleste","Turkey","Turkey (regions)","Turkmenistan","Uganda","UK","Ukraine","United Arab Emirates","Uruguay","USA","Uzbekistan","Venezuela","Vietnam","Zambia"]}'),i={title:"Country Map Tools",sidebar_position:10,version:1},s="The Country Map Visualization",u={unversionedId:"configuration/country-map-tools",id:"configuration/country-map-tools",title:"Country Map Tools",description:"The Country Map visualization allows you to plot lightweight choropleth maps of",source:"@site/docs/configuration/country-map-tools.mdx",sourceDirName:"configuration",slug:"/configuration/country-map-tools",permalink:"/docs/configuration/country-map-tools",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/country-map-tools.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Country Map Tools",sidebar_position:10,version:1},sidebar:"CustomSidebar",previous:{title:"Event Logging",permalink:"/docs/configuration/event-logging"},next:{title:"Importing and Exporting Datasources",permalink:"/docs/configuration/importing-exporting-datasources"}},l={},p=[{value:"Included Maps",id:"included-maps",level:2},{value:"Adding a New Country",id:"adding-a-new-country",level:2}],c={toc:p},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"the-country-map-visualization"},"The Country Map Visualization"),(0,a.yg)("p",null,"The Country Map visualization allows you to plot lightweight choropleth maps of\nyour countries by province, states, or other subdivision types. It does not rely\non any third-party map services but would require you to provide the\n",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-2"},"ISO-3166-2")," codes of your country's\ntop-level subdivisions. Comparing to a province or state's full names, the ISO\ncode is less ambiguous and is unique to all regions in the world."),(0,a.yg)("h2",{id:"included-maps"},"Included Maps"),(0,a.yg)("p",null,"The current list of countries can be found in the src\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/src/countries.ts"},"legacy-plugin-chart-country-map/src/countries.ts")),(0,a.yg)("p",null,"The Country Maps visualization already ships with the maps for the following countries:"),(0,a.yg)("ul",{style:{columns:3}},o.X.map(((e,t)=>(0,a.yg)("li",{key:t},e)))),(0,a.yg)("h2",{id:"adding-a-new-country"},"Adding a New Country"),(0,a.yg)("p",null,"To add a new country to the list, you'd have to edit files in\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/superset-frontend/plugins/legacy-plugin-chart-country-map"},"@superset-ui/legacy-plugin-chart-country-map"),"."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Generate a new GeoJSON file for your country following the guide in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/scripts/Country%20Map%20GeoJSON%20Generator.ipynb"},"this Jupyter notebook"),"."),(0,a.yg)("li",{parentName:"ol"},"Edit the countries list in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/src/countries.ts"},"legacy-plugin-chart-country-map/src/countries.ts"),"."),(0,a.yg)("li",{parentName:"ol"},"Install superset-frontend dependencies: ",(0,a.yg)("inlineCode",{parentName:"li"},"cd superset-frontend && npm install")),(0,a.yg)("li",{parentName:"ol"},"Verify your countries in Superset plugins storybook: ",(0,a.yg)("inlineCode",{parentName:"li"},"npm run plugins:storybook"),"."),(0,a.yg)("li",{parentName:"ol"},"Build and install Superset from source code.")))}g.isMDXComponent=!0}}]);