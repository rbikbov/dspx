# DispexApiTestV30.RequestApi

All URIs are relative to */api/vtest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestHouseFlatsIdGet**](RequestApi.md#requestHouseFlatsIdGet) | **GET** /Request/house_flats/{id} | 
[**requestHousesIdGet**](RequestApi.md#requestHousesIdGet) | **GET** /Request/houses/{id} | 
[**requestStreetsGet**](RequestApi.md#requestStreetsGet) | **GET** /Request/streets | 



## requestHouseFlatsIdGet

> [FlatDto] requestHouseFlatsIdGet(id)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.RequestApi();
let id = 56; // Number | 
apiInstance.requestHouseFlatsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[FlatDto]**](FlatDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestHousesIdGet

> [WebHouseDto] requestHousesIdGet(id)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.RequestApi();
let id = 56; // Number | 
apiInstance.requestHousesIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[WebHouseDto]**](WebHouseDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestStreetsGet

> [StreetDto] requestStreetsGet()



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.RequestApi();
apiInstance.requestStreetsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[StreetDto]**](StreetDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

