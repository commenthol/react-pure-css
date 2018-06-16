export const stop = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
}

export const submit = (ev, send) => {
  stop(ev)
  return JSON.stringify(send)
}
