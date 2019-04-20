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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core/index.js\");\n/* harmony import */ var _helpers_getCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getCharts */ \"./src/helpers/getCharts.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"loadCss\"])(\"./css/style.css\", () => {\r\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"loadJson\"])(\"data/chart_data.json\", (chartsData) => {\r\n            const body = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"Dom\"].for('body').addClasses('night');\r\n\r\n            // Create main chart wrapper\r\n            const wrapMain = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"Dom\"].from(\"div\").addClasses(\"wrap-main\").pinTo(body);\r\n\r\n            chartsData.forEach(data => {\r\n                // Load chart data\r\n                const charts = Object(_helpers_getCharts__WEBPACK_IMPORTED_MODULE_1__[\"getCharts\"])(data);\r\n\r\n                // Create chart and pin to main wrapper\r\n                new _core__WEBPACK_IMPORTED_MODULE_0__[\"TChart\"](wrapMain, charts);\r\n            });\r\n\r\n            new _core__WEBPACK_IMPORTED_MODULE_0__[\"ThemeButton\"](body);\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/core/checkbox.js":
/*!******************************!*\
  !*** ./src/core/checkbox.js ***!
  \******************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkbox\", function() { return Checkbox; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nclass Checkbox {\r\n    constructor(parent, chart, onClicked) {\r\n\r\n        const check = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('i')\r\n            .setStyle('background-color', chart.color)\r\n            .setStyle('border-color', chart.color);\r\n\r\n        const box = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('li').addClasses('on')\r\n            .append(check)\r\n            .setText(chart.name)\r\n            .pinTo(parent);\r\n\r\n        box.addEventListener('click', this.onClick.bind(this, chart, onClicked), true);\r\n    }\r\n\r\n    onClick(chart, onClicked, e) {\r\n        let target = e.target;\r\n        if (target.tagName !== 'LI') {\r\n            while (target.tagName !== 'LI')\r\n                target = target.parentElement;\r\n        }\r\n        const box = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].of(target);\r\n\r\n        const checked = box.hasClass('on');\r\n        checked\r\n            ? box.removeClasses('on').addClasses('off')\r\n            : box.removeClasses('off').addClasses('on');\r\n\r\n        onClicked({ name: chart.name, checked: !checked});\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/core/checkbox.js?");

/***/ }),

/***/ "./src/core/control.js":
/*!*****************************!*\
  !*** ./src/core/control.js ***!
  \*****************************/
