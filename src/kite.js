const Tile = require('./tile');
let to_radians = Math.PI / 180;


class Kite  {
    constructor(options) {
        this.x = 200;
        this.y = 120;
        this.angle = 0;
        this.color = "#ecadb6";
        this.size = 70;
        // this.ctx = options.ctx;
       
        this.isDragging = false;
        this.isSelected = true;
        // this.center_x = (2 * this.x + this.size * Math.sin(this.angle * to_radians)) / 2;
        // this.center_y = (2 * this.y - this.size * Math.cos(this.angle * to_radians)) / 2;


    }

    centerX() {
       return (2 * this.x + this.size * Math.sin(this.angle * to_radians)) / 2);
    }

    centerY() {
       return (2 * this.y - this.size * Math.cos(this.angle * to_radians)) / 2);
    }


    draw(ctx) {
  
        let size = this.size;
        let angle = this.angle;
        

        
        
        ctx.beginPath();
           
        //create kite shape 
       
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + size * Math.sin((36 + angle) * to_radians), 
            this.y - size * Math.cos((36 + angle) * to_radians));
        ctx.lineTo(this.x + size * Math.sin(angle * to_radians), 
            this.y - size * Math.cos(angle * to_radians));
        ctx.lineTo(this.x - size * Math.sin((36 - angle) * to_radians), 
            this.y - size * Math.cos((36 - angle) * to_radians));
        ctx.closePath();

       
        // var grd = ctx.createRadialGradient(center_x(), center_y(), 1, center_x(), center_y(), 55);
        // grd.addColorStop(0, "white");
        // grd.addColorStop(1, this.color);
        // ctx.fillStyle = grd;
        // ctx.fill();

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#35374C";
        ctx.stroke();
        ctx.fill();
    }

}




export default Kite;