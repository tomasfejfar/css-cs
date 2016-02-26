var argv = require('yargs').demand(1).argv;
var css = require('css');
var dashRule = require('./lib/rules/dash-separated-classes');
fs = require('fs');

var args = argv._;
var filename = args[0];
fs.readFile(filename, function (err, data) {
    if (err) throw err;
    data = data + '';
    var ast = css.parse(data, filename);
    var rules = ast['stylesheet']['rules'];
    for (var i in rules)
    {
        dashRule(rules[i]);
    }
});