/*! exports provided: Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Control\", function() { return Control; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nclass Control {\r\n    constructor(parent, callback) {\r\n\r\n        this.WINDOW_MIN_WIDTH = 25;\r\n        this.WINDOW_BORDER_TOUCH_WIDTH = 10;\r\n\r\n        this.node = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from(\"div\").addClasses(\"control\");\r\n        this.overlayL = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from(\"div\").addClasses(\"overlay l\");\r\n        this.overlayR = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from(\"div\").addClasses(\"overlay r\");\r\n        this.window = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from(\"div\").addClasses(\"window\")\r\n            .addEventListener(\"touchstart\", _helpers__WEBPACK_IMPORTED_MODULE_0__[\"touchHandler\"], true)\r\n            .addEventListener(\"touchmove\", _helpers__WEBPACK_IMPORTED_MODULE_0__[\"touchHandler\"], true)\r\n            .addEventListener(\"touchend\", _helpers__WEBPACK_IMPORTED_MODULE_0__[\"touchHandler\"], true)\r\n            .addEventListener(\"mousedown\", this.onMouseDown.bind(this, callback), true);\r\n\r\n        this.node\r\n            .append(this.overlayL)\r\n            .append(this.window)\r\n            .append(this.overlayR)\r\n            .pinTo(parent);\r\n\r\n        return this;\r\n    }\r\n\r\n    onMouseDown (callback, event) {\r\n        event.preventDefault();\r\n\r\n        const controlRect = this.node.element.getBoundingClientRect();\r\n        const windowRect = this.window.element.getBoundingClientRect();\r\n        const overlayLRect = this.overlayL.element.getBoundingClientRect();\r\n        const overlayRRect = this.overlayR.element.getBoundingClientRect();\r\n\r\n        const shiftX = Math.round(event.pageX - windowRect.left);\r\n\r\n        const onMouseMove = e => {\r\n            e.preventDefault();\r\n\r\n            let min, max, cursor, left = 75, right = 100;\r\n            let value = Math.round(e.pageX - shiftX - controlRect.left);\r\n\r\n            if (shiftX > 0 && shiftX < this.WINDOW_BORDER_TOUCH_WIDTH) {\r\n\r\n                min = 0;\r\n                max = controlRect.width - overlayRRect.width - this.WINDOW_MIN_WIDTH;\r\n\r\n                cursor = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"limit\"])(value, min, max);\r\n\r\n                this.overlayL.setStyle(\"width\", cursor, \"px\");\r\n                this.window.setStyle(\"width\", controlRect.width - overlayRRect.width - cursor, \"px\");\r\n\r\n                left = Math.round(cursor / controlRect.width * 100) / 100;\r\n                right = Math.round((controlRect.width - overlayRRect.width) / controlRect.width * 100) / 100;\r\n            } else if (shiftX > windowRect.width - this.WINDOW_BORDER_TOUCH_WIDTH && shiftX < windowRect.width) {\r\n\r\n                min = overlayLRect.width + this.WINDOW_MIN_WIDTH;\r\n                max = controlRect.width;\r\n\r\n                cursor = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"limit\"])(value + windowRect.width, min, max);\r\n\r\n                this.overlayR.setStyle(\"width\", controlRect.width - cursor, \"px\");\r\n                this.window.setStyle(\"width\", cursor - overlayLRect.width, \"px\");\r\n\r\n                left = Math.round(overlayLRect.width / controlRect.width * 100) / 100;\r\n                right = Math.round(cursor / controlRect.width * 100) / 100;\r\n            } else {\r\n\r\n                min = 0;\r\n                max = controlRect.width - windowRect.width;\r\n\r\n                cursor = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"limit\"])(value, min, max);\r\n\r\n                this.overlayL.setStyle(\"width\", cursor, \"px\");\r\n                this.overlayR.setStyle(\"width\", controlRect.width - windowRect.width - cursor, \"px\");\r\n\r\n                left = Math.round(cursor / controlRect.width * 100) / 100;\r\n                right = Math.round((cursor + windowRect.width) / controlRect.width * 100) / 100;\r\n            }\r\n\r\n            callback(left, right);\r\n        };\r\n\r\n        const onMouseUp = e => {\r\n            e.preventDefault();\r\n\r\n            document.removeEventListener(\"mousemove\", onMouseMove, true);\r\n            document.removeEventListener(\"mouseup\", onMouseUp, true);\r\n        };\r\n\r\n        document.addEventListener(\"mousemove\", onMouseMove, true);\r\n        document.addEventListener(\"mouseup\", onMouseUp, true);\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/core/control.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: Control, Checkbox, ThemeButton, Tooltip, TChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ \"./src/core/control.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Control\", function() { return _control__WEBPACK_IMPORTED_MODULE_0__[\"Control\"]; });\n\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ \"./src/core/checkbox.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Checkbox\", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"]; });\n\n/* harmony import */ var _tchart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tchart */ \"./src/core/tchart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TChart\", function() { return _tchart__WEBPACK_IMPORTED_MODULE_2__[\"TChart\"]; });\n\n/* harmony import */ var _themeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themeButton */ \"./src/core/themeButton.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThemeButton\", function() { return _themeButton__WEBPACK_IMPORTED_MODULE_3__[\"ThemeButton\"]; });\n\n/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip */ \"./src/core/tooltip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_4__[\"Tooltip\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/core/tchart.js":
/*!****************************!*\
  !*** ./src/core/tchart.js ***!
  \****************************/
