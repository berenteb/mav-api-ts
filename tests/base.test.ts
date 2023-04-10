import { getParams } from '../src'

test('get params has at least one property', () => {
  return getParams().then(({ data }) => {
    expect(data).toHaveProperty(['fizetesKezdemenyezesTimeout'])
  })
})
