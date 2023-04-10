import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type StationInfoRequestBody } from '../../types/requestBody.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { type StationInfo } from '../../types/stationInfo.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getStationInfo(
  query: Omit<StationInfoRequestBody, 'type' | 'minCount' | 'maxCount'>,
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<StationInfo>> {
  const body: StationInfoRequestBody = {
    type: 'StationInfo',
    minCount: '0',
    maxCount: '9999999',
    ...query
  }
  return makeRequest<StationInfo, StationInfoRequestBody>(
    ApiSection.InformationApi,
    ApiEndpoint.GetTimetable,
    body,
    language,
    axiosConfig
  )
}
