module.exports = function (ast) {
    if (ast.type !== 'rule') {
        return [];
    }
    return ast.selectors;
};
