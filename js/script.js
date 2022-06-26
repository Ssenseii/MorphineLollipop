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

///randomize aeeat function
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    if ( i==0 ) return this;
    while (--i) {
        j = math.floor(math.random()*(i+1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

var images = [
    { src: 'scss/images/Mask/1.png', href : 'index.html'},
    { src: 'scss/images/Mask/2.png', href : 'index.html'},
    { src: 'scss/images/Mask/3.png', href : 'index.html'},
    { src: 'scss/images/Mask/4.png', href : 'index.html'},
    { src: 'scss/images/Mask/5.png', href : 'index.html'},
    { src: 'scss/images/Mask/6.png', href : 'index.html'},
    { src: 'scss/images/Mask/7.png', href : 'index.html'},
    { src: 'scss/images/Mask/8.png', href : 'index.html'},
    { src: 'scss/images/Mask/9.png', href : 'index.html'},
    { src: 'scss/images/Mask/10.png', href : 'index.html'},
];

$(document).ready(function(){

    var img, anchor, div;
    var cont= $('.flash__image');
    cont.children().remove();

    images.shuffle();

    for (var i=0; i<4; i++){
        img = $('<img />', {src : images[i].src});
        anchor = $('<a></a>', { href: images[i].href, target: '_self' });
        div = $('<div></div>', { class: 'flash__image-item' });
        anchor.append(img);
        div.append(anchor);
        cont.append(div);
    }
});