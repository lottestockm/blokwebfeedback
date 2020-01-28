/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//  test of de js goed gelinkt is
console.log("test");



var klik = document.querySelector("section button");
var algemenevoorwaarde = document.querySelector("section .alg");

function tekst(){
    algemenevoorwaarde.classList.toggle("yay");
}

klik.addEventListener("click",tekst);
            