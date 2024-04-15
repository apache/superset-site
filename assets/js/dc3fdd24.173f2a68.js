"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1121],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>N});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=r,N=g["".concat(s,".").concat(m)]||g[m]||y[m]||l;return t?n.createElement(N,d(d({ref:a},o),{},{components:t})):n.createElement(N,d({ref:a},o))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,d=new Array(l);d[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,d[1]=i;for(var p=2;p<l;p++)d[p]=t[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73088:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const l={title:"Installing Database Drivers",hide_title:!0,sidebar_position:1,version:1},d=void 0,i={unversionedId:"databases/installing-database-drivers",id:"databases/installing-database-drivers",title:"Installing Database Drivers",description:"Install Database Drivers",source:"@site/docs/databases/installing-database-drivers.mdx",sourceDirName:"databases",slug:"/databases/installing-database-drivers",permalink:"/docs/databases/installing-database-drivers",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/databases/installing-database-drivers.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installing Database Drivers",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"Exploring Data in Superset",permalink:"/docs/creating-charts-dashboards/exploring-data"},next:{title:"Adding New Drivers in Docker",permalink:"/docs/databases/docker-add-drivers"}},s={},p=[{value:"Install Database Drivers",id:"install-database-drivers",level:2},{value:"Supported Databases and Dependencies",id:"supported-databases-and-dependencies",level:3}],o={toc:p},g="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"install-database-drivers"},"Install Database Drivers"),(0,r.yg)("p",null,"Superset requires a Python DB-API database driver and a SQLAlchemy\ndialect to be installed for each datastore you want to connect to."),(0,r.yg)("p",null,"You can read more ",(0,r.yg)("a",{parentName:"p",href:"/docs/databases/docker-add-drivers"},"here")," about how to\ninstall new database drivers into your Superset configuration."),(0,r.yg)("h3",{id:"supported-databases-and-dependencies"},"Supported Databases and Dependencies"),(0,r.yg)("p",null,"Superset does not ship bundled with connectivity to databases, except for SQLite,\nwhich is part of the Python standard library.\nYou\u2019ll need to install the required packages for the database you want to use as your metadata database\nas well as the packages needed to connect to the databases you want to access through Superset."),(0,r.yg)("p",null,"Some of the recommended packages are shown below. Please refer to\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/pyproject.toml"},"pyproject.toml")," for the versions that\nare compatible with Superset."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Database"),(0,r.yg)("th",{parentName:"tr",align:null},"PyPI package"),(0,r.yg)("th",{parentName:"tr",align:null},"Connection String"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/athena"},"Amazon Athena")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pyathena[pandas]")," , ",(0,r.yg)("inlineCode",{parentName:"td"},"pip install PyAthenaJDBC")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsathena+rest://{aws_access_key_id}:{aws_secret_access_key}@athena.{region_name}.amazonaws.com/{schema_name}?s3_staging_dir={s3_staging_dir}&... "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/doris"},"Apache Doris")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pydoris")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/dynamodb"},"Amazon DynamoDB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pydynamodb")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dynamodb://{access_key_id}:{secret_access_key}@dynamodb.{region_name}.amazonaws.com?connector=superset"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/redshift"},"Amazon Redshift")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-redshift")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"}," redshift+psycopg2://<userName>:<DBPassword>@<AWS End Point>:5439/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/drill"},"Apache Drill")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-drill")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"drill+sadrill:// For JDBC drill+jdbc://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/druid"},"Apache Druid")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pydruid")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"druid://<User>:<password>@<Host>:<Port-default-9088>/druid/v2/sql"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/hive"},"Apache Hive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pyhive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hive://hive@{hostname}:{port}/{database}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/impala"},"Apache Impala")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install impyla")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"impala://{hostname}:{port}/{database}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/kylin"},"Apache Kylin")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install kylinpy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kylin://<username>:<password>@<hostname>:<port>/<project>?<param1>=<value1>&<param2>=<value2>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/pinot"},"Apache Pinot")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pinotdb")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pinot://BROKER:5436/query?server=http://CONTROLLER:5983/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/solr"},"Apache Solr")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-solr")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"solr://{username}:{password}@{hostname}:{port}/{server_path}/{collection}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/spark-sql"},"Apache Spark SQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pyhive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hive://hive@{hostname}:{port}/{database}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/ascend"},"Ascend.io")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install impyla")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ascend://{username}:{password}@{hostname}:{port}/{database}?auth_mechanism=PLAIN;use_ssl=true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/sql-server"},"Azure MS SQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pymssql")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mssql+pymssql://UserName@presetSQL:TestPassword@presetSQL.database.windows.net:1433/TestSchema"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/bigquery"},"Big Query")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-bigquery")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bigquery://{project_id}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/clickhouse"},"ClickHouse")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install clickhouse-connect")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clickhousedb://{username}:{password}@{hostname}:{port}/{database}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/cockroachdb"},"CockroachDB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install cockroachdb")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cockroachdb://root@{hostname}:{port}/{database}?sslmode=disable"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/dremio"},"Dremio")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy_dremio")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dremio://user:pwd@host:31010/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/elasticsearch"},"Elasticsearch")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install elasticsearch-dbapi")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"elasticsearch+http://{user}:{password}@{host}:9200/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/exasol"},"Exasol")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-exasol")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"exa+pyodbc://{username}:{password}@{hostname}:{port}/my_schema?CONNECTIONLCALL=en_US.UTF-8&driver=EXAODBC"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/google-sheets"},"Google Sheets")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install shillelagh[gsheetsapi]")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gsheets://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/firebolt"},"Firebolt")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install firebolt-sqlalchemy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firebolt://{client_id}:{client_secret}@{database}/{engine_name}?account_name={name}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/hologres"},"Hologres")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgresql+psycopg2://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/ibm-db2"},"IBM Db2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install ibm_db_sa")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"db2+ibm_db://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/netezza"},"IBM Netezza Performance Server")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install nzalchemy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"netezza+nzpy://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/mysql"},"MySQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install mysqlclient")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mysql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/oracle"},"Oracle")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install cx_Oracle")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"oracle://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/postgres"},"PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgresql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/presto"},"Presto")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pyhive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"presto://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/rockset"},"Rockset")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install rockset-sqlalchemy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rockset://<api_key>:@<api_server>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/hana"},"SAP Hana")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install hdbcli sqlalchemy-hana or pip install apache-superset[hana]")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hana://{username}:{password}@{host}:{port}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/starrocks"},"StarRocks")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install starrocks")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"starrocks://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/snowflake"},"Snowflake")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install snowflake-sqlalchemy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"snowflake://{user}:{password}@{account}.{region}/{database}?role={role}&warehouse={warehouse}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SQLite"),(0,r.yg)("td",{parentName:"tr",align:null},"No additional library needed"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sqlite://path/to/file.db?check_same_thread=false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/sql-server"},"SQL Server")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install pymssql")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mssql+pymssql://"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/teradata"},"Teradata")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install teradatasqlalchemy")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"teradatasql://{user}:{password}@{host}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/timescaledb"},"TimescaleDB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgresql://<UserName>:<DBPassword>@<Database Host>:<Port>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/trino"},"Trino")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install trino")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"trino://{username}:{password}@{hostname}:{port}/{catalog}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/vertica"},"Vertica")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install sqlalchemy-vertica-python")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"vertica+vertica_python://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/databases/yugabytedb"},"YugabyteDB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pip install psycopg2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgresql://<UserName>:<DBPassword>@<Database Host>/<Database Name>"))))),(0,r.yg)("hr",null),(0,r.yg)("p",null,'Note that many other databases are supported, the main criteria being the existence of a functional\nSQLAlchemy dialect and Python driver. Searching for the keyword "sqlalchemy + (database name)"\nshould help get you to the right place.'),(0,r.yg)("p",null,"If your database or data engine isn't on the list but a SQL interface\nexists, please file an issue on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/issues"},"Superset GitHub repo"),", so we can work on documenting and\nsupporting it."),(0,r.yg)("p",null,"If you'd like to build a database connector for Superset integration,\nread the ",(0,r.yg)("a",{parentName:"p",href:"https://preset.io/blog/building-database-connector/"},"following tutorial"),"."))}y.isMDXComponent=!0}}]);