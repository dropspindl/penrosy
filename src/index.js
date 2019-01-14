import Kite from './kite.js'
import Dart from './dart.js';
import animate from './game.js'

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("penrosy-canvas");

    const ctx = canvas.getContext("2d");
    animate();
    // const game = new Game(ctx);
    // const kite = new Kite(ctx);
    // kite#b3002a.draw(ctx);

    // const dart = new Dart(ctx);
    // dart.draw(ctx);
});

