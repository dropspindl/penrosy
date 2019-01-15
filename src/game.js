import Kite from './kite';
import Dart from './dart';
let canvas = document.getElementById('penrosy-canvas')
let ctx = canvas.getContext("2d");

let currentTile = [];
let draggingTile = [];
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
    currentTile[0] = kite;
}

//Place a dart when dart button clicked
document.getElementById('create-dart').onclick = function() { addDart() }

function addDart() {
    const dart = new Dart(ctx);
    ALL_TILES.push(dart);
    currentTile[0] = dart; 
}

//Clear canvas when clear canvas button is pushed 

document.getElementById('clear-canvas').onclick = function() { deleteTiles()}

function deleteTiles(){
    ALL_TILES.length = 0;
}

//Clear current selected tile
document.getElementById('clear-current').onclick = function () { deleteCurrent() }

function deleteCurrent() {
    let index = ALL_TILES.indexOf(currentTile[0]); //Find the index of the current tile

    if (index !== -1) {
        ALL_TILES.splice(index, 1);
    }
}

// //Place a dart when dart button clicked
// document.getElementById('create-dart').onclick = function () { addDart() }

// function addDart() {
//     const dart = new Dart(ctx);
//     ALL_TILES.push(dart);
//     currentTile[0] = dart;
// }



//Rotate tile when clicking on A or D

document.addEventListener("keydown", rotateShape);

function rotateShape(e) {

    e.stopPropagation();
    switch (e.keyCode) {
        case 37:
            currentTile[0].angle += 36;
            break;
        case 39:
            currentTile[0].angle -= 36;
            break;
        case 65:
            currentTile[0].angle += 36;
            break;
        case 68:
            currentTile[0].angle -= 36;
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
    const pos = getMousePos(e)
    ALL_TILES.forEach(tile => {
       
        if (distance(pos.x, pos.y, tile.centerX(), tile.centerY()) < 50 ) {
            
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




function clearCanvas() {
    ctx.clearRect(0, 0, 890, 620)
}    

export default function animate() {
    clearCanvas()
    drawTiles();
    // button.addEventListener("click", clearCanvas);
    requestAnimationFrame(animate);
}

