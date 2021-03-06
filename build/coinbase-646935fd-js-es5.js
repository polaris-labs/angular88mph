(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coinbase-646935fd-js"], {
    /***/
    "nJYZ":
    /*!****************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/coinbase-646935fd.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function nJYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./content-eeaca1cc.js */
      "36aJ");
      /* harmony import */


      var _icon_coinbase_9c595a2f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./icon-coinbase-9c595a2f.js */
      "kl0C");

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function coinbase(options) {
        var preferred = options.preferred,
            label = options.label,
            iconSrc = options.iconSrc,
            svg = options.svg;
        return {
          name: label || 'Coinbase',
          iconSrc: iconSrc,
          svg: svg || _icon_coinbase_9c595a2f_js__WEBPACK_IMPORTED_MODULE_1__["c"],
          wallet: function () {
            var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
              var getProviderName, createLegacyProviderInterface, provider;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      getProviderName = helpers.getProviderName, createLegacyProviderInterface = helpers.createLegacyProviderInterface;
                      provider = window.web3 && window.web3.currentProvider;
                      return _context.abrupt("return", {
                        provider: provider,
                        "interface": provider && getProviderName(provider) === 'Coinbase' ? createLegacyProviderInterface(provider) : null
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function wallet(_x) {
              return _wallet.apply(this, arguments);
            }

            return wallet;
          }(),
          type: 'injected',
          link: 'https://go.cb-w.com/',
          installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["m"],
          mobile: true,
          preferred: preferred
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = coinbase;
      /***/
    }
  }]);
})();
//# sourceMappingURL=coinbase-646935fd-js-es5.js.map