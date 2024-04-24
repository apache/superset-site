"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[757],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,y=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={title:"Trino",hide_title:!0,sidebar_position:34,version:1},o=void 0,l={unversionedId:"databases/trino",id:"databases/trino",title:"Trino",description:"Trino",source:"@site/docs/databases/trino.mdx",sourceDirName:"databases",slug:"/databases/trino",permalink:"/docs/databases/trino",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/databases/trino.mdx",tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Trino",hide_title:!0,sidebar_position:34,version:1},sidebar:"CustomSidebar",previous:{title:"Hologres",permalink:"/docs/databases/hologres"},next:{title:"Rockset",permalink:"/docs/databases/rockset"}},p={},s=[{value:"Trino",id:"trino",level:2},{value:"Connection String",id:"connection-string",level:3},{value:"Authentications",id:"authentications",level:3},{value:"1. Basic Authentication",id:"1-basic-authentication",level:4},{value:"2. Kerberos Authentication",id:"2-kerberos-authentication",level:4},{value:"3. Certificate Authentication",id:"3-certificate-authentication",level:4},{value:"4. JWT Authentication",id:"4-jwt-authentication",level:4},{value:"5. Custom Authentication",id:"5-custom-authentication",level:4}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"trino"},"Trino"),(0,r.yg)("p",null,"Supported trino version 352 and higher"),(0,r.yg)("h3",{id:"connection-string"},"Connection String"),(0,r.yg)("p",null,"The connection string format is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"trino://{username}:{password}@{hostname}:{port}/{catalog}\n")),(0,r.yg)("p",null,"If you are running Trino with docker on local machine, please use the following connection URL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"trino://trino@host.docker.internal:8080\n")),(0,r.yg)("h3",{id:"authentications"},"Authentications"),(0,r.yg)("h4",{id:"1-basic-authentication"},"1. Basic Authentication"),(0,r.yg)("p",null,"You can provide ",(0,r.yg)("inlineCode",{parentName:"p"},"username"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"password")," in the connection string or in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field at ",(0,r.yg)("inlineCode",{parentName:"p"},"Advanced / Security")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In Connection String"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"trino://{username}:{password}@{hostname}:{port}/{catalog}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "basic",\n    "auth_params": {\n        "username": "<username>",\n        "password": "<password>"\n    }\n}\n')))),(0,r.yg)("p",null,"NOTE: if both are provided, ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," always takes higher priority."),(0,r.yg)("h4",{id:"2-kerberos-authentication"},"2. Kerberos Authentication"),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field, config as following example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "kerberos",\n    "auth_params": {\n        "service_name": "superset",\n        "config": "/path/to/krb5.config",\n        ...\n    }\n}\n')),(0,r.yg)("p",null,"All fields in ",(0,r.yg)("inlineCode",{parentName:"p"},"auth_params")," are passed directly to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino-python-client/blob/0.306.0/trino/auth.py#L40"},(0,r.yg)("inlineCode",{parentName:"a"},"KerberosAuthentication"))," class."),(0,r.yg)("p",null,"NOTE: Kerberos authentication requires installing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino-python-client"},(0,r.yg)("inlineCode",{parentName:"a"},"trino-python-client"))," locally with either the ",(0,r.yg)("inlineCode",{parentName:"p"},"all")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"kerberos")," optional features, i.e., installing ",(0,r.yg)("inlineCode",{parentName:"p"},"trino[all]")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"trino[kerberos]")," respectively."),(0,r.yg)("h4",{id:"3-certificate-authentication"},"3. Certificate Authentication"),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field, config as following example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "certificate",\n    "auth_params": {\n        "cert": "/path/to/cert.pem",\n        "key": "/path/to/key.pem"\n    }\n}\n')),(0,r.yg)("p",null,"All fields in ",(0,r.yg)("inlineCode",{parentName:"p"},"auth_params")," are passed directly to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino-python-client/blob/0.315.0/trino/auth.py#L416"},(0,r.yg)("inlineCode",{parentName:"a"},"CertificateAuthentication"))," class."),(0,r.yg)("h4",{id:"4-jwt-authentication"},"4. JWT Authentication"),(0,r.yg)("p",null,"Config ",(0,r.yg)("inlineCode",{parentName:"p"},"auth_method")," and provide token in ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "jwt",\n    "auth_params": {\n        "token": "<your-jwt-token>"\n    }\n}\n')),(0,r.yg)("h4",{id:"5-custom-authentication"},"5. Custom Authentication"),(0,r.yg)("p",null,"To use custom authentication, first you need to add it into\n",(0,r.yg)("inlineCode",{parentName:"p"},"ALLOWED_EXTRA_AUTHENTICATIONS")," allow list in Superset config file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from your.module import AuthClass\nfrom another.extra import auth_method\n\nALLOWED_EXTRA_AUTHENTICATIONS: Dict[str, Dict[str, Callable[..., Any]]] = {\n    "trino": {\n        "custom_auth": AuthClass,\n        "another_auth_method": auth_method,\n    },\n}\n')),(0,r.yg)("p",null,"Then in ",(0,r.yg)("inlineCode",{parentName:"p"},"Secure Extra")," field:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "auth_method": "custom_auth",\n    "auth_params": {\n        ...\n    }\n}\n')),(0,r.yg)("p",null,"You can also use custom authentication by providing reference to your ",(0,r.yg)("inlineCode",{parentName:"p"},"trino.auth.Authentication")," class\nor factory function (which returns an ",(0,r.yg)("inlineCode",{parentName:"p"},"Authentication")," instance) to ",(0,r.yg)("inlineCode",{parentName:"p"},"auth_method"),"."),(0,r.yg)("p",null,"All fields in ",(0,r.yg)("inlineCode",{parentName:"p"},"auth_params")," are passed directly to your class/function."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Reference"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://trino.io/episodes/12.html"},"Trino-Superset-Podcast"))))}d.isMDXComponent=!0}}]);