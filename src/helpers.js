
export const addClass = (base) => (obj) =>
  Object.keys(obj).reduce((arr, p) => {
    obj[p] && arr.push(`${base}-${p}`)
    return arr
  }, [])

export const addUnit = (obj) =>
  Object.keys(obj).reduce((arr, p) => {
    let unit = obj[p]
    if (unit) {
      const _unit = (p !== 'u')
        ? `${p}-${unit}`
        : unit
      arr.push(`pure-u-${_unit}`)
    }
    return arr
  }, [])

export const randomId = (base = 'id') => `${base}-${Math.random().toString(16).substr(2)}`
