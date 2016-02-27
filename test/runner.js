var expect = require('chai').expect;
var css = require('css');
var runnerFactory = require('../lib/runner');
describe('css-cs runner', function () {
    it('should take css and run asserts', function () {
        var rule = function (item) {
            //console.log(item, "\n");
        };
        var cssString = '.type { color:red} .other-type .some-other-class{color:white}';
        var runner = runnerFactory(cssString, rule);
    });
});
