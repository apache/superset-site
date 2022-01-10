exports.ids = ["react-syntax-highlighter_languages_highlight_csp"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: CSP
Description: Content Security Policy definition highlighting
Author: Taras <oxdef@oxdef.info>
Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

vim: ts=2 sw=2 st=2
*/

/** @type LanguageFn */
function csp(hljs) {
  return {
    name: 'CSP',
    case_insensitive: false,
    keywords: {
      $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',
      keyword: 'base-uri child-src connect-src default-src font-src form-action ' +
        'frame-ancestors frame-src img-src media-src object-src plugin-types ' +
        'report-uri sandbox script-src style-src'
    },
    contains: [
      {
        className: 'string',
        begin: "'",
        end: "'"
      },
      {
        className: 'attribute',
        begin: '^Content',
        end: ':',
        excludeEnd: true
      }
    ]
  };
}

module.exports = csp;


/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_csp.render-page.js.map