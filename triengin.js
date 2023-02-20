function degreeToRadian(degree) {
    return degree * 3.14159265359 / 180.0;
}

function setColor(c){
    ctx.fillStyle = c;
}
function clear(c="white"){
    setColor(c)
    ctx.fillRect(0,0,400,400);
}
function drawLine(x1,y1,x2,y2,w,c="white"){
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = w;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function drawTri(x1,y1,x2,y2,x3,y3,c="white"){
    ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}

class point{
    x = 0;
    y = 0;
    constructor(x=(Math.random()*1000)%100,y=(Math.random()*1000)%100){
        this.x = x;
        this.y = y;
    }
}

function p(x,y){
    return new point(x,y);
}

function dst(p1,p2){
    return Math.sqrt( Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y-p2.y), 2) );
}

function calc(p = new point(0,0),rotation=0,offSet = new point(0,0),scale = 1){
    var rad = degreeToRadian(rotation);
    //rotaing, scaling and moving
    var afterCalc = new point(0,0);
    afterCalc.x = (((scale)*p.x)*Math.cos(rad) - ((scale)*p.y)*Math.sin(rad)) + offSet.x;
    afterCalc.y = (((scale)*p.x)*Math.sin(rad) + ((scale)*p.y)*Math.cos(rad)) + offSet.y;
    return afterCalc;
}


class pointPTR{
    id;
    prev;
    constructor(id=0,prev=false){
        this.id = id;
        this.prev = prev;
    }
}

function pp(id=0,prev=false){
    return new pointPTR(id,prev);
}
class shape{
    p1 = pp();
    p2 = pp();
    p3 = pp();
    c = "white";
    type = 0;
    constructor(p1=pp(),p2=pp(),p3=pp(),c="white",type=0){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.c = c;
        this.type = type;
    }
    static triangle(p1=pp(),p2=pp(),p3=pp(),c="white"){
        return new shape(p1,p2,p3,c,0);
    }
    static line(p1=pp(),p2=pp(),thickness=1,c="white"){
        return new shape(p1,p2,thickness,c,1);
    }
    draw(pnow = [pp()],pprev=[pp()]){

    }
}

class triObject{
    points = [p(0,0),p(0,0),p(0,0)];
    shapes = [shape.triangle(pp(),pp(),pp(),"white")];
    subobjects = [];
    parpoint = 0;
    rotation = 0;
    scale = 1;
    constructor(points = [p(0,0),p(0,0),p(0,0)],shapes = [shape.triangle(pp(),pp(),pp(),"white")],rotation=0,scale=1){
        this.points = points;
        this.triangles = triangles;
        this.lines = lines;
        this.rotation = rotation;
        this.scale = scale;
    }
    draw(x,y,prev=this.points,rotation,scale){
        var newPoints = [];
        this.points.forEach((po,i)=>{
            newPoints[i] = calc(po,rotation,p(x,y),scale);
        })
        this.shapes.forEach(shape => {
            shape.draw(prev,newPoints,p(x,y),rotation,scale);
        })
        this.subobjects.forEach(sub => {
            sub.draw(newPoints[sub.parpoint].x,newPoints[sub.parpoint].y,newPoints,rotation+this.rotation,scale*this.scale);
        })
    }
}