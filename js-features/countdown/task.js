"use strict"

function timer(){
let obj=document.getElementById('timer');
obj.innerHTML--;
    if (obj.innerHTML==0){
        alert('Вы победили в конкурсе!');
    } else {
        setTimeout(timer,1000);
    }
}
setTimeout(timer,1000);



