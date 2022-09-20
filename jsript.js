function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let entier1 = entierAleatoire(1, 100);
  let entier2 = entierAleatoire(1, 100);
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let result = document.getElementById("input");
  let icon = document.querySelector("i");
  
  console.log(entier1);
  console.log(entier2);
  a.innerText = entier1;
  b.innerText = entier2;
  let somme = entier1 + entier2;
  console.log("la somme" + somme);
  let sous = entier1 - entier2;
  console.log("la sous" + sous);
  let mult = entier1 * entier2;
  console.log("la mult" + mult);
  let div = (entier1 / entier2).toFixed(2);
  console.log("la div" + div);
  
  
  // fonction de remise à 0
  function pageAcceuil(params) {
    let display = document.getElementById("display");
    let btn = document.querySelector("button");
    let select = document.getElementById("monselect");
    let confirmer = document.querySelector("span");
  
    display.style.display = "none";
    btn.style.display = "block";
    select.style.display = "none";
    confirmer.style.display = "none";
  }
  
  function deviner() {
    let nbrSaisie = document.querySelector("input").value;
    console.log(nbrSaisie);
    let select = document.getElementById("monselect");
    let bad = document.getElementById("false");
    let good = document.getElementById("true");
    let signe = document.getElementById("signe");
    if (select.value == "valeur1") {
      if (nbrSaisie == somme) {
  
        alert("féliciation la réponse est juste");
        good.style.display = "block";
        pageAcceuil();
      } else{
        alert("Réponse incorrecte , la réponse est : " + somme);
        bad.style.display = "block";
        pageAcceuil();
      } 
    }
  
    if (select.value == "valeur2") {
      if (nbrSaisie == sous) {
        alert("féliciation la réponse est juste");
        good.style.display = "block";
        pageAcceuil();
      } else {
        alert("Réponse incorrecte , la réponse est : " + sous);
        bad.style.display = "block";
        pageAcceuil();
      } 
    }
  
    if (select.value == "valeur3") {
      if (nbrSaisie == mult) {
        alert("féliciation la réponse est juste");
        good.style.display = "block";
        pageAcceuil();
      } else {
        alert("Réponse incorrecte , la réponse est : " + mult);
      bad.style.display = "block";
      pageAcceuil();
      }
    }
  
    if (select.value == "valeur4") {
      if (nbrSaisie == div) {
        alert("féliciation la réponse est juste");
        good.style.display = "block";
        pageAcceuil();
      } else {
        alert("Réponse incorrecte , la réponse est : " + div);
      bad.style.display = "block";
      pageAcceuil();
    }
      }
  }
  
  let nbrSaisie = document.querySelector("input");
  nbrSaisie.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      deviner(event);
    }
  });
  
  let confirmer = document.querySelector("span");
  confirmer.addEventListener("click", deviner);
  
  // le boutton de retour vers la page d'acceuil
  let btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    pageAcceuil();
    input.value = "";
    window.location.reload(); // je l'ai trouvé sur internet, c'est un raffraich des valeurs de le
  });