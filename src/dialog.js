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
    this.dom = {
      warpper: createElement('DIV', {
        className: 'js-dialog-wrapper'
      }),
      mask: createElement('DIV', {
        className: 'js-dialog-mask'
      }),
      dialog: createElement('DIV', {
        className: 'js-dialog'
      }),
      content: createElement('DIV', {
        className: 'js-dialog-content'
      })
    }
    const that = this
    this.visibile = true

    this.dom.dialog.appendChild(this.dom.content)
    this.dom.warpper.appendChild(this.dom.mask)
    this.dom.warpper.appendChild(this.dom.dialog)

    this.dom.dialog.addEventListener('animationend', function () {
      console.log(arguments, that.visibile)
      if (!that.visibile) {
        that.dom.warpper.style.display = 'none'
      }
    }, false)
  }

  show (content) {
    this.dom.content.innerHTML = content
    this.visibile = true
    this.dom.warpper.style.display = ''
    document.body.appendChild(this.dom.warpper)
  }

  hide () {
    this.visibile = false
    this.dom.dialog.classList.add('js-dialog-leave')
  }
}
