import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type CustomersAndDiscounts } from '../../types/customersAndDiscounts.type'
import { type OfferKindRequestBody } from '../../types/requestBody.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getCustomersAndDiscounts(
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<CustomersAndDiscounts>> {
  const body: OfferKindRequestBody = {
    offerKind: 'InternalTicket'
  }
  return makeRequest<CustomersAndDiscounts, OfferKindRequestBody>(
    ApiSection.OfferRequestApi,
    ApiEndpoint.GetCustomersAndDiscounts,
    body,
    language,
    axiosConfig
  )
}
