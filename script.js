var canva = document.getElementById("screen");
var ctx = canva.getContext("2d");

var debbuging = true;
typper(document.getElementById("hello"),["hej jestem luk"])
function typper(element,input = [""]){
    var letter = 0;
    var doc = 0;
    tp("")
    function tp(out){
        if(input.length==doc){
            return
        }
        if(letter==input[0].length){
            doc++
            letter = 0
        }else{
            out += input[0].charAt(letter);
            element.innerHTML = out+"_"
            letter++
        }
        setTimeout(tp,100,out);
    }
}

class tri{
    p1 = 0;
    p2 = 0;
    p3 = 0;
    c = "white";
    constructor(p1,p2,p3,c){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.c = c;
    }
}
class line{
    p1 = 0;
    p2 = 0;
    c = "white";
    thickness = 1;
    constructor(p1,p2,c,thickness = 1){
        this.p1 = p1;
        this.p2 = p2;
        this.c = c;
        this.thickness = thickness;
    }
}

class element{
    points = [p(0,0)]
    triangles = [new tri(0,0,0,"white")]
    lines = [new line(0,0,"white")]
    constructor(points = [p(0,0)],triangles = [new tri(0,0,0,"white")],lines = [new line(0,0,"white")],offset = p(0,0)){
        this.points = points;
        this.triangles = triangles;
        this.lines = lines;
        this.move(offset.x,offset.y);
    }
    move(x,y){
        for(var i = 0;i<this.points.length;i++){
            this.points[i].x += x;
            this.points[i].y += y;
        }
    }
    draw(){
        this.triangles.forEach(tri=>{
            drawTri(this.points[tri.p1].x,this.points[tri.p1].y,this.points[tri.p2].x,this.points[tri.p2].y,this.points[tri.p3].x,this.points[tri.p3].y,tri.c);
        })
        this.lines.forEach(line=>{
            drawLine(this.points[line.p1].x,this.points[line.p1].y,this.points[line.p2].x,this.points[line.p2].y,line.thickness,line.c);
        })
    }   
    debug(){
        this.points.forEach(p=>{
            ctx.fillStyle = "red";
            ctx.fillRect(p.x-2,p.y-2,4,4)
        })
    }
}

var scena = [
    new element([
        p(0,0),
        p(20,0),
        p(0,20),
        p(20,20),
    ],[
        new tri(0,1,2,"white")
    ],[
        new line(0,3,"white",2)
    ],p(0,0)),
    new element([//podłoga
        p(0,0),
        p(400,0)
    ],[
    ],[
        new line(0,1,"white",3)
    ],p(0,350)),
    new element([//kosz
        //left
        p(0,0),
        p(2,10),
        p(4,20),
        p(6,30),
        //right
        p(30,0),
        p(28,10),
        p(26,20),
        p(24,30),
        //bottom
        p(11,30),
        p(17,30),
        //top
        p(10,0),
        p(20,0),
    ],[
    ],[
        //sides
        new line(0,3,"white",2),
        new line(3,7,"white",2),
        new line(7,4,"white",2),
        new line(4,0,"white",2),
        //right up
        new line(9,6,"white",1),
        new line(8,5,"white",1),
        new line(3,4,"white",1),
        new line(2,11,"white",1),
        new line(1,10,"white",1),
        //left up
        new line(8,2,"white",1),
        new line(9,1,"white",1),
        new line(7,0,"white",1),
        new line(6,10,"white",1),
        new line(5,11,"white",1),
    ],p(20,318))
]

setInterval(()=>{
    clear("black");
    scena.forEach(e=>{
        e.draw();
        if(debbuging){
            //e.debug();
        }
    })
},16)