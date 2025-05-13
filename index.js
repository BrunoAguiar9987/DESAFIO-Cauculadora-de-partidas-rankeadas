
let qtdVitorias = 250
let qtdDerrotas = 120
let jogador = "Bruno"
position = qtdVitorias - qtdDerrotas

function showPosition(){
   console.log("O Jogador (a) "  + jogador + " obteve media de vitorias  " + position)  
}

showPosition()

function classifyPlayer(){

   switch (true) {
      case position <= 10:
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: FERRO!")
         break;
      case (position >= 11) && (position <= 20):
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: BRONZE!")         
         break;  
      case (position >= 21) && (position <= 50):
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: PRATA!")
         break;   
      case (position >= 51) && (position <= 80):
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: OURO!")
         break;   
      case (position >= 81) && (position <= 90):
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: DIAMANTE!")
         break;
      case (position >= 91) && (position <= 100):
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: LENDÁRIO!")
         break;
      case (position >= 101): 
         console.log("O heroi tem saldo de vitorias " + position + " Está no nível: IMORTAL!")
         break;      
   }
}

classifyPlayer()