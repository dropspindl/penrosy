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


let PHI = (Math.sqrt(5) + 1)/2;
let to_radians = Math.PI / 180;
let colors = ["#ecadb6", "#cc0030", "#566f56"];

class Dart  {
    constructor(options) {
        this.x = 200;
        this.y = 180;
        this.angle = 0;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = 70;
    }

    centerX() {
        return (2 * this.x + this.size * Math.sin(this.angle * to_radians) / PHI) / 2; 
    }

    centerY(){
        return (2 * this.y - (this.size * Math.cos(this.angle * to_radians)) / PHI) / 2;
    }

    xGivenCenter(center) {
        return (2 * PHI * center - this.size * Math.sin(this.angle * to_radians)) / (2 * PHI);
    }

    yGivenCenter(center) {
        return (2 * PHI * center + this.size * Math.cos(this.angle * to_radians)) / (2 * PHI);
    }


    draw(ctx) {   

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
      
        var grd = ctx.createRadialGradient(this.centerX(), this.centerY(), 2, this.centerX(), this.centerY(), 45 );
        grd.addColorStop(0, "white");
        grd.addColorStop(1, this.color);
        ctx.fillStyle = grd;
        ctx.fill();


        ctx.lineWidth = 2;
        // ctx.strokeStyle = "#35374C";
        ctx.strokeStyle = "#82e3e3";
        ctx.stroke();
       
    }


    highlight(ctx) {

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

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#2a2abb";
        ctx.stroke();

    }

    // addCircles(ctx) {
    //     var centerX = this.x;
    //     var centerY = this.y;
    //     var radius = 3;

    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //     ctx.fillStyle = 'blue';
    //     ctx.fill();

    //     var centerX = this.x + (this.size * Math.sin(this.angle * to_radians)) / PHI;
    //     var centerY = this.y - (this.size * Math.cos(this.angle * to_radians)) / PHI;
    //     // var radius = 3;

    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //     ctx.fillStyle = 'blue';
    //     ctx.fill();
       
    // }
}

/* harmony default export */ __webpack_exports__["default"] = (Dart);

//prev pink: #F7CAC9


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: currentTile, ALL_TILES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTile", function() { return currentTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_TILES", function() { return ALL_TILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
/* harmony import */ var _kite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kite */ "./src/kite.js");
/* harmony import */ var _dart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dart */ "./src/dart.js");


let canvas = document.getElementById('penrosy-canvas')
let ctx = canvas.getContext("2d");
let circles = false;

const currentTile = [];
let draggingTile = [];
const ALL_TILES = [];

function drawTiles() {
    ctx.clearRect(0, 0, 1250, 900);
    ALL_TILES.forEach(tile => tile.draw(ctx))
    // console.log("ahahah");
}

//Place a kite when the create-kite button is clicked
//Add kite to shape array 


document.getElementById("create-kite").onclick = () => {
    const kite = new _kite__WEBPACK_IMPORTED_MODULE_0__["default"]();
    ALL_TILES.push(kite);
    currentTile[0] = kite;
};


//Place a dart when dart button clicked
document.getElementById('create-dart').onclick = () => {
    const dart = new _dart__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    ALL_TILES.push(dart);
    currentTile[0] = dart;
}

//Clear canvas when clear canvas button is pushed 

document.getElementById('clear-canvas').onclick = () => { 
    ALL_TILES.length = 0;
    currentTile.length = 0;
    draggingTile.length = 0;
}


//Clear current selected tile
document.getElementById('clear-current').onclick = function () { deleteCurrent() }

function deleteCurrent() {
    let index = ALL_TILES.indexOf(currentTile[0]); //Find the index of the current tile

    if (index !== -1) {
        ALL_TILES.splice(index, 1);
    }

    currentTile[0] = null;
}

// document.getElementById("marker-circles").onclick = function() {
//   addCircles();
// };

// function addCircles() {
//     circles = true;
//   })
// }

// function drawCircles() {
//    ALL_TILES.forEach( tile => tile.addCircles(ctx))
// }





//Rotate tile when clicking on A or D

document.addEventListener("keydown", rotateShape);

function rotateShape(e) {

    e.stopPropagation();
    switch (e.keyCode) {
        case 37:
            currentTile[0].angle -= 36;
            break;
        case 39:
            currentTile[0].angle += 36;
            break;
        case 65:
            currentTile[0].angle -= 36;
            break;
        case 68:
            currentTile[0].angle += 36;
            break;
    }
}


//When you mousedown, go through shape array
//If mousedown was on shape, set shape's selected and dragging attributes to true

canvas.addEventListener('mousedown', onMouseDown);

function distance(mx, my, x, y){
    let xDist = mx - x;
    let yDist = my - y;
    return Math.sqrt((xDist * xDist) + (yDist * yDist))
}

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY-rect.top 
    };
}

