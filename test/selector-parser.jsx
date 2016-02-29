const expect = require('chai').expect;
const parser = require('../lib/selector-parser');
describe('selector parser', () => {
    describe('parse', () => {
        it('should return empty for no selectors', () => {
            expect(parser('')).to.deep.equal([]);
        });

        it('should return one selector as array', () => {
            expect(parser('.selector')).to.deep.equal(['.selector']);
        });

        it('should correctly parse multiple selectors', () => {
            expect(parser('.selector .other-selector')).to.deep.equal(['.selector', '.other-selector']);
        });

        it('should correctly parse connected selectors', () => {
            expect(parser('.selector.other-selector')).to.deep.equal(['.selector', '.other-selector']);
        });

        it('should correctly parse mixed selectors', () => {
            expect(parser('.selector#otherSelector')).to.deep.equal(['.selector', '#otherSelector']);
        });

        it('should correctly parse complex mixed connected selectors', () => {
            const expectedClasses = [
                '.toggled-sections[data-content="accordion"]',
                '.toggled-sections-inner',
                '.toggled-section:first-child',
                '.toggled-section-header'
            ];
            const inputClasses = '.toggled-sections[data-content="accordion"].toggled-sections-inner .toggled-section:first-child .toggled-section-header';
            expect(parser(inputClasses)).to.deep.equal(expectedClasses);
        });

        it('should not break with newlines', () => {
            expect(parser(".class\n.other-class")).to.deep.equal(['.class', '.other-class']);
        });
    });
});
