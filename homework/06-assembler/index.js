const path = require('path')
const fs = require('fs');
const readline = require('readline');
const Parser = require('./Parser')

const filePath = process.argv[2]

if (!filePath) throw `$ filePath not found`

const filename = path.resolve(__dirname, `../../projects/${filePath}`)

const parser = new Parser()

const rl = readline.createInterface({
  input: fs.createReadStream(filename),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  parser.setLine(pruneLine(line))
  parser.advance()
})
.on('close', () => {
  console.log(parser.getCode());
  // TODO: rewrite to file
});


// 去掉空格和注释
function pruneLine(line) {
  const l = line.trim().split('');
  let str = ''
  
  for (let w of l) {
    if (!w) continue;
    if (w === '/') break
    str += w
  }
  return str
}



