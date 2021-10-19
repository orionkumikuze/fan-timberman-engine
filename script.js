var se = 1;
var se2 = 0;
var se3 = 0;
var se4 = 0;
var se5 = 0;
var out = 0;
function reset() {
  var se = 1;
  var se2 = 0;
  var se3 = 0;
  var se4 = 0;
  var se5 = 0;
  var out = 0;
}
function tree_quire() {
  se = se2;
  se2 = se3;
  se3 = se4;
  se4 = se5;
  getRandomInt(1,2);
  se5 = out;
  score_update();
}
function score_update() {
  document.getElementById("score").innerHTML = score;
  console.log(se,se2,se3,se4,se5)          
  }
  var score = 0;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      out = Math.floor(Math.random() * (max - min + 1)) + min;
      se = se2;
      document.getElementById("death").innerHTML = death;
      if (se==1)
      {  
        document.getElementById("se").src = "left.png";
      }
      else {
        document.getElementById("se").src = "right.png";
      }
      if (se2==1)
      {
        
        document.getElementById("se2").src = "left.png";
      }
      else {
        document.getElementById("se2").src = "right.png";
      }
      if (se3==1)
      {
        
        document.getElementById("se3").src = "left.png";
      }
      else {
        document.getElementById("se3").src = "right.png";
      }
      if (se4==1)
      {
        
        document.getElementById("se4").src = "left.png";
      }
      else {
        document.getElementById("se4").src = "right.png";
      }
      if (se==5)
      {
        
        document.getElementById("se5").src = "left.png";
      }
      else {
        document.getElementById("se5").src = "right.png";
      }
      
    }

    var death = 1;
    window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
    }

    switch (event.key) {

      case "ArrowLeft":
      if (se==2){
        document.getElementById("clicked").innerHTML = "dead";
        score = 0;
        reset();
      }
      else {
        score += 1;
        document.getElementById("clicked").innerHTML = "";
        score_update();
        tree_quire();
      }
      getRandomInt(1,2);
      break;
      case "ArrowRight":
      if (se==1) {
        document.getElementById("clicked").innerHTML = "dead";
        score = 0;
        score_update();
        reset();
      }
      else {
        score += 1;
        document.getElementById("clicked").innerHTML = "";
        score_update();
        tree_quire();
      }

      getRandomInt(1,2);
      break;
      
      default:
      return; // Quit when this doesn't handle the key event.
  }
})