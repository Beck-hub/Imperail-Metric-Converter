/*
*
*
*       Complete the handler logic below
*       
*       
*/

const math = require('mathjs');
function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
 
    if (/^\D/.test(input)) { // starts with something that is not a number
      return 1;
    } else if (/\d+\/\d+\/\d+\/\d+/.test(input)){ // a double fraction is invalid
      result = "invalid number"
      return result
    } else if (/\d+\/\d+\.\d+\/\d/.test(input)) { //3/7.2/4kg
      result = "invalid number"
      return result
    } else if (/\d+\.\d+\/\d+\.\d+/.test(input)) { // decimal / decimal
       result = input.match(/\d+\.\d+\/\d+\.\d+/)[0];
       return math.evaluate(result)
    } else if (/\d+\.\d+\/\d+/.test(input)) { // decimal/whote number 
      result = input.match(/\d+\.\d+\/\d+/)[0]
      return math.evaluate(result);
    } else if (/\d+\/\d+\.\d/.test(input)){ // vs. whole number/decimal
      result = input.match(/\d+\/\d+\.\d/)[0];
      return math.evaluate(result);
    } else if (/(\d+\.\d+)/.test(input)) { // a decimal
       result = input.match(/\d+\.\d+/)[0];
       return result
    } else if (/(\d+\/\d+)/.test(input)) { // a fraction
      result = input.match(/\d+\/\d+/)[0];
      return math.evaluate(result);
   } else if (/\d+/.test(input)) { // digits
     result = input.match(/\d+/)[0]
     return result <= 0? "invalid number": result;
   } else {
     result ="invalid number"
     return result;
   }
  };
  
   this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+/);
    if (result == null) return "invalid unit";
    //let result = input.match(/[a-zA-Z]+/)[0].toLowerCase();
 
    switch (result[0].toLowerCase()) {
      case "l":
       return result[0]
      case "gal":
        return result[0]
      case "km":
        return result[0]
        break;
      case "mi":
        return result[0]
      case "lbs":
        return result[0]
      case "lb":
       return result[0]
      case "kg":
        return result[0]
      default: 
       result= "invalid unit";
       return result
     
    }

  };
  
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == "gal") {
      return "L"
    } else if (initUnit == "lbs" || initUnit == "lb") {
      return "kg"
    } else if (initUnit == "mi") {
      return "km"
    } else if (initUnit == "L") {
      return  "gal"
    } else if (initUnit == "kg") {
      return  "lbs"
    } else if (initUnit == "km") {
      return  "mi"
    } else {
      return "invalid unit"
    }
  };

  this.convert = function(initNum, initUnit) {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit == "gal") {
      return parseFloat((initNum  * galToL).toFixed(5))
    } else if (initUnit == "lbs" || initUnit == "lb") {
      return parseFloat((initNum  * lbsToKg).toFixed(5))
    } else if (initUnit == "mi") {
      return parseFloat((initNum  * miToKm).toFixed(5))
    } else if (initUnit == "L") {
      return  parseFloat((initNum  / galToL).toFixed(5))
    } else if (initUnit == "kg") {
      return  parseFloat((initNum  / lbsToKg).toFixed(5))
    } else if (initUnit == "km") {
      return  parseFloat((initNum  / miToKm).toFixed(5))
    } else {
      return "invalid unit or number"
    }
  };

  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let finalUnit, initialUnit;
    if (initUnit == "gal") {
      initialUnit= "gallons"
      finalUnit= "liters"
    } else if (initUnit == "lbs") {
      initialUnit= "pounds"
      finalUnit= "kilograms"
    } else if (initUnit == "mi") {
      initialUnit= "miles"
      finalUnit= "kilometers"
    } else if (initUnit == "L") {
      initialUnit= "liters"
      finalUnit= "gallons"
    } else if (initUnit == "kg") {
      initialUnit= "kilograms"
      finalUnit= "pounds"
    } else if (initUnit == "km") {
      initialUnit= "kilometers"
      finalUnit= "miles"
    } else {
      return "invalid unit"
    }
    var result = `${initNum} ${initialUnit} converts to ${returnNum} ${finalUnit} `;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
