import { closeTo, interpolate, spaceEvenly } from '../util'

describe('interpolate', () => {
  it('from 1 to 5', () => {
    expect(interpolate(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('from 0 to 1 by 0.25', () => {
    expect(interpolate(0, 1, 0.25)).toEqual(
      [0, 0.25, 0.5, 0.75, 1]
    )
  })

  it('from 0 to 1 by 0.33', () => {
    expect(interpolate(0, 1, 0.33)).toEqual(
      [0, 0.33, 0.66, 0.99]
    )
  })

  it('returns just the number when start equals stop', () => {
    expect(interpolate(5, 5)).toEqual([5])
  })

  it('throws an error when the interval is 0', () => {
    expect(() => interpolate(1, 2, 0)).toThrow()
  })

  it('throws an error when ascending and negative interval', () => {
    expect(() => interpolate(1, 2, -1)).toThrow()
  })

  it('throws an error when descending and positive interval', () => {
    expect(() => interpolate(2, 1, 1)).toThrow()
  })
})

describe('spaceEvenly', () => {
  it('spaces evenly', () => {
    const result = spaceEvenly(0, 10, 5)
    expect(result).toEqual([0, 2.5, 5, 7.5, 10])
  })

  it('show align on the first and last', () => {
    const result = spaceEvenly(50, 150, 3)
    expect(result).toEqual([50, 100, 150])
  })

  it('accounts for floating point imprecision', () => {
    const result = spaceEvenly(20, 480, 7)
    expect(result.length).toEqual(7)
  })
})

describe('closeTo', () => {
  it('returns true when it is within tolerance', () => {
    expect(closeTo(5.0, 5.0001, 0.01)).toEqual(true)
  })

  it('returns false when it is outside of tolerance', () => {
    expect(closeTo(5.0, 5.25, 0.01)).toEqual(false)
  })
})