function onMouseDown(e){
    console.log(currentTile);
    const pos = getMousePos(e)
    ALL_TILES.forEach(tile => {
       
        if (distance(pos.x, pos.y, tile.centerX(), tile.centerY()) < 30 ) {      
            currentTile[0] = tile;
            draggingTile[0] = tile;
            document.addEventListener('mousemove', onMouseMove);
        }
    })
}




function onMouseMove(e) {
    const mouse = getMousePos(e);
    let tile = draggingTile[0];

    //xGivenCenter is written for each class, and is an equation that finds x given the center
    //This is done so the mouse stays in the center of the tile rather than a corner
    tile.x = tile.xGivenCenter(mouse.x) 
    tile.y = tile.yGivenCenter(mouse.y)
}

canvas.addEventListener('mouseup', onMouseUp);
    
function onMouseUp(e) {
    document.removeEventListener('mousemove', onMouseMove);
}

// ------ANIMATE FUNCTIONS ------

function highlightSelected() {
    if (currentTile[0]) {
        currentTile[0].highlight(ctx)
    }
}

function clearCanvas() {
    var rect = canvas.getBoundingClientRect();
    // ctx.clearRect(rect.left, rect.top, rect.right, rect.bottom)
    ctx.clearRect(10, 10, 100, 100)
}    

function animate() {
    // clearCanvas();
    drawTiles();
    highlightSelected();
    // if (circles === true) {drawCircles()}
    
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




let modal = document.getElementById("about");
let penrosy = document.getElementById('bod');

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("penrosy-canvas");
    const ctx = canvas.getContext("2d");

    Object(_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    document.getElementById("learn").addEventListener("click", openModal);
    penrosy.addEventListener("click", closeModal);

    // const dart = new Dart(ctx);
    // dart.draw(ctx);
});


const openModal = function(e) {  
    e.stopPropagation();

    modal.style.display = "block";
    penrosy.classList.add("hiding");

    penrosy.addEventListener("click", closeModal);
    // penrosy.id = 'hiding';
}

const closeModal = function(e) {
    e.stopPropagation();

    modal.style.display = "none";
    penrosy.className = penrosy.className.replace(/\bhiding\b/g, "");

    penrosy.removeEventListener("click", closeModal);
    // penrosy.id = 'not';

}


/***/ }),

/***/ "./src/kite.js":
/*!*********************!*\
  !*** ./src/kite.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

let to_radians = Math.PI / 180;
let colors = ["#ecadb6", "#cc0030", "#566f56"];


class Kite  {
    constructor(options) {
        this.x = 200;
        this.y = 95;
        this.angle = 0;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = 70;
    }

    centerX() {
       return ((2 * this.x + this.size * Math.sin(this.angle * to_radians)) / 2);
    }

    centerY() {
       return ((2 * this.y - this.size * Math.cos(this.angle * to_radians)) / 2);
    }

    xGivenCenter(center) {
       return  (2 * center - this.size * Math.sin(this.angle * to_radians)) / 2;
    }

    yGivenCenter(center) {
        return (2 * center + this.size * Math.cos(this.angle * to_radians))/2
    }


    draw(ctx) {
  
        let size = this.size;
        let angle = this.angle;
        
        
        ctx.beginPath();
           
        //create kite shape 
       
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + size * Math.sin((36 + angle) * to_radians), 
            this.y - size * Math.cos((36 + angle) * to_radians));
        ctx.lineTo(this.x + size * Math.sin(angle * to_radians), 
            this.y - size * Math.cos(angle * to_radians));
        ctx.lineTo(this.x - size * Math.sin((36 - angle) * to_radians), 
            this.y - size * Math.cos((36 - angle) * to_radians));
        ctx.closePath();

       
        var grd = ctx.createRadialGradient(this.centerX(), this.centerY(), 1, this.centerX(), this.centerY(), 55);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, this.color);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#82e3e3";
        ctx.stroke();
        // ctx.fillStyle = this.color;
        // ctx.fill();
    }

    highlight(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size * Math.sin((36 + this.angle) * to_radians),
            this.y - this.size * Math.cos((36 + this.angle) * to_radians));
        ctx.lineTo(this.x + this.size * Math.sin(this.angle * to_radians),
            this.y - this.size * Math.cos(this.angle * to_radians));
        ctx.lineTo(this.x - this.size * Math.sin((36 - this.angle) * to_radians),
            this.y - this.size * Math.cos((36 - this.angle) * to_radians));
        ctx.closePath();


        ctx.lineWidth = 2;
        ctx.strokeStyle = "#2a2abb";
        ctx.stroke();
    }

}




/* harmony default export */ __webpack_exports__["default"] = (Kite);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map