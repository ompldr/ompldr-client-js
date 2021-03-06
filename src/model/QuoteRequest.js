/**
 * Omploader
 * ### Take control of your data with Omploader.  **Omploader** is a privacy-first file hosting service that does not compromise on **security, privacy, or speed**. With Omploader, you pay upfront using Bitcoin, and your file is automatically distributed across a global CDN. You decide how much you want to pay based on usage, and you can refresh at any time.  Data is stored using super secure encryption methods (AES-128 on the server, Salsa20 on the client). Furthermore, Omploader does not retain any logs, identifying information, or private keys for file data to respect your privacy.  ### About the API  The Omploader API is available for public use, and operates under an upfront payment model. Generally speaking, there are no limitations on use, however we retain the right to remove content which may be in violation of the underlying host policies.  All API endpoints are rate limited and clients may be throttled as needed. The API returns status code 429 in the event of too many requests. 
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Omploader) {
      root.Omploader = {};
    }
    root.Omploader.QuoteRequest = factory(root.Omploader.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QuoteRequest model module.
   * @module model/QuoteRequest
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>QuoteRequest</code>.
   * @alias module:model/QuoteRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>QuoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuoteRequest} obj Optional instance to populate.
   * @return {module:model/QuoteRequest} The populated <code>QuoteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downloadCount')) {
        obj['downloadCount'] = ApiClient.convertToType(data['downloadCount'], 'Number');
      }
      if (data.hasOwnProperty('expiresAfterSeconds')) {
        obj['expiresAfterSeconds'] = ApiClient.convertToType(data['expiresAfterSeconds'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Number of downloads.
   * @member {Number} downloadCount
   */
  exports.prototype['downloadCount'] = undefined;
  /**
   * Number of seconds after which this file expires.
   * @member {Number} expiresAfterSeconds
   */
  exports.prototype['expiresAfterSeconds'] = undefined;
  /**
   * Size in bytes of the file to be stored.
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;



  return exports;
}));


