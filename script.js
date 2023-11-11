let links = document.querySelectorAll('.aSilka');
let targetID; //переменная, в которую запишем id целевого элемента
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault(); //отключить стандартное поведение
        targetID = element.getAttribute('href'); //получить id целевого элемента из атрибута href ссылки
        document.querySelector(targetID).scrollIntoView({ //метод для управления прокруткой
            behavior: 'smooth', //анимация прокрутки auto - резко, smooth - плавно
            block: 'start' //вертикальное выравнивание
        })
    })
})









// const cat = document.getElementById("cat");
// const eat = document.getElementById("eat");
// let miniPlay = document.getElementById('elem');


// function jump() {
//     if (cat.classList != "jump"){
//         cat.classList.add("jump")
//     }
//     setTimeout( function() {
//         cat.classList.remove("jump")
//     }, 300)
// }


// document.addEventListener("keydown", function(event){
//     jump();
// })



// let isAlive = setInterval(function() {
    // let catBottom = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));
    // let eatLeft = parseInt(window.getComputedStyle(eat).getPropertyValue("left"));
    // let catRight = parseInt(window.getComputedStyle(cat).getPropertyValue("right"));
    // let eatTop = parseInt(window.getComputedStyle(eat).getPropertyValue("top"));

    // if (catRight >= eatLeft && catBottom <= eatTop){
    //     miniPlay.innerHTML = "<img class='miniPictute' src ='GameOver.avif' alt=''>";
    // }
    
// }, 10);




$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        autoControls: true,
        // mode: 'horizontal',
        // minSlides: 4,
        // maxSlides: 4,
        // moveSlides: 1,
        // // shrinkItems: false,
        // pagination: false,
        // slideSelector: 'div.item'
        

    });
    console.warn('into slides');
});
