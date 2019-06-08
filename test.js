const article = document.querySelector('article')

var counter = -1;

function nextSlide() {

    if(counter === 3){
     counter = -1;
    }

    counter++;
    article.style.backgroundImage = `url(img/img-${counter}.jpg)`;
    setTimeout("nextSlide()", 9500);
}

nextSlide();
