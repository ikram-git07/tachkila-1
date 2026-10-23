const lemodal = document.querySelector("#mymdl");
const btn = document.querySelector("#clik");
const sort = document.querySelector("#fermer")
const annule = document.querySelector("#annuler")
const ajout = document.querySelector("#ajouter")
const nom = document.querySelector("#nom");
const nomMsg = document.querySelector("#nom-msg");
const numero = document.querySelector("#numero");
const numeroMsg = document.querySelector("#numero-msg");


btn.addEventListener("click", function () {
   lemodal.classList.remove("hidden")
   lemodal.classList.add("flex")

})
sort.addEventListener("click", function () {
   lemodal.classList.remove("flex")
   lemodal.classList.add("hidden")

})
annule.addEventListener("click", function () {
   lemodal.classList.remove("flex")
   lemodal.classList.add("hidden")

})
ajout.addEventListener("click", function (event) {
   
});


// c pour ajour de nom de joueur
nom.addEventListener("input", function () {
   const valeur = nom.value.trim();
   const regex = /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;

   if (valeur === "") {
      nomMsg.textContent = " ";
   } else if (!regex.test(valeur)) {
      nomMsg.textContent = "entrez le nom sans chiffres";
   } else {
      nomMsg.textContent = "";

   }
});


// c pour ajouter le num de joueur
numero.addEventListener("input", function () {
    const valeur = numero.value.trim();
    const regex = /^(0?[1-9]|[1-9][0-9])$/;

    if (valeur === "") {
        numeroMsg.textContent = "";
    } else if (!regex.test(valeur)) {
        numeroMsg.textContent = "Entrez un numéro entre 1 et 99";
    } else {
        numeroMsg.textContent = "";
    }
});


