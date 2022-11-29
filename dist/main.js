/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createContact() {

    let thirdContainer = document.createElement("div")
    thirdContainer.classList.add("third")

    let addressHeader = document.createElement("h5")
    let address = document.createElement("p")

    let numberHeader = document.createElement("h5")
    let number = document.createElement("h5")

    let northPole = document.createElement("img")
    northPole.classList.add("northPole")

    addressHeader.textContent = "Address:"
    address.textContent = "The North Pole"
    numberHeader.textContent = "Number:"
    number.textContent = " 111-111-1111"
    northPole.src = "/src/menuPics/northPole.jpg"



    thirdContainer.appendChild(addressHeader)
    thirdContainer.appendChild(address)
    thirdContainer.appendChild(numberHeader)
    thirdContainer.appendChild(number)
    thirdContainer.appendChild(northPole)



    return thirdContainer
}

function loadContact() {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createContact());

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// export {homeModule}


function createHome() {

    let firstContainer = document.createElement("div")
    firstContainer.classList.add("first")
    
    let p1 = document.createElement("p")
    p1.textContent = "Pizza fit for the king"

    let p2 = document.createElement("p")
    p2.textContent = "Family made since 1954"


    const img = document.createElement("img")
    img.src = "/src/menuPics/elvis_eating.jpeg"
    img.classList.add("elvis")

    let p3 = document.createElement("p")
    p3.textContent = "Order online or stop by today!"


    firstContainer.appendChild(p1)
    firstContainer.appendChild(p2)
    firstContainer.appendChild(img)
    firstContainer.appendChild(p3)


    return firstContainer

}

function loadHome () {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initWebsite": () => (/* binding */ initWebsite)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
///Imports






function createHeader() {

    let headerContainer = document.createElement("div")
    let headerTitle = document.createElement("p")
    let topRow = document.createElement("nav")



    headerContainer.classList.add("headerContainer")

    headerTitle.classList.add("title")
    headerTitle.textContent = "Pepperonis"
    topRow.classList.add("topRow")

    let headerName = ["Home", "Menu", "Contact"]
    let headerID = ["coverHome", "coverMenu", "coverContact"]

    for (let i = 0; i < headerName.length; i++) {
        let header = document.createElement("button")
        header.classList.add("header")
        header.setAttribute("id",headerID[i])
        header.textContent = headerName[i]
        topRow.appendChild(header)
    }

    //APPNEDING DIVS
    headerContainer.appendChild(headerTitle)
    headerContainer.appendChild(topRow)
    
    return headerContainer
}


function createMain() {
    let main = document.createElement("div")
    main.classList.add("main")
    main.setAttribute("id", "main");

    return main

}
function createFooter() {

    let footer = document.createElement("div")
    footer.classList.add("footer")
    footer.setAttribute("id", "footer");
    footer.textContent ="Copyright © 2022 scChange2023"

    return footer
}

function initWebsite() {
    let content = document.getElementById('content')
    content.appendChild(createHeader())
    content.appendChild(createMain());
    content.appendChild(createFooter());
    (0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])()
}








/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {

    let secondContainer = document.createElement("div")
    secondContainer.classList.add("second")
    
    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza1.jpg", "Cheese", "Tomato sauce, Mozarella,\
     Tomato, Homemade sausage, Garlic, Basil"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza2.png", "Ham", "White cheese, Ham,\
     Red pepper, olives"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza3.png", "Tomato", "Banana Pepper, Tomato, Mushrooms, Spinach"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza4.png", "Pepperoni", "Jalapeneos, Pepperoni"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza5.png", "White", "Olives, Spinach, Medium Crust"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza7.png", "Basil", "White, Tomato"))

    return secondContainer
}


function createMenuItem(imageSource, name, description) {

    let menuItem = document.createElement("div")
    let itemPic = document.createElement("img")
    let itemName = document.createElement("h2")
    let itemDescription = document.createElement("p")

    itemPic.src = imageSource
    itemName.textContent = name
    itemDescription.textContent = description

    menuItem.classList.add("menuItem")
    itemPic.classList.add("menuPic")

    menuItem.appendChild(itemPic)
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDescription)

    return menuItem

}

