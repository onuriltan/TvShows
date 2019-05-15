/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8079;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\napp.get('*', function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n        var actions, context, content;\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n                            var route = _ref2.route;\n                            return route.component.fetching ? route.component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n                        }).map(function () {\n                            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n                                return _regenerator2.default.wrap(function _callee$(_context) {\n                                    while (1) {\n                                        switch (_context.prev = _context.next) {\n                                            case 0:\n                                                _context.next = 2;\n                                                return Promise.all((actions || []).map(function (p) {\n                                                    return p && new Promise(function (resolve) {\n                                                        return p.then(resolve).catch(resolve);\n                                                    });\n                                                }));\n\n                                            case 2:\n                                                return _context.abrupt('return', _context.sent);\n\n                                            case 3:\n                                            case 'end':\n                                                return _context.stop();\n                                        }\n                                    }\n                                }, _callee, undefined);\n                            }));\n\n                            return function (_x3) {\n                                return _ref3.apply(this, arguments);\n                            };\n                        }());\n                        _context2.next = 3;\n                        return Promise.all(actions);\n\n                    case 3:\n                        context = {};\n                        content = (0, _render2.default)(req.path, _store2.default, context);\n\n\n                        res.send(content);\n\n                    case 6:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined);\n    }));\n\n    return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n    };\n}());\n\napp.listen(PORT, function () {\n    return console.log('Frontend service listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/actions/shows.js":
/*!******************************!*\
  !*** ./src/actions/shows.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeShow = exports.fetchShow = exports.fetchShows = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchShows = exports.fetchShows = function fetchShows() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              dispatch({ type: _types.REQUEST_SHOWS });\n              _context.next = 4;\n              return _axios2.default.get(_types.SHOWS_URL + \"/shows?q=batman\");\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_SHOWS, payload: res.data });\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_SHOWS, payload: [] });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchShow = exports.fetchShow = function fetchShow(name) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n\n              dispatch({ type: _types.REQUEST_SHOW });\n              _context2.next = 4;\n              return _axios2.default.get(_types.SHOW_URL + \"?q=\" + name);\n\n            case 4:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_SHOW, payload: res.data });\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_SHOW, payload: {} });\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar removeShow = exports.removeShow = function removeShow() {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {\n      return _regenerator2.default.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              dispatch({ type: _types.REMOVE_SHOW, payload: {} });\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/actions/shows.js?");

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SHOWS_URL = exports.SHOWS_URL = 'http://api.tvmaze.com/search';\nvar SHOW_URL = exports.SHOW_URL = 'http://api.tvmaze.com/singlesearch/shows';\n\nvar REQUEST_SHOWS = exports.REQUEST_SHOWS = 'REQUEST_SHOWS';\nvar RECEIVE_SHOWS = exports.RECEIVE_SHOWS = 'RECEIVE_SHOWS';\n\nvar REQUEST_SHOW = exports.REQUEST_SHOW = 'REQUEST_SHOW';\nvar RECEIVE_SHOW = exports.RECEIVE_SHOW = 'RECEIVE_SHOW';\nvar REMOVE_SHOW = exports.REMOVE_SHOW = 'REMOVE_SHOW';\n\n//# sourceURL=webpack:///./src/actions/types.js?");

/***/ }),

/***/ "./src/components/TvShow/TvShowDetails.js":
/*!************************************************!*\
  !*** ./src/components/TvShow/TvShowDetails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var network = _ref.network,\n        rating = _ref.rating,\n        premiered = _ref.premiered,\n        genres = _ref.genres,\n        language = _ref.language;\n\n    return _react2.default.createElement(\n        \"div\",\n        { className: \"show_details\" },\n        premiered ? _react2.default.createElement(\n            \"div\",\n            { className: \"show_details__detail\" },\n            \"Premiered : \",\n            premiered\n        ) : null,\n        genres ? _react2.default.createElement(\n            \"div\",\n            { className: \"show_details__detail\" },\n            \"Genres : \",\n            genres.map(function (genre, i) {\n                return i + 1 === genres.length ? genre : genre + \", \";\n            })\n        ) : null,\n        language ? _react2.default.createElement(\n            \"div\",\n            { className: \"show_details__detail\" },\n            \"Language : \",\n            language\n        ) : null,\n        rating.average !== undefined && rating.average !== null ? _react2.default.createElement(\n            \"div\",\n            { className: \"show_details__detail\" },\n            \"Rating : \",\n            rating.average\n        ) : null,\n        network !== undefined && network !== null ? _react2.default.createElement(\n            \"div\",\n            { className: \"show_details__detail\" },\n            \"Country : \",\n            network.country.name\n        ) : null\n    );\n};\n\n//# sourceURL=webpack:///./src/components/TvShow/TvShowDetails.js?");

/***/ }),

