const code = require('./Code')
const table = require('./table')

const symbolArr = []

module.exports = class Parser {
  constructor() {
    this.lineCode = []
    this.currentLine = ''
  }

  setLine(line) {
    this.currentLine = line
  }

  getCode() {
    return this.lineCode.join('\n')
  }

  hasMoreCommands() {
    return !!this.currentLine
  }

  advance() {
    if (!this.hasMoreCommands()) return

    const cType = this.commandType()

    if (this.isFirst) {
      if (cType === 'L_COMMAND') {
        const symbol = this.symbol()
        symbolArr.push(symbol)
        return
      }
      if (cType === 'A_COMMAND') {
        const beforeSymbol = symbolArr.pop()
        const symbol = this.symbol()
        table.set(beforeSymbol, table.get(symbol) || symbol)
      }
    }

    if (this.isFirst) return

    if (cType === 'A_COMMAND') {
      const symbol = this.symbol()
      return this.lineCode.push(table.number2binary(symbol))
      
    }

    if (cType === 'C_COMMAND') {
      const destCode = code.dest(this.dest())
      const compCode = code.comp(this.comp())
      const jumpCode = code.jump(this.jump())
      return this.lineCode.push('111' + compCode + destCode + jumpCode)
    }

  }

  commandType() {
    const line = this.currentLine
    if (line.startsWith('@')) return 'A_COMMAND'
    if (line.startsWith('(')) return 'L_COMMAND'

    return 'C_COMMAND'
  }

  symbol() {
    return this.currentLine
      .replace('@', '')
      .replace('(', '')
      .replace(')', '')
  }

  dest() {
    const line = this.currentLine
    let dest = ''
    if (line.includes('=')) {
      dest = line.split('=')[0]
    }
    return dest;
  }

  comp() {
    const words = this.currentLine.split('')
    let c = ''
    for (let i of words) {
      if (i === '=') {
        c = ''
      } else if (i === ';') {
        break
      } else {
        c += i
      }
    }
    return c
  }

  jump() {
    const line = this.currentLine
    let jump = ''
    if (line.includes(';')) {
      jump = line.split(';')[1]
    }
    return jump;
  }
}


