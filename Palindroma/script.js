// creo una variabile con lo stesso nome dell'argomento
// della funzione che contiene un prompt per chiedere
// all'utente di inserire una parola
let word = prompt("Inserisci una parola")

// all'interno della funzione creo una variabile che
// tramite la funzione "split" trasforma la parola inserita
// come argomento in un array composto dalle singole lettere
// ad esempio "mare" diventa "m", "a", "r", "e"
// tramite la funzione "reverse" inverte l'ordine dell'array
// che quindi diventa "e", "r", "a", "m"
// tramite la funzione "join" unisce nuovamente i componenti
// dell'array in un'unica stringa

function palindrome (word) {
    const reverseWord = word.split("").reverse().join("");

    if (reverseWord === word) {
        return ("vero");
    } else {
        return ("falso");
    }
}

console.log(palindrome (word));
