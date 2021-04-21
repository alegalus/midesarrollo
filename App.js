window.onload = iniciar

function iniciar(){
    let planets = document.getElementById("button1")
    planets.addEventListener("click", clickPlanets)
}

function clickPlanets(){
    let modal1 = document.getElementById("modal1")
    modal1.style.visibility = "visible"
    modal1.style.transition = "all 2s"


}