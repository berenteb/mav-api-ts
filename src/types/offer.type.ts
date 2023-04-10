import { type Kind, type RelationSign, type Service } from './common.type'
import { type Station } from './station.type'
import { type Train } from './train.type'

export interface Offer {
  isOfDetailedSearch: boolean
  route: Route[]
  warningMessages: any[]
}

export interface Route {
  sameOfferId: number
  offerGroupCode: string
  offerIdentity: string
  routeServices: Service[]
  transfersCount: number
  travelRouteLength: null
  departure: Arrival
  arrival: Arrival
  travelTimeMin: string
  name: string
  lastStation: string
  departureTrack: Track
  arrivalTrack: Track
  services: Services
  travelClasses: TravelClass[]
  details: Details
  serializedOfferData: string
  szabadHelyAllapot: number
  onlyForRegisteredUser: boolean
  aggregatedServiceIds: number[]
  orderDisabled: boolean
  orderDisabledReason: null
  direction: number
  directionDescription: string
  closedTrackWay: boolean
}

export interface Arrival {
  time: Date
  timeExpected: Date | null
  timeFact: Date | null
  delayMin: number
  timeZone: string | null
}

export interface Track {
  name: null
  type: string | null
  changedTrackName: null | string
}

export interface Details {
  distance: number
  trainFullName: string
  days: null
  tickets: Ticket[]
  routes: DetailsRoute[]
  hasPlaceTicket: boolean
  placeTicketDutyDeviceNumber: number
}

export interface DetailsRoute {
  serviceIds: number[] | null
  trainDetails: TrainDetails
  departure: Arrival
  arrival: Arrival
  services: Services | null
  departureTrack: Track | null
  arrivalTrack: Track | null
  sameCar: boolean
  travelClasses: TravelClass[] | null
  startStation: DestinationStationClass
  destionationStation: DestinationStationClass
  touchedStationsString: string | null
  touchedStations: any[] | null
  havariaInfo: null
  distance: number
  description: null | string
  masodlagosEszkozSzolgaltatasok: SecondaryServices[] | null
  travelTime: null | string
  closedTrackWay: boolean
  startDate: Date | null
}

export interface DestinationStationClass {
  name: string
  code: string
  coordinates: null
  arrivalTime: null | string
  departureTime: null | string
}

export interface SecondaryServices {
  services: string[]
  eszkozSzam: string
  kozlekedesiTarsasagKod: string
}

export interface Services {
  train: Service[] | null
  station: Service[] | null
}

export interface TrainDetails {
  viszonylatiJel: RelationSign | null
  trainKind: Kind | null
  type: string | null
  name: null | string
  trainNumber: null | string
  trainId: null | string
  jeId: string
  kozlekedesiTarsasagKod: null | string
}

export interface TravelClass {
  name: string
  fullness: number
  price: Price | null
}

export interface Price {
  amount: number
  amountInDefaultCurrency: number
  currency: PriceCurrency
}

export interface PriceCurrency {
  name: string
  uicCode: string
}

export interface Ticket {
  offerId: string
  serviceId: string
  serverServiceInformation: string
  name: string
  price1stClass: number
  price2ndClass: number
  fullness: number
  passengerId: number
  takeOverModes: string[]
  offerValidFrom: Date
  namedAdditionals: any[]
  offerValidTo: Date
  clientDiscounts: ClientDiscount[]
  customerCountDiscountName: string
  carClassNumber: string
  carClassIndependent: boolean
  placeReservationNeeded: boolean
  quotaReservationNeeded: boolean
  allowedInvoiceKind: number
  discountedGrossPrice: DiscountedGrossPrice
  grossPrice: DiscountedGrossPrice
  grossUnitPrice: DiscountedGrossPrice
  grossPriceExchanged: DiscountedGrossPrice
  grossUnitPriceExchanged: DiscountedGrossPrice
  isGroup: boolean
  direction: number
  directionDescription: string
  customerTypeDiscountName: string
  discountName: string
  trainDependent: boolean
  refundable: boolean
  cacheRenewParams: TicketParams
  clientDiscount: ClientDiscount[]
  isInternational: boolean
  placeTicket: PlaceTicket
  placeTicketSerialized: null | string
  ticketReferenceCode: string
  startStation: Station
  touchedStations: Station[]
  endStation: Station
  amount: number
  companyCode: null | string
  distance: number
}

export interface TicketParams {
  reserved: boolean
  reservationFixed: boolean
  reservationCode: null | string
  allowedOvertime: number
  lastReservationTime: Date | null
  paymentDeadline: Date
  reservationID: string | null
}

export interface ClientDiscount {
  discountScale: number
  grossPrice: DiscountedGrossPrice
  netPrice: DiscountedGrossPrice
  takeoverMode: number | null
  paymentMode: null
  discountReason: string
}

export interface DiscountedGrossPrice {
  amountInDefaultCurrency: number
  amount: number
  currency: DiscountedGrossPriceCurrency
}

export interface DiscountedGrossPriceCurrency {
  key: string
  name: string
  isDefault: boolean | null
}

export interface PlaceTicket {
  ticketId: number | null
  certificateID: null
  placeReservationServices: null
  nearCarriageNumber: null
  nearSeatPosition: null
  reservationType: number
  reservationKind: null | string
  placeReservationServicesFilled: boolean
  uicReservationCode: null
  carriageNumber: null
  seatPosition: null
  location: null
  customerTypeDiscountName: string | null
  isGroup: boolean
  forGrouppedFareTicket: boolean
  train: Train | null
  trainCode: null | string
  startStationCode: string | null
  endStationCode: string | null
  startTime: null
  arriveTime: null
  specialisHelyAdatok: null
  serviceCode: null | string
  trainCategory: null
  verificationNumber: null
  hkGuid: string
  tarifa: null
  isInternational: boolean
  kapcsoltHelyfoglalasID: null
  kapcsoltAjanlat: null
  globalDij: boolean
  vacantPlaceCount: null
  vacantPlaceCountUpdateTime: null
  quotaReservationHandlingParams: TicketParams | null
  reserved: boolean
  reservationFixed: boolean
  reservationCode: null
  allowedOvertime: number
  lastReservationTime: null
  paymentDeadline: Date
  reservationID: null
}
