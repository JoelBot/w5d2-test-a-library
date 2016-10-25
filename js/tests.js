// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  describe('md.all()', function() {
    it('should find at least one table', function() {
      expect(md.all('table').length).to.be.least(1)
    })
    it('should find 4 images', function() {
      expect(md.all('img').length).to.be.most(4)
    })
  })
  describe('md.remove()', function() {
    it('should remove the 3rd image (of 4 images)', function() {
      md.remove('img', 2)
      expect(document.querySelectorAll('img').length).to.equal(3)
    })
  })
  describe('md.addClass()', function() {
    it('should add .placeholder to body', function() {
      md.addClass('body','placeholder')
      expect(document.body.classList.contains('placeholder'))
    })
  })
  describe('md.removeClass()', function() {
    it('should remove test from body', function() {
      md.removeClass('body','test')
      expect(document.body.classList.contains('test')).to.be.false
    })
  })
  describe('md.hasClass()', function() { // need to fix the function for hasClass
    it('should verify body has class placeholder anywhere', function() {
      // md.hasClass('body','placeholder')
      expect(md.hasClass('body','placeholder')).to.be.true
    })
    it('should verify nav-bar has class navbar-inverse anywhere', function() {
      // md.hasClass('body','placeholder')
      expect(md.hasClass('body','placeholder')).to.be.true
    })
  })
  describe('md.getAttr()', function() {
    it('should dislay table with X children', function() {
      // md.removeClass('body','test')
      expect(md.getAttr('table', 'children')).to.equal(7)
    })
  })
})
