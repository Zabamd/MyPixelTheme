/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./assets/css/banner.css":
      /*!*******************************!*\
  !*** ./assets/css/banner.css ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "@wordpress/element":
      /*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
      /***/ (module) => {
        module.exports = window["wp"]["element"];

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!***********************************!*\
  !*** ./assets/patterns/banner.js ***!
  \***********************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
    /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var _css_banner_css__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ../css/banner.css */ "./assets/css/banner.css");

    wp.blocks.registerBlockType("mypixeltheme/banner", {
      title: "Banner",
      edit: editComponent,
      save: saveComponent,
    });
    function editComponent() {
      return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          className: "page-banner",
        },
        (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            className: "page-banner",
            style: {
              backgroundImage:
                "url('/wp-content/themes/MyPixelTheme/assets/img/banner.jpg')",
            },
          },
          (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h1",
            {
              className: "headline",
            },
            "Aloha!"
          ),
          (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h2",
            {
              className: "sub-headline",
            },
            "Welcome to paradise"
          ),
          (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "a",
            {
              href: "#",
              className: "btn btn--large btn--blue",
            },
            "Click Me!"
          )
        )
      );
    }
    function saveComponent() {
      return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        null,
        "This is from our block."
      );
    }
  })();

  /******/
})();
//# sourceMappingURL=banner.js.map
