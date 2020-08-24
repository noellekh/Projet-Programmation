"use strict !";



/**
 * Prendre en considération le type d'activité de la personne
 *
 * @param {number} x - total calorique sans l'activité
 *
 * @return {number} Renvoie le vrai total calorique en tenant compte de l'activité
 */


let tot;

function activity(x){
  let act = document.getElementById("activ");
  let opt = act.options.selectedIndex;


  switch (opt) {
    case 0:
      tot = x*1.725;
      console.log(tot);
      break;

    case 1:
      tot = x*1.55;
      console.log(tot);
      break;

    case 2:
      tot = x*1.37;
      console.log(tot);
      break;

    case 3:
      tot = x*1.2;
      console.log(tot);
      break;


    default:
      break;

    return tot;




  }


}


function CalculCal(){
  let t, p, a, s, res;
  t = parseInt(document.getElementById("taille").value);
  p = parseInt(document.getElementById("poids").value);
  a = parseInt(document.getElementById("age").value);
  s = document.form1.sexe;
  you = document.getElementById("prenom").value;
  let champ = document.getElementsByTagName("input");



  console.log(s);
  console.log(champ);
  console.log(you);


  for(i = 0; i < champ.length; i++){
    if(!champ[i].value){
      document.getElementById("erreur").innerHTML = 'Champs manquant !';
      break;
      console.log(champ[i]);

    }

    else{
      document.getElementById("erreur").innerHTML = '';

    }
  }




  if(s.value == "femme"){
    res = 10*p+6.25*t-5*a-161;
    activity(res);
    console.log(res);
    document.getElementById("VotreCal").innerHTML = '<p>'+ 'Bonjour  ' + you + '!' + '</p>' +
                                                      '<p>' + 'Pour rester en bonne santé, tu dois consommer  ' +  tot.toFixed(2) + ' calories par jours !' + '</p>';


  }

  else if(s.value == "homme"){
    res = 10*p+6.25*t-5*a+5;
    activity(res);
    console.log(res);
    document.getElementById("VotreCal").innerHTML = '<p>'+ 'Bonjour  ' + you + '!' + '</p>' +
                                                      '<p>' + 'Pour rester en bonne santé, tu dois consommer  ' +  tot.toFixed(2) + ' calories par jours !' + '</p>';

  }





}
