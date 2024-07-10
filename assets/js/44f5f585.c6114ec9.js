"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[550],{21953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(74848),a=n(28453),r=n(86025);const i={title:"Creating Your First Dashboard",hide_title:!0,sidebar_position:1,version:1},o=void 0,l={id:"using-superset/creating-your-first-dashboard",title:"Creating Your First Dashboard",description:"Creating Your First Dashboard",source:"@site/docs/using-superset/creating-your-first-dashboard.mdx",sourceDirName:"using-superset",slug:"/using-superset/creating-your-first-dashboard",permalink:"/docs/using-superset/creating-your-first-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/using-superset/creating-your-first-dashboard.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating Your First Dashboard",hide_title:!0,sidebar_position:1,version:1},sidebar:"CustomSidebar",previous:{title:"Importing and Exporting Datasources",permalink:"/docs/configuration/importing-exporting-datasources"},next:{title:"Exploring Data in Superset",permalink:"/docs/using-superset/exploring-data"}},d={},c=[{value:"Creating Your First Dashboard",id:"creating-your-first-dashboard",level:2},{value:"Connecting to a new database",id:"connecting-to-a-new-database",level:3},{value:"Registering a new table",id:"registering-a-new-table",level:3},{value:"Customizing column properties",id:"customizing-column-properties",level:3},{value:"Superset semantic layer",id:"superset-semantic-layer",level:3},{value:"Creating charts in Explore view",id:"creating-charts-in-explore-view",level:3},{value:"Creating a slice and dashboard",id:"creating-a-slice-and-dashboard",level:3},{value:"Manage access to Dashboards",id:"manage-access-to-dashboards",level:3},{value:"Customizing dashboard",id:"customizing-dashboard",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"creating-your-first-dashboard",children:"Creating Your First Dashboard"}),"\n",(0,s.jsxs)(t.p,{children:["This section is focused on documentation for end-users who will be using Superset\nfor the data analysis and exploration workflow\n(data analysts, business analysts, data\nscientists, etc). In addition to this site, ",(0,s.jsx)(t.a,{href:"http://preset.io/",children:"Preset.io"})," maintains an updated set of end-user\ndocumentation at ",(0,s.jsx)(t.a,{href:"https://docs.preset.io/",children:"docs.preset.io"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This tutorial targets someone who wants to create charts and dashboards in Superset. We\u2019ll show you\nhow to connect Superset to a new database and configure a table in that database for analysis.\nYou\u2019ll also explore the data you\u2019ve exposed and add a visualization to a dashboard so that you get a\nfeel for the end-to-end user experience."}),"\n",(0,s.jsx)(t.h3,{id:"connecting-to-a-new-database",children:"Connecting to a new database"}),"\n",(0,s.jsx)(t.p,{children:"Superset itself doesn't have a storage layer to store your data but instead pairs with\nyour existing SQL-speaking database or data store."}),"\n",(0,s.jsxs)(t.p,{children:["First things first, we need to add the connection credentials to your database to be able\nto query and visualize data from it. If you're using Superset locally via\n",(0,s.jsx)(t.a,{href:"/docs/installation/docker-compose",children:"Docker compose"}),", you can\nskip this step because a Postgres database, named ",(0,s.jsx)(t.strong,{children:"examples"}),", is included and\npre-configured in Superset for you."]}),"\n",(0,s.jsxs)(t.p,{children:["Under the ",(0,s.jsx)(t.strong,{children:"+"})," menu in the top right, select Data, and then the ",(0,s.jsx)(t.em,{children:"Connect Database"})," option:"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_01_add_database_connection.png"),width:"600"}),"\n"," ","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Then select your database type in the resulting modal:"}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_02_select_database.png"),width:"600"}),"\n"," ","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Once you've selected a database, you can configure a number of advanced options in this window,\nor for the purposes of this walkthrough, you can click the link below all these fields:"}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_03a_database_connection_string_link.png"),width:"600"}),"\n"," ","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Once you've clicked that link you only need to specify two things (the database name and SQLAlchemy URI):"}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_03b_connection_string_details.png"),width:"600"}),"\n"," ","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.p,{children:["As noted in the text below the form, you should refer to the SQLAlchemy documentation on\n",(0,s.jsx)(t.a,{href:"https://docs.sqlalchemy.org/en/12/core/engines.html#database-urls",children:"creating new connection URIs"}),"\nfor your target database."]}),"\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Test Connection"})," button to confirm things work end to end. If the connection looks good, save the configuration\nby clicking the ",(0,s.jsx)(t.strong,{children:"Connect"})," button in the bottom right corner of the modal window:"]}),"\n",(0,s.jsx)(t.p,{children:"Congratulations, you've just added a new data source in Superset!"}),"\n",(0,s.jsx)(t.h3,{id:"registering-a-new-table",children:"Registering a new table"}),"\n",(0,s.jsxs)(t.p,{children:["Now that you\u2019ve configured a data source, you can select specific tables (called ",(0,s.jsx)(t.strong,{children:"Datasets"})," in Superset)\nthat you want exposed in Superset for querying."]}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Data \u2023 Datasets"})," and select the ",(0,s.jsx)(t.strong,{children:"+ Dataset"})," button in the top right corner."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_08_sources_tables.png")}),"\n",(0,s.jsxs)(t.p,{children:["A modal window should pop up in front of you. Select your ",(0,s.jsx)(t.strong,{children:"Database"}),",\n",(0,s.jsx)(t.strong,{children:"Schema"}),", and ",(0,s.jsx)(t.strong,{children:"Table"})," using the drop downs that appear. In the following example,\nwe register the ",(0,s.jsx)(t.strong,{children:"cleaned_sales_data"})," table from the ",(0,s.jsx)(t.strong,{children:"examples"})," database."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_09_add_new_table.png")}),"\n",(0,s.jsxs)(t.p,{children:["To finish, click the ",(0,s.jsx)(t.strong,{children:"Add"})," button in the bottom right corner. You should now see your dataset in the list of datasets."]}),"\n",(0,s.jsx)(t.h3,{id:"customizing-column-properties",children:"Customizing column properties"}),"\n",(0,s.jsx)(t.p,{children:"Now that you've registered your dataset, you can configure column properties\nfor how the column should be treated in the Explore workflow:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Is the column temporal? (should it be used for slicing & dicing in time series charts?)"}),"\n",(0,s.jsx)(t.li,{children:"Should the column be filterable?"}),"\n",(0,s.jsx)(t.li,{children:"Is the column dimensional?"}),"\n",(0,s.jsxs)(t.li,{children:["If it's a datetime column, how should Superset parse\nthe datetime format? (using the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO-8601 string pattern"}),")"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_column_properties.png")}),"\n",(0,s.jsx)(t.h3,{id:"superset-semantic-layer",children:"Superset semantic layer"}),"\n",(0,s.jsx)(t.p,{children:"Superset has a thin semantic layer that adds many quality of life improvements for analysts.\nThe Superset semantic layer can store 2 types of computed data:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Virtual metrics: you can write SQL queries that aggregate values\nfrom multiple column (e.g. ",(0,s.jsx)(t.code,{children:"SUM(recovered) / SUM(confirmed)"}),") and make them\navailable as columns for (e.g. ",(0,s.jsx)(t.code,{children:"recovery_rate"}),") visualization in Explore.\nAggregate functions are allowed and encouraged for metrics."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_sql_metric.png")}),"\n",(0,s.jsx)(t.p,{children:"You can also certify metrics if you'd like for your team in this view."}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Virtual calculated columns: you can write SQL queries that\ncustomize the appearance and behavior\nof a specific column (e.g. ",(0,s.jsx)(t.code,{children:"CAST(recovery_rate) as float"}),").\nAggregate functions aren't allowed in calculated columns."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_calculated_column.png")}),"\n",(0,s.jsx)(t.h3,{id:"creating-charts-in-explore-view",children:"Creating charts in Explore view"}),"\n",(0,s.jsx)(t.p,{children:"Superset has 2 main interfaces for exploring data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Explore"}),": no-code viz builder. Select your dataset, select the chart,\ncustomize the appearance, and publish."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SQL Lab"}),": SQL IDE for cleaning, joining, and preparing data for Explore workflow"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We'll focus on the Explore view for creating charts right now.\nTo start the Explore workflow from the ",(0,s.jsx)(t.strong,{children:"Datasets"})," tab, start by clicking the name\nof the dataset that will be powering your chart."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_launch_explore.png")}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"You're now presented with a powerful workflow for exploring data and iterating on charts."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Dataset"})," view on the left-hand side has a list of columns and metrics,\nscoped to the current dataset you selected."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Data"})," preview below the chart area also gives you helpful data context."]}),"\n",(0,s.jsxs)(t.li,{children:["Using the ",(0,s.jsx)(t.strong,{children:"Data"})," tab and ",(0,s.jsx)(t.strong,{children:"Customize"})," tabs, you can change the visualization type,\nselect the temporal column, select the metric to group by, and customize\nthe aesthetics of the chart."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["As you customize your chart using drop-down menus, make sure to click the ",(0,s.jsx)(t.strong,{children:"Run"})," button\nto get visual feedback."]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_explore_run.jpg")}),"\n",(0,s.jsx)(t.p,{children:"In the following screenshot, we craft a grouped Time-series Bar Chart to visualize\nour quarterly sales data by product line just by clicking options in drop-down menus."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_explore_settings.jpg")}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-slice-and-dashboard",children:"Creating a slice and dashboard"}),"\n",(0,s.jsxs)(t.p,{children:["To save your chart, first click the ",(0,s.jsx)(t.strong,{children:"Save"})," button. You can either:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Save your chart and add it to an existing dashboard"}),"\n",(0,s.jsx)(t.li,{children:"Save your chart and add it to a new dashboard"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'In the following screenshot, we save the chart to a new "Superset Duper Sales Dashboard":'}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_save_slice.png")}),"\n",(0,s.jsxs)(t.p,{children:["To publish, click ",(0,s.jsx)(t.strong,{children:"Save and goto Dashboard"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Behind the scenes, Superset will create a slice and store all the information needed\nto create your chart in its thin data layer\n(the query, chart type, options selected, name, etc)."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_first_dashboard.png"),style:{width:"100%",maxWidth:"500px"}}),"\n",(0,s.jsx)(t.p,{children:"To resize the chart, start by clicking the Edit Dashboard button in the top right corner."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_edit_button.png"),width:"300"}),"\n",(0,s.jsx)(t.p,{children:"Then, click and drag the bottom right corner of the chart until the chart layout snaps\ninto a position you like onto the underlying grid."}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_chart_resize.png"),style:{width:"100%",maxWidth:"500px"}}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save"})," to persist the changes."]}),"\n",(0,s.jsx)(t.p,{children:"Congrats! You\u2019ve successfully linked, analyzed, and visualized data in Superset. There are a wealth\nof other table configuration and visualization options, so please start exploring and creating\nslices and dashboards of your own"}),"\n",(0,s.jsx)(t.p,{children:"\u05bf"}),"\n",(0,s.jsx)(t.h3,{id:"manage-access-to-dashboards",children:"Manage access to Dashboards"}),"\n",(0,s.jsx)(t.p,{children:"Access to dashboards is managed via owners (users that have edit permissions to the dashboard)"}),"\n",(0,s.jsx)(t.p,{children:"Non-owner users access can be managed two different ways:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Dataset permissions - if you add to the relevant role permissions to datasets it automatically grants implicit access to all dashboards that uses those permitted datasets"}),"\n",(0,s.jsxs)(t.li,{children:["Dashboard roles - if you enable ",(0,s.jsx)(t.strong,{children:"DASHBOARD_RBAC"})," ",(0,s.jsx)(t.a,{href:"/docs/configuration/configuring-superset#feature-flags",children:"feature flag"})," then you be able to manage which roles can access the dashboard","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Granting a role access to a dashboard will bypass dataset level checks. Having dashboard access implicitly grants read access to all the featured charts in the dashboard, and thereby also all the associated datasets."}),"\n",(0,s.jsxs)(t.li,{children:["If no roles are specified for a dashboard, regular ",(0,s.jsx)(t.strong,{children:"Dataset permissions"})," will apply."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.Ay)("/img/tutorial/tutorial_dashboard_access.png")}),"\n",(0,s.jsx)(t.h3,{id:"customizing-dashboard",children:"Customizing dashboard"}),"\n",(0,s.jsx)(t.p,{children:"The following URL parameters can be used to modify how the dashboard is rendered:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"standalone"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"0"})," (default): dashboard is displayed normally"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"1"}),": Top Navigation is hidden"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"2"}),": Top Navigation + title is hidden"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"3"}),": Top Navigation + title + top level tabs are hidden"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"show_filters"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"0"}),": render dashboard without Filter Bar"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"1"})," (default): render dashboard with Filter Bar if native filters are enabled"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"expand_filters"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"(default): render dashboard with Filter Bar expanded if there are native filters"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"0"}),": render dashboard with Filter Bar collapsed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"1"}),": render dashboard with Filter Bar expanded"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example, when running the local development build, the following will disable the\nTop Nav and remove the Filter Bar:\n",(0,s.jsx)(t.code,{children:"http://localhost:8088/superset/dashboard/my-dashboard/?standalone=1&show_filters=0"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);