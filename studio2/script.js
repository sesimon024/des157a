(function(){
    'use strict';

    // all functions below are assigned to one of the images in the above code. They are here so that when you click on one of the images the id will be removed and a class will be added to change from blurry to clear images and load the text, changing it from 0 to 1 opacity and running the animation.

    const img1 = document.getElementById('img1');
    img1.addEventListener('click', myFunction);

    const img2 = document.getElementById('img2');
    img2.addEventListener('click', myFunction2);

    const img3 = document.getElementById('img3');
    img3.addEventListener('click', myFunction3);

    const img4 = document.getElementById('img4');
    img4.addEventListener('click', myFunction4);

    const img5 = document.getElementById('img5');
    img5.addEventListener('click', myFunction5);


    function myFunction() {
        const img1 = document.getElementById('img1');
        img1.removeAttribute('id');
        img1.classList.add('img1Clicked');

        const img1Text = document.getElementById('img1Text');
        img1Text.removeAttribute('id');
        img1Text.classList.add('img1TextClicked');
    }

    function myFunction2() {
        const img2 = document.getElementById('img2');
        img2.removeAttribute('id');
        img2.classList.add('img2Clicked');

        const img2Text = document.getElementById('img2Text');
        img2Text.removeAttribute('id');
        img2Text.classList.add('img2TextClicked');
    }

    function myFunction3() {
        const img3 = document.getElementById('img3');
        img3.removeAttribute('id');
        img3.classList.add('img3Clicked');

        const img3Text = document.getElementById('img3Text');
        img3Text.removeAttribute('id');
        img3Text.classList.add('img3TextClicked');
    }

    function myFunction4() {
        const img4 = document.getElementById('img4');
        img4.removeAttribute('id');
        img4.classList.add('img4Clicked');

        const img4Text = document.getElementById('img4Text');
        img4Text.removeAttribute('id');
        img4Text.classList.add('img4TextClicked');
    }

    function myFunction5() {
        const img5 = document.getElementById('img5');
        img5.removeAttribute('id');
        img5.classList.add('img5Clicked');

        const img5Text = document.getElementById('img5Text');
        img5Text.removeAttribute('id');
        img5Text.classList.add('img5TextClicked');
    }
})();