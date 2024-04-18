import { ApiClient, HousingStockApi, RequestApi } from '@/api/codegen/src'

export const getApiClientInstance = () => {
  return ApiClient.instance
}

export const configureApiClientInstance = ({ origin }) => {
  const apiClientInstance = getApiClientInstance()
  delete apiClientInstance.defaultHeaders['User-Agent']
  apiClientInstance.basePath = String(
    new URL(apiClientInstance.basePath, origin),
  )
}

export const fetchRequestStreets = () => {
  const api = new RequestApi()
  return api.requestStreetsGet()
}

export const fetchStreetHouses = (streetId) => {
  const api = new RequestApi()
  return api.requestHousesIdGet(streetId)
}

export const fetchHouseFlats = (houseId) => {
  const api = new RequestApi()
  return api.requestHouseFlatsIdGet(houseId)
}

export const fetchFlatClients = (flatId) => {
  const api = new HousingStockApi()
  return api
    .housingStockClientsGet({ addressId: flatId })
    .then((result) => result ?? [])
}

export const removeClientFromFlat = (clientBindId) => {
  const api = new HousingStockApi()
  return api.housingStockBindClientIdDelete(clientBindId)
}

export const createClient = (clientDto) => {
  const api = new HousingStockApi()
  return api.housingStockClientPost({ clientDto })
}

export const bindClientToAddress = (bindClientDto) => {
  const api = new HousingStockApi()
  return api.housingStockBindClientPut({ bindClientDto })
}
