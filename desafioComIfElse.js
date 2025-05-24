

let vitorias = 281
let derrotas = 175
let player  = "bruno"
let position = vitorias - derrotas


function classifique(vitorias, derrotas) {
      if (position < 10){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel  FERRO")
      }else if (position >= 11 && position <= 20){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel  BRONZE")
      }else if (position >= 21 && position <= 50){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel  PRATA")
      }else if (position >= 51 && position <= 80){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel  OURO")
      }else if (position >= 81 && position <= 90){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel DIAMANTE")
      }else if(position >= 91 && position <= 100){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel LENDÁRIO")
      }else if(position >= 101){
         console.log("O heroi " +  player + " tem saldo de " + position +  " vitórias e está no nivel IMORTAL")
   }
}

classifique()

