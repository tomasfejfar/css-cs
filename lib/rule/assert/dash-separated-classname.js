var helpers = require('./helpers');
module.exports = function (classname) {
    var regex = '^\.[a-z][-a-z0-9]+' + helpers.re.attr + '$';
    var match = classname.match(new RegExp(regex));
    if (!match) {
        return false;
    }
    return match[0] === classname;
};
