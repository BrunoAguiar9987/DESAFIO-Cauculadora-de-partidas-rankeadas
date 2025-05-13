

let qtdVitorias = 76
let qtdDerrotas = 24
let jogador = "Bruno"
position = qtdVitorias - qtdDerrotas

function showPosition(){
   console.log("O Jogador (a) "  + jogador + " obteve media de vitorias  " + position)  
}

showPosition()

function classifyPlayer(){

   switch (true) {
      case position <= 10:
         console.log("O player tem classificação: FERRO!")
         break;
      case (position >= 11) && (position <= 20):
         console.log("O player tem classificação: BRONZE!")
         break;  
      case (position >= 21) && (position <= 50):
         console.log("O player tem classificação: PRATA!")
         break;   
      case (position >= 51) && (position <= 80):
         console.log("O player tem classificação: OURO!")
         break;   
      case (position >= 81) && (position <= 90):
         console.log("O player tem classificação: DIAMANTE!")
         break;
      case (position >= 91) && (position <= 100):
         console.log("O player tem classificação: LENDÁRIO!")
         break;
      case (position >= 101): 
         console.log("O player tem classificação:  IMORTAL!")
         break;      
   }
}

classifyPlayer()