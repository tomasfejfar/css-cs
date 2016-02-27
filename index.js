var argv = require('yargs').demand(1).argv;
var css = require('css');
var ruleSelector = require('./lib/rule/selector');
var ruleDash = require('./lib/rule/assert/dash-separated-classname');
var ruleCamel = require('./lib/rule/assert/camel-cased-ids');
var runner = require('./lib/runner');
fs = require('fs');

var args = argv._;
var filename = args[0];

var validator = ruleSelector([ruleDash, ruleCamel]);

fs.readFile(filename, function (err, data) {
    if (err) throw err;
    data = data + '';
    runner(data, validator);
});
