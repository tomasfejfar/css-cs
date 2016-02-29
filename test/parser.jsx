const expect = require('chai').expect;
const css = require('css');
const parser = require('../lib/parser');
describe('css-cs parser ', () => {
    it('should process CSS to array of rules', () => {
        const ast = css.parse('.type { color:red} .other-type {color:white}');
        console.log(JSON.stringify(ast.stylesheet.rules));
        const actual = parser('.type { color:red} .other-type {color:white}');
        expect(actual).to.be.an('array');
        expect(actual).to.have.lengthOf(2);
    });
});
