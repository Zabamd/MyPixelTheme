/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/colorList.js":
/*!*****************************!*\
  !*** ./assets/colorList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultColors = [{
  color: "#BFD0DC",
  name: "Base",
  slug: "base"
}, {
  color: "#FF00FF",
  name: "Highlight",
  slug: "Highlight"
}, {
  color: "#8CB8D2",
  name: "Primary",
  slug: "primary"
}, {
  color: "#D9DDE1",
  name: "Secondary",
  slug: "secondary"
}, {
  color: "#283735",
  name: "Tertiary",
  slug: "tertiary"
}, {
  color: "#006181",
  name: "pagepackground",
  slug: "pagepackground"
}, {
  color: "#BFD0DCff",
  name: "grandtetonBase",
  slug: "grandtetonbase"
}, {
  color: "#006181ff",
  name: "grandtetonHighlight",
  slug: "grandtetonHighlight"
}, {
  color: "#949695ff",
  name: "grandtetonPrimary",
  slug: "grandtetonprimary"
}, {
  color: "#E2B096ff",
  name: "grandtetonSecondary",
  slug: "grandtetonsecondary"
}, {
  color: "#E3CABEff",
  name: "grandtetonTertiary",
  slug: "grandtetontertiary"
}, {
  color: "#949695",
  name: "grandtetonpagepackground",
  slug: "grandtetonpagepackground"
}, {
  color: "#8AAEC2ff",
  name: "YellowstoneBase",
  slug: "YellowstoneBase"
}, {
  color: "#517889ff",
  name: "YellowstoneHighlight",
  slug: "YellowstoneHighlight"
}, {
  color: "#64A5C5ff",
  name: "YellowstonePrimary",
  slug: "Yellowstoneprimary"
}, {
  color: "#E8E2E0ff",
  name: "YellowstoneSecondary",
  slug: "Yellowstonesecondary"
}, {
  color: "#244D42ff",
  name: "YellowstoneTertiary",
  slug: "Yellowstonetertiary"
}, {
  color: "#2B3F44",
  name: "Yellowstonepagepackground",
  slug: "Yellowstonepagepackground"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultColors);

/***/ }),

/***/ "./assets/style/contentsection.css":
/*!*****************************************!*\
  !*** ./assets/style/contentsection.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./assets/blocks/contentsection.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorList */ "./assets/colorList.js");
/* harmony import */ var _style_contentsection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/contentsection.css */ "./assets/style/contentsection.css");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





wp.blocks.registerBlockType("mypixeltheme/contentsection", {
  title: "Content Section",
  attributes: {
    background: {
      type: "string",
      default: "#BFD0DC"
    }
  },
  category: "my-pixel-theme",
  edit: editComponent,
  save: saveComponent
});
const allowedBlocks = ["core/heading", "core/paragraph", "core/list", "core/image", "core/group"];
const contentTemplate = [["core/columns", {}, [["core/column", {}, [["core/heading", {
  level: 1,
  placeholder: "Section heading",
  className: "contentSectionHeading"
}]]], ["core/column", {}, [["core/paragraph", {
  placeholder: "Section Paragraph",
  className: "contentSectionParagraph"
}]]]]]];
function editComponent(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sectionWrapper",
    style: {
      backgroundColor: `${props.attributes.background}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Color Picker",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    disableCustomColors: true,
    clearable: false,
    colors: _colorList__WEBPACK_IMPORTED_MODULE_1__["default"],
    value: props.attributes.background,
    onChange: colorCode => {
      props.setAttributes({
        background: colorCode
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    template: contentTemplate,
    allowedBlocks: allowedBlocks
  })));
}
function saveComponent(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sectionWrapper",
    style: {
      backgroundColor: `${props.attributes.background}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null)));
}
})();

/******/ })()
;
//# sourceMappingURL=contentsection.js.map