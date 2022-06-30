function inser(num)
{
	let number = document.getElementById('p').innerHTML
	
	document.getElementById('p').innerHTML =  number + num
}

function clean () 
{
	document.getElementById('p').innerHTML=""
}

function calcular(){
	let calcular = document.getElementById('p').innerHTML
	if (calcular) {
		document.getElementById('p').innerHTML = eval(calcular);
	}
}

