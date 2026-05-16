var elements = [
            document.getElementById(1),
            document.getElementById(2),
            document.getElementById(3),
            document.getElementById(4),
            document.getElementById(5),
            document.getElementById(6),
            document.getElementById(7),
            document.getElementById(8),
            document.getElementById(9),
            document.getElementById(10),
            document.getElementById(11),
                                        ]

var direction = []
var cords = []

for (let i = 0; i < elements.length; i++) {
    var element = elements[i]
    var x_index = Math.random()-Math.random()
    var z_index = Math.random()-Math.random()
    direction[i] = [x_index,z_index]
    cords[i] = [50,50]
    element.style.left = 50 + "vw"
    element.style.top = 50 + "vh"
}

function mover(){
    for (let i = 0; i < elements.length; i++){
        var element = elements[i]
        if((cords[i][0]>85 || cords[i][0]<15) || (cords[i][1]>85 || cords[i][1]<15)){
            while(true){
                var x_index = Math.random()-Math.random()
                var z_index = Math.random()-Math.random()
                direction[i] = [x_index,z_index]
                if((cords[i][0]+direction[i][0]<85 && cords[i][0]+direction[i][0]>15) && (cords[i][1]+direction[i][1]<85 && cords[i][1]+direction[i][1]>15)){
                    break
                }
            }
        }
        cords[i] = [cords[i][0]+direction[i][0],cords[i][1]+direction[i][1]]
        element.style.left = cords[i][0]+direction[i][0] + "vw"
        element.style.top = cords[i][1]+direction[i][1] + "vh"
    }
}

setInterval(mover,50)