var expect = require('chai').expect;
var css = require('css');
var extractor = require('../../lib/extractor/selector');
describe('selector extractor', function () {
    describe('extractor', function () {

        it('should extract selector from AST', function () {
            var ast = {"type":"rule","selectors":[".type"],"declarations":[{"type":"declaration","property":"color","value":"black","position":{"start":{"line":1,"column":9},"end":{"line":1,"column":20}}}],"position":{"start":{"line":1,"column":1},"end":{"line":1,"column":21}}};
            expect(extractor(ast)).to.deep.equal(['.type']);
        });

        it('should skip things that are not css rules', function () {
            var ast = {"type":"comment","comment":" comment ","position":{"start":{"line":1,"column":1},"end":{"line":1,"column":14}}};
            expect(extractor(ast)).to.deep.equal([]);
        });
    });
});
