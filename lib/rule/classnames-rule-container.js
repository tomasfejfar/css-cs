module.exports = function (ruleAst, context) {
    if (ruleAst.type != 'rule') {
        return;
    }
    for (var i in ruleAst.selectors) {
        sanitizeSelector(ruleAst.selectors[i]);
    }
};
var c = console.dir;
sanitizeSelector = function (selector) {
    var nextSeparator = selector.trim().substr(1).search(/[#\.> ]+/);
    if (nextSeparator === -1) {
        return [];
    }
    var selectors = [];
    var subselector;
    var i = 0;
    while (nextSeparator && i < 10) {
        selectors.push(selector.slice(0, nextSeparator + 1).trim());
        selector = selector.slice(nextSeparator + 1);
        nextSeparator = selector.indexOf(/[#\.> ]/);
        i++;
    }
    selectors.push(selector);
};