/*! exports provided: TChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TChart\", function() { return TChart; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ \"./src/models/index.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ \"./src/core/control.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ \"./src/core/checkbox.js\");\n/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip */ \"./src/core/tooltip.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass TChart {\r\n    constructor(parent, charts) {\r\n        this.parent = parent;\r\n\r\n        this.charts = charts;\r\n        this.minY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(this.charts.filter(c => c.visible).map(c => c.minY()));\r\n        this.maxY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(this.charts.filter(c => c.visible).map(c => c.maxY()));\r\n\r\n        this.segments = this.getSegment(0.75, 1);\r\n        this.segmentMinY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(this.segments.filter(s => s.visible).map(s => s.minY()));\r\n        this.segmentMaxY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(this.segments.filter(s => s.visible).map(s => s.maxY()));\r\n\r\n        this.createDom();\r\n        this.addEventListeners();\r\n        this.setContext();\r\n        this.drawSegment();\r\n        this.drawMinimap();\r\n    }\r\n\r\n    createDom() {\r\n        this.wrap = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from(\"div\").addClasses(\"wrap\");\r\n\r\n        this.title = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('h2').setText(`Chart ${0}`);\r\n\r\n        this.wrapChart = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('div').addClasses('wrap-chart');\r\n        this.canvasSegment = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('canvas').pinTo(this.wrapChart);\r\n\r\n        this.wrapControl = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('div').addClasses('wrap-control');\r\n        this.canvasControl = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('canvas').pinTo(this.wrapControl);\r\n        this.control = new _control__WEBPACK_IMPORTED_MODULE_2__[\"Control\"](this.wrapControl, this.onControlChange.bind(this));\r\n\r\n        this.wrapLegend = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('ul').addClasses('wrap-legend');\r\n        this.charts.forEach(chart => new _checkbox__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"](this.wrapLegend, chart, this.onCheckboxClick.bind(this)));\r\n\r\n        this.tooltip = new _tooltip__WEBPACK_IMPORTED_MODULE_4__[\"Tooltip\"](this.wrap, this.charts);\r\n\r\n        this.wrap.pinTo(this.parent)\r\n            .append(this.title)\r\n            .append(this.wrapChart)\r\n            .append(this.wrapControl)\r\n            .append(this.wrapLegend)\r\n    }\r\n\r\n    addEventListeners() {\r\n        this.wrapChart.addEventListener('mousemove', this.onMouseMove.bind(this), false);\r\n        this.wrapChart.addEventListener('mouseover', this.onMouseOver.bind(this), false);\r\n        this.wrapChart.addEventListener('mouseout', this.ontMouseOut.bind(this), false);\r\n        window.addEventListener('resize', this.onWindowResize.bind(this), false);\r\n    }\r\n\r\n    setContext() {\r\n        let {ctx, dpr} = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setupCanvas\"])(this.canvasSegment.element);\r\n        this.ctxChart = ctx;\r\n        this.dpr = dpr;\r\n        this.ctxChart.setTransform(dpr, 0, 0, -dpr, 0, this.ctxChart.canvas.height);\r\n\r\n        this.ctxControl = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setupCanvas\"])(this.canvasControl.element).ctx;\r\n        this.ctxControl.setTransform(dpr, 0, 0, -dpr, 0, this.ctxControl.canvas.height);\r\n    }\r\n\r\n    drawMinimap() {\r\n        this.ctxControl.clearRect(0, 0, this.ctxControl.canvas.width, this.ctxControl.canvas.height);\r\n        this.charts.forEach(chart =>\r\n            chart.visible ? chart.drawLine(this.ctxControl, this.minY, this.maxY, this.dpr) : null);\r\n    }\r\n\r\n    drawSegment() {\r\n        this.ctxChart.clearRect(0, 0, this.ctxChart.canvas.width, this.ctxChart.canvas.height);\r\n        this.segments.forEach(segment =>\r\n            segment.visible ? segment.drawLine(this.ctxChart, this.segmentMinY, this.segmentMaxY, this.dpr) : null);\r\n    }\r\n\r\n    getSegment(leftPct, rightPct) {\r\n\r\n        const copy = chart => {\r\n            const copyChart = Object.assign(new _models__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"](), chart);\r\n\r\n            const leftX = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"fraction\"])(copyChart.points.map(p => p.x), leftPct);\r\n            const rightX = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"fraction\"])(copyChart.points.map(p => p.x), rightPct);\r\n\r\n            copyChart.points = copyChart.points.filter(p => p.x >= leftX && p.x <= rightX);\r\n\r\n            return copyChart;\r\n        };\r\n\r\n        return this.charts.map(chart => copy(chart));\r\n    }\r\n\r\n    onCheckboxClick(checked) {\r\n        const chart = this.charts.filter(chart => chart.name === checked.name)[0];\r\n        chart.visible = checked.checked;\r\n        const segment = this.segments.filter(segment => segment.name === checked.name)[0];\r\n        segment.visible = checked.checked;\r\n\r\n        this.minY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(this.charts.filter(c => c.visible).map(c => c.minY()));\r\n        this.maxY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(this.charts.filter(c => c.visible).map(c => c.maxY()));\r\n        this.segmentMinY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(this.segments.filter(s => s.visible).map(s => s.minY()));\r\n        this.segmentMaxY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(this.segments.filter(s => s.visible).map(s => s.maxY()));\r\n\r\n        this.drawSegment();\r\n        this.drawMinimap();\r\n    }\r\n\r\n    onControlChange(left, right) {\r\n        this.segments = this.getSegment(left, right);\r\n        this.segmentMinY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(this.segments.filter(s => s.visible).map(s => s.minY()));\r\n        this.segmentMaxY = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(this.segments.filter(s => s.visible).map(s => s.maxY()));\r\n\r\n        this.drawSegment();\r\n        this.drawMinimap();\r\n    };\r\n\r\n    onMouseMove(e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        this.wrapChart.setStyle('cursor', 'crosshair');\r\n\r\n        this.ctxChart.clearRect(0, 0, this.ctxChart.canvas.width, this.ctxChart.canvas.height);\r\n        this.drawSegment();\r\n\r\n        const {left: wL, width: wW} = this.wrapChart.element.getBoundingClientRect();\r\n        const {width: tW} = this.tooltip.node().element.getBoundingClientRect();\r\n\r\n        const xAxis = this.segments[0].points.map(p => p.x);\r\n\r\n        const index = Math.ceil((e.pageX - wL) / wW * (xAxis.length - 1));\r\n        const x = this.segments[0].points[index].x;\r\n\r\n        const step = (x - xAxis[0]) / (xAxis[xAxis.length - 1] - xAxis[0]) * wW;\r\n\r\n        for (let i = 0; i < this.segments.length; i++) {\r\n            const segment = this.segments[i];\r\n            segment.drawCrosshair(this.ctxChart, x, this.segmentMinY, this.segmentMaxY, this.dpr);\r\n        }\r\n\r\n        this.tooltip.update(step, x);\r\n    };\r\n\r\n    onMouseOver(e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        this.tooltip.node().setStyle('opacity', 1);\r\n    }\r\n\r\n    ontMouseOut(e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        this.tooltip.node().setStyle('opacity', 0);\r\n\r\n        this.drawSegment();\r\n    }\r\n\r\n    onWindowResize() {\r\n        this.setContext();\r\n        this.drawMinimap();\r\n        this.drawSegment();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/core/tchart.js?");

