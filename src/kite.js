
let to_radians = Math.PI / 180;
let colors = ["#ecadb6", "#cc0030", "#566f56"];


class Kite  {
    constructor(options) {
        this.x = 200;
        this.y = 120;
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
        ctx.strokeStyle = "#35374C";
        ctx.stroke();
        // ctx.fillStyle = this.color;
        ctx.fill();
    }

}




export default Kite;