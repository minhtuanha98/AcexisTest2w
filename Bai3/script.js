"use strict"
let snake = [];
let size = 15;
let direct;
snake[0] = {
    x: 3 * size,
    y: 3 * size
};

let food = {
    x: Math.floor(Math.random() * 10) * size,
    y: Math.floor(Math.random() * 10) * size
};
document.addEventListener("keydown", getDirect);

const mode = document.querySelector('#custom');
const cv = document.getElementById('canvas');
const ct = cv.getContext('2d');
ct.strokeStyle = "red";
ct.strokeRect(0,0,600,600);

function collision(head, array){
    for(var i = 0; i < array.length; i++)
        if(head.x == array[i].x && head.y == array[i].y) return true;
    return false;
}

function getDirect(event){
    let key = event.keyCode;
    if(key== 37 && direct != "RIGHT")
        direct = "LEFT";
    if(key== 38 && direct != "DOWN")
        direct = "UP";
    if(key== 39 && direct != "LEFT")
        direct = "RIGHT";
    if(key== 40 && direct != "UP")
        direct = "DOWN";
}

function getDraw(){
    ct.fillStyle = "#fff";
    ct.fillRect(0,0,600,600);
    ct.strokeStyle = "#fff";
    ct.strokeRect(0,0,600,600);
    snake.forEach(function(part){
        ct.fillStyle = "Black";
        ct.fillRect(part.x,part.y,size,size);
        ct.strokeStyle = "green";
        ct.strokeRect(part.x,part.y,size,size);
    });
    ct.fillStyle ="orange";
    ct.fillRect(food.x,food.y,size,size);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direct == "LEFT"){
        snakeX -=size;
    }
    if(direct == "UP"){
        snakeY -=size;
    }
    if(direct == "RIGHT"){
        snakeX += size;
    }
    if(direct == "DOWN"){
        snakeY += size;
    }

    if(snakeX == food.x && snakeY == food.y){
        food = {
            x: Math.floor(Math.random() * 5+1) * size,
            y: Math.floor(Math.random() * 6+1) * size
        };
    }else{
        snake.pop();
    }
    let snakeHead = {
        x:snakeX,
        y:snakeY
    }

    // if(mode.value == 'modeA'){
    //     console.log("modeA");
    //     snake.unshift(snakeHead);
    // }else if(mode.value == 'modeB'){
    //     console.log("modeB");
    //     snake.unshift(snakeHead);
    // }
    

    if(snakeX < 0 || snakeX > 15*size || snakeY<0 || 
     snakeY > 15*size || collision(snakeHead,snake)){
        console.log("diet");
        clearInterval(game);
    }
    else{
        snake.unshift(snakeHead);
    }
}

let game = setInterval(getDraw,1000);
