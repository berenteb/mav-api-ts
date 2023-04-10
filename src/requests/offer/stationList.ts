import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { type Station } from '../../types/station.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getStationList(
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<Station[]>> {
  return makeRequest<Station[]>(
    ApiSection.OfferRequestApi,
    ApiEndpoint.GetStationList,
    undefined,
    language,
    axiosConfig
  )
}
