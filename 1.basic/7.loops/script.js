// while (1 < ) {
//     // code a executer
// }

// pour un code d'une seule ligne les accolades sont pas requise

// do {
//     // code a executer
// } while (true);

// for (i = 0; i < 10; i++) {
//     // code a executer
// }

// briser la boucle

let i = 3;
while (i < 3) {
    // do things
    if (i === 2) break;
    i++;
}

// continuer jusqu'a la prochaine iteration
for(let i = 0; i < 10; i++) {
    // si vrai, saute le reste du corp de la fonction
    if (i === 5) continue
    console.log(i);
}

// / SWITCH  ------------------

let val = 3

switch (val) {
    case 1:
        alert('too small')
        break
    case 3:
        alert('small')
        break
    case 5:
        alert('finally, found it!')
        break;
    case 7:
        alert('big')
        break;
    case 10:
        alert('too big')
        break;

    default:
        alert('unknown choice')
        break;
}

