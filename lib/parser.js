css = require('css');

module.exports = function (cssString) {
    var ast = css.parse(cssString);
    return ast.stylesheet.rules;
};
