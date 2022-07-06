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

/// button animation

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("flash__text-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

/// Enter

$("#Enter").click(
    function () {
        console.log("clicked...waiting...");

        setTimeout(
            function () {
                window.open(
                    'https://github.com/Ssenseii/MorphineLollipop',
                    '_blank'
                );
            },
            500);
    });


///Search function


function search(){
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('projectTitlesInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("projectTitles");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.opacity = "1";
            } else {
                li[i].style.opacity = "0.5";
            }
        }
}