export interface OfferKindRequestBody {
  offerKind: string
}

interface TimetableRequestBody {
  type: 'TrainInfo' | 'StationInfo'
  travelDate: string
  minCount: string
  maxCount: string
}

export interface TrainInfoRequestBody extends TimetableRequestBody {
  type: 'TrainInfo'
  trainNumber: string
}

export interface StationInfoRequestBody extends TimetableRequestBody {
  type: 'StationInfo'
  stationNumberCode: string
}

export interface OfferRequestBody {
  offerkind: '1'
  startStationCode: string
  innerStationsCodes: string[]
  endStationCode: string
  passangers: Passenger[]
  isOneWayTicket: boolean
  isTravelEndTime: boolean
  isSupplementaryTicketsOnly: boolean
  travelStartDate: Date
  travelReturnDate: Date
  selectedServices: number[]
  selectedSearchServices: string[]
  eszkozSzamok: Array<string | number>
  isOfDetailedSearch: boolean
  isFromTimeTable: boolean
}

export interface Passenger {
  passengerCount: number
  passengerId: number
  customerTypeKey: string
  customerDiscountsKeys: string[]
}
