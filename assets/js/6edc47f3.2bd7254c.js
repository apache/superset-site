"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1533],{72883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const i={title:"Setup SSH Tunneling",hide_title:!0,sidebar_position:13,version:1},l=void 0,o={unversionedId:"installation/setup-ssh-tunneling",id:"installation/setup-ssh-tunneling",title:"Setup SSH Tunneling",description:"SSH Tunneling",source:"@site/docs/installation/setup-ssh-tunneling.mdx",sourceDirName:"installation",slug:"/installation/setup-ssh-tunneling",permalink:"/docs/installation/setup-ssh-tunneling",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/setup-ssh-tunneling.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Setup SSH Tunneling",hide_title:!0,sidebar_position:13,version:1},sidebar:"tutorialSidebar",previous:{title:"Running on Kubernetes",permalink:"/docs/installation/running-on-kubernetes"},next:{title:"Installing Database Drivers",permalink:"/docs/databases/installing-database-drivers"}},s={},u=[{value:"SSH Tunneling",id:"ssh-tunneling",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ssh-tunneling"},"SSH Tunneling"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turn on feature flag"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/eb8386e3f0647df6d1bbde8b42073850796cc16f/superset/config.py#L489"},(0,a.kt)("inlineCode",{parentName:"a"},"SSH_TUNNELING"))," to ",(0,a.kt)("inlineCode",{parentName:"li"},"True")),(0,a.kt)("li",{parentName:"ul"},"If you want to add more security when establishing the tunnel we allow users to overwrite the ",(0,a.kt)("inlineCode",{parentName:"li"},"SSHTunnelManager")," class ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/eb8386e3f0647df6d1bbde8b42073850796cc16f/superset/config.py#L507"},"here")),(0,a.kt)("li",{parentName:"ul"},"You can also set the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/superset/blob/eb8386e3f0647df6d1bbde8b42073850796cc16f/superset/config.py#L508"},(0,a.kt)("inlineCode",{parentName:"a"},"SSH_TUNNEL_LOCAL_BIND_ADDRESS"))," this the host address where the tunnel will be accessible on your VPC"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create database w/ ssh tunnel enabled"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With the feature flag enabled you should now see ssh tunnel toggle."),(0,a.kt)("li",{parentName:"ul"},"Click the toggle to enables ssh tunneling and add your credentials accordingly.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Superset allows for 2 different type authenticaion (Basic + Private Key). These credentials should come from your service provider."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify data is flowing"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Once SSH tunneling has been enabled, go to SQL Lab and write a query to verify data is properly flowing.")))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,b=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);