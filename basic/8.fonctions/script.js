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
        document.write(checkAge(ans))
    }
}

access();

// :D