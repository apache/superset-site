"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4014],{79874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={title:"Translating",hide_title:!0,sidebar_position:9,version:1},l=void 0,o={unversionedId:"contributing/translations",id:"contributing/translations",title:"Translating",description:"Translating",source:"@site/docs/contributing/translations.mdx",sourceDirName:"contributing",slug:"/contributing/translations",permalink:"/docs/contributing/translations",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/translations.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Translating",hide_title:!0,sidebar_position:9,version:1},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/contributing/testing-locally"},next:{title:"Creating Visualization Plugins",permalink:"/docs/contributing/creating-viz-plugins"}},s={},p=[{value:"Translating",id:"translating",level:2},{value:"Enabling language selection",id:"enabling-language-selection",level:3},{value:"Creating a new language dictionary",id:"creating-a-new-language-dictionary",level:3},{value:"Extracting new strings for translation",id:"extracting-new-strings-for-translation",level:3},{value:"Updating language files",id:"updating-language-files",level:3},{value:"Applying translations",id:"applying-translations",level:3}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"translating"},"Translating"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://python-babel.github.io/flask-babel/"},"Flask-Babel")," to translate Superset.\nIn Python files, we use the following\n",(0,r.kt)("a",{parentName:"p",href:"https://python-babel.github.io/flask-babel/#using-translations"},"translation functions"),"\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"Flask-Babel"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gettext")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"lazy_gettext")," (usually aliased to ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"): for translating singular\nstrings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngettext"),": for translating strings that might become plural.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from flask_babel import lazy_gettext as _\n")),(0,r.kt)("p",null,"then wrap the translatable strings with it, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_('Translate me')"),".\nDuring extraction, string literals passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," will be added to the\ngenerated ",(0,r.kt)("inlineCode",{parentName:"p"},".po")," file for each language for later translation."),(0,r.kt)("p",null,"At runtime, the ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," function will return the translation of the given\nstring for the current language, or the given string itself\nif no translation is available."),(0,r.kt)("p",null,"In TypeScript/JavaScript, the technique is similar:\nwe import ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," (simple translation), ",(0,r.kt)("inlineCode",{parentName:"p"},"tn")," (translation containing a number)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { t, tn } from "@superset-ui/translation";\n')),(0,r.kt)("h3",{id:"enabling-language-selection"},"Enabling language selection"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"LANGUAGES")," variable to your ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_config.py"),". Having more than one\noption inside will add a language selection dropdown to the UI on the right side\nof the navigation bar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"LANGUAGES = {\n    'en': {'flag': 'us', 'name': 'English'},\n    'fr': {'flag': 'fr', 'name': 'French'},\n    'zh': {'flag': 'cn', 'name': 'Chinese'},\n}\n")),(0,r.kt)("h3",{id:"creating-a-new-language-dictionary"},"Creating a new language dictionary"),(0,r.kt)("p",null,"First check if the language code for your target language already exists. Check if the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"two letter ISO 639-1 code"),"\nfor your target language already exists in the ",(0,r.kt)("inlineCode",{parentName:"p"},"superset/translations")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ls superset/translations | grep -E "^[a-z]{2}\\/"\n')),(0,r.kt)("p",null,"If your language already has a pre-existing translation, skip to the next section"),(0,r.kt)("p",null,"The following languages are already supported by Flask AppBuilder, and will make it\neasier to translate the application to your target language:\n",(0,r.kt)("a",{parentName:"p",href:"https://flask-appbuilder.readthedocs.io/en/latest/i18n.html"},"Flask AppBuilder i18n documentation")),(0,r.kt)("p",null,"To create a dictionary for a new language, first make sure the necessary dependencies are installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r superset/translations/requirements.txt\n")),(0,r.kt)("p",null,"Then run the following, where ",(0,r.kt)("inlineCode",{parentName:"p"},"LANGUAGE_CODE")," is replaced with the language code for your target\nlanguage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pybabel init -i superset/translations/messages.pot -d superset/translations -l LANGUAGE_CODE\n")),(0,r.kt)("p",null,"For instance, to add a translation for Finnish (language code ",(0,r.kt)("inlineCode",{parentName:"p"},"fi"),"), run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pybabel init -i superset/translations/messages.pot -d superset/translations -l fi\n")),(0,r.kt)("h3",{id:"extracting-new-strings-for-translation"},"Extracting new strings for translation"),(0,r.kt)("p",null,"This step needs to be done every time application strings change. This happens fairly\nfrequently, so if you want to ensure that your translation has good coverage, this\nstep needs to be run fairly frequently and the updated strings merged to the upstream\ncodebase via PRs. To update the template file ",(0,r.kt)("inlineCode",{parentName:"p"},"superset/translations/messages.pot"),"\nwith current application strings, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pybabel extract -F superset/translations/babel.cfg -o superset/translations/messages.pot -k _ -k __ -k t -k tn -k tct .\n")),(0,r.kt)("p",null,"Do not forget to update this file with the appropriate license information."),(0,r.kt)("h3",{id:"updating-language-files"},"Updating language files"),(0,r.kt)("p",null,"Run the following command to update the language files with the new extracted strings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pybabel update -i superset/translations/messages.pot -d superset/translations --ignore-obsolete\n")),(0,r.kt)("p",null,"You can then translate the strings gathered in files located under\n",(0,r.kt)("inlineCode",{parentName:"p"},"superset/translation"),", where there's one folder per language. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://poedit.net/features"},"Poedit"),"\nto translate the ",(0,r.kt)("inlineCode",{parentName:"p"},"po")," file more conveniently.\nThere are some ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.lxde.org/en/Translate_*.po_files_with_Poedit"},"tutorials in the wiki"),"."),(0,r.kt)("p",null,"To perform the translation on MacOS, you can install ",(0,r.kt)("inlineCode",{parentName:"p"},"poedit")," via Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install poedit\n")),(0,r.kt)("p",null,"After this, just start the ",(0,r.kt)("inlineCode",{parentName:"p"},"poedit")," application and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"messages.po")," file. In the\ncase of the Finnish translation, this would be ",(0,r.kt)("inlineCode",{parentName:"p"},"superset/translations/fi/LC_MESSAGES/messages.po"),"."),(0,r.kt)("h3",{id:"applying-translations"},"Applying translations"),(0,r.kt)("p",null,"To make the translations available on the frontend, we need to convert the PO file into\na JSON file. To do this, we need to globally install the npm package ",(0,r.kt)("inlineCode",{parentName:"p"},"po2json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g po2json\n")),(0,r.kt)("p",null,"To convert all PO files to formatted JSON files you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"po2json.sh")," script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/po2json.sh\n")),(0,r.kt)("p",null,"If you get errors running ",(0,r.kt)("inlineCode",{parentName:"p"},"po2json"),", you might be running the Ubuntu package with the same\nname, rather than the Node.js package (they have a different format for the arguments). If\nthere is a conflict, you may need to update your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable or fully qualify\nthe executable path (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/po2json")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"po2json"),").\nIf you get a lot of ",(0,r.kt)("inlineCode",{parentName:"p"},"[null,***]")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"messages.json"),", just delete all the ",(0,r.kt)("inlineCode",{parentName:"p"},"null,"),".\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"year":["\u5e74"]')," is correct while ",(0,r.kt)("inlineCode",{parentName:"p"},'"year":[null,"\u5e74"]'),"is incorrect."),(0,r.kt)("p",null,"Finally, for the translations to take effect we need to compile translation catalogs into\nbinary MO files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pybabel compile -d superset/translations\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);