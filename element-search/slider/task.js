"use strict"

// let prev = document.querySelector('slider__arrows slider__arrow slider__arrow_prev'),
//     next = document.querySelector('slider__arrows slider__arrow slider__arrow_next');

// let images = document.querySelectorAll('slider__item img');
// let i =0;

// prev.onclick = function() {
// 	images[i].className = "";
// 	i = i--;
// 	if (i < 0) {
// 		i = images.length -1;
// 	}
	
// };

// next.onclick = function() {
// 	images[i].className = "";
// 	i = i++;
// 	if( i >= images.length){
//       i = 0;  
//     }
    
// };


let slide_left = document.getElementsByClassName('slider__arrow_prev'),
    slide_right = document.getElementsByClassName('slider__arrow_next'),
    total_img = document.getElementsByTagName('img'),
    idx = 0; // Индекс текущего слайда.

slide_right.addEventListener('click', moveLeft);
function moveLeft(){
    slide_left.style.display = 'block';
    total_img[idx].style.display = 'none'; // Скрываем текущий слайд
    total_img[++idx].style.display = 'block'; // Инкрементируем индекс и показываем следующий слайд
    
}

//Аналогично, только для левой стрелки
slide_left.addEventListener('click', moveRight);
function moveRight(){
    slide_right.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[--idx].style.display = 'block';
    
}