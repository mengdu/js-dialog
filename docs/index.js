'use strict'
import Dialog from '../src/index'

window.addEventListener('load', function () {
  const dialog = new Dialog({})

  dialog.show('Hello world !')
  window.dialog = dialog
})

export default Dialog
