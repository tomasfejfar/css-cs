var assert = require('chai').assert;
var expect = require('chai').expect;
var validate = require('../../lib/rule/assert/dash-separated-classname');
describe('dash-separated-classnames', function() {
describe('validate', function () {
        it('should mark correct class valid', function () {
            expect(validate('.some-class')).to.equal(true);
        });

        it('should mark incorrect class invalid', function () {
           expect(validate('.someClass')).to.equal(false);
        });

        it('should support complex class definition', function () {
            expect(validate('.toggled-sections[data-content="accordion"]')).to.equal(true);
            expect(validate('.toggledSections[data-content="accordion"]')).to.equal(false);
        });
    });
});
