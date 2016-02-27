var expect = require('chai').expect;
var selector = require('../../lib/rule/selector');
var assertDashes = require('../../lib/rule/assert/dash-separated-classname');
var assertCamel = require('../../lib/rule/assert/camel-cased-ids');
describe('selector rule', function () {
    describe('validate', function () {
        var failingAssert = function () {
            return false;
        };
        var successfulAssert = function () {
            return true;
        };

        it('should be always valid without asserts', function () {
            var validate = selector([]);
            expect(validate('#a-b .x-y')).to.equal(true);
        });

        it('should be valid without input', function () {
            var validate = selector([failingAssert]);
            expect(validate('')).to.equal(true);
        });

        it('should fail with failing asserts', function () {
            var validate = selector([failingAssert]);
            expect(function () {
                validate('.test')
            }).to.throw(Error);
        });

        it('should sucess with succesful asserts', function () {
            var validate = selector([successfulAssert]);
            expect(validate('.test')).to.equal(true);
        });


        it('should fail if one assert fails', function () {
            var validate = selector([successfulAssert, failingAssert]);
            expect(function () {
                validate('.test')
            }).to.throw(Error);
        });

        it('should succeed if asserts suceed', function () {
            var validate = selector([successfulAssert, successfulAssert]);
            expect(validate('.test')).to.equal(true);
        });


    });
});
