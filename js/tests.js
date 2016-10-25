// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })

  describe('md.one()', function() {
    it('should find at least one element', function() {
      expect(md.one('table'))
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
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
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
    it('should validate image width to 200', function() {
      expect(md.getAttr('img', 'width')).to.equal('200')
    })
  })
  describe('md.setAttr()', function() {
    it('should validate image width to 250', function() {
      md.setAttr('img','width','250')
      expect(md.getAttr('img', 'width')).to.equal('250')
    })
  })
  describe('md.setHTML()', function() {
    it('should validate h2 innerHTML to Big Old H2 Text.', function() {
      md.setHTML('h2','Big Old H2 Text')
      expect(md.getHTML('h2')).to.equal('Big Old H2 Text')
    })
  })
  describe('md.getHTML()', function() {
    it('should validate <a> innerHTML is ACME, Inc.', function() {
      expect(md.getHTML('a')).to.equal('ACME, Inc.')
    })
  })
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
      // md.setAttr('body','style','transform: rotate(180deg)')
      md.flipPage('transform: rotate(180deg)')
      expect(document.body.style.transform).to.equal('rotate(180deg)')
      md.flipPage('transform: rotate(0deg)')
    })
  })

  describe('md.ajax()', function() {
    it('should connect to API and return without errors', function(done) {
      expect(md.ajax('http://swapi.co/api/', function() {
        done()
      }))
    });
  });

})
