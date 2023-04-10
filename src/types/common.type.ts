import { type Station } from './station.type'

export interface FullNameAndPictogram {
  '(Collection)': string
}

export interface HavarianInfok {
  aktualisKeses: number
  kesesiOk: string | null
  havariaInfo: string | null
  uzletiInfo: string | null
  kesesInfo: string | null
}

export interface RelationObject {
  startStationCode: string
  startTime: Date
  startTimeZone: string
  endStationCode: string
  endTime: Date
  endTimeZone: string
  travelTime: number
  startTrack: null
  endTrack: null
  innerStationCodes: string[]
}

export interface RelationSign {
  piktogramFullName: null
  fontSzinKod: string
  hatterSzinKod: string
  sign: Sign
  jel: string
}

export interface Sign {
  fontName: string
  character: string
}

export interface Kind {
  name: string
  sortName: string | null
  code: string
  priority: number
  backgroundColorCode: string
  foregroundColorCode: string
  sign: Sign
  startStation: Station
  endStation: Station
}

export interface Service {
  listOrder: null | string
  description: string | null
  restrictiveStartStationCode: string | null
  restrictiveEndStationCode: string | null
  sign: Sign | null
  trainStopKind: null
}

export interface Translation {
  en: null | string
  de: null | string
}

export type QueryLanguage = 'en' | 'hu'
