export const stop = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
}

export const submit = (ev, send) => {
  stop(ev)
  console.log(send) // eslint-disable-line no-console
  return JSON.stringify(send)
}
