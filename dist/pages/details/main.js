require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Detail__ = __webpack_require__(116);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Detail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0126e597_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0126e597_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/details/Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0126e597", Component.options)
  } else {
    hotAPI.reload("data-v-0126e597", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommentList__ = __webpack_require__(46);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BookInfo: __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__["a" /* default */],
    CommentList: __WEBPACK_IMPORTED_MODULE_4__components_CommentList__["a" /* default */]
  },
  data: function data() {
    return {
      bookid: '',
      info: {},
      phone: '',
      location: '',
      comment: '',
      comments: []
    };
  },

  computed: {
    showAdd: function showAdd() {
      var _this = this;

      if (!this.info.openid) {
        return false;
      } else if (this.comments.filter(function (v) {
        return v.openid === _this.info.openid;
      }).length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getBookInfo: function getBookInfo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/bookdetail', { id: _this2.bookid });

              case 2:
                res = _context.sent;

                _this2.info = res;
                wx.setNavigationBarTitle({
                  title: _this2.info.title
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    getComments: function getComments() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var commentlist;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/commentlist', { bookid: _this3.bookid });

              case 2:
                commentlist = _context2.sent;

                _this3.comments = commentlist.commentlist;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    getGeo: function getGeo(e) {
      var _this4 = this;

      var url = 'http://api.map.baidu.com/geocoder/v2/';
      var ak = 'UUmkVFzjqtG7xpCUta2MePSgsxXDbpfk';

      if (e.target.value) {
        wx.getLocation({
          success: function success(geo) {
            wx.request({
              url: url,
              data: {
                location: geo.latitude + ',' + geo.longitude,
                ak: ak,
                output: 'json'
              },
              success: function success(res) {
                if (res.data.status === 0) {
                  _this4.location = res.data.result.addressComponent.city;
                } else {
                  _this4.location = '未知地点';
                }
              }
            });
          }
        });
      }
    },
    getPhone: function getPhone(e) {
      if (e.target.value) {
        var phoneInfo = wx.getSystemInfoSync();
        this.phone = phoneInfo.model;
      } else {
        // 没选中
        this.phone = '';
      }
    },
    addComment: function addComment() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // location,phone,comment,bookid,openid
                data = {
                  location: _this5.location,
                  phone: _this5.phone,
                  bookid: _this5.bookid,
                  comment: _this5.comment,
                  openid: _this5.info.user_info.openid
                };

                if (_this5.comment) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt('return');

              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* post */])('/weapp/addcomment', data);

              case 6:
                Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* showSuccess */])('评论成功');
                _this5.comment = '';
                _this5.getComments();
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](3);

                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('失败', _context3.t0.msg);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5, [[3, 11]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getBookInfo();
    this.getComments();
    wx.showShareMenu();
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bc12d12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bc12d12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/BookInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bc12d12", Component.options)
  } else {
    hotAPI.reload("data-v-2bc12d12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rate__ = __webpack_require__(45);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Rate: __WEBPACK_IMPORTED_MODULE_0__components_Rate__["a" /* default */]
  },
  props: ['info'],
  computed: {
    userInfo: function userInfo() {
      return this.info.user_info || {};
    }
  },
  mounted: function mounted() {
    wx.showShareMenu({
      withShareTicket: true
    });
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bookinfo"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": _vm.info.image,
      "alt": "",
      "mode": "aspectfill"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.info.image,
      "alt": "",
      "mode": "aspectFit"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                " + _vm._s(_vm.info.title) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v("\n                " + _vm._s(_vm.info.author) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.avatar,
      "mode": "aspectFit"
    }
  }), _vm._v("\n        " + _vm._s(_vm.userInfo.name) + "\n        "), _c('div', {
    staticClass: "right text-primary"
  }, [_vm._v("\n            " + _vm._s(_vm.info.rate) + "分\n            "), _c('Rate', {
    attrs: {
      "value": _vm.info.rate,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("\n        " + _vm._s(_vm.info.publisher) + "\n        "), _c('div', {
    staticClass: "right"
  }, [_vm._v("\n            " + _vm._s(_vm.info.price) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.info.tags), function(tag, index) {
    return _c('div', {
      key: index,
      staticClass: "badge"
    }, [_vm._v("\n            " + _vm._s(tag) + "\n        ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, _vm._l((_vm.info.summary), function(summary, index) {
    return _c('p', {
      key: index
    }, [_vm._v(_vm._s(summary))])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bc12d12", esExports)
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('BookInfo', {
    attrs: {
      "info": _vm.info,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('CommentList', {
    attrs: {
      "comments": _vm.comments,
      "mpcomid": '1'
    }
  }), _vm._v(" "), (_vm.showAdd) ? _c('div', {
    staticClass: "comment"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    staticClass: "textarea",
    attrs: {
      "maxlength": "140",
      "placeholder": "请输入图书短评",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_vm._v("\n            地理位置：\n            "), _c('switch', {
    attrs: {
      "color": "#DC5A3B",
      "checked": _vm.location,
      "eventid": '1'
    },
    on: {
      "change": _vm.getGeo
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.location))])]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("\n            手机型号：\n            "), _c('switch', {
    attrs: {
      "color": "#DC5A3B",
      "checked": _vm.phone,
      "eventid": '2'
    },
    on: {
      "change": _vm.getPhone
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v("添加评论")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "share",
      "eventid": '4'
    },
    on: {
      "click": _vm.onShow
    }
  }, [_vm._v("转发给好友")])], 1) : _c('div', {
    staticClass: "text-footer"
  }, [_vm._v("没有登录或者已经评论过了")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0126e597", esExports)
  }
}

/***/ })

},[115]);
//# sourceMappingURL=main.js.map