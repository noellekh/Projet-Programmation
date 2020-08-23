"use strict !";

let programme=[
  ["1", "des fentes avant", "15 répétitions/jambes", 1 ],
  ["2", "20 pompes, 20 abdos, 20 jump and jack", "3 circuits", 1 ],
  ["3", "des squats", "20 répétitions", 1 ],
  ["4", "15pompes, 15 abdos, 15 jump and jack", "5 circuits", 2 ],
  ["5", "la planche", "1 min", 2 ],
  ["6", "des burpees", "15 répétitions", 2],
  ["7", "des burpees + pompes", "2 X 15 répétitions", 3 ],
  ["8", "20 pompes, 20 abdos, 20 jump and jack", "8 circuits", 3 ],
  ["9", "des squats and jump", "2 X 15 répétitions", 3 ],

]

function gym(){
  var choix = document.getElementById("liste");
  let exp = choix.options.selectedIndex;


  for (let i = 0; i < programme.length; i++){


    if(exp == 0){
      if(programme[i][3] == "1"){

        document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire ' + programme[1][1] + ' en tout  ' + programme[1][2] + '</p>';
        break;
      }
    }


    else if(exp == 1){
        if(programme[i][3] == "2"){

          document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire ' + programme[3][1] + ' en tout  ' +programme[3][2] + '</p>';
          break;


        }
    }

    else if(exp == 2){
        if(programme[i][3] == "3"){

          document.getElementById('afaire').innerHTML = '<p>' + 'Vous allez faire:' + ' ' + programme[7][1] + ' ' + ' en tout ' + programme[7][2] + '</p>';
          break;

        }
    }

  }


}



function rand_om(){

  let randPro = programme[Math.floor(Math.random()*programme.length)];
  document.getElementById('afaire').innerHTML = '<p>' + 'Allez hop   '+ randPro[1] + ' et en tout  ' + randPro[2] +  '</p>';



}
