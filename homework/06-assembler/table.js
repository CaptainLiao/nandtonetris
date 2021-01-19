const Table = {
  SP: '0',
  LCL: '1',
  ARG: '2',
  THIS: '3',
  THAT: '4',
  SCREEN: '16384',
  KBD: '24576',
}

let num = 15
while (num >= 0) {
  Table['R' + num] = num
  --num
}

module.exports = {
  number2binary,
  set,
  get,
  has,

  getAddress(k) {
    return number2binary(Table[k])
  }
}

function set(k, v) {
  Table[k] = v;
}
function get(k) {
  return Table[k]
}
function has(k) {
  const v = Table[k]
  return v || v === '0' || v === 0
}

function number2binary(num, long=16) {
  let res = parseInt(num, 10).toString(2)
  const dif = long - res.length
  if (dif > 0) {
    const zero = Array(dif).fill(0).join('')
    res = zero + res
  }
  return res
}