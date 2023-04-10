import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../types/common.type'
import {
  ApiBaseUrl,
  type ApiEndpoint,
  type ApiSection
} from '../types/requestConstants.type'

export async function makeRequest<T, B = unknown>(
  section: ApiSection,
  endpoint: ApiEndpoint,
  body: B | undefined = undefined,
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<unknown>
): Promise<AxiosResponse<T>> {
  return axios.post<T>([ApiBaseUrl, section, endpoint].join('/'), body, {
    headers: {
      Language: language,
      UserSessionId: '1',
      ...axiosConfig?.headers
    },
    ...axiosConfig
  })
}
