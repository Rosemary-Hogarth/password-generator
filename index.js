const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn")
let displayElOne = document.getElementById("content-el-one")
let displayElTwo = document.getElementById("content-el-two")
let passwordLength = 15
let password = ""


function generatePassword() {

  for (let i = 0; i <= passwordLength; i++) {
    let randomCharactersOne = Math.floor(Math.random() * characters.length)
    let randomCharactersTwo = Math.floor(Math.random() * characters.length)

    displayElOne.textContent += characters[randomCharactersOne]
    displayElTwo.textContent += characters[randomCharactersTwo]
  }
}

generatePassword()
