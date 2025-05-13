

let qtdVitorias = 10
let qtdDerrotas = 3
let jogador = "Bruno"
position = qtdVitorias - qtdDerrotas


function showPosition(){
   console.log(position)
   console.log("Jogador classificado como " + position)  
}

showPosition()

function classifyPlayer(){
   if(showPosition < 10){
      console.log("O player tem classificação FERRO")
   }
}

classifyPlayer()