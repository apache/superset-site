exports.ids = ["react-syntax-highlighter_languages_highlight_erb"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erb.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erb.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ERB (Embedded Ruby)
Requires: xml.js, ruby.js
Author: Lucas Mazza <lucastmazza@gmail.com>
Contributors: Kassio Borges <kassioborgesm@gmail.com>
Description: "Bridge" language defining fragments of Ruby in HTML within <% .. %>
Website: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html
Category: template
*/

/** @type LanguageFn */
function erb(hljs) {
  return {
    name: 'ERB',
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[%=-]?',
        end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}

module.exports = erb;


/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_erb.render-page.js.map