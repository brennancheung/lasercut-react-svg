import parser, { readNextLine } from '../parser'
import lexer from '../lexer'

const text = `
x = 5
x
`.trim()

const tokens = lexer(text)

describe('parser', () => {
  it('returns a program as the root node', () => {
    const program = parser()
    expect(program.type).toEqual('program')
  })

  it('has a list of exprs', () => {
    const program = parser()
    expect(program.exprs).toEqual([])
  })

  it('creates nodes from the tokens', () => {
  })

  describe('readNextLine', () => {
    it('returns null if there is not anything', () => {
      const result = readNextLine([])
      expect(result).toEqual(null)
    })

    it('reads up to the newline', () => {
      const first = readNextLine(tokens)
    })
  })
})
