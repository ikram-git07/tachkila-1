const lemodal =document.querySelector("#mymdl");
const btn =document.querySelector("#clik");
const sort =document.querySelector("#fermer")
const annule =document.querySelector("#annuler")
btn.addEventListener("click" ,function () {
    lemodal.classList.remove("hidden")
     lemodal.classList.add("flex")

})
sort.addEventListener("click" ,function () {
   lemodal.classList.remove("flex")
   lemodal.classList.add("hidden")

})
annule.addEventListener("click" ,function () {
   lemodal.classList.remove("flex")
   lemodal.classList.add("hidden")

})