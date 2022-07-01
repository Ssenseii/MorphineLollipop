var preloaderTimer = setInterval(preloaderTimer, 1000);
function preloaderTimer() {
    var loader = document.getElementById("container");
    loader.style.display = "none";
}

var loadEverything = setInterval(Timer, 1000);
var loading = document.getElementById("load");
loading.style.display = "none";
function Timer(){
    var loading = document.getElementById("load");
    loading.style.display = "initial";
}

