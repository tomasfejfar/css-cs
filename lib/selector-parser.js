module.exports = function (selectors) {
    selectors = selectors.trim();
    if (!selectors) {
        return [];
    }
    selectorArray = [];
    while (selectors.trim() !== '') {
        var regexp = /[.#\s]/;
        var index = selectors.search(new RegExp(regexp));
        if (index === 0) {
            var tmpselector = selectors.slice(1);
            index = tmpselector.search(new RegExp(regexp));
        }
        if (index === -1) {
            selectorArray.push(selectors);
            return selectorArray;
        } else {
            selectorArray.push(getSelectorByIndex(selectors, index));
            selectors = cutSelectorByIndex(selectors, index);
        }
    }


    return selectorArray;
};

var getSelectorByIndex = function (selectorString, index) {
    return selectorString.slice(0, index + 1);
};

var cutSelectorByIndex = function (selectorString, index) {
    return selectorString.slice(index + 1).trim();
};
