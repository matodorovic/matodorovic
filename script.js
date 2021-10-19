// Kontrollera om JavaScript är laddat
console.log("script.js is loaded")

// Deklaration av variabler
let completedCount = 0;

// HTML-element
const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const label = document.querySelector("p");
const trashcan = document.createElement("span");

var listan = new Array(0);


// Knapp lyssnare 
button.addEventListener("click", function () {

    // Hämta text från input
    const text = input.value;

    // Kolla om texten är tom
    if (text.length == 0) {
        document.querySelector("small").innerText = "Input must not be empty";              
        return;
    }
    else {
        document.querySelector("small").innerText = "";   
    }

    // Lägg till i ToDo Listan (ul)
    const item = document.createElement("li");
    list.appendChild(item);   
    listan.push(text);
    

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);   
    label.innerText =  `${completedCount} completed`;

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);
        
    // Lägg till klick på listan 
    itemLabel.addEventListener("click", function() {
        if (item.getAttribute("class") == "completed") {
            item.setAttribute("class", "");
            completedCount--;
        }
        else {
            item.setAttribute("class", "completed");
            completedCount++;
        }

        label.innerText =  `${completedCount} completed`;
    });

       
    // Lägg till klick på vår trashcan
    trashcan.addEventListener("click", function() {
                
        var nummer = listan.indexOf(text);
        delete listan[nummer];

        item.remove();
        
        if ( item.getAttribute("class") == "completed") {
            completedCount--;
        }
        
        label.innerText =  `${completedCount} completed`;
    });

    // Nöllställ input
    input.value = "";
   
        
});

console.log(listan);

