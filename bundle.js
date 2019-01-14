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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dart.js":
/*!*********************!*\
  !*** ./src/dart.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
const Tile = __webpack_require__(/*! ./tile */ "./src/tile.js");

let PHI = (Math.sqrt(5) + 1)/2;

class Dart  {
    constructor(options) {
        this.x = 350;
        this.y = 300;
        this.angle = 126;
        this.color = "grey";
        this.size = 85;
        this.ctx = options.ctx;


    }



    draw(ctx) {
        
        let to_radians = Math.PI / 180;

        let size = this.size;
        let angle = this.angle;
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
   
        ctx.lineTo(this.x + size * Math.sin((36 + angle) * to_radians), 
            this.y - size * Math.cos((36 + angle) * to_radians));
        ctx.lineTo(this.x + size * Math.sin(angle * to_radians) / PHI, 
            this.y - size * Math.cos(angle * to_radians) / PHI);
        ctx.lineTo(this.x - size * Math.sin((36 - angle) * to_radians), 
            this.y - size * Math.cos((36 - angle) * to_radians));
       
        ctx.closePath();

        let center_x = (2 * this.x + size * Math.sin(angle * to_radians) / PHI) / 2;
        let center_y = (2 * this.y - size * Math.cos(angle * to_radians) / PHI) / 2;
      
        var grd = ctx.createRadialGradient(center_x, center_y, 2, center_x, center_y, 55 );
        grd.addColorStop(0, "white");
        grd.addColorStop(1, " #E1B8B2");
        ctx.fillStyle = grd;
        ctx.fill();


        ctx.lineWidth = 1;
        ctx.strokeStyle = "#35374C";
        ctx.stroke();
       
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Dart);

//prev pink: #F7CAC9


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
/* harmony import */ var _kite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kite */ "./src/kite.js");
/* harmony import */ var _dart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dart */ "./src/dart.js");

// import { putShape, onMouseMove, onMoveSelect, shapeFollow, onMouseUp } from './actions';


let canvas = document.getElementById('penrosy-canvas')
let ctx = canvas.getContext("2d");
let currentShape = [];

//Array of all tiles

const ALL_TILES = [];

function drawTiles() {
    ctx.clearRect(0, 0, 800, 800);
    ALL_TILES.forEach(tile => tile.draw(ctx))
}

//Place a kite when the create-kite button is clicked
//Add kite to shape array 

document.getElementById('create-kite').onclick = function(){addKite()}

function addKite() {
    const kite = new _kite__WEBPACK_IMPORTED_MODULE_0__["default"]();
    ALL_TILES.push(kite);
    currentShape[0] = kite;
}

//Place a dart when dart button clicked
document.getElementById('create-dart').onclick = function() { addDart() }

function addDart() {
    const dart = new _dart__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    ALL_TILES.push(dart);
    currentShape[0] = dart; 
}

//Clear canvas when clear canvas button is pushed 

document.getElementById('clear-canvas').onclick = function() { deleteTiles()}

function deleteTiles(){
    ALL_TILES.length = 0;
    // clearCanvas()
}


//Rotate tile when clicking on A or D

document.addEventListener("keydown", rotateShape);

function rotateShape(e) {

    e.stopPropagation();
    switch (e.keyCode) {
        case 37:
            currentShape[0].angle += 36;
            break;
        case 39:
            currentShape[0].angle -= 36;
            break;
        case 65:
            currentShape[0].angle += 36;
            break;
        case 68:
            currentShape[0].angle -= 36;
            break;

    }
}


//When you mousedown, go through shape array
//If mousedown was on shape, set shape's selected and dragging attributes to true

 canvas.addEventListener('mousedown', onMouseDown);

// function onMouseDown(e)
//     e.stopPropagation(); //so it doesn't bubble up

function clearCanvas() {
    ctx.clearRect(0, 0, 800, 800)
}    

function animate() {
    clearCanvas()
    drawTiles();
    // button.addEventListener("click", clearCanvas);
    requestAnimationFrame(animate);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kite.js */ "./src/kite.js");
/* harmony import */ var _dart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dart.js */ "./src/dart.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");




document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("penrosy-canvas");

    const ctx = canvas.getContext("2d");
    Object(_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    // const game = new Game(ctx);
    // const kite = new Kite(ctx);
    // kite#b3002a.draw(ctx);

    // const dart = new Dart(ctx);
    // dart.draw(ctx);
});



/***/ }),

/***/ "./src/kite.js":
/*!*********************!*\
  !*** ./src/kite.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (23:78)\nYou may need an appropriate loader to handle this file type.\n| \n|     centerX() {\n>        return (2 * this.x + this.size * Math.sin(this.angle * to_radians)) / 2);\n|     }\n| ");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// class Tile {
//     constructor(options)

//     this.x = options.x;
//     this.angle = options.angle;
//     this.color = options.color
//     this.selected = false;

// }

// canvas.onmousedown = myDown;
// canvas.onmouseup = myUp;
// canvas.onmousemove = myMove;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map