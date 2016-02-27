var expect = require('chai').expect;
var css = require('css');
var parser = require('../lib/parser');
describe('css-cs parser ', function () {
    it('should process CSS to array of rules', function () {
        var ast = css.parse('.type { color:red} .other-type {color:white}');
        console.log(JSON.stringify(ast.stylesheet.rules));
        var actual = parser('.type { color:red} .other-type {color:white}');
        expect(actual).to.be.an('array');
        expect(actual).to.have.lengthOf(2);
    });
});
