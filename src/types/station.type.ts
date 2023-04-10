export interface Station {
  id: number
  isAlias: boolean
  name: string | null
  code: string | null
  baseCode: string | null
  isInternational: boolean
  canUseForOfferRequest: boolean
  canUseForPessengerInformation: boolean
  country: string | null
  coutryIso: string | null
  isIn108_1: boolean
}