/***/ }),

/***/ "./src/core/themeButton.js":
/*!*********************************!*\
  !*** ./src/core/themeButton.js ***!
  \*********************************/
/*! exports provided: ThemeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeButton\", function() { return ThemeButton; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nclass ThemeButton {\r\n    constructor(parent) {\r\n\r\n        this.button = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('a').addClasses('theme-switch')\r\n            .setText('Switch to Day Mode')\r\n            .pinTo(parent);\r\n\r\n        this.button.addEventListener('click', this.onClick.bind(this, parent), true);\r\n    }\r\n\r\n    onClick(parent) {\r\n        if (parent.hasClass('night')) {\r\n            parent.removeClasses('night').addClasses('day');\r\n            this.button.empty().setText('Switch to Night Mode');\r\n        } else {\r\n            parent.removeClasses('day').addClasses('night');\r\n            this.button.empty().setText('Switch to Day Mode')\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/core/themeButton.js?");

/***/ }),

/***/ "./src/core/tooltip.js":
/*!*****************************!*\
  !*** ./src/core/tooltip.js ***!
  \*****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nclass Tooltip {\r\n    constructor(parent, charts) {\r\n        this.charts = charts;\r\n\r\n        const x = charts[0].points.map(p => p.x)[0];\r\n\r\n        this._node = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('div').addClasses('tooltip')\r\n            .setStyle('left', 0, 'px')\r\n            .setStyle('opacity', 0)\r\n            .pinTo(parent);\r\n\r\n        this.dateNode = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('div').addClasses('date')\r\n            .setText(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"timestampToDate\"])(x))\r\n            .pinTo(this._node);\r\n\r\n        this.values = [];\r\n        this.charts.forEach(chart => {\r\n            const b = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('b').setText(chart.getY(x));\r\n\r\n            const span = _helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('span')\r\n                .append(b)\r\n                .setText(chart.name)\r\n                .setStyle('color', chart.color)\r\n                .pinTo(this._node);\r\n\r\n            this.values.push(span);\r\n        });\r\n\r\n        return this;\r\n    }\r\n\r\n    node() {\r\n        return this._node;\r\n    }\r\n\r\n    update(left, x) {\r\n        this.dateNode.empty().setText(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"timestampToDate\"])(x));\r\n\r\n        this.charts.forEach((chart, index) => {\r\n            const span = this.values[index];\r\n\r\n            span.empty()\r\n                .append(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"Dom\"].from('b').setText(chart.getY(x)))\r\n                .setText(chart.name);\r\n        });\r\n\r\n        this._node.setStyle('left', left, 'px');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/core/tooltip.js?");

/***/ }),

/***/ "./src/helpers/animate.js":
/*!********************************!*\
  !*** ./src/helpers/animate.js ***!
  \********************************/
/*! exports provided: animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return animate; });\nconst animate = options =>  {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / options.duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = options.timing(timeFraction);\r\n\r\n        options.drawLine(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\n\n//# sourceURL=webpack:///./src/helpers/animate.js?");

/***/ }),

/***/ "./src/helpers/array.js":
/*!******************************!*\
  !*** ./src/helpers/array.js ***!
  \******************************/
