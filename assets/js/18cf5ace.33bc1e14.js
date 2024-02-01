"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7140],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(86404),r=(t(11504),t(95788));const i={title:"SQL Templating",hide_title:!0,sidebar_position:11,version:1},l=void 0,o={unversionedId:"installation/sql-templating",id:"installation/sql-templating",title:"SQL Templating",description:"SQL Templating",source:"@site/docs/installation/sql-templating.mdx",sourceDirName:"installation",slug:"/installation/sql-templating",permalink:"/docs/installation/sql-templating",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/sql-templating.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"SQL Templating",hide_title:!0,sidebar_position:11,version:1},sidebar:"tutorialSidebar",previous:{title:"Alerts and Reports",permalink:"/docs/installation/alerts-reports"},next:{title:"Setup SSH Tunneling",permalink:"/docs/installation/setup-ssh-tunneling"}},s={},p=[{value:"SQL Templating",id:"sql-templating",level:2},{value:"Jinja Templates",id:"jinja-templates",level:3},{value:"Available Macros",id:"available-macros",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"sql-templating"},"SQL Templating"),(0,r.yg)("h3",{id:"jinja-templates"},"Jinja Templates"),(0,r.yg)("p",null,"SQL Lab and Explore supports ",(0,r.yg)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/2.11.x/"},"Jinja templating")," in queries.\nTo enable templating, the ",(0,r.yg)("inlineCode",{parentName:"p"},"ENABLE_TEMPLATE_PROCESSING")," ",(0,r.yg)("a",{parentName:"p",href:"/docs/installation/configuring-superset#feature-flags"},"feature flag")," needs to be enabled in\n",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),". When templating is enabled, python code can be embedded in virtual datasets and\nin Custom SQL in the filter and metric controls in Explore. By default, the following variables are\nmade available in the Jinja context:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"columns"),": columns which to group by in the query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"filter"),": filters applied in the query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"from_dttm"),": start ",(0,r.yg)("inlineCode",{parentName:"li"},"datetime")," value from the selected time range (",(0,r.yg)("inlineCode",{parentName:"li"},"None")," if undefined)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"to_dttm"),": end ",(0,r.yg)("inlineCode",{parentName:"li"},"datetime")," value from the selected time range (",(0,r.yg)("inlineCode",{parentName:"li"},"None")," if undefined)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"groupby"),": columns which to group by in the query (deprecated)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"metrics"),": aggregate expressions in the query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"row_limit"),": row limit of the query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"row_offset"),": row offset of the query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"table_columns"),": columns available in the dataset"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"time_column"),": temporal column of the query (",(0,r.yg)("inlineCode",{parentName:"li"},"None")," if undefined)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"time_grain"),": selected time grain (",(0,r.yg)("inlineCode",{parentName:"li"},"None")," if undefined)")),(0,r.yg)("p",null,"For example, to add a time range to a virtual dataset, you can write the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM tbl\nWHERE dttm_col > '{{ from_dttm }}' and dttm_col < '{{ to_dttm }}'\n")),(0,r.yg)("p",null,"You can also use ",(0,r.yg)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/2.11.x/templates/#tests"},"Jinja's logic"),"\nto make your query robust to clearing the timerange filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM tbl\nWHERE (\n    {% if from_dttm is not none %}\n        dttm_col > '{{ from_dttm }}' AND\n    {% endif %}\n    {% if to_dttm is not none %}\n        dttm_col < '{{ to_dttm }}' AND\n    {% endif %}\n    true\n)\n")),(0,r.yg)("p",null,"Note how the Jinja parameters are called within double brackets in the query, and without in the\nlogic blocks."),(0,r.yg)("p",null,"To add custom functionality to the Jinja context, you need to overload the default Jinja\ncontext in your environment by defining the ",(0,r.yg)("inlineCode",{parentName:"p"},"JINJA_CONTEXT_ADDONS")," in your superset configuration\n(",(0,r.yg)("inlineCode",{parentName:"p"},"superset_config.py"),"). Objects referenced in this dictionary are made available for users to use\nwhere the Jinja context is made available."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"JINJA_CONTEXT_ADDONS = {\n    'my_crazy_macro': lambda x: x*2,\n}\n")),(0,r.yg)("p",null,"Default values for jinja templates can be specified via ",(0,r.yg)("inlineCode",{parentName:"p"},"Parameters")," menu in the SQL Lab user interface.\nIn the UI you can assign a set of parameters as JSON"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "my_table": "foo"\n}\n')),(0,r.yg)("p",null,"The parameters become available in your SQL (example: ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT * FROM {{ my_table }}")," ) by using Jinja templating syntax.\nSQL Lab template parameters are stored with the dataset as ",(0,r.yg)("inlineCode",{parentName:"p"},"TEMPLATE PARAMETERS"),"."),(0,r.yg)("p",null,"There is a special ",(0,r.yg)("inlineCode",{parentName:"p"},"_filters")," parameter which can be used to test filters used in the jinja template."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "_filters": [\n    {\n      "col": "action_type",\n      "op": "IN",\n      "val": ["sell", "buy"]\n    }\n  ]\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT action, count(*) as times\nFROM logs\nWHERE action in {{ filter_values('action_type'))|where_in }}\nGROUP BY action\n")),(0,r.yg)("p",null,"Note ",(0,r.yg)("inlineCode",{parentName:"p"},"_filters")," is not stored with the dataset. It's only used within the SQL Lab UI."),(0,r.yg)("p",null,"Besides default Jinja templating, SQL lab also supports self-defined template processor by setting\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_TEMPLATE_PROCESSORS")," in your superset configuration. The values in this dictionary\noverwrite the default Jinja template processors of the specified database engine. The example below\nconfigures a custom presto template processor which implements its own logic of processing macro\ntemplate with regex parsing. It uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"$")," style macro instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ }}")," style in Jinja\ntemplating."),(0,r.yg)("p",null,"By configuring it with ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_TEMPLATE_PROCESSORS"),", a SQL template on a presto database is\nprocessed by the custom one rather than the default one."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'def DATE(\n    ts: datetime, day_offset: SupportsInt = 0, hour_offset: SupportsInt = 0\n) -> str:\n    """Current day as a string."""\n    day_offset, hour_offset = int(day_offset), int(hour_offset)\n    offset_day = (ts + timedelta(days=day_offset, hours=hour_offset)).date()\n    return str(offset_day)\n\nclass CustomPrestoTemplateProcessor(PrestoTemplateProcessor):\n    """A custom presto template processor."""\n\n    engine = "presto"\n\n    def process_template(self, sql: str, **kwargs) -> str:\n        """Processes a sql template with $ style macro using regex."""\n        # Add custom macros functions.\n        macros = {\n            "DATE": partial(DATE, datetime.utcnow())\n        }  # type: Dict[str, Any]\n        # Update with macros defined in context and kwargs.\n        macros.update(self.context)\n        macros.update(kwargs)\n\n        def replacer(match):\n            """Expand $ style macros with corresponding function calls."""\n            macro_name, args_str = match.groups()\n            args = [a.strip() for a in args_str.split(",")]\n            if args == [""]:\n                args = []\n            f = macros[macro_name[1:]]\n            return f(*args)\n\n        macro_names = ["$" + name for name in macros.keys()]\n        pattern = r"(%s)\\s*\\(([^()]*)\\)" % "|".join(map(re.escape, macro_names))\n        return re.sub(pattern, replacer, sql)\n\nCUSTOM_TEMPLATE_PROCESSORS = {\n    CustomPrestoTemplateProcessor.engine: CustomPrestoTemplateProcessor\n}\n')),(0,r.yg)("p",null,"SQL Lab also includes a live query validation feature with pluggable backends. You can configure\nwhich validation implementation is used with which database engine by adding a block like the\nfollowing to your configuration file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"FEATURE_FLAGS = {\n    'SQL_VALIDATORS_BY_ENGINE': {\n        'presto': 'PrestoDBSQLValidator',\n    }\n}\n")),(0,r.yg)("p",null,"The available validators and names can be found in\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/superset/sql_validators"},"sql_validators"),"."),(0,r.yg)("h3",{id:"available-macros"},"Available Macros"),(0,r.yg)("p",null,"In this section, we'll walkthrough the pre-defined Jinja macros in Superset."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Current Username")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ current_username() }}")," macro returns the username of the currently logged in user."),(0,r.yg)("p",null,"If you have caching enabled in your Superset configuration, then by default the ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," value will be used\nby Superset when calculating the cache key. A cache key is a unique identifier that determines if there's a\ncache hit in the future and Superset can retrieve cached data."),(0,r.yg)("p",null,"You can disable the inclusion of the ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," value in the calculation of the\ncache key by adding the following parameter to your Jinja code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"{{ current_username(add_to_cache_keys=False) }}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Current User ID")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ current_user_id() }}")," macro returns the user_id of the currently logged in user."),(0,r.yg)("p",null,"If you have caching enabled in your Superset configuration, then by default the ",(0,r.yg)("inlineCode",{parentName:"p"},"user_id")," value will be used\nby Superset when calculating the cache key. A cache key is a unique identifier that determines if there's a\ncache hit in the future and Superset can retrieve cached data."),(0,r.yg)("p",null,"You can disable the inclusion of the ",(0,r.yg)("inlineCode",{parentName:"p"},"user_id")," value in the calculation of the\ncache key by adding the following parameter to your Jinja code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"{{ current_user_id(add_to_cache_keys=False) }}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Custom URL Parameters")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ url_param('custom_variable') }}")," macro lets you define arbitrary URL\nparameters and reference them in your SQL code."),(0,r.yg)("p",null,"Here's a concrete example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You write the following query in SQL Lab:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM ORDERS\nWHERE country_code = '{{ url_param('countrycode') }}'\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You're hosting Superset at the domain ",(0,r.yg)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," and you send your\ncoworker in Spain the following SQL Lab URL ",(0,r.yg)("inlineCode",{parentName:"p"},"www.example.com/superset/sqllab?countrycode=ES"),"\nand your coworker in the USA the following SQL Lab URL ",(0,r.yg)("inlineCode",{parentName:"p"},"www.example.com/superset/sqllab?countrycode=US"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For your coworker in Spain, the SQL Lab query will be rendered as:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM ORDERS\nWHERE country_code = 'ES'\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For your coworker in the USA, the SQL Lab query will be rendered as:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM ORDERS\nWHERE country_code = 'US'\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Explicitly Including Values in Cache Key")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ cache_key_wrapper() }}")," function explicitly instructs Superset to add a value to the\naccumulated list of values used in the calculation of the cache key."),(0,r.yg)("p",null,"This function is only needed when you want to wrap your own custom function return values\nin the cache key. You can gain more context\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/efd70077014cbed62e493372d33a2af5237eaadf/superset/jinja_context.py#L133-L148"},"here"),"."),(0,r.yg)("p",null,"Note that this function powers the caching of the ",(0,r.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," values\nin the ",(0,r.yg)("inlineCode",{parentName:"p"},"current_user_id()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"current_username()")," function calls (if you have caching enabled)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Filter Values")),(0,r.yg)("p",null,"You can retrieve the value for a specific filter as a list using ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ filter_values() }}"),"."),(0,r.yg)("p",null,"This is useful if:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You want to use a filter component to filter a query where the name of filter component column doesn't match the one in the select statement"),(0,r.yg)("li",{parentName:"ul"},"You want to have the ability for filter inside the main query for performance purposes")),(0,r.yg)("p",null,"Here's a concrete example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT action, count(*) as times\nFROM logs\nWHERE\n    action in {{ filter_values('action_type')|where_in }}\nGROUP BY action\n")),(0,r.yg)("p",null,"There ",(0,r.yg)("inlineCode",{parentName:"p"},"where_in")," filter converts the list of values from ",(0,r.yg)("inlineCode",{parentName:"p"},"filter_values('action_type')")," into a string suitable for an ",(0,r.yg)("inlineCode",{parentName:"p"},"IN")," expression."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Filters for a Specific Column")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"{{ get_filters() }}")," macro returns the filters applied to a given column. In addition to\nreturning the values (similar to how ",(0,r.yg)("inlineCode",{parentName:"p"},"filter_values()")," does), the ",(0,r.yg)("inlineCode",{parentName:"p"},"get_filters()")," macro\nreturns the operator specified in the Explore UI."),(0,r.yg)("p",null,"This is useful if:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You want to handle more than the IN operator in your SQL clause"),(0,r.yg)("li",{parentName:"ul"},"You want to handle generating custom SQL conditions for a filter"),(0,r.yg)("li",{parentName:"ul"},"You want to have the ability to filter inside the main query for speed purposes")),(0,r.yg)("p",null,"Here's a concrete example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," WITH RECURSIVE\n    superiors(employee_id, manager_id, full_name, level, lineage) AS (\n    SELECT\n        employee_id,\n        manager_id,\n        full_name,\n    1 as level,\n    employee_id as lineage\n    FROM\n        employees\n    WHERE\n    1=1\n\n    {# Render a blank line #}\n    {%- for filter in get_filters('full_name', remove_filter=True) -%}\n\n    {%- if filter.get('op') == 'IN' -%}\n        AND\n        full_name IN {{ filter.get('val')|where_in }}\n    {%- endif -%}\n\n    {%- if filter.get('op') == 'LIKE' -%}\n        AND\n        full_name LIKE {{ \"'\" + filter.get('val') + \"'\" }}\n    {%- endif -%}\n\n    {%- endfor -%}\n    UNION ALL\n        SELECT\n            e.employee_id,\n            e.manager_id,\n            e.full_name,\n    s.level + 1 as level,\n    s.lineage\n        FROM\n            employees e,\n        superiors s\n        WHERE s.manager_id = e.employee_id\n    )\n\n    SELECT\n    employee_id, manager_id, full_name, level, lineage\n    FROM\n    superiors\n    order by lineage, level\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Datasets")),(0,r.yg)("p",null,"It's possible to query physical and virtual datasets using the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset")," macro. This is useful if you've defined computed columns and metrics on your datasets, and want to reuse the definition in adhoc SQL Lab queries."),(0,r.yg)("p",null,"To use the macro, first you need to find the ID of the dataset. This can be done by going to the view showing all the datasets, hovering over the dataset you're interested in, and looking at its URL. For example, if the URL for a dataset is ",(0,r.yg)("a",{parentName:"p",href:"https://superset.example.org/explore/?dataset_type=table&dataset_id=42"},"https://superset.example.org/explore/?dataset_type=table&dataset_id=42")," its ID is 42."),(0,r.yg)("p",null,"Once you have the ID you can query it as if it were a table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SELECT * FROM {{ dataset(42) }} LIMIT 10\n")),(0,r.yg)("p",null,"If you want to select the metric definitions as well, in addition to the columns, you need to pass an additional keyword argument:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SELECT * FROM {{ dataset(42, include_metrics=True) }} LIMIT 10\n")),(0,r.yg)("p",null,"Since metrics are aggregations, the resulting SQL expression will be grouped by all non-metric columns. You can specify a subset of columns to group by instead:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'SELECT * FROM {{ dataset(42, include_metrics=True, columns=["ds", "category"]) }} LIMIT 10\n')))}m.isMDXComponent=!0}}]);