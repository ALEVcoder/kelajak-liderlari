// <!-- --------------------- KELAJAK LIDERLRI KLUBI ------------------- -->

window.addEventListener("scroll", function() {
    var NavScroll = document.getElementById('nav');
    NavScroll.classList.toggle('bgg', window.scrollY > 15);
});

// Header slider
let index = 1;
sliderShow(index);

function sliderShow(n) {
    let slider = document.getElementsByClassName('myslider');
    let dot = document.getElementsByClassName('dot');
    console.log(slider);
    if (n > slider.length) { index = 1; }
    console.log(slider.length);
    if (n < 1) { index = slider.length; }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace('active', '');
    }
    slider[index - 1].style.display = 'block';
    dot[index - 1].className += ' active';
}

function plusSlider(n) {
    sliderShow(index += n);
}

function clickDot(n) {
    sliderShow(index = n);
}

// <!-- --------------------- KELAJAK LIDERLRI KLUBI ------------------- -->
// <!-- --------------------- BY ALEVCODER ----------------------------- -->