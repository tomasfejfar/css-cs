var assert = require('chai').assert;
var expect = require('chai').expect;
var validate = require('../../lib/rule/assert/camel-cased-ids');
describe('camel cased ids assert', function () {
    describe('validate', function () {
        it('should mark correct id valid', function () {
            expect(validate('#uniqueElement')).to.equal(true);
        });

        it('should mark incorrect id invalid', function () {
            expect(validate('#unique-element')).to.equal(false);
        });

        it('should support complex id definition', function () {
            expect(validate('#idSelector[data-content="accordion"]')).to.equal(true);
            expect(validate('#id-selector[data-content="accordion"]')).to.equal(false);
        });
    });
});
