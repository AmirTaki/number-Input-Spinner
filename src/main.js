let numbers = document.getElementById("box")


let next = document.querySelector(".next")
let prev = document.querySelector(".prev")


let conter = 0
let span = document.createElement("span")
span.textContent = conter;
numbers.appendChild(span)

next.addEventListener("click", (e) => {
    conter =  conter > 99 ? 0 : conter
    span.textContent = conter++
})

prev.addEventListener("click", (e) => {
    conter = conter < 0 ? 99 : conter;
    span.textContent = conter--
})



// let next = document.querySelector(".next")
// let prev = document.querySelector(".prev")


// for (let i = 0; i < 100 ; i++){
//     let span = document.createElement("span")
//     span.textContent = i
//     numbers.appendChild(span)
// }


// let span = numbers.querySelectorAll('span')
// let x = 0

// next.addEventListener("click", (e) => {

//     span[x].style.display = "none"
//     x = (x + 1) % span.length
//     span[x].style.display = "initial"
// })
// prev.addEventListener("click", (e) => {

//     span[x].style.display = "none"
//     x = (x - 1 + span.length)  % span.length
//     span[x].style.display = "initial"
// })








// for(let i = 0; i< 100 ; i++){
//     let span = document.createElement("span")  
//     span.textContent = i;
//     numbers.appendChild(span)
// }

// var num = numbers.getElementsByTagName('span')

// var index = 0;
// const nextNum = () => {
//     num[index].style.display = 'none'   
//     index =(index + 1) % num.length;
//     num[index].style.display = 'initial'   
// }
// const prevNum = () => {
//     num[index].style.display = 'none'   
//     index =(index - 1 + num.length)  % num.length;
//     num[index].style.display = 'initial'   
// }
