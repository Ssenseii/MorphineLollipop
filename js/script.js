var preloaderTimer = setInterval(preloaderTimer, 4000);
function preloaderTimer() {
    var loader = document.getElementById("container");
    loader.style.display = "none";
}

var loadEverything = setInterval(Timer, 4000);
var loading = document.getElementById("load");
loading.style.display = "none";
function Timer(){
    var loading = document.getElementById("load");
    loading.style.display = "initial";
}