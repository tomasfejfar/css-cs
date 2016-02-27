var parser = require('./parser');
var extractor = require('./extractor/selector');

module.exports = function (cssString, assertsSet) {
    var rules = parser(cssString);
    rules.forEach(function (rule) {
        var selectors = extractor(rule);
        selectors.forEach(function (selector) {
            assertsSet(selector);
        });
    });
};
