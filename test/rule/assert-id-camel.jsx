const assert = require('chai').assert;
const expect = require('chai').expect;
const validate = require('../../lib/rule/assert/camel-cased-ids');
describe('camel cased ids assert', () => {
    describe('validate', () => {
        it('should mark correct id valid', () => {
            expect(validate('#uniqueElement')).to.equal(true);
        });

        it('should mark incorrect id invalid', () => {
            expect(validate('#unique-element')).to.equal(false);
        });

        it('should support complex id definition', () => {
            expect(validate('#idSelector[data-content="accordion"]')).to.equal(true);
            expect(validate('#id-selector[data-content="accordion"]')).to.equal(false);
        });
    });
});
