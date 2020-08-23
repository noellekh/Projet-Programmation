"use strict !";


function start(page){
  hide(page);
}


function hide(page){
  document.getElementById('bout_moi').style.display="none";
  document.getElementById('nutrition').style.display="none";
  document.getElementById('sport').style.display="none";
  document.getElementById('bienEtre').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('acceuil').style.display="none";
  document.getElementById(page).style.display="inline";
  


}

