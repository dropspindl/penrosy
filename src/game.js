
// import { putShape, onMouseMove, onMoveSelect, shapeFollow, onMouseUp } from './actions';
import Kite from './kite';
import Dart from './dart';
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
    const kite = new Kite();
    ALL_TILES.push(kite);
    currentShape[0] = kite;
}

//Place a dart when dart button clicked
document.getElementById('create-dart').onclick = function() { addDart() }

function addDart() {
    const dart = new Dart(ctx);
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

export default function animate() {
    clearCanvas()
    drawTiles();
    // button.addEventListener("click", clearCanvas);
    requestAnimationFrame(animate);
}