function loadMenu() {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createMenu());
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./src/load.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







//Initialzie Website - Home
(0,_load__WEBPACK_IMPORTED_MODULE_0__.initWebsite)()


let homeButton = document.querySelector("#coverHome")
let menuButton = document.querySelector("#coverMenu")
let contactButton = document.querySelector("#coverContact")


//Make Home Button Active

homeButton.classList.add("active")


//EventListener to header button select



homeButton.addEventListener("click", function() {
    ;(0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])()
    homeButton.classList.add("active")
    menuButton.classList.remove("active")
    contactButton.classList.remove("active")
})

menuButton.addEventListener("click", () => {
    
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    menuButton.classList.add("active")
    homeButton.classList.remove("active")
    contactButton.classList.remove("active")

})

contactButton.addEventListener("click", () => {
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
    contactButton.classList.add("active")
    menuButton.classList.remove("active")
    homeButton.classList.remove("active")
    
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZixXQUFXOzs7QUFHWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUN4Q3ZCOzs7QUFHaUM7Ozs7QUFJakM7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlOzs7Ozs7VUNyRGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMa0M7QUFDRDtBQUNKO0FBQ007OztBQUduQztBQUNBLGtEQUFXOzs7QUFHWDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTs7OztBQUlBO0FBQ0EsSUFBSSxzREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBLElBQUkscURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL2MvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG5cbiAgICBsZXQgdGhpcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRoaXJkXCIpXG5cbiAgICBsZXQgYWRkcmVzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICAgIGxldCBudW1iZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcbiAgICBsZXQgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG5cbiAgICBsZXQgbm9ydGhQb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIG5vcnRoUG9sZS5jbGFzc0xpc3QuYWRkKFwibm9ydGhQb2xlXCIpXG5cbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOlwiXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiVGhlIE5vcnRoIFBvbGVcIlxuICAgIG51bWJlckhlYWRlci50ZXh0Q29udGVudCA9IFwiTnVtYmVyOlwiXG4gICAgbnVtYmVyLnRleHRDb250ZW50ID0gXCIgMTExLTExMS0xMTExXCJcbiAgICBub3J0aFBvbGUuc3JjID0gXCIvc3JjL21lbnVQaWNzL25vcnRoUG9sZS5qcGdcIlxuXG5cblxuICAgIHRoaXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkZXIpXG4gICAgdGhpcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgICB0aGlyZENvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJIZWFkZXIpXG4gICAgdGhpcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyKVxuICAgIHRoaXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vcnRoUG9sZSlcblxuXG5cbiAgICByZXR1cm4gdGhpcmRDb250YWluZXJcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3QiLCJcbi8vIGV4cG9ydCB7aG9tZU1vZHVsZX1cblxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuXG4gICAgbGV0IGZpcnN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZpcnN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaXJzdFwiKVxuICAgIFxuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlBpenphIGZpdCBmb3IgdGhlIGtpbmdcIlxuXG4gICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiRmFtaWx5IG1hZGUgc2luY2UgMTk1NFwiXG5cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWcuc3JjID0gXCIvc3JjL21lbnVQaWNzL2VsdmlzX2VhdGluZy5qcGVnXCJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImVsdmlzXCIpXG5cbiAgICBsZXQgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAzLnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3Igc3RvcCBieSB0b2RheSFcIlxuXG5cbiAgICBmaXJzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwMSlcbiAgICBmaXJzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwMilcbiAgICBmaXJzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG4gICAgZmlyc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocDMpXG5cblxuICAgIHJldHVybiBmaXJzdENvbnRhaW5lclxuXG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiLy8vSW1wb3J0c1xuXG5cbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWVQYWdlJ1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXG4gICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGxldCB0b3BSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG5cblxuXG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJDb250YWluZXJcIilcblxuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJQZXBwZXJvbmlzXCJcbiAgICB0b3BSb3cuY2xhc3NMaXN0LmFkZChcInRvcFJvd1wiKVxuXG4gICAgbGV0IGhlYWRlck5hbWUgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl1cbiAgICBsZXQgaGVhZGVySUQgPSBbXCJjb3ZlckhvbWVcIiwgXCJjb3Zlck1lbnVcIiwgXCJjb3ZlckNvbnRhY3RcIl1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVyTmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIixoZWFkZXJJRFtpXSlcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyTmFtZVtpXVxuICAgICAgICB0b3BSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIH1cblxuICAgIC8vQVBQTkVESU5HIERJVlNcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFJvdylcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgICByZXR1cm4gbWFpblxuXG59XG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9XCJDb3B5cmlnaHQgwqkgMjAyMiBzY0NoYW5nZTIwMjNcIlxuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgbG9hZEhvbWUoKVxufVxuXG5cblxuXG5cblxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcblxuICAgIGxldCBzZWNvbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc2Vjb25kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRcIilcbiAgICBcbiAgICBzZWNvbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCIvc3JjL21lbnVQaWNzL3BpenphMS5qcGdcIiwgXCJDaGVlc2VcIiwgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSxcXFxuICAgICBUb21hdG8sIEhvbWVtYWRlIHNhdXNhZ2UsIEdhcmxpYywgQmFzaWxcIikpXG5cbiAgICBzZWNvbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCIvc3JjL21lbnVQaWNzL3BpenphMi5wbmdcIiwgXCJIYW1cIiwgXCJXaGl0ZSBjaGVlc2UsIEhhbSxcXFxuICAgICBSZWQgcGVwcGVyLCBvbGl2ZXNcIikpXG5cbiAgICBzZWNvbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCIvc3JjL21lbnVQaWNzL3BpenphMy5wbmdcIiwgXCJUb21hdG9cIiwgXCJCYW5hbmEgUGVwcGVyLCBUb21hdG8sIE11c2hyb29tcywgU3BpbmFjaFwiKSlcblxuICAgIHNlY29uZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIi9zcmMvbWVudVBpY3MvcGl6emE0LnBuZ1wiLCBcIlBlcHBlcm9uaVwiLCBcIkphbGFwZW5lb3MsIFBlcHBlcm9uaVwiKSlcblxuICAgIHNlY29uZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIi9zcmMvbWVudVBpY3MvcGl6emE1LnBuZ1wiLCBcIldoaXRlXCIsIFwiT2xpdmVzLCBTcGluYWNoLCBNZWRpdW0gQ3J1c3RcIikpXG5cbiAgICBzZWNvbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCIvc3JjL21lbnVQaWNzL3BpenphNy5wbmdcIiwgXCJCYXNpbFwiLCBcIldoaXRlLCBUb21hdG9cIikpXG5cbiAgICByZXR1cm4gc2Vjb25kQ29udGFpbmVyXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1hZ2VTb3VyY2UsIG5hbWUsIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbGV0IGl0ZW1QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgICBpdGVtUGljLnNyYyA9IGltYWdlU291cmNlXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cblxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKVxuICAgIGl0ZW1QaWMuY2xhc3NMaXN0LmFkZChcIm1lbnVQaWNcIilcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QaWMpXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtXG5cbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQge2luaXRXZWJzaXRlfSBmcm9tICcuL2xvYWQnXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lUGFnZSdcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xuXG5cbi8vSW5pdGlhbHppZSBXZWJzaXRlIC0gSG9tZVxuaW5pdFdlYnNpdGUoKVxuXG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3ZlckhvbWVcIilcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3Zlck1lbnVcIilcbmxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3ZlckNvbnRhY3RcIilcblxuXG4vL01ha2UgSG9tZSBCdXR0b24gQWN0aXZlXG5cbmhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuXG5cbi8vRXZlbnRMaXN0ZW5lciB0byBoZWFkZXIgYnV0dG9uIHNlbGVjdFxuXG5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbG9hZEhvbWUoKVxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSlcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFxuICAgIGxvYWRNZW51KClcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblxufSlcblxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRDb250YWN0KClcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9