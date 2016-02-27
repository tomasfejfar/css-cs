var helpers = require('./helpers');

module.exports = function (classname) {
    var regexp = '^#[a-z][a-zA-Z0-9]+' + helpers.re.attr + '$';
    var match = classname.match(new RegExp(regexp));
    if (!match) {
        return false;
    }
    return match[0] === classname;
};
