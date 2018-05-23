export const stop = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
}

export const submit = (ev) => {
  stop(ev)
  const send = {}
  for (let i = 0; i < ev.target.elements.length; i++) {
    const {name, value} = ev.target.elements[i]
    if (value !== undefined && value !== '') send[name] = value
  }
  return send
}
