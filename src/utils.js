'use strict'
const html = document.documentElement
const body = document.body

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

export function hasScrollbar (el) {
  if (body === el || html === el) {
    return (html.scrollHeight || body.scrollHeight) > html.clientHeight
  } else {
    return el.scrollHeight > el.clientHeight
  }
}

/**
* 获取滚动条宽度
* @return {Number} 返回宽度
*/
export function getScrollWidth () {
  const el = document.createElement('DIV')
  el.style.cssText = 'width: 100px; height: 100px;overflow: scroll;visibility: hidden;'
  document.body.appendChild(el)
  const offsetWidth = el.offsetWidth
  const scrollWidth = el.scrollWidth
  el.remove()
  return offsetWidth - scrollWidth
}
