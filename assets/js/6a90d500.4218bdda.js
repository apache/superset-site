"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7271],{79925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Country Map Tools",hide_title:!0,sidebar_position:1,version:1},u=void 0,p={unversionedId:"miscellaneous/country-map-tools",id:"miscellaneous/country-map-tools",title:"Country Map Tools",description:"The Country Map Visualization",source:"@site/docs/miscellaneous/country-map-tools.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/country-map-tools",permalink:"/docs/miscellaneous/country-map-tools",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/miscellaneous/country-map-tools.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Country Map Tools",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"Exploring Data in Superset",permalink:"/docs/creating-charts-dashboards/exploring-data"},next:{title:"Importing and Exporting Datasources",permalink:"/docs/miscellaneous/importing-exporting-datasources"}},s={},c=[{value:"The Country Map Visualization",id:"the-country-map-visualization",level:2},{value:"Included Maps",id:"included-maps",level:2},{value:"Adding a New Country",id:"adding-a-new-country",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-country-map-visualization"},"The Country Map Visualization"),(0,o.kt)("p",null,"The Country Map visualization allows you to plot lightweight choropleth maps of\nyour countries by province, states, or other subdivision types. It does not rely\non any third-party map services but would require you to provide the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-2"},"ISO-3166-2")," codes of your country's\ntop-level subdivisions. Comparing to a province or state's full names, the ISO\ncode is less ambiguous and is unique to all regions in the world."),(0,o.kt)("h2",{id:"included-maps"},"Included Maps"),(0,o.kt)("p",null,"The Country Maps visualization already ships with the maps for the following countries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Belgium"),(0,o.kt)("li",{parentName:"ul"},"Brazil"),(0,o.kt)("li",{parentName:"ul"},"Bulgaria"),(0,o.kt)("li",{parentName:"ul"},"Canada"),(0,o.kt)("li",{parentName:"ul"},"China"),(0,o.kt)("li",{parentName:"ul"},"Egypt"),(0,o.kt)("li",{parentName:"ul"},"France"),(0,o.kt)("li",{parentName:"ul"},"Germany"),(0,o.kt)("li",{parentName:"ul"},"India"),(0,o.kt)("li",{parentName:"ul"},"Iran"),(0,o.kt)("li",{parentName:"ul"},"Italy"),(0,o.kt)("li",{parentName:"ul"},"Japan"),(0,o.kt)("li",{parentName:"ul"},"Korea"),(0,o.kt)("li",{parentName:"ul"},"Liechtenstein"),(0,o.kt)("li",{parentName:"ul"},"Morocco"),(0,o.kt)("li",{parentName:"ul"},"Myanmar"),(0,o.kt)("li",{parentName:"ul"},"Netherlands"),(0,o.kt)("li",{parentName:"ul"},"Portugal"),(0,o.kt)("li",{parentName:"ul"},"Russia"),(0,o.kt)("li",{parentName:"ul"},"Singapore"),(0,o.kt)("li",{parentName:"ul"},"Spain"),(0,o.kt)("li",{parentName:"ul"},"Switzerland"),(0,o.kt)("li",{parentName:"ul"},"Syria"),(0,o.kt)("li",{parentName:"ul"},"Thailand"),(0,o.kt)("li",{parentName:"ul"},"Timorleste"),(0,o.kt)("li",{parentName:"ul"},"Turkey"),(0,o.kt)("li",{parentName:"ul"},"UK"),(0,o.kt)("li",{parentName:"ul"},"Ukraine"),(0,o.kt)("li",{parentName:"ul"},"Uruguay"),(0,o.kt)("li",{parentName:"ul"},"USA"),(0,o.kt)("li",{parentName:"ul"},"Zambia")),(0,o.kt)("h2",{id:"adding-a-new-country"},"Adding a New Country"),(0,o.kt)("p",null,"To add a new country to the list, you'd have to edit files in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache-superset/superset-ui/tree/master/plugins/legacy-plugin-chart-country-map"},"@superset-ui/legacy-plugin-chart-country-map"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a new GeoJSON file for your country following the guide in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/scripts/Country%20Map%20GeoJSON%20Generator.ipynb"},"this Jupyter notebook"),"."),(0,o.kt)("li",{parentName:"ol"},"Edit the countries list in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/src/countries.ts"},"legacy-plugin-chart-country-map/src/countries.ts"),"."),(0,o.kt)("li",{parentName:"ol"},"Install superset-frontend dependencies: ",(0,o.kt)("inlineCode",{parentName:"li"},"cd superset-frontend && npm install")),(0,o.kt)("li",{parentName:"ol"},"Verify your countries in Superset plugins storybook: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run plugins:storybook"),"."),(0,o.kt)("li",{parentName:"ol"},"Build and install Superset from source code.")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);