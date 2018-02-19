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
    define(['ApiClient', 'model/FileInfo', 'model/Invoice', 'model/Quote', 'model/QuoteRequest', 'model/RefreshRequest', 'model/Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FileInfo'), require('../model/Invoice'), require('../model/Quote'), require('../model/QuoteRequest'), require('../model/RefreshRequest'), require('../model/Response'));
  } else {
    // Browser globals (root is window)
    if (!root.Omploader) {
      root.Omploader = {};
    }
    root.Omploader.DefaultApi = factory(root.Omploader.ApiClient, root.Omploader.FileInfo, root.Omploader.Invoice, root.Omploader.Quote, root.Omploader.QuoteRequest, root.Omploader.RefreshRequest, root.Omploader.Response);
  }
}(this, function(ApiClient, FileInfo, Invoice, Quote, QuoteRequest, RefreshRequest, Response) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 2.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEncryptedFile operation.
     * @callback module:api/DefaultApi~getEncryptedFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get encrypted file data
     * Fetch and return encrypted file contents. Data is encrypted with AES-128. 
     * @param {String} id ID of file to fetch
     * @param {module:api/DefaultApi~getEncryptedFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEncryptedFile = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEncryptedFile");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = null;

      return this.apiClient.callApi(
        '/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFile operation.
     * @callback module:api/DefaultApi~getFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file
     * Fetch, decrypt, and return file contents
     * @param {String} id ID of file to fetch
     * @param {String} privateKey The base 64 encoded private key to decrypt file on server side. 
     * @param {module:api/DefaultApi~getFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFile = function(id, privateKey, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFile");
      }

      // verify the required parameter 'privateKey' is set
      if (privateKey === undefined || privateKey === null) {
        throw new Error("Missing the required parameter 'privateKey' when calling getFile");
      }


      var pathParams = {
        'id': id,
        'privateKey': privateKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = null;

      return this.apiClient.callApi(
        '/get/{id}/{privateKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInfo operation.
     * @callback module:api/DefaultApi~getInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file info
     * Fetch the current file info.
     * @param {String} id ID of file to update
     * @param {module:api/DefaultApi~getInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileInfo}
     */
    this.getInfo = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInfo");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FileInfo;

      return this.apiClient.callApi(
        '/info/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuote operation.
     * @callback module:api/DefaultApi~getQuoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Quote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get price quote
     * Get a storage price quote. You specify the number of bytes to store, the number of downloads, and the number of seconds after which the file expires. Quote price is returned in Satoshis. 
     * @param {module:model/QuoteRequest} body Get a storage price quote. A quote is valid for up to 5 minutes after being requested. 
     * @param {module:api/DefaultApi~getQuoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Quote}
     */
    this.getQuote = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getQuote");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Quote;

      return this.apiClient.callApi(
        '/quote', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pingGet operation.
     * @callback module:api/DefaultApi~pingGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Health check
     * API health check endpoint, which returns 200 when everything&#39;s a o.k. 
     * @param {module:api/DefaultApi~pingGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pingGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ping', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshFile operation.
     * @callback module:api/DefaultApi~refreshFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh file
     * Refresh a file so it doesn&#39;t disappear.
     * @param {String} id ID of file to update
     * @param {module:model/RefreshRequest} body Refreshing a file allows you to extend the storage duration of the specified object. 
     * @param {module:api/DefaultApi~refreshFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Invoice}
     */
    this.refreshFile = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling refreshFile");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling refreshFile");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Invoice;

      return this.apiClient.callApi(
        '/refresh/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/DefaultApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload file
     * Upload a new file. After the upload completes, the invoice must be paid within one hour, before the expiry date. If the invoice isn&#39;t paid in time, the file is deleted. The file will be available once the invoice is paid, and until &#x60;downloadCount&#x60; downloads are used, or &#x60;expiresAfterSeconds&#x60; has passed. Use the &#x60;/refresh&#x60; endpoint to extend or increase the number of downloads for a file. 
     * @param {File} file The file to upload.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.downloadCount Maximum number of downloads. (default to 100)
     * @param {Number} opts.expiresAfterSeconds The number of seconds after which this file expires. Defaults to 24h after upload completes. 
     * @param {module:api/DefaultApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Invoice}
     */
    this.uploadFile = function(file, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadFile");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file,
        'downloadCount': opts['downloadCount'],
        'expiresAfterSeconds': opts['expiresAfterSeconds']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Invoice;

      return this.apiClient.callApi(
        '/upload', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));