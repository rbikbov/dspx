/**
 * DISPEX API Test - V3.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DispexApiTestV30);
  }
}(this, function(expect, DispexApiTestV30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DispexApiTestV30.HousingStockDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HousingStockDto', function() {
    it('should create an instance of HousingStockDto', function() {
      // uncomment below and update the code to test HousingStockDto
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be.a(DispexApiTestV30.HousingStockDto);
    });

    it('should have the property addressId (base name: "addressId")', function() {
      // uncomment below and update the code to test the property addressId
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property streetId (base name: "streetId")', function() {
      // uncomment below and update the code to test the property streetId
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property houseId (base name: "houseId")', function() {
      // uncomment below and update the code to test the property houseId
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "streetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property building (base name: "building")', function() {
      // uncomment below and update the code to test the property building
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property corpus (base name: "corpus")', function() {
      // uncomment below and update the code to test the property corpus
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

    it('should have the property flat (base name: "flat")', function() {
      // uncomment below and update the code to test the property flat
      //var instance = new DispexApiTestV30.HousingStockDto();
      //expect(instance).to.be();
    });

  });

}));