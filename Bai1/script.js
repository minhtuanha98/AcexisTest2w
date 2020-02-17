'use strict'
 const cell1 = document.getElementById("cell1"),
        cell2 = document.getElementById("cell2"),
        cell3 = document.getElementById("cell3"),
        cell4 = document.getElementById("cell4"),
        cell5 = document.getElementById("cell5"),
        cell6 = document.getElementById("cell6"),
        cell7 = document.getElementById("cell7"),
        cell8 = document.getElementById("cell8"),
        cell9 = document.getElementById("cell9");
var box = document.querySelectorAll("#main div"), check = 0;
for(var i = 0; i < box.length; i++){
    box[i].onclick = function(){
        if(this.innerText !== "X" && this.innerText !== "O"){
        if(check%2 === 0){
           this.innerText = "X"; 
           start();
           check++;
           
        }else{
           this.innerText = "O";
           start();
           check++;  
        }
    }
    };
}
var turn = document.getElementById("turn");
function optionWin(obj1,obj2,obj3){
    obj1.classList.add("win");
    obj2.classList.add("win");
    obj3.classList.add("win");
    alert(turn.innerText = obj1.innerText + " Win");
} 
function start(){
  if(cell1.innerText !== "" 
    && cell1.innerText === cell2.innerText 
    && cell1.innerText === cell3.innerText)
     optionWin(cell1,cell2,cell3);
   
  if(cell4.innerText !== "" 
    && cell4.innerText === cell5.innerText 
    && cell4.innerText === cell6.innerText)
     optionWin(cell4,cell5,cell6);
  
  if(cell1.innerText !== "" 
    && cell1.innerText === cell5.innerText 
    && cell1.innerText === cell9.innerText)
     optionWin(cell1,cell5,cell9);
  
  if(cell3.innerText !== "" 
    && cell3.innerText === cell5.innerText 
    && cell3.innerText === cell7.innerText)
     optionWin(cell3,cell5,cell7);

  if(cell7.innerText !== "" 
    && cell7.innerText === cell8.innerText 
    && cell7.innerText === cell9.innerText)
     optionWin(cell7,cell8,cell9);
  
  if(cell1.innerText !== "" 
    && cell1.innerText === cell4.innerText 
    && cell1.innerText === cell7.innerText)
     optionWin(cell1,cell4,cell7);
 
  if(cell2.innerText !== "" 
    && cell2.innerText === cell5.innerText 
    && cell2.innerText === cell8.innerText)
     optionWin(cell2,cell5,cell8);
 
  if(cell3.innerText !== "" 
    && cell3.innerText === cell6.innerText 
    && cell3.innerText === cell9.innerText)
     optionWin(cell3,cell6,cell9);  
}

function reset(){
    for(var i = 0; i < box.length; i++){
        box[i].classList.remove("win");
        box[i].innerText = "";
    }
    
}