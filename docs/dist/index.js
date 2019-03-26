/* eslint-disable */
/*!
 * Build version v0.1.0
 * Create by lanyueos@qq.com
 * Created at Tue Mar 26 2019 21:59:43 GMT+0800 (中国标准时间)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Dialog = factory());
}(this, function () { 'use strict';

  ;(function () {
            function __insertStyle (css) {
              var style = document.createElement('style')
              style.innerHTML = css
              style.type = 'text/css'
              document.head.appendChild(style)
            };
            __insertStyle(".js-dialog-wrapper,\n.js-dialog-mask {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: opacity 0.3s ease-out;\n}\n.js-dialog-mask {\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: background-color 0.3s ease-out;\n  animation: opacity-fade-in 0.5s;\n}\n.js-dialog-mask-leave {\n  animation: opacity-fade-out 0.5s;\n}\n.js-dialog {\n  background-color: #fff;\n  position: relative;\n  width: 350px;\n  max-width: calc(100% - 30px);\n  margin: 0 auto;\n  box-shadow: 0 2px 20px rgba(26, 26, 26, 0.1);\n  box-sizing: border-box;\n  transition: max-height 0.5s ease;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.js-dialog-enter {\n  animation: dialog-fade-in 0.3s;\n}\n.js-dialog-leave {\n  animation: dialog-fade-out 0.5s;\n}\n.js-dialog-header {\n  height: 35px;\n  line-height: 35px;\n  padding: 0 15px;\n  color: #40424a;\n  font-size: 13px;\n}\n.js-dialog--close {\n  float: right;\n  margin-top: 8px;\n  margin-right: -8px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 20px;\n  font-weight: 100;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n}\n.js-dialog--close:hover {\n  color: #EF4A4A;\n}\n.js-dialog-content {\n  padding: 15px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: #182229;\n  max-height: calc(100vh - 24px * 2 - 100px);\n  font-size: 14px;\n}\n.js-dialog-footer {\n  text-align: right;\n  padding: 15px;\n}\n.js-dialog--cancel,\n.js-dialog--confirm {\n  background: none;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 8px 20px;\n  color: #5e6175;\n  cursor: pointer;\n}\n.js-dialog--cancel:hover {\n  color: #D8364B;\n  background-color: #f9ecec;\n}\n.js-dialog--confirm {\n  margin-left: 10px;\n  color: #1297e4;\n}\n.js-dialog--confirm:hover {\n  color: #1297e4;\n  background-color: #f1f0f0;\n}\n@keyframes dialog-fade-in {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes dialog-fade-out {\n  0% {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, -40px, 0);\n    opacity: 0;\n  }\n}\n@keyframes opacity-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opacity-fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n");
          })();
        

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var html = document.documentElement;
  var body = document.body;
  function createElement(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var el = document.createElement(tag);

    for (var key in attrs) {
      el[key] = attrs[key];
    }

    return el;
  }
  function on(el, event, handle) {
    el.addEventListener(event, handle, false);
  }
  function hasScrollbar(el) {
    if (body === el || html === el) {
      return (html.scrollHeight || body.scrollHeight) > html.clientHeight;
    } else {
      return el.scrollHeight > el.clientHeight;
    }
  }
  /**
  * 获取滚动条宽度
  * @return {Number} 返回宽度
  */

  function getScrollWidth() {
    var el = document.createElement('DIV');
    el.style.cssText = 'width: 100px; height: 100px;overflow: scroll;visibility: hidden;';
    document.body.appendChild(el);
    var offsetWidth = el.offsetWidth;
    var scrollWidth = el.scrollWidth;
    el.remove();
    return offsetWidth - scrollWidth;
  }

  var Dialog =
  /*#__PURE__*/
  function () {
    function Dialog(options) {
      _classCallCheck(this, Dialog);

      this.options = options = _objectSpread({
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
        maskBackground: null,
        containerOverflowHidden: true
      }, options);
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
      };
      this.visible = false;
      this.willVisible = false;
      this.elOldStyle = {};
      this.hadSetStyle = false;
      options.hasHeader && this.dom.dialog.appendChild(this.dom.header);
      this.dom.dialog.appendChild(this.dom.content);
      this.dom.warpper.appendChild(this.dom.mask);
      this.dom.warpper.appendChild(this.dom.dialog);
      this.dom.cancel.innerHTML = options.cancelButtonText;
      this.dom.confirm.innerHTML = options.confirmButtonText;

      if (typeof options.cancel === 'function') {
        this.dom.footer.appendChild(this.dom.cancel);
      }

      if (typeof options.confirm === 'function') {
        this.dom.footer.appendChild(this.dom.confirm);
      }

      this.dom.dialog.appendChild(this.dom.footer);
      this.dom.header.innerHTML = '<span>' + options.title + '</span>';

      if (options.hasCloseButton) {
        this.dom.closeBtn.innerHTML = '<span>×</span>';
        this.dom.header.appendChild(this.dom.closeBtn);
      }

      if (options.className) {
        this.dom.warpper.classList.add(options.className);
      }

      if (options.zIndex !== null) {
        this.dom.warpper.style.zIndex = options.zIndex;
      }

      if (options.width) {
        this.dom.dialog.style.width = options.width;
      }

      if (options.maskBackground) {
        this.dom.mask.style.background = options.maskBackground;
      }

      this.updateContent(options.content);
      this.listeners();
      this.dom.warpper.style.display = 'none';
      options.el.appendChild(this.dom.warpper);
    }

    _createClass(Dialog, [{
      key: "listeners",
      value: function listeners() {
        var that = this;
        on(this.dom.dialog, 'animationend', function () {
          // 关闭
          if (!that.willVisible) {
            that.dom.warpper.style.display = 'none';
            setTimeout(function () {
              if (that.hadSetStyle) {
                that.options.el.style.overflow = that.elOldStyle.overflow === '' ? '' : that.elOldStyle.overflow;
                that.options.el.style.marginRight = that.elOldStyle.marginRight === '' ? '' : that.elOldStyle.marginRight;
                that.hadSetStyle = false;
              }

              that.dom.mask.classList.remove('js-dialog-mask-leave');
              that.dom.dialog.classList.remove('js-dialog-enter');
              that.dom.dialog.classList.remove('js-dialog-leave');
              that.visible = false;
            });
            if (typeof that.options.onClose === 'function') that.options.onClose();
          } else {
            that.visible = true;
            if (typeof that.options.onOpen === 'function') that.options.onOpen();
          }
        });
        on(this.dom.mask, 'click', function () {
          that.options.closeOnClickMask && that.hide();
        });
        on(this.dom.closeBtn, 'click', function () {
          that.hide();
        });
        on(this.dom.cancel, 'click', function () {
          if (typeof that.options.cancel === 'function') {
            that.options.cancel();
          }
        });
        on(this.dom.confirm, 'click', function () {
          if (typeof that.options.confirm === 'function') {
            that.options.confirm();
          }
        });
      }
    }, {
      key: "show",
      value: function show() {
        if (this.visible) return;
        this.dom.dialog.classList.add('js-dialog-enter');
        this.dom.warpper.style.display = ''; // 如果盒子存在滚动条隐藏滚动条

        if (this.options.containerOverflowHidden && hasScrollbar(this.options.el)) {
          this.elOldStyle = {
            overflow: this.options.el.style.overflow,
            marginRight: this.options.el.style.marginRight
          };
          this.hadSetStyle = true;
          this.options.el.style.overflow = 'hidden';
          this.options.el.style.marginRight = getScrollWidth() + 'px';
        }

        this.willVisible = true;
      }
    }, {
      key: "hide",
      value: function hide() {
        var that = this;
        if (!this.visible) return;
        this.willVisible = false; // fix 短时间多次点击问题

        this.dom.dialog.classList.remove('js-dialog-leave');
        this.dom.mask.classList.remove('js-dialog-mask-leave');
        setTimeout(function () {
          that.dom.dialog.classList.add('js-dialog-leave');
          that.dom.mask.classList.add('js-dialog-mask-leave');
        });
      }
    }, {
      key: "updateContent",
      value: function updateContent(content) {
        if (this.options.supportHTML) {
          this.dom.content.innerHTML = content;
        } else {
          this.dom.content.innerText = content;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.dom.warpper.remove();
      }
    }]);

    return Dialog;
  }();

  function $alert(msg) {
    var optopns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      var modal = new Dialog(_objectSpread({
        content: msg,
        width: '300px',
        maskBackground: 'rgba(255, 255, 255, 0.24)'
      }, optopns, {
        closeOnClickMask: false,
        hasCloseButton: false,
        onClose: function onClose() {
          modal.destroy();
          modal = undefined;
        },
        confirm: function confirm() {
          modal.hide();
          resolve();
        }
      }));
      modal.show();
    });
  }

  function $confirm(msg) {
    var optopns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve, reject) {
      var modal = new Dialog(_objectSpread({
        content: msg,
        width: '300px',
        maskBackground: 'rgba(255, 255, 255, 0.24)'
      }, optopns, {
        closeOnClickMask: false,
        hasCloseButton: false,
        onClose: function onClose() {
          modal.destroy();
          modal = undefined;
        },
        confirm: function confirm() {
          modal.hide();
          resolve('confirm');
        },
        cancel: function cancel() {
          modal.hide();
          reject(new Error('cancel'));
        }
      }));
      modal.show();
    });
  }

  Dialog.$alert = $alert;
  Dialog.$confrim = $confirm;

  window.addEventListener('load', function () {
    var dialog = new Dialog({
      content: '<h2>Hello world !</h2><p>这是提示信息。</p>',
      // hasHeader: false,
      // hasCloseButton: false,
      supportHTML: true,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      // containerOverflowHidden: true,
      onClose: function onClose() {
        console.log('close');
      },
      onOpen: function onOpen() {
        console.log('open');
      },
      cancel: function cancel() {
        console.log('cancel');
        dialog.hide();
      },
      confirm: function confirm() {
        console.log('confirm');
        dialog.hide();
      }
    });
    console.log(dialog);
    document.getElementById('btn').addEventListener('click', function () {
      if (dialog.visible) {
        dialog.hide();
      } else {
        dialog.show();
      }
    });
    var dialog2 = new Dialog({
      el: document.getElementById('box1'),
      content: 'Hello !',
      width: '300px',
      maskBackground: 'rgba(0, 0, 0, 0.13)',
      cancel: function cancel() {
        console.log('cancel');
        dialog2.hide();
      },
      confirm: function confirm() {
        console.log('confirm');
        dialog2.hide();
      }
    });
    dialog2.show();
    document.getElementById('btn2').addEventListener('click', function () {
      if (dialog2.visible) {
        dialog2.hide();
      } else {
        dialog2.show();
      }
    });
    document.getElementById('btn3').addEventListener('click', function () {
      Dialog.$alert('Hello !').then(function () {
        console.log('alert: Done');
      });
    });
    document.getElementById('btn4').addEventListener('click', function () {
      Dialog.$confrim('Hello !').then(function () {
        console.log('confirm: Confirm');
      }).catch(function () {
        console.log('confirm: Cancel');
      });
    });
    window.dialog = dialog;
  });

  return Dialog;

}));
