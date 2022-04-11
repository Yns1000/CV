

function ouvre(id) {
    var popup = document.getElementById(id);
    var tout = document.getElementById('block');
    var boutton = document.getElementsByClassName('bouttonouvr')[0];
    var boutton2 = document.getElementsByClassName('bouttonouvr2')[0];

    popup.style.display = "block";
    tout.style.filter = "blur(20px)";
    boutton.style.opacity = "0";
    boutton2.style.opacity = "0%";


}


function ferme(id) {
    var popup = document.getElementById(id);
    var tout = document.getElementById('block');
    var boutton = document.getElementsByClassName('bouttonouvr')[0];
    var boutton2 = document.getElementsByClassName('bouttonouvr2')[0];

    popup.style.display = "none";
    tout.style.filter = "blur(0px)";
    boutton.style.opacity = "100%";
    boutton2.style.opacity = "100%";
}

function allumeicon1(id){
    var icon = document.getElementById(id);

    icon.style.color = "green";  
}

function allumeicon2(id){
    var icon = document.getElementById(id);

    icon.style.color = "rgb(229, 229, 151)";  
}

function allumeicon3(id){
    var icon = document.getElementById(id);

    icon.style.color = "#fff";  
}

function allumeicon4(id){
    var icon = document.getElementById(id);

    icon.style.color = "rgb(160, 160, 240)";  
}

function allumeicon5(id){
    var icon = document.getElementById(id);

    icon.style.color = "rgb(92, 29, 29)";  
}

function eteinticon (id){

    var icon = document.getElementById(id);

    icon.style.color = "rgb(128, 155, 185)";

}