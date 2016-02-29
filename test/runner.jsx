const expect = require('chai').expect;
const css = require('css');
const runnerFactory = require('../lib/runner');
describe('css-cs runner', () => {
    it('should take css and run asserts', () => {
        const rule = item => {
        };
        const cssString = '.type { color:red} .other-type .some-other-class{color:white}';
        const runner = runnerFactory(cssString, rule);
    });
});
