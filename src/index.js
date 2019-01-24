import Kite from './kite.js'
import Dart from './dart.js';
import animate from './game.js'

let modal = document.getElementById("about");
let penrosy = document.getElementById('penrosy-container');

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("penrosy-canvas");
    const ctx = canvas.getContext("2d");

    animate();

    document.getElementById("learn").addEventListener("click", openModal);
    penrosy.addEventListener("click", closeModal);

    // const dart = new Dart(ctx);
    // dart.draw(ctx);
});


const openModal = function(e) {
   
    e.stopPropagation();
    console.log("it should open")
    modal.style.display = "block";
    penrosy.addEventListener("click", closeModal);

}

const closeModal = function(e) {
    e.stopPropagation();
    console.log("it should close?");
    modal.style.display = "none";
    penrosy.removeEventListener("click", closeModal);
}
