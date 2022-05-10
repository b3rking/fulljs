"use strict";

// fonctions

// declarer une fontion

function showMessage() {
    alert("hello everyone!");
}

// appele de la fonction

// showMessage();
// showMessage();

// arguments

/**
 *
 * @param {string} message
 */
function showDifferentMessage(message = "i'm the default message") {
    alert(`le script vous dis ${message}`);
}

// showDifferentMessage("oooooh!");

// retourner une valeur

function calc(a, b) {
    return a + b;
}

calc(12, 56);

// simple check system

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("do you've ur parents permission?");
    }
}

function access() {
    var ans = parseInt(prompt("how old are u?"));
    if (checkAge(ans)) {
        alert("access granted");
    } else {
        alert("access denied!");
        document.write(checkAge(ans));
    }
}

access();

// :D

//========================================================

// fonctions expression

// fonctions declaration
function sayHi() {
    //
}

// fonctions expression
const saYhi = function () {
    // callback
    callbackI("quan");
};

function callbackI(nom) {
    alert("test" + nom);
}

saYhi();

// Une Fonction Expression est créée lorsque l’exécution l’atteint et est utilisable à partir de cet moment.

// Une fois que le flux d’exécution passe à droite de l’affectation, let sum = function… – voilà, la fonction est créée et peut désormais être utilisée (assignée, appelée, etc.) à partir de maintenant.

// Les déclarations de fonction sont différentes.

// Une fonction déclaration peut être appelée plus tôt que sa définition.

// Par exemple, une fonction déclaration globale est visible dans tout le script, peu importe où elle se trouve.

// ==================================================================

// arrow function

let func = () => {
    // du code a executer
};

let sum = (a, b) => a + b;

// ceci est la forme recourcie de

// let sum = function(a, b) {
//     return a + b
// }

// creation d'une fonction dynamiquement

let age = prompt("quel age as-tu?");

const welcome =
    age >= 18
        ? () => alert("bienvenue entre")
        : () => alert("reviens dans quelque années");

welcome()