let toggle = document.querySelector(".toggle")
let menu = document.querySelector(".menu-mobile")
let fechar = document.querySelector(".fechar")
toggle.addEventListener("click",()=>{
    toggle.classList.add("top")
 menu.classList.remove("none")
 
 fechar.classList.add("ativo")
 })

fechar.addEventListener("click",()=>{
 toggle.classList.remove("top")
 menu.classList.add("none")
 fechar.classList.remove("ativo")
})


function funcao(){
    let arroba2 = document.querySelector(".arroba2")
 let input = document.querySelector(".campo-pesquisa").value
  let split = input.split("")
  let filter = split.filter(item => {
      if(item == "@"){
          return item
      }
  })

 if(filter.length > 0){
      arroba2.style.display="none"
      window.location.href="site.html"
     return true
 }else{
     arroba2.style.display="block"
     return false
 }
 
}


let dot1 = document.querySelector(".dot1")
let dot2 = document.querySelector(".dot2")
let dot3 = document.querySelector(".dot3")
let dot4 = document.querySelector(".dot4")
let foto1 = document.querySelector(".foto1")
let foto2 = document.querySelector(".foto2")
let foto3 = document.querySelector(".foto3")
let foto4 = document.querySelector(".foto4")


dot1.addEventListener("click",() =>{
 foto1.classList.remove("none")
 foto2.classList.remove("block")
 dot2.style.background="white"
 dot1.style.background="var(--laranja)"
 foto3.classList.remove("block")
 dot3.style.background="white"
 foto4.classList.remove("block")
     dot4.style.background="white"


})
dot2.addEventListener("click", ()=>{
     foto1.classList.add("none")
     dot1.style.background="white"
     dot2.style.background="var(--laranja)"
     foto2.classList.add("block")
     dot3.style.background="white"
     foto4.classList.remove("block")
     dot4.style.background="white"

     foto3.classList.remove("block")
})

dot3.addEventListener("click", ()=>{
 foto2.classList.remove("block")
     dot2.style.background="white"
     dot3.style.background="var(--laranja)"
     foto3.classList.add("block")
     foto4.classList.remove("block")
     dot4.style.background="white"
     foto1.classList.add("none")
     dot1.style.background="white"


})
dot4.addEventListener("click", ()=>{
 foto3.classList.remove("block")
     dot3.style.background="white"
     dot4.style.background="var(--laranja)"
     foto4.classList.add("block")
     foto1.classList.add("none")
     dot1.style.background="white"
     foto2.classList.remove("block")
     dot2.style.background="white"

})

function myFunction(x) {
if (x.matches) {  
foto1.classList.remove("none")
} 
}
var x = window.matchMedia("(min-width: 1100px)")
myFunction(x)  
x.addListener(myFunction)  