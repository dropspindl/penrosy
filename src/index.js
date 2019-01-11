import Kite from './kite.js'

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("penrosy-canvas");

    const ctx = canvas.getContext("2d");
    // const game = new Game(ctx);
    const kite = new Kite(ctx);
    kite.draw(ctx);
});