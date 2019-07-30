export const closeTo = (n1, n2, tolerance = 0.01) =>
  Math.abs(n1 - n2) <= tolerance

export const interpolate = (start, stop, interval = 1) => {
  if (start === stop) { return [start] }
  if (interval === 0) { throw new Error('interpolate must not have interval of 0') }

  const ascending = start < stop
  if (ascending && interval <= 0) {
    throw new Error(`interpolate will never terminate (${start}, ${stop}, ${interval})`)
  }

  const descending = start > stop
  if (descending && interval >= 0) {
    throw new Error(`interpolate will never terminate (${start}, ${stop}, ${interval})`)
  }

  const nums = []
  for (let i=start; i<=stop || closeTo(i, stop); i += interval) {
    nums.push(closeTo(i, stop) ? stop : i)
  }
  return nums
}

export const spaceEvenly = (start, stop, numItems) => {
  const ascending = start <= stop
  const delta = ascending ? (stop - start) : (start - stop)
  return interpolate(start, stop, delta / (numItems - 1))
}
