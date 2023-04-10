import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type Params } from '../../types/params.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getParams(
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<Params>> {
  return makeRequest<Params>(
    ApiSection.BaseDataApi,
    ApiEndpoint.GetParams,
    undefined,
    language,
    axiosConfig
  )
}
