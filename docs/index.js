'use strict'
import Dialog from '../src/index'

window.addEventListener('load', function () {
  const dialog = new Dialog({
    content: '<h2>Hello world !</h2><p>This is a test.</p>',
    supportHTML: true
  })

  // dialog.show()

  document.getElementById('btn').addEventListener('click', function () {
    dialog.show()
  })

  window.dialog = dialog
})

export default Dialog
