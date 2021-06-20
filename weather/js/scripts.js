function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide")
}

let d = new Date();
let year = d.getFullYear();
document.getElementById("currentdate").textContent = year

var lastMod = document.lastModified;
document.getElementById("lastmodified").textContent = lastMod
