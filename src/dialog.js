'use strict'
import {
  createElement,
  on
} from './utils'

export default class Dialog {
  constructor (options) {
    const that = this
    this.options = options = {
      el: document.body,
      title: 'Message',
      width: null,
      zIndex: null,
      className: null,
      hasHeader: true,
      hasCloseButton: true,
      closeOnClickMask: true,
      closeOnKeyEscape: true,
      onClose: null,
      onOpen: null,
      cancel: null,
      confirm: null,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm',
      maskBackground: null,
      ...options
    }

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
      }),
      closeBtn: createElement('BUTTON', {
        className: 'js-dialog--close'
      }),
      footer: createElement('DIV', {
        className: 'js-dialog-footer'
      }),
      cancel: createElement('BUTTON', {
        className: 'js-dialog--cancel'
      }),
      confirm: createElement('BUTTON', {
        className: 'js-dialog--confirm'
      })
    }

    this.visible = false

    options.hasHeader && this.dom.dialog.appendChild(this.dom.header)
    this.dom.dialog.appendChild(this.dom.content)
    this.dom.warpper.appendChild(this.dom.mask)
    this.dom.warpper.appendChild(this.dom.dialog)

    this.dom.cancel.innerHTML = options.cancelButtonText
    this.dom.confirm.innerHTML = options.confirmButtonText

    if (typeof options.cancel === 'function') {
      this.dom.footer.appendChild(this.dom.cancel)
    }
    if (typeof options.confirm === 'function') {
      this.dom.footer.appendChild(this.dom.confirm)
    }

    this.dom.dialog.appendChild(this.dom.footer)

    this.dom.header.innerHTML = '<span>' + options.title + '</span>'

    if (options.hasCloseButton) {
      this.dom.closeBtn.innerHTML = '<span>×</span>'
      this.dom.header.appendChild(this.dom.closeBtn)
    }
    console.log(options)
    if (options.className) {
      this.dom.warpper.classList.add(options.className)
    }
    if (options.zIndex !== null) {
      this.dom.warpper.style.zIndex = options.zIndex
    }
    if (options.width) {
      this.dom.dialog.style.width = options.width
    }
    if (options.maskBackground) {
      this.dom.mask.style.background = options.maskBackground
    }

    this.updateContent(options.content)
    this.listeners()
    this.dom.warpper.style.display = 'none'

    options.el.appendChild(this.dom.warpper)
  }

  listeners () {
    const that = this

    on(this.dom.dialog, 'animationend', function () {
      console.log('animationend', that.visible)
      if (!that.visible) {
        that.dom.warpper.style.display = 'none'

        setTimeout(function () {
          that.dom.mask.classList.remove('js-dialog-mask-leave')
          that.dom.dialog.classList.remove('js-dialog-enter')
          that.dom.dialog.classList.remove('js-dialog-leave')
        })
        if (typeof that.options.onClose === 'function') that.options.onClose()
      } else {
        if (typeof that.options.onOpen === 'function') that.options.onOpen()
      }
    })

    on(this.dom.mask, 'click', function () {
      that.options.closeOnClickMask && that.hide()
    })

    on(this.dom.closeBtn, 'click', function () {
      that.hide()
    })
    on(this.dom.cancel, 'click', function () {
      if (typeof that.options.cancel === 'function') {
        that.options.cancel()
      }
    }),
    on(this.dom.confirm, 'click', function () {
      if (typeof that.options.confirm === 'function') {
        that.options.confirm()
      }
    })
  }

  show () {
    this.dom.dialog.classList.add('js-dialog-enter')
    this.dom.warpper.style.display = ''
    this.visible = true
  }

  hide () {
    const that = this
    this.visible = false
    // fix 短时间多次点击问题
    this.dom.dialog.classList.remove('js-dialog-leave')
    this.dom.mask.classList.remove('js-dialog-mask-leave')

    setTimeout(function () {
      that.dom.dialog.classList.add('js-dialog-leave')
      that.dom.mask.classList.add('js-dialog-mask-leave')
    })
  }

  updateContent (content) {
    if (this.options.supportHTML) {
      this.dom.content.innerHTML = content
    } else {
      this.dom.content.innerText = content
    }
  }
}
