save();
function save (){
    var downloadTimer = setInterval(function(){
        localStorage.setItem('Golds', golds);
        localStorage.setItem('Minions', JSON.stringify(minions));
        console.log(localStorage);
        //alert("Save Succesfully");
    },60000)
}

function load (){
    var test = 0;
if (localStorage.length == 0){
    //do Nothing

} else {
    golds = parseInt(localStorage.getItem('Golds'));
    minions = JSON.parse(localStorage.getItem("Minions"));

    update();
    alert("Load Succesfully");
    //console.log(localStorage);
    //console.log(golds);
    //console.log(minions);
    }
}


function clear (){
    localStorage.clear();
    console.log(localStorage);
}


function test(message){
notify({
    message: message,
    color: "danger",
    timeout: 5000
  });
}