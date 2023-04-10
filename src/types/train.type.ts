import {
  type FullNameAndPictogram,
  type HavarianInfok,
  type Kind,
  type RelationObject,
  type RelationSign,
  type Service
} from './common.type'
import { type Station } from './station.type'
import { type DirectTrain } from './trainInfo.type'

export interface Train {
  aggregatedServiceIds: string[]
  name: null | string
  seatReservationCode: string
  code: string
  companyCode: string | null
  route: null
  startStationReservationCode: string | null
  endStationReservationCode: string | null
  startStation: Station
  endStation: Station
  startDate: Date | null
  origStartStation: Station | null
  origEndStation: Station | null
  start: Date | null
  virtualStart: boolean
  arrive: Date | null
  virtualArrive: boolean
  distance: number
  closedTrackWay: boolean
  fullName: string
  fullNameAndType: string
  kinds: Kind[] | null
  kindsToDisplay: Kind[] | null
  kind: Kind | null
  services: Service[]
  actualOrEstimatedStart: null
  actualOrEstimatedArrive: null
  havarianInfok: HavarianInfok | null
  directTrains: DirectTrain[] | null
  carrierTrains: null
  startTrack: null
  startTrackType: null
  endTrack: null
  endTrackType: null
  jeEszkozAlapId: number
  fullType: string
  fullShortType: string
  fullNameAndPiktogram: FullNameAndPictogram
  footer: null | string
  viszonylatiJel: RelationSign | null
  viszonylatObject: RelationObject | null
  description: null
  sameCar: boolean
  startTimeZone: null
  arriveTimeZone: null
  trainId: string
}
