import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type TrainInfoRequestBody } from '../../types/requestBody.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { type TrainInfo } from '../../types/trainInfo.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getTrainInfo(
  query: Omit<TrainInfoRequestBody, 'type' | 'minCount' | 'maxCount'>,
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<TrainInfo>> {
  const body: TrainInfoRequestBody = {
    type: 'TrainInfo',
    minCount: '0',
    maxCount: '9999999',
    ...query
  }
  return makeRequest<TrainInfo, TrainInfoRequestBody>(
    ApiSection.InformationApi,
    ApiEndpoint.GetTimetable,
    body,
    language,
    axiosConfig
  )
}
