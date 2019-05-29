"use strict"



let count = 0;
let count = document.getElementById("cookie");
let displayCount = document.getElementById("clicker__counter");
count.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}

window.onload = function () {

    let a = document.getElementById('cookie');
    
    
    a.onclick = function() {
        
        if (this.style.width == '200px') this.style.width = '300px';
        else this.style.width = '200px';
        return false;
    }
}