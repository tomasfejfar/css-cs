var expect = require('chai').expect;
var parser = require('../lib/selector-parser');
describe('selector parser', function () {
    describe('parse', function () {
        it('should return empty for no selectors', function () {
            expect(parser('')).to.deep.equal([]);
        });

        it('should return one selector as array', function () {
            expect(parser('.selector')).to.deep.equal(['.selector']);
        });

        it('should correctly parse multiple selectors', function () {
            expect(parser('.selector .other-selector')).to.deep.equal(['.selector', '.other-selector']);
        });

        it('should correctly parse connected selectors', function () {
            expect(parser('.selector.other-selector')).to.deep.equal(['.selector', '.other-selector']);
        });

        it('should correctly parse mixed selectors', function () {
            expect(parser('.selector#otherSelector')).to.deep.equal(['.selector', '#otherSelector']);
        });

        it('should correctly parse complex mixed connected selectors', function () {
            var expectedClasses = [
                '.toggled-sections[data-content="accordion"]',
                '.toggled-sections-inner',
                '.toggled-section:first-child',
                '.toggled-section-header'
            ];
            var inputClasses = '.toggled-sections[data-content="accordion"].toggled-sections-inner .toggled-section:first-child .toggled-section-header';
            expect(parser(inputClasses)).to.deep.equal(expectedClasses);
        });

        it('should not break with newlines', function () {
            expect(parser(".class\n.other-class")).to.deep.equal(['.class', '.other-class']);
        });
    });
});
