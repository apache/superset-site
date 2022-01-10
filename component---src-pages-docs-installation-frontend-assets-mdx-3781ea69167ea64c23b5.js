(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{DQGa:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("k1TG"),r=n("8o2o"),s=(n("q1tI"),n("7ljp")),o=n("hhGP"),l=(n("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/frontend-assets.mdx"}});var i={_frontmatter:l},b=o.a;function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(b,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"frontend"},"Frontend"),Object(s.b)("p",null,"If you plan to make contributions to the superset frontend (contained within the ",Object(s.b)("inlineCode",{parentName:"p"},"superset-frontend")," folder in the main repo),\nfrontend assets (TypeScript, JavaScript, CSS, and images) must be compiled in order to properly display the web UI.\nThe ",Object(s.b)("inlineCode",{parentName:"p"},"superset-frontend")," directory contains all NPM-managed frontend assets.\nNote that for some legacy pages there are additional frontend assets bundled with Flask-Appbuilder (e.g. jQuery and bootstrap).\nThese are not managed by NPM and may be phased out in the future."),Object(s.b)("h4",{id:"prerequisite"},"Prerequisite"),Object(s.b)("h5",{id:"nvm-and-node"},"nvm and node"),Object(s.b)("p",null,"First, be sure you are using the following versions of Node.js and npm:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Node.js"),": Version 16"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"npm"),": Version 7")),Object(s.b)("p",null,"We recommend using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," to manage your node environment:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash\n\ncd superset-frontend\nnvm install --lts\nnvm use --lts\n")),Object(s.b)("p",null,"Or if you use the default macOS starting with Catalina shell ",Object(s.b)("inlineCode",{parentName:"p"},"zsh"),", try:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-zsh"}),'sh -c "$(curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh)"\n')),Object(s.b)("p",null,"For those interested, you may also try out ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm#deeper-shell-integration"}),"avn")," to automatically\nswitch to the node version that is required to run Superset frontend."),Object(s.b)("h4",{id:"install-dependencies"},"Install dependencies"),Object(s.b)("p",null,"Install third-party dependencies listed in ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," via:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# From the root of the repository\ncd superset-frontend\n\n# Install dependencies from `package-lock.json`\nnpm ci\n")),Object(s.b)("h4",{id:"build-assets"},"Build assets"),Object(s.b)("p",null,"There are three types of assets you can build:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"npm run build"),": the production assets, CSS/JSS minified and optimized"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"npm run dev-server"),": local development assets, with sourcemaps and hot refresh support"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"npm run build-instrumented"),": instrumented application code for collecting code coverage from Cypress tests")),Object(s.b)("h4",{id:"webpack-dev-server"},"Webpack dev server"),Object(s.b)("p",null,"The dev server by default starts at ",Object(s.b)("inlineCode",{parentName:"p"},"http://localhost:9000")," and proxies the backend requests to ",Object(s.b)("inlineCode",{parentName:"p"},"http://localhost:8088"),".\nIt's possible to change these settings:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Start the dev server at http://localhost:9000\nnpm run dev-server\n\n# Run the dev server on a non-default port\nnpm run dev-server -- --devserverPort=9001\n\n# Proxy backend requests to a Flask server running on a non-default port\nnpm run dev-server -- --supersetPort=8081\n\n# Proxy to a remote backend but serve local assets\nnpm run dev-server -- --superset=https://superset-dev.example.com\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"--superset=")," option is useful in case you want to debug a production issue or have to setup Superset behind a firewall.\nIt allows you to run Flask server in another environment while keep assets building locally for the best developer experience."),Object(s.b)("h4",{id:"other-npm-commands"},"Other npm commands"),Object(s.b)("p",null,"Alternatively, there are other NPM commands you may find useful:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"npm run build-dev"),": build assets in development mode."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"npm run dev"),": built dev assets in watch mode, will automatically rebuild when a file changes")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/frontend-assets.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-frontend-assets-mdx-3781ea69167ea64c23b5.js.map