'use strict'

function createElement (tag, attrs = {}) {
  const el = document.createElement(tag)

  for (let key in attrs) {
    el[key] = attrs[key]
  }

  return el
}

export default class Dialog {
  constructor (options) {
    this.WrapperEl = createElement('DIV', {
      className: 'js-dialog-wrapper'
    })
    this.MaskEL = createElement('DIV', {
      className: 'js-dialog-mask'
    })
    this.DialogEl = createElement('DIV', {
      className: 'js-dialog'
    })
    this.DialogContentEl = createElement('DIV', {
      className: 'js-dialog-content'
    })

    this.DialogEl.appendChild(this.DialogContentEl)
    this.WrapperEl.appendChild(this.MaskEL)
    this.WrapperEl.appendChild(this.DialogEl)
  }

  show (content) {
    this.DialogContentEl.innerHTML = content
    document.body.appendChild(this.WrapperEl)
  }
}
