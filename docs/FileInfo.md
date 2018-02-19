# Omploader.FileInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileId** | **String** | Unique identifier for file object. | [optional] 
**length** | **Number** | Length in bytes of the file. | [optional] 
**invoicePaid** | **Boolean** | True if the invoice has been paid. | [optional] 
**contentType** | **String** | Content type of this file. | [optional] 
**downloadsRemaining** | **Number** | Number of downloads remaining. Once this number reaches 0, the file will be deleted.  | [optional] 
**expiresAt** | **Date** | The time at which this file will expire. Once this date is reached, the file will be deleted.  | [optional] 