/***/ "./src/components/TvShow/TvShowHeader.js":
/*!***********************************************!*\
  !*** ./src/components/TvShow/TvShowHeader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var name = _ref.name,\n      goBack = _ref.goBack;\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"show_header\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"show_header__back-button\", onClick: goBack },\n      _react2.default.createElement(\n        \"div\",\n        { className: \"show_header__back-button__icon\" },\n        \"\\u2B05\"\n      ),\n      _react2.default.createElement(\n        \"div\",\n        { className: \"show_header__back-button__text\" },\n        \"Go Back\"\n      )\n    ),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"show_header__name\" },\n      name\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/TvShow/TvShowHeader.js?");

/***/ }),

/***/ "./src/components/TvShow/index.js":
/*!****************************************!*\
  !*** ./src/components/TvShow/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _shows = __webpack_require__(/*! ../../actions/shows */ \"./src/actions/shows.js\");\n\nvar _TvShowHeader = __webpack_require__(/*! ./TvShowHeader */ \"./src/components/TvShow/TvShowHeader.js\");\n\nvar _TvShowHeader2 = _interopRequireDefault(_TvShowHeader);\n\nvar _TvShowDetails = __webpack_require__(/*! ./TvShowDetails */ \"./src/components/TvShow/TvShowDetails.js\");\n\nvar _TvShowDetails2 = _interopRequireDefault(_TvShowDetails);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar show = function show(_ref) {\n  var show = _ref.show;\n  return { show: show };\n};\n\nvar TvShowPage = (_dec = (0, _reactRedux.connect)(show, { fetchShow: _shows.fetchShow, removeShow: _shows.removeShow }), _dec(_class = function (_Component) {\n  _inherits(TvShowPage, _Component);\n\n  function TvShowPage() {\n    var _ref2;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TvShowPage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TvShowPage.__proto__ || Object.getPrototypeOf(TvShowPage)).call.apply(_ref2, [this].concat(args))), _this), _this.goBack = function () {\n      _this.props.removeShow();\n      _this.props.history.goBack();\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(TvShowPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchShow(this.props.match.params.name);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$show$data = this.props.show.data,\n          name = _props$show$data.name,\n          image = _props$show$data.image,\n          summary = _props$show$data.summary,\n          network = _props$show$data.network,\n          rating = _props$show$data.rating,\n          premiered = _props$show$data.premiered,\n          genres = _props$show$data.genres,\n          language = _props$show$data.language;\n\n      if (this.props.show.data.name === undefined) {\n        return null;\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'show_container' },\n          _react2.default.createElement(_TvShowHeader2.default, { name: name, goBack: this.goBack }),\n          _react2.default.createElement(\n            'div',\n            { className: 'show_container__main' },\n            _react2.default.createElement(\n              'div',\n              { className: 'show_container__main__img-container' },\n              _react2.default.createElement('img', { className: 'show_container__main__img-container__img', src: image.original, alt: name })\n            ),\n            _react2.default.createElement(_TvShowDetails2.default, { network: network, rating: rating, premiered: premiered,\n              genres: genres, language: language })\n          ),\n          _react2.default.createElement('div', { className: 'show_container__summary', dangerouslySetInnerHTML: { __html: summary } })\n        )\n      );\n    }\n  }]);\n\n  return TvShowPage;\n}(_react.Component)) || _class);\nexports.default = TvShowPage;\n\n//# sourceURL=webpack:///./src/components/TvShow/index.js?");

/***/ }),

