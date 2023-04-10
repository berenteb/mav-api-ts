export enum ApiSection {
  InformationApi = 'InformationApi',
  OfferRequestApi = 'OfferRequestApi',
  BaseDataApi = 'BaseDataApi'
}

export enum ApiEndpoint {
  GetTimetable = 'GetTimetable',
  GetOfferRequest = 'GetOfferRequest',
  GetStationList = 'GetStationList',
  GetServicesAndSearchServices = 'GetServicesAndSearchServices',
  GetCustomersAndDiscounts = 'GetCustomersAndDiscounts',
  GetParams = 'GetParams'
}

export const ApiBaseUrl = 'https://jegy-a.mav.hu/IK_API_PROD/api'
