"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(options) {
        _classCallCheck(this, Modal);

        this.options = options;
        this.root = document.getElementById(this.options['id']);
        this.visible = true;
        this.close();
        Utils.addOverlayDiv(this);
        this.addCloseListener();
        window.modal = this;
    }

    _createClass(Modal, [{
        key: "isVisible",
        value: function isVisible() {
            return this.visible;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            if (this.visible) this.close();else this.show();
        }
    }, {
        key: "addCloseListener",
        value: function addCloseListener() {
            var that = this;
            console.log("Added Event Listener");
            document.addEventListener("keydown", function (evt) {
                evt = evt || window.event;
                if (evt.keyCode == 27) {
                    that.close();
                    console.log(that.close);
                }
            });
        }
    }, {
        key: "addBodyShadow",
        value: function addBodyShadow() {
            Utils.addClass(document.body, 'model-open');
        }
    }, {
        key: "removeBodyShadow",
        value: function removeBodyShadow() {
            Utils.removeClass(document.body, 'model-open');
        }
    }, {
        key: "close",
        value: function close() {
            console.log(this.visible);
            if (!this.visible) return;
            this.visible = false;
            this.root.style.visibility = 'hidden';
            Utils.removeClass(this.root, 'md-show');
            this.addBodyShadow();
        }
    }, {
        key: "show",
        value: function show() {
            if (this.visible) return;
            this.visible = true;
            this.root.style.visibility = 'visible';
            Utils.addClass(this.root, 'md-show');
            this.removeBodyShadow();
        }
    }]);

    return Modal;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'addClass',
        value: function addClass(el, className) {
            if (el.classList) el.classList.add(className);else el.className += ' ' + className;
        }
    }, {
        key: 'removeClass',
        value: function removeClass(el, className) {
            if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }, {
        key: 'addOverlayDiv',
        value: function addOverlayDiv(modal) {
            var overlay = document.createElement("DIV");
            overlay.setAttribute('id', 'md-overlay');
            Utils.addClass(overlay, 'md-overlay');
            document.body.appendChild(overlay);
            overlay.addEventListener("click", function () {
                modal.close();
            });
        }
    }]);

    return Utils;
}();