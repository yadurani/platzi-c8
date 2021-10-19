const regexNumber = new RegExp('^[0-9]+$')
const regexAlphaNumeric = new RegExp('^[A-Za-z0-9]*$')
const onlyNumbersLetters = new RegExp(/[A-Za-z0-9]+/g)

export const isNumber = (value) => {
  return regexNumber.test(value)
}

export const isAlphaNumeric = (value) => {
  return regexAlphaNumeric.test(value)
}

export const createObjNumber = (value, arr) => {
  return {
    number: Math.floor(value),
    acc: Math.floor(accNumbers(value, arr)),
    createAt: new Date()
  }
}

export const createObjAlpha = (value) => {
  const isEmptyOne = value.length === 1
  const lastCharacter = value.length - 1

  return {
    first: value.charAt(0),
    last: !isEmptyOne && value.charAt(lastCharacter),
    createAt: new Date()
  }
}

export const createObjSpecial = (value) => {
  return {
    character: extractCharacter(value),
    createAt: new Date()
  }
}

export const extractCharacter = (value) => {
  const onlySpecial = value.replaceAll(onlyNumbersLetters, '')
  return onlySpecial.replaceAll(' ', 'space')
}

export const accNumbers = (value, arr) => {
  if(!arr.length) return value
  const reduce = arr?.reduce((acc, { number }) => Math.floor(acc) + Math.floor(number), value)
  return reduce
}

export const sumNumber = (num) => {
  return num + 1
}