//typper(document.getElementById("hello"),["hej jestem luk"])
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
class element{
    
}

var scenka = [
    {
        type:0,
        size:2,
        data:[//biurko
            p(0,0),
            p(100,100)
        ],
        line:[
            [0,1]
        ],
        tris:[

        ]
    }
    
]

function drawscene(scene=scenka){
    scene.forEach(obj=>{
        if(obj.type==0){
            obj.line.forEach(line=>{
                drawline(obj.data[line[0]].x,obj.data[line[0]].y,obj.data[line[1]].x,obj.data[line[1]].y,obj.size,"white");
            })
        }
    })
}
setInterval(drawscene,16);