/*! exports provided: min, max, tail, head, fraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return min; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return max; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tail\", function() { return tail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fraction\", function() { return fraction; });\nconst min = array => Math.min.apply(null, array);\r\nconst max = array => Math.max.apply(null, array);\r\nconst tail = array => array.slice(1, array.length);\r\nconst head = array => array.slice(0, 1);\r\nconst first = array => array[0];\r\nconst last = array => array[array.length - 1];\r\nconst fraction = (array, percentage) => first(array) + (last(array) - first(array)) * percentage;\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers/array.js?");

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! exports provided: Dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dom\", function() { return Dom; });\nclass Dom {\r\n\r\n    static of(el) {\r\n        return new Dom(el);\r\n    }\r\n\r\n    static for(selector) {\r\n        return new Dom(document.querySelector(selector));\r\n    }\r\n\r\n    static from(tag) {\r\n        return new Dom(document.createElement(tag));\r\n    }\r\n\r\n    constructor(el) {\r\n        this._element = el;\r\n    }\r\n\r\n    get element() {\r\n        return this._element;\r\n    }\r\n\r\n    map(f) {\r\n        return Dom.of(f(this._element));\r\n    }\r\n\r\n    addClasses(...classes) {\r\n        return this.map(el => {\r\n            for (let cl of classes) {\r\n                if (typeof cl === 'string') {\r\n                    cl.split(' ').forEach(clazz => el.classList.add(clazz));\r\n                }\r\n            }\r\n            return el;\r\n        });\r\n    }\r\n\r\n    removeClasses(...classes) {\r\n        return this.map(el => {\r\n            for (let cl of classes) {\r\n                if (typeof cl === 'string') {\r\n                    cl.split(' ').forEach(clazz => el.classList.remove(clazz));\r\n                }\r\n            }\r\n            return el;\r\n        });\r\n    }\r\n\r\n    hasClass(clazz) {\r\n        let hasClass = null;\r\n        this.map(el => {\r\n            hasClass = el.classList.contains(clazz)\r\n        });\r\n        return hasClass;\r\n    }\r\n\r\n    setAttribute(name, value) {\r\n        return this.map(el => {\r\n            el.setAttribute(name, value);\r\n            return el;\r\n        });\r\n    }\r\n\r\n    removeAttributes(...attrs) {\r\n        return this.map(el => {\r\n            if (attrs.length) {\r\n                for (let attr of attrs) {\r\n                    el.removeAttribute(attr);\r\n                }\r\n            }\r\n            return el;\r\n        });\r\n    }\r\n\r\n    setStyle(prop, value, unit) {\r\n        return this.map(el => {\r\n            el.style.setProperty(prop, unit ? `${value}${unit}` : `${value}`);\r\n            return el;\r\n        })\r\n    }\r\n\r\n    forEach(fn) {\r\n        return this.map(el => {\r\n            [...el.children].forEach(fn);\r\n            return el;\r\n        });\r\n    }\r\n\r\n    setText(string) {\r\n        return this.map(el => {\r\n            if (string) {\r\n                el.appendChild(document.createTextNode(string));\r\n            }\r\n            return el;\r\n        });\r\n    }\r\n\r\n    pinTo(parent) {\r\n        return this.map(el => {\r\n           if (parent instanceof Dom) {\r\n               parent.element.appendChild(el);\r\n           } else {\r\n               parent.appendChild(el);\r\n           }\r\n           return el;\r\n        });\r\n    }\r\n\r\n    append(child) {\r\n        return this.map(el => {\r\n            if (child instanceof Dom) {\r\n                el.appendChild(child.element)\r\n            } else {\r\n                el.appendChild(child);\r\n            }\r\n            return el;\r\n        });\r\n    }\r\n\r\n    empty() {\r\n        return this.map(el => {\r\n            while (el.firstChild)\r\n                el.removeChild(el.firstChild);\r\n            return el;\r\n        });\r\n\r\n    }\r\n\r\n    addEventListener(event, handler, options) {\r\n        return this.map(el => {\r\n            el.addEventListener(event, handler, options);\r\n            return el;\r\n        })\r\n    }\r\n\r\n    removeEventListener(event, handler, options) {\r\n        return this.map(el => {\r\n            el.removeEventListener(event, handler, options);\r\n            return el;\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/helpers/dom.js?");

/***/ }),

/***/ "./src/helpers/exception.js":
/*!**********************************!*\
  !*** ./src/helpers/exception.js ***!
  \**********************************/
/*! exports provided: Exception */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exception\", function() { return Exception; });\nclass Exception {\r\n    constructor(message) {\r\n        this.message = message;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/helpers/exception.js?");

/***/ }),

/***/ "./src/helpers/func.js":
/*!*****************************!*\
  !*** ./src/helpers/func.js ***!
  \*****************************/
/*! exports provided: limit, relative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"limit\", function() { return limit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"relative\", function() { return relative; });\nconst limit = (value, min, max) => value < min ? min : value > max ? max : value;\r\nconst relative = (value, min, max) => (value - min) / (max - min);\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers/func.js?");

/***/ }),

/***/ "./src/helpers/getCharts.js":
/*!**********************************!*\
  !*** ./src/helpers/getCharts.js ***!
  \**********************************/
