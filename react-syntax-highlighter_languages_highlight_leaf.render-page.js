exports.ids = ["react-syntax-highlighter_languages_highlight_leaf"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/leaf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/leaf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Leaf
Author: Hale Chan <halechan@qq.com>
Description: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.
*/

function leaf (hljs) {
  return {
    name: 'Leaf',
    contains: [
      {
        className: 'function',
        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
        end:' {',
        returnBegin: true,
        excludeEnd: true,
        contains : [
          {
            className: 'keyword',
            begin: '#+'
          },
          {
            className: 'title',
            begin: '[A-Za-z_][A-Za-z_0-9]*'
          },
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            endsParent: true,
            contains: [
              {
                className: 'string',
                begin: '"',
                end: '"'
              },
              {
                className: 'variable',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              }
            ]
          }
        ]
      }
    ]
  };
}

module.exports = leaf;


/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_leaf.render-page.js.map