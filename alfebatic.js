function draw(obj,xs,ys,dx,dy,size){
    var t = "black";
    var sx = dx/size;
    var sy = dy/size;
    for(var ix = 0;ix<size;ix++){
        for(var iy = 0;iy<size;iy++){
            setColor(obj[ix][iy]);
            if(obj[ix][iy]!=t)ctx.fillRect(ys+(sy*iy),xs+(sx*ix),sx,sy);
        }
    }
}
function drawCenter(obj,ys,dx,dy,size){
    var sx = dx/size;
    var sy = dy/size;
    for(var ix = 0;ix<size;ix++){
        for(var iy = 0;iy<size;iy++){
            style(obj[ix][iy]);
            if(obj[ix][iy]!=t)ctx.fillRect((1440-dx)/2+(sx*ix),ys+(sy*iy),sx,sy);
        }
    }
}
function letter(l,xs,ys,c="white",dx=100,dy=100){
    var t = "black";
    switch (l.toLowerCase()){
        case "a":
            draw([[t,t,c,t,t],[t,c,t,c,t],[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "b":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "c":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "d":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "e":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "f":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "g":
            draw([[t,c,c,c,t],[c,t,t,t,t],[c,t,t,c,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "h":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,c,c,c,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "i":
            draw([[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "j":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,t,c,t],[t,c,t,c,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "k":
            draw([[t,c,t,t,c],[t,c,t,c,t],[t,c,c,t,t],[t,c,t,c,t],[t,c,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "l":
            draw([[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "m":
            draw([[c,t,t,t,c],[c,c,t,c,c],[c,t,c,t,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "n":
            draw([[c,t,t,t,c],[c,c,t,t,c],[c,t,c,t,c],[c,t,t,c,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "o":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "p":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "r":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "s":
            draw([[t,c,c,c,t],[c,t,t,t,t],[t,c,c,c,t],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "t":
            draw([[c,c,c,c,c],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "u":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "w":
            draw([[c,t,t,t,c],[c,t,t,t,c],[t,c,t,c,t],[t,c,c,c,t],[t,c,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "y":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "z":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "x":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,c,t,c,t],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case ".":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ",":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ":":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "-":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,c,c,c,t],[t,t,t,t,t],[t,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "_":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "/":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "(":
            draw([[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case ")":
            draw([[t,c,t,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "1":
            draw([[t,t,c,t,t],[t,c,c,t,t],[c,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "2":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[t,t,c,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "3":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "4":
            draw([[t,t,t,c,t],[t,t,c,c,t],[t,c,t,c,t],[c,c,c,c,c],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "5":
            draw([[c,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[t,t,t,t,c],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "6":
            draw([[t,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "7":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "8":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "9":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,c],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "0":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
    }
}
function printLine(text,xs,ys,c="w",fsize = 50){
    var sindex = 0;
    var alr = 0;
    for(var i = 0;i<text.length;i++){
        if(text.charAt(i)==" ")sindex +=fsize/2
        if(text.charAt(i)=="\n"){
            ys+= (fsize+fsize/10);
            alr=-1;
        }
        letter(text.charAt(i),ys,xs+((fsize+fsize/10)*alr),c,fsize,fsize)
        alr++;
    }
}