/*! exports provided: getCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCharts\", function() { return getCharts; });\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ \"./src/helpers/array.js\");\n/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exception */ \"./src/helpers/exception.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ \"./src/models/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction getXAxis(columns, types) {\r\n    for (let i = 0; i < columns.length; i++) {\r\n        const key = Object(_array__WEBPACK_IMPORTED_MODULE_0__[\"head\"])(columns[i]);\r\n        if (types[key] === 'x') {\r\n            return Object(_array__WEBPACK_IMPORTED_MODULE_0__[\"tail\"])(columns[i]);\r\n        }\r\n    }\r\n}\r\n\r\nfunction getCharts(data) {\r\n    // Validate input json data\r\n    if (\r\n        !data.hasOwnProperty('columns') ||\r\n        !data.hasOwnProperty('types') ||\r\n        !data.hasOwnProperty('names') ||\r\n        !data.hasOwnProperty('colors')\r\n    ) {\r\n        throw new _exception__WEBPACK_IMPORTED_MODULE_1__[\"Exception\"]('incorrect data')\r\n    }\r\n\r\n    const {columns, types, names, colors} = data;\r\n\r\n    const xAxis = getXAxis(columns, types);\r\n    const charts = [];\r\n\r\n    for (let i = 0; i < columns.length; i++) {\r\n\r\n        const key = Object(_array__WEBPACK_IMPORTED_MODULE_0__[\"head\"])(columns[i]);\r\n        const color = colors[key];\r\n        const name = names[key];\r\n\r\n        if (types[key] === 'line') {\r\n\r\n            const yAxis = Object(_array__WEBPACK_IMPORTED_MODULE_0__[\"tail\"])(columns[i]);\r\n\r\n            const points = [];\r\n\r\n            for (let j = 0; j < yAxis.length; j++) {\r\n\r\n                const x = xAxis[j];\r\n                const y = yAxis[j];\r\n\r\n                points.push(new _models__WEBPACK_IMPORTED_MODULE_2__[\"Point\"](x, y));\r\n            }\r\n\r\n            charts.push(new _models__WEBPACK_IMPORTED_MODULE_2__[\"Chart\"](points, color, name, true));\r\n        }\r\n    }\r\n\r\n    return charts;\r\n}\n\n//# sourceURL=webpack:///./src/helpers/getCharts.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: animate, min, max, tail, head, fraction, Dom, Exception, getCharts, limit, relative, loadCss, loadJson, raf, roundRange, setupCanvas, timestampToDate, touchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/helpers/animate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return _animate__WEBPACK_IMPORTED_MODULE_0__[\"animate\"]; });\n\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./src/helpers/array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"min\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"max\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tail\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"tail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"head\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fraction\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"fraction\"]; });\n\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/helpers/dom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dom\", function() { return _dom__WEBPACK_IMPORTED_MODULE_2__[\"Dom\"]; });\n\n/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception */ \"./src/helpers/exception.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Exception\", function() { return _exception__WEBPACK_IMPORTED_MODULE_3__[\"Exception\"]; });\n\n/* harmony import */ var _getCharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCharts */ \"./src/helpers/getCharts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCharts\", function() { return _getCharts__WEBPACK_IMPORTED_MODULE_4__[\"getCharts\"]; });\n\n/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func */ \"./src/helpers/func.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"limit\", function() { return _func__WEBPACK_IMPORTED_MODULE_5__[\"limit\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"relative\", function() { return _func__WEBPACK_IMPORTED_MODULE_5__[\"relative\"]; });\n\n/* harmony import */ var _loadCss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadCss */ \"./src/helpers/loadCss.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadCss\", function() { return _loadCss__WEBPACK_IMPORTED_MODULE_6__[\"loadCss\"]; });\n\n/* harmony import */ var _loadJson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadJson */ \"./src/helpers/loadJson.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadJson\", function() { return _loadJson__WEBPACK_IMPORTED_MODULE_7__[\"loadJson\"]; });\n\n/* harmony import */ var _raf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./raf */ \"./src/helpers/raf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"raf\", function() { return _raf__WEBPACK_IMPORTED_MODULE_8__[\"raf\"]; });\n\n/* harmony import */ var _roundRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./roundRange */ \"./src/helpers/roundRange.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"roundRange\", function() { return _roundRange__WEBPACK_IMPORTED_MODULE_9__[\"roundRange\"]; });\n\n/* harmony import */ var _setupCanvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setupCanvas */ \"./src/helpers/setupCanvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setupCanvas\", function() { return _setupCanvas__WEBPACK_IMPORTED_MODULE_10__[\"setupCanvas\"]; });\n\n/* harmony import */ var _timeutil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeutil */ \"./src/helpers/timeutil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timestampToDate\", function() { return _timeutil__WEBPACK_IMPORTED_MODULE_11__[\"timestampToDate\"]; });\n\n/* harmony import */ var _touchHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./touchHandler */ \"./src/helpers/touchHandler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"touchHandler\", function() { return _touchHandler__WEBPACK_IMPORTED_MODULE_12__[\"touchHandler\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/loadCss.js":
/*!********************************!*\
  !*** ./src/helpers/loadCss.js ***!
  \********************************/
/*! exports provided: loadCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadCss\", function() { return loadCss; });\nconst loadCss = (path, callback) => {\r\n    callback   = callback || function() {};\r\n\r\n    const css = document.createElement(\"link\");\r\n    css.type = \"text/css\";\r\n    css.rel = \"stylesheet\";\r\n    css.onload = css.onreadystatechange = function() {\r\n        callback();\r\n    };\r\n\r\n    css.href = path;\r\n    document.getElementsByTagName(\"head\")[0].appendChild(css);\r\n};\n\n//# sourceURL=webpack:///./src/helpers/loadCss.js?");

/***/ }),

/***/ "./src/helpers/loadJson.js":
/*!*********************************!*\
  !*** ./src/helpers/loadJson.js ***!
  \*********************************/
