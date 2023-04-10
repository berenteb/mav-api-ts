import { getCustomersAndDiscounts } from '../src'
import { getOffer } from '../src'
import { getServices } from '../src'
import { getStationList } from '../src'

test('get services and search services and the result has the correct properties', () => {
  return getServices().then(({ data }) => {
    expect(data).toHaveProperty('services')
    expect(data).toHaveProperty('searchServices')
  })
})

test('get customers and discounts and the result has the correct properties', () => {
  return getCustomersAndDiscounts().then(({ data }) => {
    expect(data).toHaveProperty('customerTypes')
    expect(data).toHaveProperty('discounts')
  })
})

test('get station list and it has at least one element', () => {
  return getStationList().then(({ data }) => {
    expect(data.length).toBeGreaterThan(0)
  })
})

test('HU - get offer request for a normal person between Budapest and Vác', () => {
  return getOffer({
    startStationCode: '005501024',
    endStationCode: '005510447',
    travelStartDate: new Date(),
    passangers: [
      {
        passengerCount: 1,
        passengerId: 0,
        customerTypeKey: 'HU_44_026-065',
        customerDiscountsKeys: []
      }
    ]
  }).then(({ data }) => {
    expect(data).toHaveProperty('route')
  })
})

test('EN - get offer request for a normal person between Budapest and Vác', () => {
  return getOffer(
    {
      startStationCode: '005501024',
      endStationCode: '005510447',
      travelStartDate: new Date(),
      passangers: [
        {
          passengerCount: 1,
          passengerId: 0,
          customerTypeKey: 'HU_44_026-065',
          customerDiscountsKeys: []
        }
      ]
    },
    'en'
  ).then(({ data }) => {
    expect(data).toHaveProperty('route')
  })
})
