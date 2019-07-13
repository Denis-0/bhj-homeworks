"use strict"

// // let prev = document.querySelector('slider__arrows slider__arrow slider__arrow_prev'),
// //     next = document.querySelector('slider__arrows slider__arrow slider__arrow_next');

// // let images = document.querySelectorAll('slider__item img');
// // let i =0;

// // prev.onclick = function() {
// // 	images[i].className = "";
// // 	i = i--;
// // 	if (i < 0) {
// // 		i = images.length -1;
// // 	}
	
// // };

// // next.onclick = function() {
// // 	images[i].className = "";
// // 	i = i++;
// // 	if( i >= images.length){
// //       i = 0;  
// //     }
    
// // };


// let slide_left = document.getElementsByClassName('slider__arrow_prev'),
//     slide_right = document.getElementsByClassName('slider__arrow_next'),
//     total_img = document.getElementsByTagName('img'),
//     idx = 0; // Индекс текущего слайда.

// slide_right.addEventListener('click', moveLeft);
// function moveLeft(){
//     slide_left.style.display = 'block';
//     total_img[idx].style.display = 'none'; // Скрываем текущий слайд
//     total_img[++idx].style.display = 'block'; // Инкрементируем индекс и показываем следующий слайд
    
// }

// //Аналогично, только для левой стрелки
// slide_left.addEventListener('click', moveRight);
// function moveRight(){
//     slide_right.style.display = 'block';
//     total_img[idx].style.display = 'none';
//     total_img[--idx].style.display = 'block';
    
// }

const sliderPrev = document.getElementsByClassName(`slider__arrow_prev`);
const sliderNext = document.getElementsByClassName(`slider__arrow_next`);

const sliderItems = document.getElementsByClassName(`slider__item`);
const sliderItemsLength = sliderItems.length;

const sliderDots = document.getElementsByClassName(`slider__dot`);
const sliderDotsLength = sliderDots.length;

let currentSlide = 0;

sliderNext.item(0).onclick = function() {

    if (currentSlide == (sliderItemsLength - 1)) {
        sliderItems.item(0).classList.add(`slider__item_active`);
        sliderDots.item(0).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide = 0;

    } else if (currentSlide == 0) {
        sliderItems.item(1).classList.add(`slider__item_active`);
        sliderDots.item(1).classList.add(`slider__dot_active`);
        sliderItems.item(0).classList.remove(`slider__item_active`);
        sliderDots.item(0).classList.remove(`slider__dot_active`);
        currentSlide++;

    } else {
        sliderItems.item(+currentSlide + 1).classList.add(`slider__item_active`);
        sliderDots.item(+currentSlide + 1).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide++;
    }
}

sliderPrev.item(0).onclick = function() {
    
    if (currentSlide == sliderItemsLength) {
        sliderItems.item(sliderItemsLength - 2).classList.add(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 2).classList.add(`slider__dot_active`);
        sliderItems.item(sliderItemsLength - 1).classList.remove(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 1).classList.remove(`slider__dot_active`);
        currentSlide = sliderItemsLength - 2;

    } else if (currentSlide == 0) {
        sliderItems.item(sliderItemsLength - 1).classList.add(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 1).classList.add(`slider__dot_active`);
        sliderItems.item(0).classList.remove(`slider__item_active`);
        sliderDots.item(0).classList.remove(`slider__dot_active`);
        currentSlide = (sliderItemsLength - 1);

    } else {
        sliderItems.item(+currentSlide - 1).classList.add(`slider__item_active`);
        sliderDots.item(+currentSlide - 1).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide--;
    }
}

for (let i = 0; i < sliderDotsLength; i++) {
    sliderDots.item(i).onclick = function() {
        
        for (let i = 0; i < sliderDotsLength; i++) {
            if (sliderItems.item(i).classList.contains(`slider__item_active`)) {
                sliderItems.item(i).classList.remove(`slider__item_active`);
                sliderDots.item(i).classList.remove(`slider__dot_active`);
            }
        }

        sliderItems.item(i).classList.add(`slider__item_active`);
        sliderDots.item(i).classList.add(`slider__dot_active`);

        currentSlide = i;
    }
}