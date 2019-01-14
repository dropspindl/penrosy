const Tile = require("./tile");
import ALL_TILES from './game';
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

export default Dart;

//prev pink: #F7CAC9
