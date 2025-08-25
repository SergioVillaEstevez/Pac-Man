const canvas= document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")


const mapa = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,2,2,1,2,1,1,1,2,2,2,2,1],
  [1,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,2,2,1,1,2,2,1,2,2,2,1],
  [1,1,1,2,1,1,2,1,1,2,1,1,1],
  [0,0,1,2,1,2,2,2,1,2,1,0,0],
  [1,1,1,2,2,2,2,2,2,2,1,1,1],
  [1,2,2,2,1,2,2,2,1,2,2,2,2],
  [1,1,1,2,2,2,2,2,2,2,1,1,1],
  [0,0,1,2,2,2,1,2,2,2,1,0,0],
  [1,1,1,2,2,1,1,1,2,2,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,2,2,2,2,4,2,2,2,2,2,1],
  [1,2,2,2,1,2,1,2,2,2,1,2,1],
  [1,2,2,2,1,2,1,2,2,2,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,1,2,1],
  [1,2,1,2,2,2,1,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1],

];

let titleSize= 30

let pacmanX=1;
let pacmanY=9;
let dx= 1;
let dy= 0;

const drawMap = ()=> {
    
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    for(let y= 0; y< mapa.length; y++ ){

        for(let x= 0;x< mapa[y].length;x++ ){

            const celda = mapa[y][x]
            
            if(celda===1){
                ctx.fillStyle= "blue"
                ctx.fillRect(x*titleSize, y*titleSize, titleSize,titleSize)
                
            }
            else if(celda===2){
                ctx.fillStyle="white"
                ctx.beginPath()
                ctx.arc(
                    x*titleSize + titleSize/2,
                    y*titleSize + titleSize/2,
                    4,
                    0,
                    Math.PI*2
                );
                ctx.fill()
            }
            
            else if(celda === 3){

                ctx.fillStyle= "yellow"
                ctx.beginPath()
                ctx.arc(x * titleSize + titleSize/2, y * titleSize + titleSize/2, 8, 0,Math.PI * 2)
                ctx.fill()

            }
            else if(celda === 4){
                ctx.fillStyle = "red"
                ctx.beginPath()
                ctx.arc(x*titleSize + titleSize/2,y*titleSize + titleSize/2, 8,0,Math.PI*2)
                ctx.fill()
            }
            
            
            
            
        }
    }
    
}

function moverPacmanDerecha() {
    for (let y = 0; y < mapa.length; y++) {
        for (let x = 0; x < mapa[y].length; x++) {
            if (mapa[y][x] === 3) { // encontramos a Pac-Man
                const nuevaX = x + 1;
                const nuevaY = y;
                
        // comprobar si no es muro
        if (mapa[nuevaY][nuevaX] !== 1) {
            mapa[y][x] = 0;           // vaciar celda actual
            mapa[nuevaY][nuevaX] = 3; // poner a Pac-Man en nueva celda
        }
        
        return; // salir porque ya lo movimos
    }
}
}
}

function moverPacmanArriba() {
    for (let y = 0; y < mapa.length; y++) {
        for (let x = 0; x < mapa[y].length; x++) {
            if (mapa[y][x] === 3) { // encontramos a Pac-Man
                const nuevaX = x;
                const nuevaY = y-1;
                
                // comprobar si no es muro
                if (mapa[nuevaY][nuevaX] !== 1) {
                    mapa[y][x] = 0;           // vaciar celda actual
                    mapa[nuevaY][nuevaX] = 3; // poner a Pac-Man en nueva celda
                }
                
                return; // salir porque ya lo movimos
      }
    }
  }
}
function moverPacmanAbajo() {
    for (let y = 0; y < mapa.length; y++) {
        for (let x = 0; x < mapa[y].length; x++) {
      if (mapa[y][x] === 3) { // encontramos a Pac-Man
        const nuevaX = x;
        const nuevaY = y + 1;
        
        // comprobar si no es muro
        if (mapa[nuevaY][nuevaX] !== 1) {
            mapa[y][x] = 0;           // vaciar celda actual
            mapa[nuevaY][nuevaX] = 3; // poner a Pac-Man en nueva celda
        }
        
        return; // salir porque ya lo movimos
    }
}
}
}

function moverPacmanIzquierda() {
    for (let y = 0; y < mapa.length; y++) {
        for (let x = 0; x < mapa[y].length; x++) {
      if (mapa[y][x] === 3) { // encontramos a Pac-Man
        const nuevaX = x - 1;
        const nuevaY = y;
        
        // comprobar si no es muro
        if (mapa[nuevaY][nuevaX] !== 1) {
            mapa[y][x] = 0;           // vaciar celda actual
            mapa[nuevaY][nuevaX] = 3; // poner a Pac-Man en nueva celda
        }

        return; // salir porque ya lo movimos
    }
}
}
}

document.addEventListener("keydown",(e)=>{
    if(e.key==="d"){ dx = 1; dy = 0; }
    if(e.key==="a"){ dx = -1; dy = 0; }
    if(e.key==="w"){ dx = 0; dy = -1; }
    if(e.key==="s"){ dx = 0; dy = 1; }
});

const moverSoloPacman=()=>{

    const nuevaX= pacmanX+dx
    const nuevaY= pacmanY + dy

    if(mapa[nuevaY][nuevaX]!==1){
        mapa[pacmanY][pacmanX]= 0;
        pacmanX=nuevaX;
        pacmanY=nuevaY; 
        mapa[pacmanY][pacmanX]= 3


    }



}


// document.addEventListener("keydown",(e)=>{

//     if(e.key==="d"){
//         moverPacmanDerecha();
//     }
//     if(e.key==="a"){
//         moverPacmanIzquierda();
//     }
//     if(e.key==="w"){
//         moverPacmanArriba()
//     }
//     if(e.key==="s"){
//         moverPacmanAbajo()
//     }


// })



const gameLoop= ()=> {
    
    drawMap();
    moverSoloPacman()
    setTimeout(gameLoop,300)
}

gameLoop()