/***/ "./src/components/TvShows/TvShowsItem.js":
/*!***********************************************!*\
  !*** ./src/components/TvShows/TvShowsItem.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (data) {\n  var name = data.show.name;\n  var imageURL = data.show.image.medium;\n  return _react2.default.createElement(\n    'div',\n    { className: 'show-item' },\n    _react2.default.createElement(\n      _reactRouterDom.NavLink,\n      { to: '/' + name, className: 'show-item__container' },\n      _react2.default.createElement('img', { src: imageURL, alt: '' + name }),\n      _react2.default.createElement(\n        'div',\n        { className: 'show-item__container__details' },\n        _react2.default.createElement(\n          'div',\n          { className: 'show-item__container__details__name' },\n          name\n        )\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/TvShows/TvShowsItem.js?");

/***/ }),

/***/ "./src/components/TvShows/index.js":
/*!*****************************************!*\
  !*** ./src/components/TvShows/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _shows = __webpack_require__(/*! ../../actions/shows */ \"./src/actions/shows.js\");\n\nvar _TvShowsItem = __webpack_require__(/*! ./TvShowsItem.js */ \"./src/components/TvShows/TvShowsItem.js\");\n\nvar _TvShowsItem2 = _interopRequireDefault(_TvShowsItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar shows = function shows(_ref) {\n  var shows = _ref.shows;\n  return { shows: shows };\n};\n\nvar TvShowsPage = (_dec = (0, _reactRedux.connect)(shows, { fetchShows: _shows.fetchShows }), _dec(_class = function (_Component) {\n  _inherits(TvShowsPage, _Component);\n\n  function TvShowsPage() {\n    _classCallCheck(this, TvShowsPage);\n\n    return _possibleConstructorReturn(this, (TvShowsPage.__proto__ || Object.getPrototypeOf(TvShowsPage)).apply(this, arguments));\n  }\n\n  _createClass(TvShowsPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchShows();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.shows.data;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'shows' },\n          _react2.default.createElement(\n            'div',\n            { className: 'shows__title' },\n            'BATMAN TV SHOWS'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'shows__items' },\n            data.map(function (show, i) {\n              return _react2.default.createElement(_TvShowsItem2.default, _extends({ key: i }, show));\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return TvShowsPage;\n}(_react.Component)) || _class);\nexports.default = TvShowsPage;\n;\n\n//# sourceURL=webpack:///./src/components/TvShows/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _shows = __webpack_require__(/*! ./shows */ \"./src/reducers/shows.js\");\n\nvar _shows2 = _interopRequireDefault(_shows);\n\nvar _show = __webpack_require__(/*! ./show */ \"./src/reducers/show.js\");\n\nvar _show2 = _interopRequireDefault(_show);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  shows: _shows2.default, show: _show2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/show.js":
/*!******************************!*\
  !*** ./src/reducers/show.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../actions/types */ \"./src/actions/types.js\");\n\nvar INITIAL_STATE = {\n  data: {}\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_SHOW:\n      {\n        return _extends({}, state);\n      }\n    case _types.RECEIVE_SHOW:\n      {\n        return _extends({}, state, { data: action.payload });\n      }\n    case _types.REMOVE_SHOW:\n      {\n        return _extends({}, state, { data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/show.js?");

/***/ }),

/***/ "./src/reducers/shows.js":
/*!*******************************!*\
  !*** ./src/reducers/shows.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../actions/types */ \"./src/actions/types.js\");\n\nvar INITIAL_STATE = {\n  data: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_SHOWS:\n      {\n        return _extends({}, state);\n      }\n    case _types.RECEIVE_SHOWS:\n      {\n        return _extends({}, state, { data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/shows.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _TvShows = __webpack_require__(/*! ../components/TvShows */ \"./src/components/TvShows/index.js\");\n\nvar _TvShows2 = _interopRequireDefault(_TvShows);\n\nvar _TvShow = __webpack_require__(/*! ../components/TvShow */ \"./src/components/TvShow/index.js\");\n\nvar _TvShow2 = _interopRequireDefault(_TvShow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _TvShows2.default,\n  path: '/',\n  exact: true\n}, {\n  component: _TvShow2.default,\n  path: '/:name'\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });