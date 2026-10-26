const lemodal = document.querySelector("#mymdl");
const btn = document.querySelector("#clik");
const sort = document.querySelector("#fermer")
const annule = document.querySelector("#annuler")

const nom = document.querySelector("#nom");
const nomMsg = document.querySelector("#nom-msg");
const numero = document.querySelector("#numero");
const numeroMsg = document.querySelector("#numero-msg");
const posteMsg = document.querySelector("#poste-msg")
const regexNom = /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;
const regexNumero = /^(0?[1-9]|[1-9][0-9])$/;
const ListeJoueurs = document.querySelector("#liste-joueurs")




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

// c pour ajour de nom de joueur
nom.addEventListener("input", function () {
   const valeur = nom.value.trim();
   const regex = /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;

   if (valeur === "") {
      nomMsg.textContent = "";
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
// c pour afficher le msg dereur si les champs vide
const ajout = document.querySelector("#ajouter")
function ajouterJoueur() {
   const valeurNom = nom.value;
   const valeurNumero = numero.value;

   const poste = document.querySelector('input[name="poste"]:checked');

   if (valeurNom === "") {
      nomMsg.textContent = "Le nom de joueur est obligatoire";

   } else if (!regexNom.test(valeurNom)) {
      nomMsg.textContent = "Entrez un nom valide";

   } else {
      nomMsg.textContent = "";
   }
   if (valeurNumero === "") {
      numeroMsg.textContent = "le numero est obligatoire";

   } else if (!regexNumero.test(valeurNumero)) {
      numeroMsg.textContent = "Entrez un nbr entre 1 et 99";

   } else {
      numeroMsg.textContent = "";

   }
   if (poste === null) {
      posteMsg.textContent = "choisissez un poste";

   } else {
      posteMsg.textContent = "";
   }

   // append
   
      const carte = document.createElement("div");
     carte.className= "bg-slate-500 border border-slate-900 rounded-xl p-4 w-full mt-3";
     carte.innerHTML = `<div class="flex items-center justify-between mb-3" >
      <div class=" flex items-center space-x-3">
         <div class="w-8 h-8 rounded-full bg-slate-700 text-white text-xs font-bold flex items-center justify-center border border-amber-700">
${valeurNumero}
         </div>
         <div>
            <h4 class="text-white font-bold text-sm" >${valeurNom}</h4>
            <span class="text-slate-900 text-sm">${poste.value}</span>
            </div>
      </div>
       <div class="flex items-center space-x-3 text-slate-400 text-sm" >
            <button type="button" class="cursor-pointer">✏️</button>
            <button type="button" class="cursor-pointer">🗑️</button>
     </div>
      <select class="w-full bg-indigo-950 text-white text-xs border border-slate-700 p-2.5 cursor-pointer">
        <option value="" selected disabled>Sur le banc</option>
        <option value="GB">GB - Gardien</option>
        <option value="DG">DG - Défenseur gauche</option>
        <option value="DC1">DC - Défenseur central 1</option>
        <option value="DC2">DC - Défenseur central 2</option>
        <option value="DD">DD - Défenseur droit</option>
        <option value="MG">MG - Milieu gauche</option>
        <option value="MC">MC - Milieu central</option>
        <option value="MD">MD - Milieu droit</option>
        <option value="BU1">BU - Buteur 1</option>
        <option value="BU2">BU - Buteur 2</option>
    </select>
     </div>
    
     `
     
     ListeJoueurs.appendChild(carte);

}
ajout.addEventListener("click", ajouterJoueur);









