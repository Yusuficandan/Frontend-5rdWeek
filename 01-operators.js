

let price="100"
let user="guest"

console.log("== :", price == 1)
console.log("== :", price == 100)

console.log("===", price === 1)
console.log("===", price === 100)

// != Esit degilse
console.log(user!="guest")

// <= Kucuk veya esitse
console.log("price <100: ", price<100)

// Buyukse
console.log("price <=100", price <=100)

// >= Buyuk ve esitse 
console.log("price >=100", price >=100)

// && ve 
console.log(price >0 && user !="guest")

// || veya 
console.log(price > 0 || user !="guest")

// ! degil
console.log(price >0 && !user =="guest")


console.log(!!2)