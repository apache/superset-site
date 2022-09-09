"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9594],{96617:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(51402),s=["components"],l={title:"Creating Your First Dashboard",hide_title:!0,sidebar_position:1,version:1},u=void 0,d={unversionedId:"creating-charts-dashboards/creating-your-first-dashboard",id:"creating-charts-dashboards/creating-your-first-dashboard",title:"Creating Your First Dashboard",description:"Creating Your First Dashboard",source:"@site/docs/creating-charts-dashboards/creating-your-first-dashboard.mdx",sourceDirName:"creating-charts-dashboards",slug:"/creating-charts-dashboards/creating-your-first-dashboard",permalink:"/docs/creating-charts-dashboards/creating-your-first-dashboard",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/creating-charts-dashboards/creating-your-first-dashboard.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating Your First Dashboard",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"kusto",permalink:"/docs/databases/kusto"},next:{title:"Exploring Data in Superset",permalink:"/docs/creating-charts-dashboards/exploring-data"}},c={},p=[{value:"Creating Your First Dashboard",id:"creating-your-first-dashboard",level:2},{value:"Connecting to a new database",id:"connecting-to-a-new-database",level:3},{value:"Registering a new table",id:"registering-a-new-table",level:3},{value:"Customizing column properties",id:"customizing-column-properties",level:3},{value:"Superset semantic layer",id:"superset-semantic-layer",level:3},{value:"Creating charts in Explore view",id:"creating-charts-in-explore-view",level:3},{value:"Creating a slice and dashboard",id:"creating-a-slice-and-dashboard",level:3},{value:"Manage access to Dashboards",id:"manage-access-to-dashboards",level:3},{value:"Customizing dashboard",id:"customizing-dashboard",level:3}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-your-first-dashboard"},"Creating Your First Dashboard"),(0,o.kt)("p",null,"This section is focused on documentation for end-users who will be using Superset\nfor the data analysis and exploration workflow\n(data analysts, business analysts, data\nscientists, etc). In addition to this site, ",(0,o.kt)("a",{parentName:"p",href:"http://preset.io/"},"Preset.io")," maintains an updated set of end-user\ndocumentation at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.preset.io/"},"docs.preset.io"),"."),(0,o.kt)("p",null,"This tutorial targets someone who wants to create charts and dashboards in Superset. We\u2019ll show you\nhow to connect Superset to a new database and configure a table in that database for analysis.\nYou\u2019ll also explore the data you\u2019ve exposed and add a visualization to a dashboard so that you get a\nfeel for the end-to-end user experience."),(0,o.kt)("h3",{id:"connecting-to-a-new-database"},"Connecting to a new database"),(0,o.kt)("p",null,"Superset itself doesn't have a storage layer to store your data but instead pairs with\nyour existing SQL-speaking database or data store."),(0,o.kt)("p",null,"First things first, we need to add the connection credentials to your database to be able\nto query and visualize data from it. If you're using Superset locally via\n",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/installing-superset-using-docker-compose"},"Docker compose"),", you can\nskip this step because a Postgres database, named ",(0,o.kt)("strong",{parentName:"p"},"examples"),", is included and\npre-configured in Superset for you."),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Data")," menu, select the ",(0,o.kt)("em",{parentName:"p"},"Databases")," option:"),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_01_sources_database.png")})," "," ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Next, click the green ",(0,o.kt)("strong",{parentName:"p"},"+ Database")," button in the top right corner:"),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_02_add_database.png")})," "," ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can configure a number of advanced options in this window, but for this walkthrough you only\nneed to specify two things (the database name and SQLAlchemy URI):"),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_03_database_name.png")}),(0,o.kt)("p",null,"As noted in the text below\nthe URI, you should refer to the SQLAlchemy documentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/12/core/engines.html#database-urls"},"creating new connection URIs"),"\nfor your target database."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Test Connection")," button to confirm things work end to end. If the connection looks good, save the configuration\nby clicking the ",(0,o.kt)("strong",{parentName:"p"},"Add")," button in the bottom right corner of the modal window:"),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_04_add_button.png")}),(0,o.kt)("p",null,"Congratulations, you've just added a new data source in Superset!"),(0,o.kt)("h3",{id:"registering-a-new-table"},"Registering a new table"),(0,o.kt)("p",null,"Now that you\u2019ve configured a data source, you can select specific tables (called ",(0,o.kt)("strong",{parentName:"p"},"Datasets")," in Superset)\nthat you want exposed in Superset for querying."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Data \u2023 Datasets")," and select the ",(0,o.kt)("strong",{parentName:"p"},"+ Dataset")," button in the top right corner."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_08_sources_tables.png")}),(0,o.kt)("p",null,"A modal window should pop up in front of you. Select your ",(0,o.kt)("strong",{parentName:"p"},"Database"),",\n",(0,o.kt)("strong",{parentName:"p"},"Schema"),", and ",(0,o.kt)("strong",{parentName:"p"},"Table")," using the drop downs that appear. In the following example,\nwe register the ",(0,o.kt)("strong",{parentName:"p"},"cleaned_sales_data")," table from the ",(0,o.kt)("strong",{parentName:"p"},"examples")," database."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_09_add_new_table.png")}),(0,o.kt)("p",null,"To finish, click the ",(0,o.kt)("strong",{parentName:"p"},"Add")," button in the bottom right corner. You should now see your dataset in the list of datasets."),(0,o.kt)("h3",{id:"customizing-column-properties"},"Customizing column properties"),(0,o.kt)("p",null,"Now that you've registered your dataset, you can configure column properties\nfor how the column should be treated in the Explore workflow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is the column temporal? (should it be used for slicing & dicing in time series charts?)"),(0,o.kt)("li",{parentName:"ul"},"Should the column be filterable?"),(0,o.kt)("li",{parentName:"ul"},"Is the column dimensional?"),(0,o.kt)("li",{parentName:"ul"},"If it's a datetime column, how should Superset parse\nthe datetime format? (using the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 string pattern"),")")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_column_properties.png")}),(0,o.kt)("h3",{id:"superset-semantic-layer"},"Superset semantic layer"),(0,o.kt)("p",null,"Superset has a thin semantic layer that adds many quality of life improvements for analysts.\nThe Superset semantic layer can store 2 types of computed data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Virtual metrics: you can write SQL queries that aggregate values\nfrom multiple column (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"SUM(recovered) / SUM(confirmed)"),") and make them\navailable as columns for (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"recovery_rate"),") visualization in Explore.\nAggregate functions are allowed and encouraged for metrics.")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_sql_metric.png")}),(0,o.kt)("p",null,"You can also certify metrics if you'd like for your team in this view."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Virtual calculated columns: you can write SQL queries that\ncustomize the appearance and behavior\nof a specific column (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"CAST(recovery_rate) as float"),").\nAggregate functions aren't allowed in calculated columns.")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_calculated_column.png")}),(0,o.kt)("h3",{id:"creating-charts-in-explore-view"},"Creating charts in Explore view"),(0,o.kt)("p",null,"Superset has 2 main interfaces for exploring data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explore"),": no-code viz builder. Select your dataset, select the chart,\ncustomize the appearance, and publish."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SQL Lab"),": SQL IDE for cleaning, joining, and preparing data for Explore workflow")),(0,o.kt)("p",null,"We'll focus on the Explore view for creating charts right now.\nTo start the Explore workflow from the ",(0,o.kt)("strong",{parentName:"p"},"Datasets")," tab, start by clicking the name\nof the dataset that will be powering your chart."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_launch_explore.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"You're now presented with a powerful workflow for exploring data and iterating on charts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Dataset")," view on the left-hand side has a list of columns and metrics,\nscoped to the current dataset you selected."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Data")," preview below the chart area also gives you helpful data context."),(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("strong",{parentName:"li"},"Data")," tab and ",(0,o.kt)("strong",{parentName:"li"},"Customize")," tabs, you can change the visualization type,\nselect the temporal column, select the metric to group by, and customize\nthe aesthetics of the chart.")),(0,o.kt)("p",null,"As you customize your chart using drop-down menus, make sure to click the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button\nto get visual feedback."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_explore_run.jpg")}),(0,o.kt)("p",null,"In the following screenshot, we craft a grouped Time-series Bar Chart to visualize\nour quarterly sales data by product line just be clicking options in drop-down menus."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_explore_settings.jpg")}),(0,o.kt)("h3",{id:"creating-a-slice-and-dashboard"},"Creating a slice and dashboard"),(0,o.kt)("p",null,"To save your chart, first click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button. You can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save your chart and add it to an existing dashboard"),(0,o.kt)("li",{parentName:"ul"},"Save your chart and add it to a new dashboard")),(0,o.kt)("p",null,'In the following screenshot, we save the chart to a new "Superset Duper Sales Dashboard":'),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_save_slice.png")}),(0,o.kt)("p",null,"To publish, click ",(0,o.kt)("strong",{parentName:"p"},"Save and goto Dashboard"),"."),(0,o.kt)("p",null,"Behind the scenes, Superset will create a slice and store all the information needed\nto create your chart in its thin data layer\n(the query, chart type, options selected, name, etc)."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_first_dashboard.png")}),(0,o.kt)("p",null," To resize the chart, start by clicking the pencil button in the top right corner."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_pencil_edit.png")}),(0,o.kt)("p",null,"Then, click and drag the bottom right corner of the chart until the chart layout snaps\ninto a position you like onto the underlying grid."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_chart_resize.png")}),(0,o.kt)("p",null," Click ",(0,o.kt)("strong",{parentName:"p"},"Save")," to persist the changes."),(0,o.kt)("p",null,"Congrats! You\u2019ve successfully linked, analyzed, and visualized data in Superset. There are a wealth\nof other table configuration and visualization options, so please start exploring and creating\nslices and dashboards of your own"),(0,o.kt)("p",null,"\u05bf"),(0,o.kt)("h3",{id:"manage-access-to-dashboards"},"Manage access to Dashboards"),(0,o.kt)("p",null,"Access to dashboards is managed via owners (users that have edit permissions to the dashboard)"),(0,o.kt)("p",null,"Non-owner users access can be managed two different ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dataset permissions - if you add to the relevant role permissions to datasets it automatically grants implicit access to all dashboards that uses those permitted datasets"),(0,o.kt)("li",{parentName:"ol"},"Dashboard roles - if you enable ",(0,o.kt)("strong",{parentName:"li"},"DASHBOARD_RBAC")," ",(0,o.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/configuring-superset#feature-flags"},"feature flag")," then you be able to manage which roles can access the dashboard")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Having dashboard access implicitly grants read access to the associated datasets, therefore\nall charts will load their data even if feature flag is turned on and no roles assigned\nto roles the access will fallback to ",(0,o.kt)("strong",{parentName:"li"},"Dataset permissions"))),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_dashboard_access.png")}),(0,o.kt)("h3",{id:"customizing-dashboard"},"Customizing dashboard"),(0,o.kt)("p",null,"The following URL parameters can be used to modify how the dashboard is rendered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"standalone"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," (default): dashboard is displayed normally"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1"),": Top Navigation is hidden"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2"),": Top Navigation + title is hidden"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3"),": Top Navigation + title + top level tabs are hidden"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"show_filters"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0"),": render dashboard without Filter Bar"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1")," (default): render dashboard with Filter Bar if native filters are enabled"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expand_filters"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(default): render dashboard with Filter Bar expanded if there are native filters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0"),": render dashboard with Filter Bar collapsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1"),": render dashboard with Filter Bar expanded")))),(0,o.kt)("p",null,"For example, when running the local development build, the following will disable the\nTop Nav and remove the Filter Bar:\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8088/superset/dashboard/my-dashboard/?standalone=1&show_filters=0")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);