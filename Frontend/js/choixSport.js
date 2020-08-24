"use strict !";

let programme=[
  ["des fentes avant", "15 répétitions/jambes", 1 ],
  ["20 pompes, 20 abdos, 20 jump and jack", "3 circuits", 1 ],
  ["des squats", "20 répétitions", 1 ],
  ["15pompes, 15 abdos, 15 jump and jack", "5 circuits", 2 ],
  ["la planche", "1 min", 2 ],
  ["des burpees", "15 répétitions", 2],
  ["des burpees + pompes", "2 X 15 répétitions", 3 ],
  ["20 pompes, 20 abdos, 20 jump and jack", "8 circuits", 3 ],
  ["des squats and jump", "2 X 15 répétitions", 3 ],

]

function gym(){
  var choix = document.getElementById("liste");
  let exp = choix.options.selectedIndex;


  for (let i = 0; i < programme.length; i++){


    if(exp == 0){
      if(programme[i][2] == "1"){

        document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire ' + programme[1][0] + ' en tout  ' + programme[1][1] + '</p>';
        break;
      }
    }


    else if(exp == 1){
        if(programme[i][2] == "2"){

          document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire ' + programme[3][0] + ' en tout  ' +programme[3][1] + '</p>';
          break;


        }
    }

    else if(exp == 2){
        if(programme[i][2] == "3"){

          document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire:' + ' ' + programme[7][0] + ' ' + ' en tout ' + programme[7][1] + '</p>';
          break;

        }
    }

  }


}


/**
 * Choisir au hasard un exercice dans le tableau.
 *
 * @param {*} programme - reçoi un array d'exercices
 *
 * @return {*} Renvoie un élement du tableau pris au hasard.
 */


function rand_om(){

  let randPro = programme[Math.floor(Math.random()*programme.length)];
  document.getElementById('afaire').innerHTML = '<p>' + 'Allez hop   '+ randPro[0] + ' et en tout  ' + randPro[1] +  '</p>';
  console.log(typeof randPro);



}






function ajouter(){
  let myFit;
  let ex_ercices, nbFois, diffic;
  ex_ercices = document.getElementById('fit').value;
  nbFois = document.getElementById('repet').value;
  diffic = document.getElementById('monNiveau');
  let myLevel = diffic.options.selectedIndex;
  myFit = new Array (ex_ercices, nbFois, myLevel);

  myFit[0]=ex_ercices;
  myFit[1]=nbFois;
  myFit[2]=myLevel + 1;

  console.log(typeof myFit);
  programme.push(myFit);
  console.log(programme);

  document.getElementById("mine").innerHTML += '<ul>' +'<li>' + myFit.join("-") + '</li>' +'</ul>';










}
