const expect = require('chai').expect;
const css = require('css');
const extractor = require('../../lib/extractor/selector');
const ruleAst = require('../fixtures/rule-ast');
const commentAst = require('../fixtures/comment-ast');
describe('selector extractor', () => {
    describe('extractor', () => {

        it('should extract selector from AST', () => {
            expect(extractor(ruleAst)).to.deep.equal(['.type']);
        });

        it('should skip things that are not css rules', () => {
            expect(extractor(commentAst)).to.deep.equal([]);
        });
    });
});
