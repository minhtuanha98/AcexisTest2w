'use strict'
function createTable(){
	var row = document.getElementById('rows').value;
    var col = document.getElementById('cols').value;
	var table = document.getElementById('table');
	const max = 1000;
	const min = 1;
	for(let i = 0 ; i < row; i++){
		const tr = document.createElement('tr');
		tr.classList.add("first");
		for(let j = 0 ; j < col; j++){
			const td = document.createElement('td');
			td.innerHTML = Math.round(Math.random()*(max-min));
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

const num = 1;
function load(e){
 	var mybutton = document.getElementById("button");
 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
	}else {
	    mybutton.style.display = "none";
	}
}
window.addEventListener('scroll', load);
// document.addEventListener('DOMNodeInserted',sortCol);
