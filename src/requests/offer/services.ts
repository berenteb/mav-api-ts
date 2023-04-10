import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type OfferKindRequestBody } from '../../types/requestBody.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { type ServicesAndSearchServices } from '../../types/servicesAndSearchServices.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getServices(
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<ServicesAndSearchServices>> {
  const body: OfferKindRequestBody = {
    offerKind: 'InternalTicket'
  }
  return makeRequest<ServicesAndSearchServices, OfferKindRequestBody>(
    ApiSection.OfferRequestApi,
    ApiEndpoint.GetServicesAndSearchServices,
    body,
    language,
    axiosConfig
  )
}
