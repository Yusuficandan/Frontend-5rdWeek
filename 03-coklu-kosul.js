
let userName=prompt("Kullanici adiniz: ")
let age =prompt("Yasiniz: ")
let info = document.querySelector("#info")

if (userName && age >=18) {
    info.innerHTML="ehliyeti alabilirsin"
} 
else if (!userName) {
    info.innerHTML="Kullanizi adiniz yok"
}
else if( !(age >=18)) {
    info.innerHTML="Yas Bilginiz yok veya 18 yasindan Kucuksunuz"
}