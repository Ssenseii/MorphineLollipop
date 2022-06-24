// var loader = document.getElementById("container");
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// });

var preloaderTimer = setInterval(myTimer, 4000);
function myTimer(){
    var loader = document.getElementById("container");
    loader.style.display = 'none';
}