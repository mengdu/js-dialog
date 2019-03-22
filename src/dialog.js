'use strict'

function createElement (tag, attrs = {}) {
  const el = document.createElement(tag)

  for (let key in attrs) {
    el[key] = attrs[key]
  }

  return el
}

function on (el, event, handle) {
  el.addEventListener(event, handle, false)
}

export default class Dialog {
  constructor (options) {
    const that = this
    this.options = options = options || {}

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
      header: createElement('DIV', {
        className: 'js-dialog-header'
      }),
      content: createElement('DIV', {
        className: 'js-dialog-content'
      })
    }

    this.visibile = false

    this.dom.dialog.appendChild(this.dom.header)
    this.dom.dialog.appendChild(this.dom.content)
    this.dom.warpper.appendChild(this.dom.mask)
    this.dom.warpper.appendChild(this.dom.dialog)

    this.dom.header.innerHTML = '<span>' + (options.title || '提示') + '</span><button class="js-dialog--close"><span>×</span></button>'
    on(this.dom.dialog, 'animationend', function () {
      console.log('animationend', that.visibile)
      if (!that.visibile) {
        that.dom.warpper.style.display = 'none'

        setTimeout(function () {
          that.dom.mask.classList.remove('js-dialog-mask-leave')
          that.dom.dialog.classList.remove('js-dialog-enter')
          that.dom.dialog.classList.remove('js-dialog-leave')
        })
      }
    })

    on(this.dom.mask, 'click', function () {
      that.hide()
    })

    this.updateContent(options.content)
    this.dom.warpper.style.display = 'none'
    document.body.appendChild(this.dom.warpper)
  }

  show () {
    this.dom.dialog.classList.add('js-dialog-enter')
    this.dom.warpper.style.display = ''
    this.visibile = true
  }

  hide () {
    this.visibile = false
    this.dom.dialog.classList.add('js-dialog-leave')
    this.dom.mask.classList.add('js-dialog-mask-leave')
  }

  updateContent (content) {
    if (this.options.supportHTML) {
      this.dom.content.innerHTML = content
    } else {
      this.dom.content.innerText = content
    }
  }
}
