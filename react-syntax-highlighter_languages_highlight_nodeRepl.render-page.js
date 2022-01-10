exports.ids = ["react-syntax-highlighter_languages_highlight_nodeRepl"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/node-repl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/node-repl.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Node REPL
Requires: javascript.js
Author: Marat Nagayev <nagaevmt@yandex.ru>
Category: scripting
*/

/** @type LanguageFn */
function nodeRepl(hljs) {
  return {
    name: 'Node REPL',
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'javascript'
          }
        },
        variants: [
          {
            begin: /^>(?=[ ]|$)/
          },
          {
            begin: /^\.\.\.(?=[ ]|$)/
          }
        ]
      }
    ]
  };
}

module.exports = nodeRepl;


/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nodeRepl.render-page.js.map