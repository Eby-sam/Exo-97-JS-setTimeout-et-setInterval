let buttonStart = document.getElementById("timeout");
let time = 0;
let intervalDiv = document.getElementById("interval-div");
let buttonStop = document.getElementById("interval-stop");

buttonStart.addEventListener("click", function () {
    setTimeout(function () {
        let nDiv = document.createElement("div");
        let divTo = document.getElementById("timeout-div");

        nDiv.style.width = "40%";
        nDiv.style.marginLeft = "auto";
        nDiv.style.marginRight = "auto";
        nDiv.style.marginTop = "4rem";
        nDiv.style.height = "10rem";
        nDiv.style.border = "2px solid black";
        nDiv.style.borderRadius = "5px";
        nDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        divTo.append(nDiv);
    },2000);

});

let buttonInterval = document.getElementById("interval-start");

buttonInterval.addEventListener("click", function () {
    let inconnu = setInterval(function () {
        intervalDiv.innerHTML = time;
        time+=60;
    }, 60000);
    buttonStop.addEventListener("click", function () {
        clearInterval(inconnu);
    })
    console.log(time);
});