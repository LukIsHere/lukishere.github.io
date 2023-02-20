class color{
    r;
    g;
    b;
    constructor(rgb=0){
        let r = (rgb >> 11) & 0x1f;
        let g = (rgb >> 5) & 0x3f;
        let b = rgb & 0x1f;

        this.r = (r << 3) | (r >> 2);
        this.g = (g << 2) | (g >> 4);
        this.b = (b << 3) | (b >> 2);
    };
    static fromRGB(r,g,b){
        let out = new color;
        out.r = r;
        out.g = g;
        out.b = b;
        return out;
    }
    int16toColor(rgb){
        let r = (rgb >> 11) & 0x1f;
        let g = (rgb >> 5) & 0x3f;
        let b = rgb & 0x1f;

        this.r = (r << 3) | (r >> 2);
        this.g = (g << 2) | (g >> 4);
        this.b = (b << 3) | (b >> 2);
    }
    static fromHex(hex){
            let int = parseInt(hex.substring(1), 16);
            let r = (int >> 16) & 255;
            let g = (int >> 8) & 255;
            let b = int & 255;
            let out = new color
            out.r = r;
            out.g = g;
            out.b = b;
            return out;
    }
    GetRGB565() {
        return (((this.b & 0b11111000)<<8) + ((this.r & 0b11111100)<<3) + (this.g>>3));
    }
    GetHex() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
}

function drawImg(x,y,w,h,pallet=[new color(0)],data=[0],scale = 1){
    for(var ix = 0;ix<w;ix++){
        for(var iy = 0;iy<h;iy++){
            let color = pallet[data[ix+iy*w]];
            ctx.fillStyle = color.GetHex();
            ctx.fillRect(x+ix*scale,y+iy*scale,scale,scale);
        }
    }
}

class img{
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    pallet = [new color(0)];
    data = [0];
    scale = 1;
    constructor(x,y,w,h,pallet,data,scale = 1){
        for(var i = 0;i<w*h;i++){
            if(data[i] == undefined){
                data[i] = color.fromRGB(0,0,0);
            }
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.pallet = pallet;
        this.data = data;
        this.scale = scale;
    }
    setPixel(x,y,color){
        this.data[x+y*this.w] = color;
    }
    draw(){
        drawImg(this.x,this.y,this.w,this.h,this.pallet,this.data,this.scale);
    }
}