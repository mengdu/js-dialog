'use strict'

export function createElement (tag, attrs = {}) {
  const el = document.createElement(tag)

  for (let key in attrs) {
    el[key] = attrs[key]
  }

  return el
}

export function on (el, event, handle) {
  el.addEventListener(event, handle, false)
}
