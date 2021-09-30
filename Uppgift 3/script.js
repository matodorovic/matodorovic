// Kollar om JavaScript fil är laddat
console.log("script.js is loaded");

let hello = document.querySelector("#hello");
let myBtn = document.querySelector("#myBtn");

// Lyssnare på knappen och byt av texten 
myBtn.addEventListener("click", 

function() {
    
    
    hello.innerHTML ="Goodbye World!";
    myBtn.disabled = true;

}
, false);
