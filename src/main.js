let numbers = document.getElementById("box")

for(let i = 0; i< 100 ; i++){
    let span = document.createElement("span")  
    span.textContent = i;
    numbers.appendChild(span)
}