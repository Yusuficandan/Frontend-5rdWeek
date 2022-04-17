
let userName =prompt("Kullanici Bilginiz Yaziniz")
let info=document.querySelector("#info")

info.innerHTML= `${userName.length>0 ? userName:"Kullanici Bilginiz Bulunamadi :("}`