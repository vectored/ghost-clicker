var killed = 0;
var clicks = 1;
// FLASHLIGHT VARIABLES
var light = 0; 
var lightbought = 0; 
var lightprice = 20;
// VACCUM VARIABLES
var vaccum = 0; 
var vaccumbought = 0; 
var vaccumprice = 75;
// SALT VARIABLES
var salt = 0; 
var saltbought = 0; 
var saltprice = 100;
// GHOST BUSTER VARIABLES
var busters = 0; 
var bustersbought = 0;
var bustersprice = 125; 
// GHOST BUSTER VARIABLES
var priest = 0; 
var priestsbought = 0;
var priestsprice = 175; 
var cps = 0;
var gpc = 1;

 var song = new Audio("mytime.mp3");

 
// SHOP 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}

// VACCUM 

function vac() {
  if (killed < vaccumprice) {
    alert("you haven't killed enough ghosts to buy the VACCUM. try again after you kill more ghosts.")
  }

else {
vaccumbought = vaccumbought + 1;
vaccum = vaccum + 10;
clicks = clicks + vaccum
killed = killed - vaccumprice;
vaccumprice = vaccumprice * 4;
counter.innerHTML = killed;
 vaccump.innerHTML = vaccumprice; 
 vaccumo.innerHTML = vaccumbought;
  gpc = gpc + vaccum;
  clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  } }

function increment() {
  killed = killed + clicks;
  counter.innerHTML = killed;
  vaccump.innerhtml = vaccumprice;
   vaccumo.innerHTML = vaccumbought; }


// FLASHLIGHT
function lig() {
  if (killed < lightprice) {
alert("you haven't killed enough ghosts to buy the FLASHLIGHT. try again after you kill more ghosts.") }

else {
light = light + 1;
lightbought = lightbought + 1;
clicks = clicks + light
killed = killed - lightprice;
lightprice = lightprice * 2;
counter.innerHTML = killed;
 lightp.innerHTML = lightprice; 
lighto.innerHTML = lightbought; 
     gpc = gpc + light;
  clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  } }

function increment() {
  killed = killed + clicks;
  counter.innerHTML = killed;
  vaccump.innerhtml = vaccumprice; }

// SALT SHAKER
function sal() {
  if (killed < saltprice) {
alert("you haven't killed enough ghosts to buy SALT. try again after you kill more ghosts.")  }

else {
salt = salt + 1;
saltbought = saltbought + 1;
clicks = clicks + salt
killed = killed - saltprice;
saltprice = saltprice * 5;
counter.innerHTML = killed;
 saltp.innerHTML = saltprice; 
salto.innerHTML = saltbought; 
  gpc = gpc + salt;
  clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  
  } }



// GHOST BUSTERS


function bust() {
  if (killed < bustersprice) {
alert("you haven't killed enough ghosts to buy the GHOST BUSTER. try again after you kill more ghosts.")  }

else {
bustersbought = bustersbought + 1;
busters = busters + 1;
killed = killed - bustersprice;
bustersprice = bustersprice * 3;
counter.innerHTML = killed;
 bustersp.innerHTML = bustersprice; 
 busterso.innerHTML = bustersbought;
 cps = cps + busters;
  clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  } }

  

// RELIGION 100

function prie() {
   if (killed < priestsprice) {
alert("you haven't killed enough ghosts to buy the PRIEST. try again after you kill more ghosts.") }

else {
priestsbought = priestsbought + 1;
priest = priestsbought * 10;
killed = killed - priestsprice;
priestsprice = priestsprice * 3;
counter.innerHTML = killed;
 priep.innerHTML = priestsprice; 
 prieo.innerHTML = priestsbought;
cps = cps +  priest;
  clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  }
}

// AUTOCLICKER TEST TEST

setInterval (function() {
  killed = killed + busters + priest; 
 counter.innerHTML = killed;
clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  } 
, 1000) 

function increment() {
  if (killed <= 1) {
    song.loop = true;
song.play()
killed = killed + clicks;
counter.innerHTML = killed;
vaccump.innerhtml = vaccumprice;
gpc = gpc + vaccum + light + salt;
cps = cps + busters + priest;
clicked.innerHTML = gpc;
seconded.innerHTML = cps;
  }
  else { 
  killed = killed + clicks;
  counter.innerHTML = killed;
  vaccump.innerhtml = vaccumprice; } }



