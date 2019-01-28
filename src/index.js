import Kite from './kite.js'
import Dart from './dart.js';
import animate from './game.js'

let modal = document.getElementById("about");
let penrosy = document.getElementById('bod');

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
