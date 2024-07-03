"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5647],{47612:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(74848),i=n(28453);const r={title:"Security Configurations",sidebar_position:1},o=void 0,a={id:"security/security",title:"Security Configurations",description:"Authentication and authorization in Superset is handled by Flask AppBuilder (FAB), an application development framework",source:"@site/docs/security/security.mdx",sourceDirName:"security",slug:"/security/",permalink:"/docs/security/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/security/security.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Security Configurations",sidebar_position:1},sidebar:"CustomSidebar",previous:{title:"Misc.",permalink:"/docs/contributing/misc"},next:{title:"CVEs fixed by release",permalink:"/docs/security/cves"}},l={},c=[{value:"Provided Roles",id:"provided-roles",level:3},{value:"Admin",id:"admin",level:3},{value:"Alpha",id:"alpha",level:3},{value:"Gamma",id:"gamma",level:3},{value:"sql_lab",id:"sql_lab",level:3},{value:"Public",id:"public",level:3},{value:"Managing Data Source Access for Gamma Roles",id:"managing-data-source-access-for-gamma-roles",level:3},{value:"REST API for user &amp; role management",id:"rest-api-for-user--role-management",level:3},{value:"Customizing Permissions",id:"customizing-permissions",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Restricting Access to a Subset of Data Sources",id:"restricting-access-to-a-subset-of-data-sources",level:3},{value:"Row Level Security",id:"row-level-security",level:3},{value:"User Sessions",id:"user-sessions",level:3},{value:"Switching to server side sessions",id:"switching-to-server-side-sessions",level:4},{value:"Content Security Policy (CSP)",id:"content-security-policy-csp",level:3},{value:"CSP Requirements",id:"csp-requirements",level:4},{value:"Other Talisman security considerations",id:"other-talisman-security-considerations",level:4},{value:"Reporting Security Vulnerabilities",id:"reporting-security-vulnerabilities",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Authentication and authorization in Superset is handled by Flask AppBuilder (FAB), an application development framework\nbuilt on top of Flask. FAB provides authentication, user management, permissions and roles.\nPlease read its ",(0,t.jsx)(s.a,{href:"https://flask-appbuilder.readthedocs.io/en/latest/security.html",children:"Security documentation"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"provided-roles",children:"Provided Roles"}),"\n",(0,t.jsx)(s.p,{children:"Superset ships with a set of roles that are handled by Superset itself. You can assume\nthat these roles will stay up-to-date as Superset evolves (and as you update Superset versions)."}),"\n",(0,t.jsxs)(s.p,{children:["Even though ",(0,t.jsx)(s.strong,{children:"Admin"})," users have the ability, we don't recommend altering the\npermissions associated with each role (e.g. by removing or adding permissions to them). The permissions\nassociated with each role will be re-synchronized to their original values when you run\nthe ",(0,t.jsx)(s.strong,{children:"superset init"})," command (often done between Superset versions)."]}),"\n",(0,t.jsxs)(s.p,{children:["A table with the permissions for these roles can be found at ",(0,t.jsx)(s.a,{href:"https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md",children:"/RESOURCES/STANDARD_ROLES.md"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"admin",children:"Admin"}),"\n",(0,t.jsx)(s.p,{children:"Admins have all possible rights, including granting or revoking rights from other\nusers and altering other people\u2019s slices and dashboards."}),"\n",(0,t.jsx)(s.h3,{id:"alpha",children:"Alpha"}),"\n",(0,t.jsx)(s.p,{children:"Alpha users have access to all data sources, but they cannot grant or revoke access\nfrom other users. They are also limited to altering the objects that they own. Alpha users can add and alter data sources."}),"\n",(0,t.jsx)(s.h3,{id:"gamma",children:"Gamma"}),"\n",(0,t.jsx)(s.p,{children:"Gamma users have limited access. They can only consume data coming from data sources\nthey have been given access to through another complementary role. They only have access to\nview the slices and dashboards made from data sources that they have access to. Currently Gamma\nusers are not able to alter or add data sources. We assume that they are mostly content consumers, though they can create slices and dashboards."}),"\n",(0,t.jsx)(s.p,{children:"Also note that when Gamma users look at the dashboards and slices list view, they will\nonly see the objects that they have access to."}),"\n",(0,t.jsx)(s.h3,{id:"sql_lab",children:"sql_lab"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"sql_lab"})," role grants access to SQL Lab. Note that while ",(0,t.jsx)(s.strong,{children:"Admin"})," users have access\nto all databases by default, both ",(0,t.jsx)(s.strong,{children:"Alpha"})," and ",(0,t.jsx)(s.strong,{children:"Gamma"})," users need to be given access on a per database basis."]}),"\n",(0,t.jsx)(s.h3,{id:"public",children:"Public"}),"\n",(0,t.jsxs)(s.p,{children:["To allow logged-out users to access some Superset features, you can use the ",(0,t.jsx)(s.code,{children:"PUBLIC_ROLE_LIKE"})," config setting and assign it to another role whose permissions you want passed to this role."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, by setting ",(0,t.jsx)(s.code,{children:'PUBLIC_ROLE_LIKE = "Gamma"'})," in your ",(0,t.jsx)(s.code,{children:"superset_config.py"})," file, you grant\npublic role the same set of permissions as for the ",(0,t.jsx)(s.strong,{children:"Gamma"})," role. This is useful if one\nwants to enable anonymous users to view dashboards. Explicit grant on specific datasets is\nstill required, meaning that you need to edit the ",(0,t.jsx)(s.strong,{children:"Public"})," role and add the public data sources to the role manually."]}),"\n",(0,t.jsx)(s.h3,{id:"managing-data-source-access-for-gamma-roles",children:"Managing Data Source Access for Gamma Roles"}),"\n",(0,t.jsx)(s.p,{children:"Here\u2019s how to provide users access to only specific datasets. First make sure the users with\nlimited access have [only] the Gamma role assigned to them. Second, create a new role (Menu -> Security -> List Roles) and click the + sign."}),"\n",(0,t.jsxs)(s.p,{children:["This new window allows you to give this new role a name, attribute it to users and select the\ntables in the ",(0,t.jsx)(s.strong,{children:"Permissions"})," dropdown. To select the data sources you want to associate with this role, simply click on the dropdown and use the typeahead to search for your table names."]}),"\n",(0,t.jsxs)(s.p,{children:["You can then confirm with users assigned to the ",(0,t.jsx)(s.strong,{children:"Gamma"})," role that they see the\nobjects (dashboards and slices) associated with the tables you just extended them."]}),"\n",(0,t.jsx)(s.h3,{id:"rest-api-for-user--role-management",children:"REST API for user & role management"}),"\n",(0,t.jsx)(s.p,{children:"Flask-AppBuilder supports a REST API for user CRUD,\nbut this feature is in beta and is not enabled by default in Superset.\nTo enable this feature, set the following in your Superset configuration:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"FAB_ADD_SECURITY_API = True\n"})}),"\n",(0,t.jsx)(s.p,{children:'Once configured, the documentation for additional "Security" endpoints will be visible in Swagger for you to explore.'}),"\n",(0,t.jsx)(s.h3,{id:"customizing-permissions",children:"Customizing Permissions"}),"\n",(0,t.jsxs)(s.p,{children:["The permissions exposed by FAB are very granular and allow for a great level of\ncustomization. FAB creates many permissions automatically for each model that is\ncreated (can_add, can_delete, can_show, can_edit, \u2026) as well as for each view.\nOn top of that, Superset can expose more granular permissions like ",(0,t.jsx)(s.strong,{children:"all_datasource_access"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"We do not recommend altering the 3 base roles as there are a set of assumptions that\nSuperset is built upon"}),". It is possible though for you to create your own roles, and union them to existing ones."]}),"\n",(0,t.jsx)(s.h3,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsx)(s.p,{children:"Roles are composed of a set of permissions, and Superset has many categories of\npermissions. Here are the different categories of permissions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Model & Action: models are entities like Dashboard, Slice, or User. Each model has\na fixed set of permissions, like ",(0,t.jsx)(s.strong,{children:"can_edit"}),", ",(0,t.jsx)(s.strong,{children:"can_show"}),", ",(0,t.jsx)(s.strong,{children:"can_delete"}),", ",(0,t.jsx)(s.strong,{children:"can_list"}),", ",(0,t.jsx)(s.strong,{children:"can_add"}),",\nand so on. For example, you can allow a user to delete dashboards by adding ",(0,t.jsx)(s.strong,{children:"can_delete"})," on\nDashboard entity to a role and granting this user that role."]}),"\n",(0,t.jsx)(s.li,{children:"Views: views are individual web pages, like the Explore view or the SQL Lab view.\nWhen granted to a user, they will see that view in its menu items, and be able to load that page."}),"\n",(0,t.jsxs)(s.li,{children:["Data source: For each data source, a permission is created. If the user does not have the\n",(0,t.jsx)(s.code,{children:"all_datasource_access permission"})," granted, the user will only be able to see Slices or explore the data sources that are granted to them"]}),"\n",(0,t.jsx)(s.li,{children:"Database: Granting access to a database allows for the user to access all\ndata sources within that database, and will enable the user to query that\ndatabase in SQL Lab, provided that the SQL Lab specific permission have been granted to the user"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"restricting-access-to-a-subset-of-data-sources",children:"Restricting Access to a Subset of Data Sources"}),"\n",(0,t.jsxs)(s.p,{children:["We recommend giving a user the ",(0,t.jsx)(s.strong,{children:"Gamma"})," role plus any other roles that would add\naccess to specific data sources. We recommend that you create individual roles for\neach access profile. For example, the users on the Finance team might have access to a set of\ndatabases and data sources; these permissions can be consolidated in a single role.\nUsers with this profile then need to be assigned the ",(0,t.jsx)(s.strong,{children:"Gamma"})," role as a foundation to\nthe models and views they can access, and that Finance role that is a collection of permissions to data objects."]}),"\n",(0,t.jsxs)(s.p,{children:["A user can have multiple roles associated with them. For example, an executive on the Finance\nteam could be granted ",(0,t.jsx)(s.strong,{children:"Gamma"}),", ",(0,t.jsx)(s.strong,{children:"Finance"}),", and the ",(0,t.jsx)(s.strong,{children:"Executive"})," roles. The ",(0,t.jsx)(s.strong,{children:"Executive"}),"\nrole could provide access to a set of data sources and dashboards made available only to executives.\nIn the ",(0,t.jsx)(s.strong,{children:"Dashboards"})," view, a user can only see the ones they have access too\nbased on the roles and permissions that were attributed."]}),"\n",(0,t.jsx)(s.h3,{id:"row-level-security",children:"Row Level Security"}),"\n",(0,t.jsxs)(s.p,{children:["Using Row Level Security filters (under the ",(0,t.jsx)(s.strong,{children:"Security"})," menu) you can create filters\nthat are assigned to a particular table, as well as a set of roles.\nIf you want members of the Finance team to only have access to\nrows where ",(0,t.jsx)(s.code,{children:'department = "finance"'}),", you could:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a Row Level Security filter with that clause (",(0,t.jsx)(s.code,{children:'department = "finance"'}),")"]}),"\n",(0,t.jsxs)(s.li,{children:["Then assign the clause to the ",(0,t.jsx)(s.strong,{children:"Finance"})," role and the table it applies to"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"clause"})," field, which can contain arbitrary text, is then added to the generated\nSQL statement\u2019s WHERE clause. So you could even do something like create a filter\nfor the last 30 days and apply it to a specific role, with a clause\nlike ",(0,t.jsx)(s.code,{children:"date_field > DATE_SUB(NOW(), INTERVAL 30 DAY)"}),". It can also support\nmultiple conditions: ",(0,t.jsx)(s.code,{children:"client_id = 6"})," AND ",(0,t.jsx)(s.code,{children:'advertiser="foo"'}),", etc."]}),"\n",(0,t.jsx)(s.p,{children:"All relevant Row level security filters will be combined together (under the hood,\nthe different SQL clauses are combined using AND statements). This means it's\npossible to create a situation where two roles conflict in such a way as to limit a table subset to empty."}),"\n",(0,t.jsxs)(s.p,{children:["For example, the filters ",(0,t.jsx)(s.code,{children:"client_id=4"})," and ",(0,t.jsx)(s.code,{children:"client_id=5"}),", applied to a role,\nwill result in users of that role having ",(0,t.jsx)(s.code,{children:"client_id=4"})," AND ",(0,t.jsx)(s.code,{children:"client_id=5"}),"\nadded to their query, which can never be true."]}),"\n",(0,t.jsx)(s.h3,{id:"user-sessions",children:"User Sessions"}),"\n",(0,t.jsxs)(s.p,{children:["Superset uses ",(0,t.jsx)(s.a,{href:"https://pypi.org/project/Flask/",children:"Flask"}),"\nand ",(0,t.jsx)(s.a,{href:"https://pypi.org/project/Flask-Login/",children:"Flask-Login"})," for user session management."]}),"\n",(0,t.jsxs)(s.p,{children:["Session cookies are used to maintain session info and user state between requests,\nalthough they do not contain personal user information they serve the purpose of identifying\na user session on the server side.\nThe session cookie is encrypted with the application ",(0,t.jsx)(s.code,{children:"SECRET_KEY"})," and cannot be read by the client.\nSo it's very important to keep the ",(0,t.jsx)(s.code,{children:"SECRET_KEY"})," secret and set to a secure unique complex random value."]}),"\n",(0,t.jsx)(s.p,{children:"Flask and Flask-Login offer a number of configuration options to control session behavior."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Relevant Flask settings:"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SESSION_COOKIE_HTTPONLY"}),": (default: ",(0,t.jsx)(s.code,{children:"False"}),"): Controls if cookies should be set with the ",(0,t.jsx)(s.code,{children:"HttpOnly"})," flag."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SESSION_COOKIE_SECURE"}),": (default: ",(0,t.jsx)(s.code,{children:"False"}),") Browsers will only send cookies with requests over\nHTTPS if the cookie is marked \u201csecure\u201d. The application must be served over HTTPS for this to make sense."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SESSION_COOKIE_SAMESITE"}),': (default: "Lax") Prevents the browser from sending this cookie along with cross-site requests.']}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"PERMANENT_SESSION_LIFETIME"}),': (default: "31 days") The lifetime of a permanent session as a ',(0,t.jsx)(s.code,{children:"datetime.timedelta"})," object."]}),"\n",(0,t.jsx)(s.h4,{id:"switching-to-server-side-sessions",children:"Switching to server side sessions"}),"\n",(0,t.jsx)(s.p,{children:"Server side sessions offer benefits over client side sessions on security and performance.\nBy enabling server side sessions, the session data is stored server side and only a session ID\nis sent to the client. When a user logs in, a session is created server side and the session ID\nis sent to the client in a cookie. The client will send the session ID with each request and the\nserver will use it to retrieve the session data.\nOn logout, the session is destroyed server side and the session cookie is deleted on the client side.\nThis reduces the risk for replay attacks and session hijacking."}),"\n",(0,t.jsxs)(s.p,{children:["Superset uses ",(0,t.jsx)(s.a,{href:"https://flask-session.readthedocs.io/en/latest/",children:"Flask-Session"})," to manage server side sessions.\nTo enable this extension you have to set:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"SESSION_SERVER_SIDE = True\n"})}),"\n",(0,t.jsx)(s.p,{children:"Flask-Session offers multiple backend session interfaces for Flask, here's an example for Redis:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'from redis import Redis\n\nSESSION_TYPE = "redis"\nSESSION_REDIS = Redis(host="redis", port=6379, db=0)\n# sign the session cookie sid\nSESSION_USE_SIGNER = True\n'})}),"\n",(0,t.jsx)(s.h3,{id:"content-security-policy-csp",children:"Content Security Policy (CSP)"}),"\n",(0,t.jsxs)(s.p,{children:["Superset uses the ",(0,t.jsx)(s.a,{href:"https://pypi.org/project/flask-talisman/",children:"Talisman"})," extension to enable implementation of a\n",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"Content Security Policy (CSP)"}),", an added\nlayer of security that helps to detect and mitigate certain types of attacks, including\nCross-Site Scripting (XSS) and data injection attacks."]}),"\n",(0,t.jsx)(s.p,{children:"A CSP makes it possible for server administrators to reduce or eliminate the vectors by which XSS can\noccur by specifying the domains that the browser should consider to be valid sources of executable scripts.\nA CSP-compatible browser will then only execute scripts loaded in source files received from those allowed domains,\nignoring all other scripts (including inline scripts and event-handling HTML attributes)."}),"\n",(0,t.jsxs)(s.p,{children:["A policy is described using a series of policy directives, each of which describes the policy for\na certain resource type or policy area. You can check possible directives\n",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",children:"here"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["It's extremely important to correctly configure a Content Security Policy when deploying Superset to\nprevent many types of attacks. Superset provides two variables in ",(0,t.jsx)(s.code,{children:"config.py"})," for deploying a CSP:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"TALISMAN_ENABLED"})," defaults to ",(0,t.jsx)(s.code,{children:"True"}),"; set this to ",(0,t.jsx)(s.code,{children:"False"})," in order to disable CSP"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"TALISMAN_CONFIG"})," holds the actual the policy definition (",(0,t.jsx)(s.em,{children:"see example below"}),") as well as any\nother arguments to be passed to Talisman."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When running in production mode, Superset will check at startup for the presence\nof a CSP. If one is not found, it will issue a warning with the security risks. For environments\nwhere CSP policies are defined outside of Superset using other software, administrators can disable\nthis warning using the ",(0,t.jsx)(s.code,{children:"CONTENT_SECURITY_POLICY_WARNING"})," key in ",(0,t.jsx)(s.code,{children:"config.py"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"csp-requirements",children:"CSP Requirements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Superset needs the ",(0,t.jsx)(s.code,{children:"style-src unsafe-inline"})," CSP directive in order to operate."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"style-src 'self' 'unsafe-inline'\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Only scripts marked with a ",(0,t.jsx)(s.a,{href:"https://content-security-policy.com/nonce/",children:"nonce"})," can be loaded and executed.\nNonce is a random string automatically generated by Talisman on each page load.\nYou can get current nonce value by calling jinja macro ",(0,t.jsx)(s.code,{children:"csp_nonce()"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'<script nonce="{{ csp_nonce() }}">\n/* my script */\n<\/script>\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Some dashboards load images using data URIs and require ",(0,t.jsx)(s.code,{children:"data:"})," in their ",(0,t.jsx)(s.code,{children:"img-src"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"img-src 'self' data:\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"MapBox charts use workers and need to connect to MapBox servers in addition to the Superset origin"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"worker-src 'self' blob:\nconnect-src 'self' https://api.mapbox.com https://events.mapbox.com\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Other CSP directives default to ",(0,t.jsx)(s.code,{children:"'self'"})," to limit content to the same origin as the Superset server."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In order to adjust provided CSP configuration to your needs, follow the instructions and examples provided in\n",(0,t.jsx)(s.a,{href:"https://content-security-policy.com/",children:"Content Security Policy Reference"})]}),"\n",(0,t.jsx)(s.h4,{id:"other-talisman-security-considerations",children:"Other Talisman security considerations"}),"\n",(0,t.jsxs)(s.p,{children:["Setting ",(0,t.jsx)(s.code,{children:"TALISMAN_ENABLED = True"})," will invoke Talisman's protection with its default arguments,\nof which ",(0,t.jsx)(s.code,{children:"content_security_policy"})," is only one. Those can be found in the\n",(0,t.jsx)(s.a,{href:"https://pypi.org/project/flask-talisman/",children:"Talisman documentation"})," under ",(0,t.jsx)(s.em,{children:"Options"}),".\nThese generally improve security, but administrators should be aware of their existence."]}),"\n",(0,t.jsxs)(s.p,{children:["In particular, the option of ",(0,t.jsx)(s.code,{children:"force_https = True"})," (",(0,t.jsx)(s.code,{children:"False"})," by default) may break Superset's Alerts & Reports\nif workers are configured to access charts via a ",(0,t.jsx)(s.code,{children:"WEBDRIVER_BASEURL"})," beginning\nwith ",(0,t.jsx)(s.code,{children:"http://"}),".  As long as a Superset deployment enforces https upstream, e.g.,\nthrough a load balancer or application gateway, it should be acceptable to keep this\noption disabled. Otherwise, you may want to enable ",(0,t.jsx)(s.code,{children:"force_https"})," like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'TALISMAN_CONFIG = {\n    "force_https": True,\n    "content_security_policy": { ...\n'})}),"\n",(0,t.jsx)(s.h3,{id:"reporting-security-vulnerabilities",children:"Reporting Security Vulnerabilities"}),"\n",(0,t.jsx)(s.p,{children:"Apache Software Foundation takes a rigorous standpoint in annihilating the security issues in its\nsoftware projects. Apache Superset is highly sensitive and forthcoming to issues pertaining to its\nfeatures and functionality."}),"\n",(0,t.jsxs)(s.p,{children:["If you have apprehensions regarding Superset security or you discover vulnerability or potential\nthreat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at\n",(0,t.jsx)(s.a,{href:"mailto:security@apache.org",children:"security@apache.org"}),". In the mail, specify the project name Superset with the description of the\nissue or potential threat. You are also urged to recommend the way to reproduce and replicate the\nissue. The security team and the Superset community will get back to you after assessing and\nanalysing the findings."]}),"\n",(0,t.jsxs)(s.p,{children:["PLEASE PAY ATTENTION to report the security issue on the security email before disclosing it on\npublic domain. The ASF Security Team maintains a page with the description of how vulnerabilities\nand potential threats are handled, check ",(0,t.jsx)(s.a,{href:"https://apache.org/security/committers.html",children:"their web page"}),"\nfor more details."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);