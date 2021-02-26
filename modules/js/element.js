addElement();
updateDisplay();
function addElement () {
    minions.forEach(function(item) {

    var section = document.createElement("section")
    var div = document.createElement("div");
    var img = document.createElement("div");
    var srcImg = document.createElement("img");
    var srcInfo = document.createElement("div");
    var contInfo = document.createElement("div");
    var buy = document.createElement("div");
    let name = document.createElement('p');
    let cost = document.createElement('p');
    let gps = document.createElement('p');
    let minion = document.createElement('p');
    let srcBuy = document.createElement('button');


    name.innerHTML = item.name;
    cost.innerHTML = item.cost+" Golds";
    gps.innerHTML = item.gps+" Per/s";
    minion.innerHTML = item.owned+" in Stock";
    srcBuy.innerHTML = "Buy";

    section.setAttribute("id", "minion_inf"+item.id);
    div.setAttribute("id", "content_position"+item.id);
    contInfo.setAttribute("id", "content_info"+item.id);
    buy.setAttribute("id", "content_buy"+item.id);
    srcImg.setAttribute("src", "modules/img/"+item.name+".png");
    srcImg.setAttribute("style", "width: 80px;height: 80px;");
    srcInfo.setAttribute("id", "info"+item.id);
    name.setAttribute("style", "margin-bottom: 4px;font-size: 28px;");
    cost.setAttribute("id", "minionCost"+item.id);
    gps.setAttribute("id", "MinionGps"+item.id);
    gps.setAttribute("style", "padding-left: 15%;");
    minion.setAttribute("id", "Minion"+item.id);
    srcBuy.setAttribute("onclick", "buyMinion("+item.id+")");
    img.setAttribute("id", "image"+item.id);


    document.getElementById('shop').appendChild(section); 
    section.appendChild(div);
    document.getElementById('content_position'+item.id).prepend(img, contInfo, buy); 
    document.getElementById('image'+item.id).prepend(srcImg); 
    document.getElementById('content_info'+item.id).prepend(name, srcInfo); 
    document.getElementById('info'+item.id).prepend(cost, gps); 
    document.getElementById('content_buy'+item.id).prepend(minion, srcBuy); 
  });
}

function updateDisplay() {
  var downloadTimer = setInterval(function(){
  minions.forEach(function (item){
    if (golds < item.cost) {
      document.getElementById('minion_inf'+item.id).setAttribute("style", "background-color: gray;"); 
    } else {
      document.getElementById('minion_inf'+item.id).setAttribute("style", "background-color: #fff0;"); 
    }
  });
}, 0)
}
