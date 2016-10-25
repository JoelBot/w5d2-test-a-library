var expect = chai.expect
var assert = chai.assert
chai.should()

// console.log(expect)

describe('DOM Methods', function() {
    describe('body', function() {
        it('should have 7 and 10 children', function() {
            expect(document.body.children.length).to.be.within(7, 10) // EXPECT
        })
        it('should have 7 and 10 children', function() {
            document.body.children.length.should.be.within(7, 10) // SHOULD
        })
        it('should have 7 and 10 children', function() { // ASSERT
            assert.isTrue(document.body.children.length >= 7 &&
                document.body.children.length <= 10)
        })
    })
})
describe('MoDom Library', function() {
    it('md should exist', function() {
        expect(md).to.exist
    })

    describe('one() Function', function() {
        it('should return an object', function() {
            expect(typeof md.one('div')).to.equal('object')
        })
        it('should be the mocha div', function() {
            expect(md.one('div').id).to.equal('mocha')
        })

    })
    describe('add() Function', function() {
        it('should be 2', function() {
            expect(md.add(1, 1)).to.equal(2)
        })
        it('should be 3', function() {
            expect(md.add(1, 1, 1)).to.equal(3)
        })
        it('should be 5', function() {
            expect(md.add(1, 1, 1, 1, 1)).to.equal(5)
        })
    })
})
