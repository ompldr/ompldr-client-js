# Omploader.DefaultApi

All URIs are relative to *https://api.ompldr.org/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEncryptedFile**](DefaultApi.md#getEncryptedFile) | **GET** /get/{id} | Get encrypted file data
[**getFile**](DefaultApi.md#getFile) | **GET** /get/{id}/{privateKey} | Get file
[**getInfo**](DefaultApi.md#getInfo) | **GET** /info/{id} | Get file info
[**getQuote**](DefaultApi.md#getQuote) | **POST** /quote | Get price quote
[**pingGet**](DefaultApi.md#pingGet) | **GET** /ping | Health check
[**refreshFile**](DefaultApi.md#refreshFile) | **PUT** /refresh/{id} | Refresh file
[**uploadFile**](DefaultApi.md#uploadFile) | **POST** /upload | Upload file


<a name="getEncryptedFile"></a>
# **getEncryptedFile**
> getEncryptedFile(id)

Get encrypted file data

Fetch and return encrypted file contents. Data is encrypted with AES-128. 

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var id = "id_example"; // String | ID of file to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEncryptedFile(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of file to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="getFile"></a>
# **getFile**
> getFile(id, privateKey)

Get file

Fetch, decrypt, and return file contents

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var id = "id_example"; // String | ID of file to fetch

var privateKey = "privateKey_example"; // String | The base 64 encoded private key to decrypt file on server side. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFile(id, privateKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of file to fetch | 
 **privateKey** | **String**| The base 64 encoded private key to decrypt file on server side.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="getInfo"></a>
# **getInfo**
> FileInfo getInfo(id)

Get file info

Fetch the current file info.

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var id = "id_example"; // String | ID of file to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of file to update | 

### Return type

[**FileInfo**](FileInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuote"></a>
# **getQuote**
> Quote getQuote(body)

Get price quote

Get a storage price quote. You specify the number of bytes to store, the number of downloads, and the number of seconds after which the file expires. Quote price is returned in Satoshis. 

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var body = new Omploader.QuoteRequest(); // QuoteRequest | Get a storage price quote. A quote is valid for up to 5 minutes after being requested. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuote(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuoteRequest**](QuoteRequest.md)| Get a storage price quote. A quote is valid for up to 5 minutes after being requested.  | 

### Return type

[**Quote**](Quote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pingGet"></a>
# **pingGet**
> pingGet()

Health check

API health check endpoint, which returns 200 when everything&#39;s a o.k. 

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pingGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="refreshFile"></a>
# **refreshFile**
> Invoice refreshFile(id, body)

Refresh file

Refresh a file so it doesn&#39;t disappear.

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var id = "id_example"; // String | ID of file to update

var body = new Omploader.RefreshRequest(); // RefreshRequest | Refreshing a file allows you to extend the storage duration of the specified object. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshFile(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of file to update | 
 **body** | [**RefreshRequest**](RefreshRequest.md)| Refreshing a file allows you to extend the storage duration of the specified object.  | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadFile"></a>
# **uploadFile**
> Invoice uploadFile(file, opts)

Upload file

Upload a new file. After the upload completes, the invoice must be paid within one hour, before the expiry date. If the invoice isn&#39;t paid in time, the file is deleted. The file will be available once the invoice is paid, and until &#x60;downloadCount&#x60; downloads are used, or &#x60;expiresAfterSeconds&#x60; has passed. Use the &#x60;/refresh&#x60; endpoint to extend or increase the number of downloads for a file. 

### Example
```javascript
var Omploader = require('omploader');

var apiInstance = new Omploader.DefaultApi();

var file = "/path/to/file.txt"; // File | The file to upload.

var opts = { 
  'downloadCount': 100, // Number | Maximum number of downloads.
  'expiresAfterSeconds': 8.14 // Number | The number of seconds after which this file expires. Defaults to 24h after upload completes. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to upload. | 
 **downloadCount** | **Number**| Maximum number of downloads. | [optional] [default to 100]
 **expiresAfterSeconds** | **Number**| The number of seconds after which this file expires. Defaults to 24h after upload completes.  | [optional] 

### Return type

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

