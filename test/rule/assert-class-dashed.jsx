const assert = require('chai').assert;
const expect = require('chai').expect;
const validate = require('../../lib/rule/assert/dash-separated-classname');
describe('dash-separated-classnames', function() {
    describe('validate', () => {
        it('should mark correct class valid', () => {
            expect(validate('.some-class')).to.equal(true);
        });

        it('should mark incorrect class invalid', () => {
           expect(validate('.someClass')).to.equal(false);
        });

        it('should support complex class definition', () => {
            expect(validate('.toggled-sections[data-content="accordion"]')).to.equal(true);
            expect(validate('.toggledSections[data-content="accordion"]')).to.equal(false);
        });

    });
});
