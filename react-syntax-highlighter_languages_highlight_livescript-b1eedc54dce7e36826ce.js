(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{Dbvs:function(e,n){var a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],t=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){var n={keyword:a.concat(["then","unless","until","loop","of","by","when","and","or","is","isnt","not","it","that","otherwise","from","to","til","fallthrough","case","enum","native","list","map","__hasProp","__extends","__slice","__bind","__indexOf"]).join(" "),literal:r.concat(["yes","no","on","off","it","that","void"]).join(" "),built_in:t.concat(["npm","print"]).join(" ")},i="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",s=e.inherit(e.TITLE_MODE,{begin:i}),o={className:"subst",begin:/#\{/,end:/}/,keywords:n},c={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:n},l=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,o,c]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o,c]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[o,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W)/}]},{begin:"@"+i},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];o.contains=l;var d={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(l)}]};return{name:"LiveScript",aliases:["ls"],keywords:n,illegal:/\/\*/,contains:l.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,{begin:"(#=>|=>|\\|>>|-?->|\\!->)"},{className:"function",contains:[s,d],returnBegin:!0,variants:[{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",end:"\\->\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[s]},s]},{begin:i+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_livescript-b1eedc54dce7e36826ce.js.map