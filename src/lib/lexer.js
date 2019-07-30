import { flatten, intersperse, last, pipe } from 'ramda'

export const newline = { type: 'newline' }
export const isNewline = x => x === newline
const notBlank = x => x.length > 0

const determineType = word => {
  const reservedTokens = ['=']
  if (reservedTokens.includes(word)) { return word }
  if (Number.isFinite(Number(word))) { return 'number' }
  return 'symbol'
}

const lexer = (str = '') => {
  const lines = str.split("\n").filter(notBlank)
  const parseLine = line => {
    const parts = line.split(' ')
    const tokens = parts.map(x => ({
      type: determineType(x),
      token: x,
    }))
    return tokens
  }

  const removeTrailingNewline = arr => last(arr) === newline ? arr.slice(0, -1) : arr

  const processLines = pipe(
    intersperse(newline),
    flatten,
    removeTrailingNewline,
  )

  const tokens = processLines(lines.map(parseLine))
  return tokens
}

export default lexer
