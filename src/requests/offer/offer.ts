import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type QueryLanguage } from '../../types/common.type'
import { type Offer } from '../../types/offer.type'
import { type OfferRequestBody } from '../../types/requestBody.type'
import { ApiEndpoint, ApiSection } from '../../types/requestConstants.type'
import { makeRequest } from '../../utils/makeRequest'

export async function getOffer(
  params: Partial<OfferRequestBody> &
    Pick<
      OfferRequestBody,
      'startStationCode' | 'endStationCode' | 'passangers' | 'travelStartDate'
    >,
  language: QueryLanguage = 'hu',
  axiosConfig?: AxiosRequestConfig<any>
): Promise<AxiosResponse<Offer>> {
  const body: OfferRequestBody = {
    offerkind: params.offerkind ?? '1',
    travelReturnDate: params.travelReturnDate ?? params.travelStartDate,
    innerStationsCodes: params.innerStationsCodes ?? [],
    isOneWayTicket: params.isOneWayTicket ?? true,
    isTravelEndTime: params.isTravelEndTime ?? false,
    isSupplementaryTicketsOnly: params.isSupplementaryTicketsOnly ?? false,
    selectedSearchServices: params.selectedSearchServices ?? [],
    selectedServices: params.selectedServices ?? [],
    eszkozSzamok: params.eszkozSzamok ?? [],
    isOfDetailedSearch: params.isOfDetailedSearch ?? false,
    isFromTimeTable: params.isFromTimeTable ?? false,
    ...params
  }
  return makeRequest<Offer, OfferRequestBody>(
    ApiSection.OfferRequestApi,
    ApiEndpoint.GetOfferRequest,
    body,
    language,
    axiosConfig
  )
}
