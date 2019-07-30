import { splitWhen } from 'ramda'
import { isNewline } from './lexer'

export const readNextLine = tokens => {
  if (tokens.length === 0) { return null }
  return splitWhen(isNewline, tokens).filter(x => !isNewline(x))
}

const parser = (tokens = []) => {
  const nodes = []
  return { type: 'program', exprs: nodes }
}

export default parser
