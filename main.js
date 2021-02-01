const readlineSync = require("readline-sync");
const userName = readlineSync.question("Input the Username: ");
const profilPicture = readlineSync.question("Has profil picture? ");
const email = readlineSync.question("Input the email: ");
count=0;

while(true){
 password = readlineSync.question("Input the password: ");
if(password.length>=6 && password.length<=12){
    break;    
}
if (count<10){
    console.log("Incorect Try again")  
}
}
console.log("User name:",userName, ",", "Password:",password,",","Has Photo:", profilPicture, ",","Email:", email);
