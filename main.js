const colorBtn = document.querySelector('.colorBtn');
const body = document.querySelector('body');
const colors = ['yellow', 'blue', 'teal', 'green', 'red', 'violet', 'white'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
	//body.style.backgroundColor = 'blue';
	let random = Math.floor(Math.random()* colors.length);
	body.style.backgroundColor = colors[random];
}
const reload = 'JavaScript';

console.log(reload);