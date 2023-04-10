import {
  type FullNameAndPictogram,
  type HavarianInfok,
  type Kind,
  type RelationObject,
  type RelationSign,
  type Service
} from './common.type'
import { type Station } from './station.type'

export interface StationInfo {
  trainSchedulerDetails: null
  stationSchedulerDetails: StationSchedulerDetails
  routeSchedulerDetails: null
}

export interface StationSchedulerDetails {
  station: Station
  arrivalScheduler: StationScheduler[]
  departureScheduler: StationScheduler[]
  services: Service[]
  moreResult: boolean
  havariaInfos: any[]
}

export interface StationScheduler {
  aggregatedServiceIds: any[]
  name: null | string
  seatReservationCode: string
  code: string
  companyCode: null
  route: null
  startStationReservationCode: null
  endStationReservationCode: null
  startStation: Station
  endStation: Station
  startDate: Date
  origStartStation: null
  origEndStation: null
  start: Date | null
  virtualStart: boolean
  arrive: Date
  virtualArrive: boolean
  distance: number
  closedTrackWay: boolean
  fullName: string
  fullNameAndType: string
  kinds: Kind[]
  kindsToDisplay: Kind[]
  kind: Kind
  services: Service[]
  actualOrEstimatedStart: Date | null
  actualOrEstimatedArrive: Date | null
  havarianInfok: HavarianInfok
  directTrains: null
  carrierTrains: null
  startTrack: null | string
  startTrackType: null
  endTrack: string
  endTrackType: null
  jeEszkozAlapId: number
  fullType: string
  fullShortType: string
  fullNameAndPiktogram: FullNameAndPictogram
  footer: null
  viszonylatiJel: RelationSign | null
  viszonylatObject: RelationObject
  description: null
  sameCar: boolean
  startTimeZone: string | null
  arriveTimeZone: string
  trainId: string
}
