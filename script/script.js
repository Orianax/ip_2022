/*Begin vars handen met gekleurde nagels*/
var handen = document.querySelector(".hand");

var groeneLak = document.querySelector(".nagellakgroen");

var rozeLak = document.querySelector(".nagellakroze");

var blauweLak = document.querySelector(".nagellakblauw");

var oranjeLak = document.querySelector(".nagellakoranje");

var parel = document.querySelector(".parel")

var diamand = document.querySelector(".diamand")
/*Eind vars handen met gekleurde nagels*/


/*Begin kleur nagellak veranderd met function - Math random voor 4 verschillende tekste */
function handleGroen(){
    handen.src = "./img/handgroen.png"; 
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")
}

groeneLak.addEventListener("click", handleGroen);


function handleRoze(){
    handen.src = "./img/handroze.png";
    complimentWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = complimentje[complimentWeergeven];
    console.log("complimentje")
}

rozeLak.addEventListener("click", handleRoze);


function handleBlauw(){
    handen.src = "./img/handblauw.png";
    complimentWeergeven = Math.floor(Math.random() *3);
    pElement.textContent = complimentje[complimentWeergeven];
    console.log("complimentje")
}

blauweLak.addEventListener("click", handleBlauw);

function handleOranje(){
    handen.src = "./img/handoranje.png";
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")

}

oranjeLak.addEventListener("click", handleOranje);
/*Eind kleur nagellak veranderd met function - Math random voor 4 verschillende tekste */


/*complimentjes of beledinging tekst*/
var pElement = document.querySelector(".tekst")

var complimentWeergeven = Math.floor(Math.random()*4);

var complimentje = ["Prachtig!😊", "Geweldig!😍", "Goed gedaan!⭐️","Perfect!🦄"]

var beledigingWeergeven = Math.floor(Math.random()*4);

var belediging = ["Lelijk..🤢", "Bah..🤮", "Verschrikkelijk..🤬", "Hoe durf je..🤕"]
/*eind complimentjes of beledinging tekst*/


/*diamand en parels op nagels*/
var handDiamant = document.querySelector(".handDiamand")

function diamantjesOpHand(){
    transparantefoto.src = "images/handdiamand.png";}


/*naam veranderen bovenin scherm*/
var input = document.querySelector("input");

var p = document.querySelector(".jouwnaam");

var button = document.querySelector("button");

button.addEventListener("click", () => {

p.textContent = input.value;

});
/*eind naam veranderen bovenin scherm*/
