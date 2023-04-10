import { type Service } from './common.type'
import { type Station } from './station.type'
import { type Train } from './train.type'

export interface TrainInfo {
  trainSchedulerDetails: TrainSchedulerDetail[]
  stationSchedulerDetails: null
  routeSchedulerDetails: null
}

export interface TrainSchedulerDetail {
  train: Train
  scheduler: TrainScheduler[]
}

export interface TrainScheduler {
  station: Station
  arrive: Date | null
  start: Date | null
  actualOrEstimatedArrive: Date | null
  actualOrEstimatedStart: Date | null
  startTrack: null | string
  startTrackType: null
  endTrack: null | string
  endTrackType: null | string
  services: string[]
  stopKind: number
  stopService: Service
  distance: number
  startTimeZone: string | null
  arriveTimeZone: string | null
}

export interface DirectTrain {
  train: Train
  startStation: Station
  endStation: Station
  footer: null
}