/*! exports provided: loadJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadJson\", function() { return loadJson; });\nconst loadJson = (path, success, error) => {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.onreadystatechange = function()\r\n    {\r\n        if (xhr.readyState === XMLHttpRequest.DONE) {\r\n            if (xhr.status === 200) {\r\n                if (success)\r\n                    success(JSON.parse(xhr.responseText));\r\n            } else {\r\n                if (error)\r\n                    error(xhr);\r\n            }\r\n        }\r\n    };\r\n    xhr.open(\"GET\", path, true);\r\n    xhr.send();\r\n};\n\n//# sourceURL=webpack:///./src/helpers/loadJson.js?");

/***/ }),

/***/ "./src/helpers/raf.js":
/*!****************************!*\
  !*** ./src/helpers/raf.js ***!
  \****************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raf\", function() { return raf; });\nconst raf = () => {\r\n    let lastTime = 0;\r\n    let currTime, timeToCall, id;\r\n    const vendors = ['ms', 'moz', 'webkit', 'o'];\r\n    for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\r\n        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];\r\n        window.cancelAnimationFrame =\r\n            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];\r\n    }\r\n    if (!window.requestAnimationFrame) {\r\n        window.requestAnimationFrame = callback => {\r\n            currTime = Date.now();\r\n            timeToCall = Math.max(0, 16 - (currTime - lastTime));\r\n            id = window.setTimeout(() => { callback(currTime + timeToCall); }, timeToCall);\r\n            lastTime = currTime + timeToCall;\r\n            return id;\r\n        };\r\n    }\r\n    if (!window.cancelAnimationFrame) {\r\n        window.cancelAnimationFrame = id => clearTimeout(id);\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/helpers/raf.js?");

/***/ }),

/***/ "./src/helpers/roundRange.js":
/*!***********************************!*\
  !*** ./src/helpers/roundRange.js ***!
  \***********************************/
/*! exports provided: roundRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roundRange\", function() { return roundRange; });\nfunction roundRange(y1, y2, cnt) {\r\n    const calc = function(d) {\r\n        const power = curPower * d;\r\n        const min = Math.floor(y1 / power) * power;\r\n        const max = min + cnt * Math.ceil((y2 - min) * scale / power) * power;\r\n\r\n        return {\r\n            good: max <= maxLevel && min >= minLevel,\r\n            yMin: Math.round(min),\r\n            yMax: Math.round(max),\r\n            yMinOrig: y1,\r\n            yMaxOrig: y2,\r\n        }\r\n    };\r\n\r\n    const scale = 1 / cnt;\r\n    const step = (y2 - y1) * scale;\r\n    let curPower = Math.max(Math.pow(10, Math.floor(Math.log10(step))), 1);\r\n    const minLevel = y1 - step * 0.5;\r\n    const maxLevel = y2 + step * 0.5;\r\n    let range;\r\n\r\n    while (true) {\r\n        range = calc(5);\r\n        if (range.good) break;\r\n        range = calc(2);\r\n        if (range.good) break;\r\n        range = calc(1);\r\n        if (range.good) break;\r\n        curPower *= 0.1;\r\n    }\r\n\r\n    return range;\r\n}\n\n//# sourceURL=webpack:///./src/helpers/roundRange.js?");

/***/ }),

/***/ "./src/helpers/setupCanvas.js":
/*!************************************!*\
  !*** ./src/helpers/setupCanvas.js ***!
  \************************************/
/*! exports provided: setupCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupCanvas\", function() { return setupCanvas; });\nfunction setupCanvas(canvas) {\r\n    const { width, height } = canvas.getBoundingClientRect();\r\n    const dpr = window.devicePixelRatio || 1;\r\n\r\n    canvas.width = width * dpr;\r\n    canvas.height = height * dpr;\r\n\r\n    const ctx = canvas.getContext('2d');\r\n    ctx.scale(dpr, dpr);\r\n\r\n    return { ctx: ctx, dpr: dpr };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/helpers/setupCanvas.js?");

/***/ }),

/***/ "./src/helpers/timeutil.js":
/*!*********************************!*\
  !*** ./src/helpers/timeutil.js ***!
  \*********************************/
/*! exports provided: timestampToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestampToDate\", function() { return timestampToDate; });\nconst timestampToDate = timestamp => {\r\n    const months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\r\n    const date = new Date(timestamp);\r\n\r\n    return `${months[date.getMonth()]} ${date.getDate()}`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers/timeutil.js?");

/***/ }),

/***/ "./src/helpers/touchHandler.js":
/*!*************************************!*\
  !*** ./src/helpers/touchHandler.js ***!
  \*************************************/
