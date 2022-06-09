"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8718],{58977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Trino",hide_title:!0,sidebar_position:34,version:1},u=void 0,s={unversionedId:"databases/trino",id:"databases/trino",title:"Trino",description:"Trino",source:"@site/docs/databases/trino.mdx",sourceDirName:"databases",slug:"/databases/trino",permalink:"/docs/databases/trino",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/trino.mdx",tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Trino",hide_title:!0,sidebar_position:34,version:1},sidebar:"tutorialSidebar",previous:{title:"Hologres",permalink:"/docs/databases/hologres"},next:{title:"Rockset",permalink:"/docs/databases/rockset"}},c={},p=[{value:"Trino",id:"trino",level:2},{value:"Connection String",id:"connection-string",level:3},{value:"Authentications",id:"authentications",level:3},{value:"1. Basic Authentication",id:"1-basic-authentication",level:4},{value:"2. Kerberos Authentication",id:"2-kerberos-authentication",level:4},{value:"3. JWT Authentication",id:"3-jwt-authentication",level:4},{value:"4. Custom Authentication",id:"4-custom-authentication",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"trino"},"Trino"),(0,o.kt)("p",null,"Supported trino version 352 and higher"),(0,o.kt)("h3",{id:"connection-string"},"Connection String"),(0,o.kt)("p",null,"The connection string format is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"trino://{username}:{password}@{hostname}:{port}/{catalog}\n")),(0,o.kt)("p",null,"If you are running Trino with docker on local machine, please use the following connection URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"trino://trino@host.docker.internal:8080\n")),(0,o.kt)("h3",{id:"authentications"},"Authentications"),(0,o.kt)("h4",{id:"1-basic-authentication"},"1. Basic Authentication"),(0,o.kt)("p",null,"You can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"username"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"password")," in the connection string or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," field at ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced / Security")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Connection String"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"trino://{username}:{password}@{hostname}:{port}/{catalog}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," field"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "basic",\n    "auth_params": {\n        "username": "<username>",\n        "password": "<password>"\n    }\n}\n')))),(0,o.kt)("p",null,"NOTE: if both are provided, ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," always takes higher priority."),(0,o.kt)("h4",{id:"2-kerberos-authentication"},"2. Kerberos Authentication"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," field, config as following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "kerberos",\n    "auth_params": {\n        "service_name": "superset",\n        "config": "/path/to/krb5.config",\n        ...\n    }\n}\n')),(0,o.kt)("p",null,"All fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_params")," are passed directly to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trinodb/trino-python-client/blob/0.306.0/trino/auth.py#L40"},(0,o.kt)("inlineCode",{parentName:"a"},"KerberosAuthentication"))," class."),(0,o.kt)("h4",{id:"3-jwt-authentication"},"3. JWT Authentication"),(0,o.kt)("p",null,"Config ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_method")," and provide token in ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "jwt",\n    "auth_params": {\n        "token": "<your-jwt-token>"\n    }\n}\n')),(0,o.kt)("h4",{id:"4-custom-authentication"},"4. Custom Authentication"),(0,o.kt)("p",null,"To use custom authentication, first you need to add it into\n",(0,o.kt)("inlineCode",{parentName:"p"},"ALLOWED_EXTRA_AUTHENTICATIONS")," allow list in Superset config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from your.module import AuthClass\nfrom another.extra import auth_method\n\nALLOWED_EXTRA_AUTHENTICATIONS: Dict[str, Dict[str, Callable[..., Any]]] = {\n    "trino": {\n        "custom_auth": AuthClass,\n        "another_auth_method": auth_method,\n    },\n}\n')),(0,o.kt)("p",null,"Then in ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure Extra")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "custom_auth",\n    "auth_params": {\n        ...\n    }\n}\n')),(0,o.kt)("p",null,"You can also use custom authentication by providing reference to your ",(0,o.kt)("inlineCode",{parentName:"p"},"trino.auth.Authentication")," class\nor factory function (which returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication")," instance) to ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_method"),"."),(0,o.kt)("p",null,"All fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"auth_params")," are passed directly to your class/function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://trino.io/episodes/12.html"},"Trino-Superset-Podcast"))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);