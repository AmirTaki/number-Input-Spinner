let numbers = document.getElementById("box")

for(let i = 0; i< 100 ; i++){
    let span = document.createElement("span")  
    span.textContent = i;
    numbers.appendChild(span)
}

var num = numbers.getElementsByTagName('span')
var index = 0;
const nextNum = () => {
    
}