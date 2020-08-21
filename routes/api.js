/*
*
*
*       Complete the API routing below
*
*
*/


'use strict';
// (1) import ConvertHandler function
// (2) create new instance of ConvertHandler
// (3) use convertHandler in a route for ('api/convert')
var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      // Number.isNaN(convertHandler.getNum(input)
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.json({
        initNum, initUnit, returnNum, string: toString
      })
    });
    
};
