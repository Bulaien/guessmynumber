

const btn= document.getElementById('btn')
let zufallZahl = Math.floor(Math.random()*20)+1;
const again = document.querySelector(".again")
const ausgabe = document.getElementById ("ausgabe")
let compZahl = document.querySelector("#zufall-zahl")
let guess = 1
let deineZahl = document.querySelector("#deine-zahl")

btn.addEventListener('click', ausgabeNummer)


    function ausgabeNummer() {
        let deineNummer = document.querySelector("#deine-zahl").value;
        if (parseInt(deineNummer) === zufallZahl){
            compZahl.textContent=zufallZahl
            ausgabe.innerHTML=`RICHTIG, du hast ${guess} Versuche gebraucht`;
            document.querySelector("body").style.backgroundColor = "limegreen";
        } else if (parseInt(deineNummer) < zufallZahl) {
            guess++;
            ausgabe.innerHTML="F A L S C H! Die Zahl ist größer!";
            document.querySelector("#deine-zahl").value="";
        }
        else {
            guess++;
            ausgabe.innerHTML="F A L S C H! Die Zahl ist kleiner!";
            document.querySelector("#deine-zahl").value="";
        }
    
        console.log (ausgabe.innerHTML,  parseInt(deineNummer), zufallZahl)
        } 

again.addEventListener('click', function() {
    zufallZahl = Math.floor(Math.random()*20)+1;
    guess = 1;
    compZahl.textContent="?";
    document.querySelector("#deine-zahl").value="";
    document.querySelector("body").style.backgroundColor = "deepskyblue";

})

