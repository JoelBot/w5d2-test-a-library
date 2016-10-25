// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function () {
    var one = function(selector) {
        return document.querySelector(selector)
    }

    // var add = function(num1 = 0, num2 = 0, num3 = 0) {
    //     return num1 + num2 + num3
    // }
    var add = function() {
        var numbers = Array.from(arguments)

        var total = numbers.reduce(function(previous, current) {
            return previous + current
        }, 0)
        return total
        // console.log(total)
    }

    var all = function(selector) {
        console.log(document.querySelectorAll(selector))
        return document.querySelectorAll(selector)
    } //: Find all matching elements using any CSS selector

    var remove = function(selector, index = null) {
        // var SelectorArray = document.querySelectorAll(selector) // optional for FIND ALL
        // var selector = document.querySelector(selector)

        // SelectorArray.forEach(function(item, i){
        // console.dir(item)
        // selector.parentNode.removeChild(selector)
        // })
        // document.querySelectorAll(selector).parentNode.removeChild(selector)
        // return 'Remove operation complete'
        if (index === null) {
            all(selector).remove() // Collins approach
            console.log('removed: ' + selector)
        }
        else {
            all(selector)[index].remove() // Collins approach
            console.log('removed: ' + selector + ' number ' + index)
        }


    } //: Remove an element
    var addClass = function(selector, classToAdd) {
        // var collection = document.querySelector(selector)
        // // collection.forEach(function(item) {
        // collection.classList.add(classToAdd)
        one(selector).classList.add(classToAdd)
        // })
        // return 'Class added to first specified tag'
    }
    var removeClass = function(selector, classToRemove) {
        var collection = document.querySelector(selector)
        // collection.forEach(function(item) {
        collection.classList.remove(classToRemove)
        // })
        return 'Class removed to each tag found'
    } //: Remove a CSS class from an element
    var hasClass = function(selector, classCheck) {
        // console.log("Output for hasClass function:")
        // console.log(all(selector))
        return one(selector).classList.contains(classCheck)
        //     return true
        // }
        // else {
        //     return false
        // }
    }//: Return true if an element contains a CSS class in it\'s CSS attribute (see classList documentation)
   //  var getAttr = function(selector, attribute){
   //      // var attributeVariable = document.querySelector(selector)
   //      // // console.log("Output for getAttr function:")
   //      // attributeVariable.classList.forEach(function(item) {
   //      //     console.log(item)
   //      // })
   //      console.dir(document.querySelector(selector).getAttribute('clientHeight'))
   //      return one(selector).getAttribute(attribute) //Collins approach
   //      // console.log(attributeVariable)
   //  }//: Get an HTML attribute from an element
   //  var setAttr = function(selector, attribute) {
   //      // console.log(selector)
   //      return document.querySelector(selector).className = attribute
   //  } //: Set an HTML attribute on an element
   //
    var getAttr = function (selector, attr) {
       return one(selector).getAttribute(attr)
   }

   var setAttr = function (selector, attr, value) {
       one(selector).setAttribute(attr, value)
       return window.md
   }
    var setHTML = function(selector, htmlToSet) {
        return one(selector).innerHTML = htmlToSet
    } //: Set the innerHTML of an element
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    } //: Get the innerHTML of an element

    //AJAX to make api call
    var ajax = function(url, successCallback) {
        fetch(url)
        .then(res => res.json())
        .then(successCallback)
    }

    // Properties getProp
    var getProp = function(selector, property) {
        return one(selector)[property] // brackets to get around the literal object property issue that would be experienced if used as selector.property
    }

    var setProp = function(selector, property, value) {
        one(selector)[property] = value// brackets to get around the literal object property issue that would be experienced if used as selector.property
    }
    var getValue = function(selector, value) {
        return one(selector).value
    }
    var setValue = function(selector, value) {
        return one(selector).value = value
    }


    window.md = {
        one: one,
        add: add,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,

    }
}())
