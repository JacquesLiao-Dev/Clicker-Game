gps_modifier();

function addGold(x) {
  let totalMinion = 0;
  minions.forEach(item => totalMinion += (item.owned));
  if (totalMinion >= 50){
    x *= 2;
  }
  if (totalMinion >= 100){
    x *= 2;
  }
  if (totalMinion >= 150){
    x *= 2;
  }
  if (totalMinion >= 200){
    x *= 2;
  }
  golds += x;
    
  displayGolds();
}

function displayGolds(){
    document.getElementById('gold').innerHTML = (golds.toFixed() + " Golds").toString();
}

function gps_modifier(){
    var downloadTimer = setInterval(function(){
            getGPS();
            golds += gps;
            document.getElementById('gps').innerHTML = ("per second: "+gps.toFixed(1)).toString();
            displayGolds();
    }, 1000)
}

 //calc gps number
 function getGPS(){
  gps = 0;
  minions.forEach(item => gps += ((item.gps * item.owned)));
  //update();
  }

  function update (){
    var downloadTimer = setInterval(function(){
      minions.forEach(function(item) {

        document.getElementById('gps').innerHTML = ("per second: "+gps.toFixed(1)).toString();
        document.getElementById('MinionGps'+item.id).innerHTML = (item.gps.toFixed(1)+" Per/s").toString();
        document.getElementById('minionCost'+item.id).innerHTML = (item.cost+" Golds").toString();
        document.getElementById('Minion'+item.id).innerHTML = (item.owned+" in Stock").toString();  
        //console.log("update")
      });
    }, 0)
  }


  /*function buyMinion(id){
    var item = minions.find(item => item.id === id);
    if (golds >= item.cost){
    golds -= item.cost;
    item.owned += 1;
    item.cost = Math.round(item.cost * 1.15);
    update();
    displayGolds();
    } else {
      alert("Not enought GOLDS!!")
    }
  }*/

   //search elemt in array by id
   function buyMinion(id){
    var item = minions.find(item => item.id === id);
    let nbMinion = 0;
    if (golds >= item.cost){
      console.log("ok")
    golds -= item.cost;
    item.owned += 1;
    item.cost = Math.round(item.cost * 1.15);
    } else {
      alert("Not enought GOLDS!!");
    }
    nbMinion += item.owned;
    if (nbMinion == 25){
        item.gps *= 2;
    }
    if (nbMinion == 50){
      item.gps *= 2;
    }
    if (nbMinion == 100){
      item.gps *= 2;
    }
    if (nbMinion == 250){
      item.gps *= 2;
    }
    if (nbMinion == 1000){
      item.gps *= 2;
    }
    update();
    displayGolds();
  }

/*function test2(){
  var text = ["text1", "tex2", "text3", "text4"];
  text.forEach(function(el) {
      var div = document.createElement("div");
      div.className = "finalBlock";
      div.innerHTML = el;
      document.body.appendChild(div);
  });*/
  
/*function teste(y) {
  let y= 1;
  let ttMinion = 0;
  let i = 0;
  minions.forEach(item => ttMinion += (item.owned));
  if (ttMinion >= 2){
    y *= 2;
    console.log("ok");
  } else {
    console.log("no");
  }
}*/