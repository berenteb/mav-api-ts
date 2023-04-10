import { getStationInfo } from '../src'
import { getTrainInfo } from '../src'

test('get train information for S40', () => {
  return getTrainInfo({
    trainNumber: '4124',
    travelDate: new Date().toISOString()
  }).then(({ data }) => {
    expect(data).toHaveProperty('trainSchedulerDetails')
  })
})

test('get station information for Budapest-Kelenföld', () => {
  return getStationInfo({
    stationNumberCode: '005501024',
    travelDate: new Date().toISOString()
  }).then(({ data }) => {
    expect(data).toHaveProperty('stationSchedulerDetails')
  })
})
