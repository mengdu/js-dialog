# js-dialog

基于 CSS3 Animation 实现的弹出插件。

```js
const dialog = new Dialog({
  content: '<h2>Hello world !</h2><p>这是提示信息。</p>',
  supportHTML: true
})

dialog.show()
```

## 使用

```js
new Dialog(options)
```

**options**

```js
{
  el: document.body,
  title: 'Message',
  width: null,
  zIndex: null,
  className: null,
  supportHTML: false,
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
  maskBackground: null
}
```

+ **Dialog.prototype.show()** 显示弹窗
+ **Dialog.prototype.hide()** 隐藏弹窗
+ **Dialog.prototype.updateContent(content)** 更新弹窗内容体
