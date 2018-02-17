// Return a random item from the provided array
export const random = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Shuffle the provided array
export const shuffle = (array, immutable = false) => {
  let temporaryValue, randomIndex
  let currentIndex = array.length

  if (immutable) {
    array = Object.assign([], array)
  }

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

// Accepts an array and a key and return the lowest value in the array
export const getLowest = (array, key, exclude = []) => {
  return array.reduce((a, b, index) => {
    if (a === null) {
      if (!exclude.includes(index)) {
        return b[key]
      }
      return null
    }

    return Math.min(a, b[key])
  }, null)
}

// Array map for objects
export const mapOb = (ob, iterator) => {
  return Object.keys(ob).map(key => iterator(ob[key], key, ob))
}

// Array find for objects
export const findOb = (ob, iterator) => {
  return Object.keys(ob).find(key => iterator(ob[key], key, ob))
}

export const round = num => {
  return Math.round(num * 100) / 100
}

export const toCurrency = (value, options = {}) => {
  const {rounded, skipPrefix} = options

  if (typeof value !== 'number') {
    return '-'
  }

  const prefix = skipPrefix ? '' : '$'
  return (
    prefix +
    round(value)
      .toFixed(rounded ? 0 : 2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  )
}
