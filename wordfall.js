var klick = "l";

$(document).keyup(function(e) {
if (e.keyCode == 65) { klick += "a"; countKlick(); }
if (e.keyCode == 66) { klick += "b"; countKlick(); }
if (e.keyCode == 67) { klick += "c"; countKlick(); }
if (e.keyCode == 68) { klick += "d"; countKlick(); }
if (e.keyCode == 69) { klick += "e"; countKlick(); }
if (e.keyCode == 70) { klick += "f"; countKlick(); }
if (e.keyCode == 71) { klick += "g"; countKlick(); }
if (e.keyCode == 72) { klick += "h"; countKlick(); }
if (e.keyCode == 73) { klick += "i"; countKlick(); }
if (e.keyCode == 74) { klick += "j"; countKlick(); }
if (e.keyCode == 75) { klick += "k"; countKlick(); }
if (e.keyCode == 76) { klick += "l"; countKlick(); }
if (e.keyCode == 77) { klick += "m"; countKlick(); }
if (e.keyCode == 78) { klick += "n"; countKlick(); }
if (e.keyCode == 79) { klick += "o"; countKlick(); }
if (e.keyCode == 80) { klick += "p"; countKlick(); }
if (e.keyCode == 81) { klick += "q"; countKlick(); }
if (e.keyCode == 82) { klick += "r"; countKlick(); }
if (e.keyCode == 83) { klick += "s"; countKlick(); }
if (e.keyCode == 84) { klick += "t"; countKlick(); }
if (e.keyCode == 85) { klick += "u"; countKlick(); }
if (e.keyCode == 86) { klick += "v"; countKlick(); }
if (e.keyCode == 87) { klick += "w"; countKlick(); }
if (e.keyCode == 88) { klick += "x"; countKlick(); }
if (e.keyCode == 89) { klick += "y"; countKlick(); }
if (e.keyCode == 90) { klick += "z"; countKlick(); }
if (e.keyCode == 27) { klick = "";}
});

function countKlick() {
  
  var div = document.createElement("div");
  var str = document.createTextNode(klick);  
  div.appendChild(str);
  
  
  div.style.position = 'absolute';
  div.style.top = Math.floor(Math.random() * (0))+ "px";
  div.style.left = Math.floor(Math.random() * (500)) + "px";
  div.className = 'rain';
  div.style.opacity = '0';

  
  $("#letters").append(div);
}

window.setInterval(function(){
  countKlick();
}, 100);
