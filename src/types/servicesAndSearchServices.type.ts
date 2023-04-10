import { type Translation } from './common.type'

export interface ServicesAndSearchServices {
  services: SearchServiceEntity[]
  searchServices: SearchServices[]
}

export interface SearchServices {
  id: string
  code: string
  value: string
  megnevezes: string
  foreignNames: Translation
  order: number
  newSearchIfNotFound: boolean
  fordib: boolean
  services: SearchServiceEntity[]
  isSelected: boolean
  canChangeSelection: boolean
}

export interface SearchServiceEntity {
  id: string
  name: string
  foreignNames: Translation
  groupID: string
  groupName: string
  groupNameForExclusion: string
  mainGroupID: string
  mainGroupName: string
  isFare: boolean
  isExtraCharge: boolean
  serviceType: number
  description: null | string
  uicCode: null | string
  code: number
  ticketImageName: string | null
  classCode: null | string
  className: string | null
  classFromCode: null | string
  classFromName: string | null
  classIndependent: boolean
  classChanger: boolean
  allowedCustomerTypeID: string[] | null
  allowedCustomerTypeCode: string[] | null
  hasAllowedCustomerTypeWidthAge: boolean
  allowedTrainServiceCode: null
  neededTrainServiceCode: null
  prohibitedTrainServiceCode: null
  isSeasonTicketSign: boolean
  isDefault: boolean
  isPlaceReservationService: boolean
  isInternal: boolean
  isTicket: boolean
  vatValue: number
  placeType: string
  orderID: number
  originalPaymentModes: null
  groupOrderID: number
  hasDefaultInGroup: boolean
  offerKind: number
  stationRestrictions: any[]
  isSelected: boolean
  canChangeSelection: boolean
  passengerCount: number
  reservationKind: number
}
