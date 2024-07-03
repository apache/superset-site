"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[829],{79737:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=e(74848),o=e(28453);const t=JSON.parse('{"X":["Afghanistan","Aland","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua And Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia And Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic Of The Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","France (regions)","French Polynesia","Gabon","Gambia","Germany","Ghana","Greece","Greenland","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras","Iceland","India","Indonesia","Iran","Israel","Italy","Italy (regions)","Japan","Jordan","Kazakhstan","Kenya","Korea","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Moldova","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Philippines (regions)","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Lucia","Saint Pierre And Miquelon","Saint Vincent And The Grenadines","Samoa","San Marino","Sao Tome And Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Bahamas","Timorleste","Togo","Tonga","Trinidad And Tobago","Tunisia","Turkey","Turkey (regions)","Turkmenistan","Turks And Caicos Islands","Uganda","UK","Ukraine","United Arab Emirates","United States Minor Outlying Islands","United States Virgin Islands","Uruguay","USA","Uzbekistan","Vanuatu","Venezuela","Vietnam","Wallis And Futuna","Yemen","Zambia","Zimbabwe"]}'),r={title:"Country Map Tools",sidebar_position:10,version:1},s="The Country Map Visualization",l={id:"configuration/country-map-tools",title:"Country Map Tools",description:"The Country Map visualization allows you to plot lightweight choropleth maps of",source:"@site/docs/configuration/country-map-tools.mdx",sourceDirName:"configuration",slug:"/configuration/country-map-tools",permalink:"/docs/configuration/country-map-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/configuration/country-map-tools.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Country Map Tools",sidebar_position:10,version:1},sidebar:"CustomSidebar",previous:{title:"Event Logging",permalink:"/docs/configuration/event-logging"},next:{title:"Importing and Exporting Datasources",permalink:"/docs/configuration/importing-exporting-datasources"}},u={},c=[{value:"Included Maps",id:"included-maps",level:2},{value:"Adding a New Country",id:"adding-a-new-country",level:2}];function d(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.R)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"the-country-map-visualization",children:"The Country Map Visualization"}),"\n",(0,i.jsxs)(n.p,{children:["The Country Map visualization allows you to plot lightweight choropleth maps of\nyour countries by province, states, or other subdivision types. It does not rely\non any third-party map services but would require you to provide the\n",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-2",children:"ISO-3166-2"})," codes of your country's\ntop-level subdivisions. Comparing to a province or state's full names, the ISO\ncode is less ambiguous and is unique to all regions in the world."]}),"\n",(0,i.jsx)(n.h2,{id:"included-maps",children:"Included Maps"}),"\n",(0,i.jsxs)(n.p,{children:["The current list of countries can be found in the src\n",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/src/countries.ts",children:"legacy-plugin-chart-country-map/src/countries.ts"})]}),"\n",(0,i.jsx)(n.p,{children:"The Country Maps visualization already ships with the maps for the following countries:"}),"\n",(0,i.jsx)("ul",{style:{columns:3},children:t.X.map(((a,e)=>(0,i.jsx)(n.li,{children:a},e)))}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-new-country",children:"Adding a New Country"}),"\n",(0,i.jsxs)(n.p,{children:["To add a new country to the list, you'd have to edit files in\n",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/tree/master/superset-frontend/plugins/legacy-plugin-chart-country-map",children:"@superset-ui/legacy-plugin-chart-country-map"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate a new GeoJSON file for your country following the guide in ",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/scripts/Country%20Map%20GeoJSON%20Generator.ipynb",children:"this Jupyter notebook"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Edit the countries list in ",(0,i.jsx)(n.a,{href:"https://github.com/apache/superset/blob/master/superset-frontend/plugins/legacy-plugin-chart-country-map/src/countries.ts",children:"legacy-plugin-chart-country-map/src/countries.ts"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Install superset-frontend dependencies: ",(0,i.jsx)(n.code,{children:"cd superset-frontend && npm install"})]}),"\n",(0,i.jsxs)(n.li,{children:["Verify your countries in Superset plugins storybook: ",(0,i.jsx)(n.code,{children:"npm run plugins:storybook"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Build and install Superset from source code."}),"\n"]})]})}function p(a={}){const{wrapper:n}={...(0,o.R)(),...a.components};return n?(0,i.jsx)(n,{...a,children:(0,i.jsx)(d,{...a})}):d(a)}},28453:(a,n,e)=>{e.d(n,{R:()=>r,x:()=>s});var i=e(96540);const o={},t=i.createContext(o);function r(a){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function s(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:r(a.components),i.createElement(t.Provider,{value:n},a.children)}}}]);