'use strict'
import Dialog from '../src/index'

window.addEventListener('load', function () {
  const dialog = new Dialog({
    content: '<h2>Hello world !</h2><p>这是提示信息。</p>',
    // hasHeader: false,
    // hasCloseButton: false,
    supportHTML: true,
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    onClose () {
      console.log('close')
    },
    onOpen () {
      console.log('open')
    },
    cancel () {
      console.log('cancel')
      dialog.hide()
    },
    confirm () {
      console.log('confirm')
      dialog.hide()
    }
  })

  console.log(dialog)

  document.getElementById('btn').addEventListener('click', function () {
    if (dialog.visible) {
      dialog.hide()
    } else {
      dialog.show()
    }
  })

  const dialog2 = new Dialog({
    el: document.getElementById('box1'),
    content: 'Hello !',
    width: '300px',
    maskBackground: 'rgba(0, 0, 0, 0.13)',
    cancel () {
      console.log('cancel')
      dialog2.hide()
    },
    confirm () {
      console.log('confirm')
      dialog2.hide()
    }
  })

  dialog2.show()

  document.getElementById('btn2').addEventListener('click', function () {
    if (dialog2.visible) {
      dialog2.hide()
    } else {
      dialog2.show()
    }
  })

  window.dialog = dialog
})

export default Dialog
