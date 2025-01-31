// 3 - people.js

// 1. Importa la tua funzione da names.js
const personalData = require("./names.js");
// 2. Importa la tua funzione da hobbies.js
const createHobbies = require ("./hobbies.js");
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto. 

function personalHobbies() {
    return {
        fullName: personalData('Giovanni', 'Giunta'),
        hobbies: createHobbies('pallavolo', 'paddle', 'beachvolley')
    }
}

console.log (personalHobbies())