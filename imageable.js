class limg{
    imag
    constructor(location){
        this.imag = new Image();
        this.imag.src = location;
        this.imag.onload = function(){
            console.log("loaded "+location);
        }
    }
    draw(x,y){
        ctx.drawImage(this.imag,x,y);
    }
}