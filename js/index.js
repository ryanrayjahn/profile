var clickp = 0;
var clickc = 0;
var clickb = 0;
var clickv = 0;
var clickh = 0;
var clickpo = 0;
var clickm = 0;
var clicks = 0;



function myFunction(){

  clicks++;
  if (clicks >= 11){
    clicks = 0;
  }
  if (clicks == 0){
document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd72fivorROnLsap72h1YevnYAmlMNXLD--JWR-I0YB8MWMJvjrg')";
}
  if  (clicks == 1){
  document.body.style.backgroundColor = "red";
  document.body.style.backgroundImage = "none";
}
  if (clicks == 2){
  document.body.style.backgroundColor = "orange";
  }
  if (clicks == 3){
  document.body.style.backgroundColor = "yellow";
  }
  if (clicks == 4){
  document.body.style.backgroundColor = "pink";
  }
  if (clicks == 5){
  document.body.style.backgroundColor = "purple";
  }
  if (clicks == 6){
  document.body.style.backgroundColor = "indigo";
  }
  if (clicks == 7){
  document.body.style.backgroundColor = "blue";
  }
  if (clicks == 8){
  document.body.style.backgroundColor = "grey";
  }
  if (clicks == 9){
  document.body.style.backgroundColor = "black";
  }
  if (clicks == 10){
  document.body.style.backgroundColor = "white";
  }
}

function hide(){
  document.getElementById('ghost').style.visibility = "hidden";
}

function show() {
document.getElementById('ghost').style.visibility = "visible";
}

function pikachuOn(){
  document.getElementById('Pikachu').src = "http://www.gifimagesdownload.com/wp-content/uploads/2016/03/Pokemon-gif-yellow.gif";
}

function pikachuOff(){
  document.getElementById('Pikachu').src = "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png";
}

function charizardOn(){
  document.getElementById('Charizard').src = "http://i.imgur.com/wzdU7Cd.gif";
}

function charizardOff(){
  document.getElementById('Charizard').src = "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png";
}

function blastoiseOn(){
  document.getElementById('Blastoise').src = "https://media.giphy.com/media/14680Fohw5Zd8Q/giphy.gif";
}

function blastoiseOff(){
  document.getElementById('Blastoise').src = "https://cdn.bulbagarden.net/upload/thumb/0/02/Blasty.png/230px-Blasty.png";
}


function Pikachu(){
  clickp++;
  if (clickp % 2 == 1){
  document.getElementById('Pikachu').style.visibility = "hidden";
  document.getElementById('Pikachu').style.display = "none";
  var pikachu = "Pikchu is a yellow pokemon own by Ash a pokemon trainer. He can shoot lightning bolts from his tail.";
  document.getElementById('Pikachus').innerHTML = pikachu;
 }
 else {
 document.getElementById('Pikachu').style.visibility = "visible";
 document.getElementById('Pikachu').style.display = "block";
document.getElementById('Pikachus').innerHTML = "";
 }
}

function Charizard(){
  clickc++;
  if (clickp % 2 == 1){
  document.getElementById('Charizard').style.visibility = "hidden";
  document.getElementById('Charizard').style.display = "none";
  var charizard = "Charizard is a dragon pokemon that can breathe fire and has the ability to fly.";
  document.getElementById('Charizards').innerHTML = charizard;
 }
 else {
 document.getElementById('Charizard').style.visibility = "visible";
 document.getElementById('Charizard').style.display = "block";
   document.getElementById('Charizards').innerHTML = "";
 }
}

function Blastoise(){
  clickb++;
  if (clickb % 2 == 1){
  document.getElementById('Blastoise').style.visibility = "hidden";
  document.getElementById('Blastoise').style.display = "none";
  var blastoise= "Blastoise is a tortise like pokemon which can squirt water out of his powerful cannon.";
  document.getElementById('Blastoises').innerHTML = blastoise;
 }
 else {
 document.getElementById('Blastoise').style.visibility = "visible";
 document.getElementById('Blastoise').style.display = "block";
   document.getElementById('Blastoises').innerHTML = "";
 }
}

function Venusaur(){
  clickv++;
  if (clickv % 2 == 1){
  document.getElementById('Venusaur').style.visibility = "hidden";
  document.getElementById('Venusaur').style.display = "none";
  var venusaur = "Venusaur is a plant pokemon which can shoot vines out of his back.";
  document.getElementById('Venusaurs').innerHTML = venusaur;
 }
 else {
 document.getElementById('Venusaur').style.visibility = "visible";
 document.getElementById('Venusaur').style.display = "block";
   document.getElementById('Venusaurs').innerHTML = "";
 }
}
