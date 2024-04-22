"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7956],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(i,".").concat(d)]||c[d]||g[d]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Testing",hide_title:!0,sidebar_position:8,version:1},s=void 0,l={unversionedId:"contributing/testing-locally",id:"contributing/testing-locally",title:"Testing",description:"Testing",source:"@site/docs/contributing/testing-locally.mdx",sourceDirName:"contributing",slug:"/contributing/testing-locally",permalink:"/docs/contributing/testing-locally",draft:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/contributing/testing-locally.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Testing",hide_title:!0,sidebar_position:8,version:1},sidebar:"tutorialSidebar",previous:{title:"Conventions and Typing",permalink:"/docs/contributing/conventions-and-typing"},next:{title:"Translating",permalink:"/docs/contributing/translations"}},i={},p=[{value:"Testing",id:"testing",level:2},{value:"Python Testing",id:"python-testing",level:3},{value:"Testing with local Presto connections",id:"testing-with-local-presto-connections",level:4},{value:"Frontend Testing",id:"frontend-testing",level:3},{value:"e2e Integration Testing",id:"e2e-integration-testing",level:3},{value:"Debugging Server App",id:"debugging-server-app",level:3},{value:"Debugging Server App in Kubernetes Environment",id:"debugging-server-app-in-kubernetes-environment",level:3},{value:"Storybook",id:"storybook",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"testing"},"Testing"),(0,a.yg)("h3",{id:"python-testing"},"Python Testing"),(0,a.yg)("p",null,"All python tests are carried out in ",(0,a.yg)("a",{parentName:"p",href:"https://tox.readthedocs.io/en/latest/index.html"},"tox"),"\na standardized testing framework.\nAll python tests can be run with any of the tox ",(0,a.yg)("a",{parentName:"p",href:"https://tox.readthedocs.io/en/latest/example/basic.html#a-simple-tox-ini-default-environments"},"environments"),", via,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tox -e <environment>\n")),(0,a.yg)("p",null,"For example,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tox -e py38\n")),(0,a.yg)("p",null,"Alternatively, you can run all tests in a single file via,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tox -e <environment> -- tests/test_file.py\n")),(0,a.yg)("p",null,"or for a specific test via,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tox -e <environment> -- tests/test_file.py::TestClassName::test_method_name\n")),(0,a.yg)("p",null,"Note that the test environment uses a temporary directory for defining the\nSQLite databases which will be cleared each time before the group of test\ncommands are invoked."),(0,a.yg)("p",null,"There is also a utility script included in the Superset codebase to run python integration tests. The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/tree/master/scripts/tests"},"readme can be\nfound here")),(0,a.yg)("p",null,"To run all integration tests for example, run this script from the root directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"scripts/tests/run.sh\n")),(0,a.yg)("p",null,"You can run unit tests found in './tests/unit_tests' for example with pytest. It is a simple way to run an isolated test that doesn't need any database setup"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"pytest ./link_to_test.py\n")),(0,a.yg)("h4",{id:"testing-with-local-presto-connections"},"Testing with local Presto connections"),(0,a.yg)("p",null,"If you happen to change db engine spec for Presto/Trino, you can run a local Presto cluster with Docker:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker run -p 15433:15433 starburstdata/presto:350-e.6\n")),(0,a.yg)("p",null,"Then update ",(0,a.yg)("inlineCode",{parentName:"p"},"SUPERSET__SQLALCHEMY_EXAMPLES_URI")," to point to local Presto cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export SUPERSET__SQLALCHEMY_EXAMPLES_URI=presto://localhost:15433/memory/default\n")),(0,a.yg)("h3",{id:"frontend-testing"},"Frontend Testing"),(0,a.yg)("p",null,"We use ",(0,a.yg)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,a.yg)("a",{parentName:"p",href:"https://airbnb.io/enzyme/"},"Enzyme")," to test TypeScript/JavaScript. Tests can be run with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd superset-frontend\nnpm run test\n")),(0,a.yg)("p",null,"To run a single test file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run test -- path/to/file.js\n")),(0,a.yg)("h3",{id:"e2e-integration-testing"},"e2e Integration Testing"),(0,a.yg)("p",null,"We use ",(0,a.yg)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress")," for end-to-end integration\ntests. One easy option to get started quickly is to leverage ",(0,a.yg)("inlineCode",{parentName:"p"},"tox")," to\nrun the whole suite in an isolated environment."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tox -e cypress\n")),(0,a.yg)("p",null,"Alternatively, you can go lower level and set things up in your\ndevelopment environment by following these steps:"),(0,a.yg)("p",null,"First set up a python/flask backend:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'export SUPERSET_CONFIG=tests.integration_tests.superset_test_config\nexport SUPERSET_TESTENV=true\nexport CYPRESS_BASE_URL="http://localhost:8081"\nsuperset db upgrade\nsuperset load_test_users\nsuperset init\nsuperset load-examples --load-test-data\nsuperset run --port 8081\n')),(0,a.yg)("p",null,"In another terminal, prepare the frontend and run Cypress tests:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'cd superset-frontend\nnpm run build-instrumented\n\ncd cypress-base\nnpm install\n\n# run tests via headless Chrome browser (requires Chrome 64+)\nnpm run cypress-run-chrome\n\n# run tests from a specific file\nnpm run cypress-run-chrome -- --spec cypress/e2e/explore/link.test.ts\n\n# run specific file with video capture\nnpm run cypress-run-chrome -- --spec cypress/e2e/dashboard/index.test.js --config video=true\n\n# to open the cypress ui\nnpm run cypress-debug\n\n# to point cypress to a url other than the default (http://localhost:8088) set the environment variable before running the script\n# e.g., CYPRESS_BASE_URL="http://localhost:9000"\nCYPRESS_BASE_URL=<your url> npm run cypress open\n')),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/superset-frontend/cypress_build.sh"},(0,a.yg)("inlineCode",{parentName:"a"},"superset-frontend/cypress_build.sh")),"."),(0,a.yg)("p",null,"As an alternative you can use docker compose environment for testing:"),(0,a.yg)("p",null,"Make sure you have added below line to your /etc/hosts file:\n",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1 db")),(0,a.yg)("p",null,"If you already have launched Docker environment please use the following command to assure a fresh database instance:\n",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose down -v")),(0,a.yg)("p",null,"Launch environment:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CYPRESS_CONFIG=true docker compose up")),(0,a.yg)("p",null,"It will serve backend and frontend on port 8088."),(0,a.yg)("p",null,"Run Cypress tests:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd cypress-base\nnpm install\nnpm run cypress open\n")),(0,a.yg)("h3",{id:"debugging-server-app"},"Debugging Server App"),(0,a.yg)("p",null,"Follow these instructions to debug the Flask app running inside a docker container."),(0,a.yg)("p",null,"First add the following to the ./docker-compose.yaml file"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'superset:\n    env_file: docker/.env\n    image: *superset-image\n    container_name: superset_app\n    command: ["/app/docker/docker-bootstrap.sh", "app"]\n    restart: unless-stopped\n+   cap_add:\n+     - SYS_PTRACE\n    ports:\n      - 8088:8088\n+     - 5678:5678\n    user: "root"\n    depends_on: *superset-depends-on\n    volumes: *superset-volumes\n    environment:\n      CYPRESS_CONFIG: "${CYPRESS_CONFIG}"\n')),(0,a.yg)("p",null,"Start Superset as usual"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,a.yg)("p",null,"Install the required libraries and packages to the docker container"),(0,a.yg)("p",null,"Enter the superset_app container"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it superset_app /bin/bash\nroot@39ce8cf9d6ab:/app#\n")),(0,a.yg)("p",null,"Run the following commands inside the container"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gdb\napt install -y net-tools\npip install debugpy\n")),(0,a.yg)("p",null,"Find the PID for the Flask process. Make sure to use the first PID. The Flask app will re-spawn a sub-process every time you change any of the python code. So it's important to use the first PID."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ps -ef\n\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0 14:09 ?        00:00:00 bash /app/docker/docker-bootstrap.sh app\nroot         6     1  4 14:09 ?        00:00:04 /usr/local/bin/python /usr/bin/flask run -p 8088 --with-threads --reload --debugger --host=0.0.0.0\nroot        10     6  7 14:09 ?        00:00:07 /usr/local/bin/python /usr/bin/flask run -p 8088 --with-threads --reload --debugger --host=0.0.0.0\n")),(0,a.yg)("p",null,"Inject debugpy into the running Flask process. In this case PID 6."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"python3 -m debugpy --listen 0.0.0.0:5678 --pid 6\n")),(0,a.yg)("p",null,"Verify that debugpy is listening on port 5678"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"netstat -tunap\n\nActive Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 0.0.0.0:5678            0.0.0.0:*               LISTEN      462/python\ntcp        0      0 0.0.0.0:8088            0.0.0.0:*               LISTEN      6/python\n")),(0,a.yg)("p",null,"You are now ready to attach a debugger to the process. Using VSCode you can configure a launch configuration file .vscode/launch.json like so."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Attach to Superset App in Docker Container",\n            "type": "python",\n            "request": "attach",\n            "connect": {\n                "host": "127.0.0.1",\n                "port": 5678\n            },\n            "pathMappings": [\n                {\n                    "localRoot": "${workspaceFolder}",\n                    "remoteRoot": "/app"\n                }\n            ]\n        },\n    ]\n}\n')),(0,a.yg)("p",null,'VSCode will not stop on breakpoints right away. We\'ve attached to PID 6 however it does not yet know of any sub-processes. In order to "wakeup" the debugger you need to modify a python file. This will trigger Flask to reload the code and create a new sub-process. This new sub-process will be detected by VSCode and breakpoints will be activated.'),(0,a.yg)("h3",{id:"debugging-server-app-in-kubernetes-environment"},"Debugging Server App in Kubernetes Environment"),(0,a.yg)("p",null,"To debug Flask running in POD inside kubernetes cluster. You'll need to make sure the pod runs as root and is granted the SYS_TRACE capability.These settings should not be used in production environments."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  securityContext:\n    capabilities:\n      add: ["SYS_PTRACE"]\n')),(0,a.yg)("p",null,"See (set capabilities for a container)","[https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container]"," for more details."),(0,a.yg)("p",null,"Once the pod is running as root and has the SYS_PTRACE capability it will be able to debug the Flask app."),(0,a.yg)("p",null,"You can follow the same instructions as in the docker-compose. Enter the pod and install the required library and packages; gdb, netstat and debugpy."),(0,a.yg)("p",null,"Often in a Kubernetes environment nodes are not addressable from outside the cluster. VSCode will thus be unable to remotely connect to port 5678 on a Kubernetes node. In order to do this you need to create a tunnel that port forwards 5678 to your local machine."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl port-forward  pod/superset-<some random id> 5678:5678\n")),(0,a.yg)("p",null,"You can now launch your VSCode debugger with the same config as above. VSCode will connect to to 127.0.0.1:5678 which is forwarded by kubectl to your remote kubernetes POD."),(0,a.yg)("h3",{id:"storybook"},"Storybook"),(0,a.yg)("p",null,"Superset includes a ",(0,a.yg)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," to preview the layout/styling of various Superset components, and variations thereof. To open and view the Storybook:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd superset-frontend\nnpm run storybook\n")),(0,a.yg)("p",null,"When contributing new React components to Superset, please try to add a Story alongside the component's ",(0,a.yg)("inlineCode",{parentName:"p"},"jsx/tsx")," file."))}g.isMDXComponent=!0}}]);