/*! exports provided: touchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"touchHandler\", function() { return touchHandler; });\nconst touchHandler = event => {\r\n    const touch = event.changedTouches[0];\r\n\r\n    const simulatedEvent = document.createEvent(\"MouseEvent\");\r\n    simulatedEvent.initMouseEvent({\r\n            touchstart: \"mousedown\",\r\n            touchmove: \"mousemove\",\r\n            touchend: \"mouseup\"\r\n        }[event.type],\r\n        true,\r\n        true,\r\n        window, 1,\r\n        touch.screenX,\r\n        touch.screenY,\r\n        touch.clientX,\r\n        touch.clientY,\r\n        false,\r\n        false,\r\n        false,\r\n        false,\r\n        0,\r\n        null);\r\n\r\n    touch.target.dispatchEvent(simulatedEvent);\r\n};\n\n//# sourceURL=webpack:///./src/helpers/touchHandler.js?");

/***/ }),

/***/ "./src/models/chart.js":
/*!*****************************!*\
  !*** ./src/models/chart.js ***!
  \*****************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return Chart; });\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/models/point.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\nclass Chart {\r\n    constructor(points, color, name, visible) {\r\n        this.points = points;\r\n        this.color = color;\r\n        this.name = name;\r\n        this.visible = visible;\r\n    };\r\n\r\n    minX() {\r\n        return _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"].minX(this.points);\r\n    }\r\n\r\n    maxX() {\r\n        return _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"].maxX(this.points);\r\n    }\r\n\r\n    minY() {\r\n        return _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"].minY(this.points);\r\n    }\r\n\r\n    maxY() {\r\n        return _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"].maxY(this.points);\r\n    }\r\n\r\n    getY(x) {\r\n        const points = this.points.filter(p => p.x === x);\r\n        return points.length > 0 ? points[0].y : NaN;\r\n    }\r\n\r\n    drawLine(ctx, minY, maxY, dpr) {\r\n\r\n        const points = this.points;\r\n        const minX = this.minX();\r\n        const maxX = this.maxX();\r\n\r\n        ctx.beginPath();\r\n\r\n        for (let i = 0; i < points.length - 1; i++) {\r\n\r\n            const p1 = points[i];\r\n            const p2 = points[i+1];\r\n\r\n            const x1 = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p1.x, minX, maxX) * ctx.canvas.width / dpr);\r\n            const x2 = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p2.x, minX, maxX) * ctx.canvas.width / dpr);\r\n            const y1 = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p1.y, minY, maxY) * ctx.canvas.height / dpr);\r\n            const y2 = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p2.y, minY, maxY) * ctx.canvas.height / dpr);\r\n\r\n            ctx.moveTo(x1, y1);\r\n            ctx.lineTo(x2, y2);\r\n        }\r\n\r\n        ctx.closePath();\r\n\r\n        ctx.strokeStyle = this.color;\r\n        ctx.lineCap = \"round\";\r\n        ctx.lineWidth = 2;\r\n        ctx.stroke();\r\n    }\r\n\r\n    drawCrosshair(ctx, x, minY, maxY, dpr) {\r\n        const minX = this.minX();\r\n        const maxX = this.maxX();\r\n\r\n        const p = this.points.filter(p => p.x === x)[0];\r\n\r\n        let lineX = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p.x, minX, maxX) * ctx.canvas.width / dpr);\r\n\r\n        ctx.beginPath();\r\n        ctx.moveTo(lineX, 0);\r\n        ctx.lineTo(lineX, ctx.canvas.height);\r\n        ctx.closePath();\r\n\r\n        ctx.strokeStyle = '#aaa';\r\n        ctx.lineWidth = 0.1;\r\n        ctx.stroke();\r\n\r\n        const arcX = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p.x, minX, maxX) * ctx.canvas.width / dpr);\r\n        const arcY = Math.round(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"relative\"])(p.y, minY, maxY) * ctx.canvas.height / dpr);\r\n\r\n        ctx.beginPath();\r\n        ctx.arc(arcX, arcY, 6, 0, 2 * Math.PI);\r\n        ctx.closePath();\r\n\r\n        ctx.fillStyle = '#242f3e';\r\n        ctx.fill();\r\n\r\n        ctx.strokeStyle = this.color;\r\n        ctx.lineWidth = 2;\r\n        ctx.stroke();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/chart.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: Point, Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/models/point.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"]; });\n\n/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ \"./src/models/chart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return _chart__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/models/point.js":
/*!*****************************!*\
  !*** ./src/models/point.js ***!
  \*****************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return Point; });\n/* harmony import */ var _helpers_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/array */ \"./src/helpers/array.js\");\n\r\n\r\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    };\r\n\r\n    static minX(points) {\r\n        return Object(_helpers_array__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(points.map(p => p.x));\r\n    }\r\n\r\n    static maxX(points) {\r\n        return Object(_helpers_array__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(points.map(p => p.x));\r\n    }\r\n\r\n    static minY(points) {\r\n        return Object(_helpers_array__WEBPACK_IMPORTED_MODULE_0__[\"min\"])(points.map(p => p.y));\r\n    }\r\n\r\n    static maxY(points) {\r\n        return Object(_helpers_array__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(points.map(p => p.y));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/point.js?");

/***/ })

/******/ });