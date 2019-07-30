import { pluck } from 'ramda'
import lexer from '../lexer'

describe('testing', () => {
  it('should run the lexer and return a list of tokens', () => {
    const retVal = lexer()
    expect(retVal instanceof Array).toEqual(true)
  })

  it('the tokens should be empty for an empty string', () => {
    const retVal = lexer()
    expect(retVal).toEqual([])
  })

  it('should return the newline token', () => {
    const tokens = lexer("abc 1.23 =\nfoo bar")
    expect(tokens[3].type).toEqual('newline')
  })

  describe('types', () => {
    it('should identify the correct types', () => {
      const tokens = lexer('abc 1.23 =')
      const types = pluck('type', tokens)
      expect(types).toEqual(['symbol', 'number', '='])
    })
  })
})
