//Begin vars handen + nagels + decoratie
var handen = document.querySelector(".hand");

var groeneLak = document.querySelector(".nagellakgroen");

var rozeLak = document.querySelector(".nagellakroze");

var blauweLak = document.querySelector(".nagellakblauw");

var oranjeLak = document.querySelector(".nagellakoranje");

var diamandHand = document.querySelector(".diamand")

var parelHand = document.querySelector(".parel")

var goudHand = document.querySelector(".goud")

var cupcakeje = document.querySelector(".cupcake")

//Eind vars handen + nagels + decoratie


//Begin vars complimentjes of beledinging tekst
var pElement = document.querySelector(".tekst")

var complimentWeergeven = Math.floor(Math.random()*4);

var complimentje = ["Prachtig!😊", "Geweldig!😍", "Goed gedaan!⭐️","Perfect!🦄"]

var beledigingWeergeven = Math.floor(Math.random()*4);

var belediging = ["Lelijk..🤢", "Bah..🤮", "Blehh....🤬", "Hoe durf je..🤕"]
//Eind vars complimentjes of beledinging tekst



//Begin kleur nagellak veranderd met function - Math random voor 4 verschillende teksten beledeging. De nagels zijn nog niet compleet
function handleGroen(){
    handen.src = "./img/handgroen.png"; 
    ewwgeluid.play();
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")
}

groeneLak.addEventListener("click", handleGroen);


function handleRoze(){
    handen.src = "./img/handroze.png";
    ewwgeluid.play();
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")
}

rozeLak.addEventListener("click", handleRoze);



function handleBlauw(){
    handen.src = "./img/handblauw.png";
    ewwgeluid.play();
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")
}

blauweLak.addEventListener("click", handleBlauw);


function handleOranje(){
    handen.src = "./img/handoranje.png";
    ewwgeluid.play();
    beledigingWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = belediging[beledigingWeergeven];
    console.log("belediging")
}

oranjeLak.addEventListener("click", handleOranje);

//Eind kleur nagellak veranderd met function - Math random voor 4 verschillende teksten beledeging. De nagels zijn nog niet compleet


//Begin decoratie nagellak veranderd met function - Math random voor 4 verschillende teksten compliment 
function handleDiamandOranje(){
    handen.src = "./img/diamandoranje.png"; 
    wowgeluid.play();
    complimentWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = complimentje[complimentWeergeven];
}

diamandHand.addEventListener("click", handleDiamandOranje);


function handleParelGroen(){
    handen.src = "./img/diamandgroen.png";
    wowgeluid.play();
    complimentWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = complimentje[complimentWeergeven];
}

parelHand.addEventListener("click", handleParelGroen);

function handleHartjeBlauw(){
    handen.src = "./img/diamandblauw.png";
    wowgeluid.play();
    complimentWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = complimentje[complimentWeergeven];
}

goudHand.addEventListener("click", handleHartjeBlauw);


function handleCupcakeRoze(){
    handen.src =  "./img/diamandroze.png";
    wowgeluid.play();
    complimentWeergeven = Math.floor(Math.random() *4);
    pElement.textContent = complimentje[complimentWeergeven];
}

cupcakeje.addEventListener("click", handleCupcakeRoze);
//Eind decoratie nagellak veranderd met function - Math random voor 4 verschillende teksten compliment



//naam veranderen bovenin scherm met input en button
var input = document.querySelector("input");

var p = document.querySelector(".jouwnaam");

var button = document.querySelector("button");

button.addEventListener("click", () => {

p.textContent = input.value;

});
//eind naam veranderen bovenin scherm met input en button


//audio mp3  
var wowgeluid = new Audio("wowsound.mp3");
//Bron https://youtu.be/mCyQ_uddC-c

var ewwgeluid = new Audio ("ewwsound.mp3");
//Bron https://youtu.be/8zAr3zU7jQQ

//eind audio mp3  



//status
var nagelMooi = false
//eind status

//valideren met if else
function valideer(){
    if(isMooi == true){
    wowgeluid.play();
    //+mathfloorrandom
    }else{
        ewwgeluid.play()
    }
}
//eind valideren met if else








