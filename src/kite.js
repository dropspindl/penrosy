class Kite {
    constructor(options) {
        this.x = 100;
        this.y = 300;
        this.angle = 0;
        this.color = "green";
        this.size = 105;
        this.ctx = options.ctx;
       
    }

    

    draw(ctx) {
        const PHI = (Math.sqrt(5) + 1) / 2;
        const rad36 = (36 * Math.PI) / 180;
        let x = this.x;
        let y = this.y;
        let size = this.size;
        let ang = this.angle;
        ctx.fillStyle = this.color;
        
        ctx.beginPath();
            
            ctx.moveTo(x, y)
        ctx.lineTo(x + size * Math.sin((36 + ang) * Math.PI / 180), y - size * Math.cos((36 + ang) * Math.PI / 180));
        ctx.lineTo(x + size * Math.sin(ang * Math.PI / 180), y - size * Math.cos(ang * Math.PI / 180));
        ctx.lineTo(x - size * Math.sin((36 - ang) * Math.PI / 180), y - size * Math.cos((36 - ang) * Math.PI / 180));
        ctx.lineTo(x, y);
        // c.lineTo( this.x + (Math.cos(rad36) * this.size), 
        //     this.y - (Math.sin(rad36) * this.size));
        // c.lineTo(
            ctx.fill();
    }


}



export default Kite;