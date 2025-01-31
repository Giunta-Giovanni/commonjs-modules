// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file. 


function personalData (nome, cognome){
    const data = {
        firstName: nome,
        lastName: cognome
    }
    return data

}

const name = 'Giovanni'
const surname = 'Giunta'

console.log (personalData(name, surname));

module.exports = personalData;