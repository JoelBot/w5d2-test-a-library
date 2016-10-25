var chai = require('chai') // this brings library of code in to this environment
var expect = chai.expect

function increment(value = -1, incrementAmt = 1) {
    // value += incrementAmt
    return value + incrementAmt
}

describe('increment()', function() {
    it('should exist', function() {
        expect(increment).to.be.a('function') // don't need typeof with node running command line
    })
    it('should return 0 when value undefined', function() {
        expect(increment()).to.equal(0)
    })
    it('should return 1 when value is 0', function() {
        expect(increment(0)).to.equal(1)
    })
    it('should return 10 when value is 0 and increment value is 10', function() {
        expect(increment(0, 10)).to.equal(10)
    })
})
