const expect = require('chai').expect;
const selector = require('../../lib/rule/selector');

describe('selector rule', () => {
    describe('validate', () => {
        const failingAssert = () => false;
        const successfulAssert = () => true;

        it('should be always valid without asserts', () => {
            const validate = selector([]);
            expect(validate('#a-b .x-y')).to.equal(true);
        });

        it('should be valid without input', () => {
            const validate = selector([failingAssert]);
            expect(validate('')).to.equal(true);
        });

        it('should fail with failing asserts', () => {
            const validate = selector([failingAssert]);
            expect(() => {
                validate('.test')
            }).to.throw(Error);
        });

        it('should sucess with succesful asserts', () => {
            const validate = selector([successfulAssert]);
            expect(validate('.test')).to.equal(true);
        });


        it('should fail if one assert fails', () => {
            const validate = selector([successfulAssert, failingAssert]);
            expect(() => {
                validate('.test')
            }).to.throw(Error);
        });

        it('should succeed if asserts suceed', () => {
            const validate = selector([successfulAssert, successfulAssert]);
            expect(validate('.test')).to.equal(true);
        });


    });
});
