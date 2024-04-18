# DispexApiTestV30.HousingStockApi

All URIs are relative to */api/vtest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**housingStockAccountIdDelete**](HousingStockApi.md#housingStockAccountIdDelete) | **DELETE** /HousingStock/account/{id} | 
[**housingStockAccountPut**](HousingStockApi.md#housingStockAccountPut) | **PUT** /HousingStock/account | 
[**housingStockAccountTypesGet**](HousingStockApi.md#housingStockAccountTypesGet) | **GET** /HousingStock/account_types | 
[**housingStockBindClientIdDelete**](HousingStockApi.md#housingStockBindClientIdDelete) | **DELETE** /HousingStock/bind_client/{id} | 
[**housingStockBindClientPut**](HousingStockApi.md#housingStockBindClientPut) | **PUT** /HousingStock/bind_client | 
[**housingStockClientGet**](HousingStockApi.md#housingStockClientGet) | **GET** /HousingStock/client | 
[**housingStockClientPost**](HousingStockApi.md#housingStockClientPost) | **POST** /HousingStock/client | 
[**housingStockClientsGet**](HousingStockApi.md#housingStockClientsGet) | **GET** /HousingStock/clients | 
[**housingStockGet**](HousingStockApi.md#housingStockGet) | **GET** /HousingStock | 



## housingStockAccountIdDelete

> ClientDto housingStockAccountIdDelete(id)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let id = 56; // Number | 
apiInstance.housingStockAccountIdDelete(id).then((data) => {
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

[**ClientDto**](ClientDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## housingStockAccountPut

> housingStockAccountPut(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'bindArrearDto': new DispexApiTestV30.BindArrearDto() // BindArrearDto | 
};
apiInstance.housingStockAccountPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bindArrearDto** | [**BindArrearDto**](BindArrearDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, text/plain
- **Accept**: Not defined


## housingStockAccountTypesGet

> [AccountTypeDto] housingStockAccountTypesGet()



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
apiInstance.housingStockAccountTypesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AccountTypeDto]**](AccountTypeDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## housingStockBindClientIdDelete

> ClientDto housingStockBindClientIdDelete(id)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let id = 56; // Number | 
apiInstance.housingStockBindClientIdDelete(id).then((data) => {
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

[**ClientDto**](ClientDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## housingStockBindClientPut

> housingStockBindClientPut(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'bindClientDto': new DispexApiTestV30.BindClientDto() // BindClientDto | 
};
apiInstance.housingStockBindClientPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bindClientDto** | [**BindClientDto**](BindClientDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, text/plain
- **Accept**: Not defined


## housingStockClientGet

> ClientDto housingStockClientGet(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'phone': "phone_example" // String | 
};
apiInstance.housingStockClientGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | [optional] 

### Return type

[**ClientDto**](ClientDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## housingStockClientPost

> ResultDto housingStockClientPost(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'clientDto': new DispexApiTestV30.ClientDto() // ClientDto | 
};
apiInstance.housingStockClientPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientDto** | [**ClientDto**](ClientDto.md)|  | [optional] 

### Return type

[**ResultDto**](ResultDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json, text/plain
- **Accept**: text/plain, application/json, text/json


## housingStockClientsGet

> [ClientDto] housingStockClientsGet(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'addressId': 56 // Number | 
};
apiInstance.housingStockClientsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressId** | **Number**|  | [optional] 

### Return type

[**[ClientDto]**](ClientDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## housingStockGet

> [HousingStockDto] housingStockGet(opts)



### Example

```javascript
import DispexApiTestV30 from 'dispex_api_test_v3_0';
let defaultClient = DispexApiTestV30.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DispexApiTestV30.HousingStockApi();
let opts = {
  'companyId': 56, // Number | 
  'streetId': 56, // Number | 
  'houseId': 56 // Number | 
};
apiInstance.housingStockGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | [optional] 
 **streetId** | **Number**|  | [optional] 
 **houseId** | **Number**|  | [optional] 

### Return type

[**[HousingStockDto]**](HousingStockDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

