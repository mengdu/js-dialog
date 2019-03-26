'use strict'
import Dialog from './dialog'

export default function $confirm (msg, optopns = {}) {
  return new Promise(function (resolve, reject) {
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
        resolve('confirm')
      },
      cancel () {
        modal.hide()
        reject(new Error('cancel'))
      }
    })

    modal.show()
  })
}
