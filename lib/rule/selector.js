var selectorParser = require('../selector-parser');

module.exports = function (asserts) {
    return function (selectorsString) {
        selectors = selectorParser(selectorsString);
        selectors.forEach(function (selector) {
            asserts.forEach(function (assert) {
                var result = assert(selector);
                if (!result) {
                    throw new Error('Assert failed for ' + selector + ' inside ' + selectorsString);
                }
            });
        });
        return true;
    }
};
