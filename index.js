const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let passwordLength = 15


function randomCharacters (){
    let randomIndex = Math.floor(Math.random()* characters.length)
    return characters[randomIndex]
    
}

function randomPasswords(){
    let password =" "
    for (let i = 0; i < passwordLength; i++){
      password += randomCharacters()  
    } 
    return password
}
// console.log(randomPasswords())

function renderPasswords(){
    password1El.textContent = randomPasswords() 
    password2El.textContent = randomPasswords() 
}
