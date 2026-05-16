var remove = 0
function pulla() {
    var i = 0
    document.getElementById("pulls").remove()
    var divpull = document.createElement("div")
    divpull.id = "pulls"
    document.body.appendChild(divpull)
    intervalo = setInterval(() => {
        i += 1
        if (i == 10) {
            var id = Math.floor(Math.random()*(215-1)+1)   
        } else {
            var id = Math.floor(Math.random()*(1000-1)+1)    
        }
        if (id < 1000) {
            var img = "1.png"
            if (id < 215) {
                var img = "2.png"
                if (id < 30) {
                    var img = "3.png"
                }
            }  
        }
        var elimg = document.createElement("img")
        var divpull = document.getElementById("pulls")
        elimg.src = img
        elimg.id = i
        elimg.className = "cards"
        elimg.style.animation = "normal pull 3s"    
        divpull.appendChild(elimg)
        if (i == 10) {
            clearInterval(intervalo)
        }        
    }, 100);
}
