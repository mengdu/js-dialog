'use strict'
import Dialog from './dialog'

export default function $alert (msg, optopns = {}) {
  return new Promise(function (resolve) {
    let modal = new Dialog({
      content: msg,
      width: '300px',
      maskBackground: 'rgba(255, 255, 255, 0.24)',
      ...optopns,
      closeOnClickMask: false,
      hasCloseButton: false,
      onClose () {
        modal.destroy()
        modal = undefined
      },
      confirm () {
        modal.hide()
        resolve()
      }
    })

    modal.show()
  })
}
