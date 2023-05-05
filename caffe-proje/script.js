
const navbar = document.querySelector(".navbar")
const barİkon = document.querySelector(".ikon #bar-ikon")

barİkon.onclick = function () {

    navbar.classList.toggle('open')
    

}

const searchContainar = document.querySelector(".search-containar")
const aramaGöstergesi = document.querySelector(".ikon #arama")

aramaGöstergesi.onclick = function () {
    
    searchContainar.classList.toggle('open')
}
const sepetContainar=document.querySelector(".sepet-containar")
document.querySelector(".ikon .fa-cart-shopping").onclick=function(){

    sepetContainar.classList.toggle('open')

}

// ----------------------------sepete ekleme kısmı-----------------------

const menu=document.querySelectorAll(".menu-box")
const sepeteEkle=document.querySelectorAll(".sepete-ekle")
const SepetContainar=document.querySelector(".sepet-containar")
console.log(sepeteEkle)
sepeteEkle.onclick=function(){

    alert("tıklandı")

 }

menu.forEach(function(eleman){
    
   console.log(eleman)

})

 
