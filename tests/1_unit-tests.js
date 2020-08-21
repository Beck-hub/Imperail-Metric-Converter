/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.4L';
      assert.equal(convertHandler.getNum(input),32.4);
      done();
    });
    });
    
    test('Fractional Input', function(done) {
      var input = '1/5L';
      assert.equal(convertHandler.getNum(input),0.2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.0/5L';
      assert.equal(convertHandler.getNum(input),1);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '5/5/5/5L';
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
       let input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });
    
    // test('Unknown Unit Input', function(done) {
    //    var input = ['boy','kl','tall','-','why','go'];
    //    input.forEach(function(el){
    //    assert.equal(convertHandler.getUnit(el), "invalid ");
    //   })
    //   done();
    // });  
    
  }); // end this function all okay
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    }); 
    
  });  // end this function
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    // test('For Each Valid Unit Inputs', function(done) { // not using this function, but if i was, this would be an accurate test:
    //   const input = ['gal','l','mi','km','lbs','kg'];
    //   const expect = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
    //   input.forEach(function(el, i) {
    //     assert.equal(convertHandler.spellOutUnit(el), expect[i]); 
    //   });
    //   done();
    // });
    
  }); // end this function
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });// end test
    
    test('L to Gal', function(done) {
      const input = [5, "L"];
      const expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    }); // end test
    
    test('Mi to Km', function(done) {
      const input = [5, "mi"];
      const expected = 8.04672
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    }); // end test
    
    test('Km to Mi', function(done) {
      const input = [5, "km"];
      const expected = 3.10686
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    }); // end test
    
    test('Lbs to Kg', function(done) {
      const input = [1, "lb"];
      const expected = 0.453592
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    }); //end test
    
    test('Kg to Lbs', function(done) {
      const input = [1, "kg"];
      const expected = 2.2
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    }); // end test
    
  }); // End Function convertHandler.convert(num, unit)

