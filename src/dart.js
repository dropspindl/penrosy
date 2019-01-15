
import ALL_TILES from './game';
let PHI = (Math.sqrt(5) + 1)/2;
let to_radians = Math.PI / 180;
let colors = ["#ecadb6", "#cc0030", "#566f56"];

class Dart  {
    constructor(options) {
        this.x = 200;
        this.y = 240;
        this.angle = 0;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = 70;
    }

    centerX() {
        return (2 * this.x + this.size * Math.sin(this.angle * to_radians) / PHI) / 2; 
    }

    centerY(){
        return (2 * this.y - (this.size * Math.cos(this.angle * to_radians)) / PHI) / 2;
    }


    draw(ctx) {   

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
      
        var grd = ctx.createRadialGradient(this.centerX(), this.centerY(), 2, this.centerX(), this.centerY(), 45 );
        grd.addColorStop(0, "white");
        grd.addColorStop(1, this.color);
        ctx.fillStyle = grd;
        ctx.fill();


        ctx.lineWidth = 1;
        ctx.strokeStyle = "#35374C";
        ctx.stroke();
       
    }

    addCircles(ctx) {
        var centerX = this.x;
        var centerY = this.y;
        var radius = 3;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();

        var centerX = this.x + (size * Math.sin(angle * to_radians)) / PHI;
        var centerY = this.y - (size * Math.cos(angle * to_radians)) / PHI;
        // var radius = 3;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
       
    }
}

export default Dart;

//prev pink: #F7CAC9
