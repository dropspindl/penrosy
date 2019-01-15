// import Kite from "./kite";
// import Dart from "./dart";
// import {currentTile, ALL_TILES} from './game';

// let canvas = document.getElementById("penrosy-canvas");
// let ctx = canvas.getContext("2d");

// //Place a kite when the create-kite button is clicked
// //Add kite to shape array 

// document.getElementById('create-kite').onclick = function () { addKite() }

// function addKite() {
//     const kite = new Kite();
//     ALL_TILES.push(kite);
//     currentTile[0] = kite;
// }

// //Place a dart when dart button clicked
// document.getElementById('create-dart').onclick = function () { addDart() }

// function addDart() {
//     const dart = new Dart(ctx);
//     ALL_TILES.push(dart);
//     currentTile[0] = dart;
// }

// //Clear canvas when clear canvas button is pushed 

// document.getElementById('clear-canvas').onclick = function () { deleteTiles() }

// function deleteTiles() {
//     ALL_TILES.length = 0;
//     currentTile.length = 0;
//     draggingTile.length = 0;
// }

// //Clear current selected tile
// document.getElementById('clear-current').onclick = function () { deleteCurrent() }

// function deleteCurrent() {
//     let index = ALL_TILES.indexOf(currentTile[0]); //Find the index of the current tile

//     if (index !== -1) {
//         ALL_TILES.splice(index, 1);
//     }

//     currentTile[0] = null;
// }

