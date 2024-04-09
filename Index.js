let luokka;

document.getElementById("lähetys").onclick = function(){
    luokka = document.getElementById("joo").value
    document.getElementById("p1").textContent = `Hello ${luokka}.`
}
