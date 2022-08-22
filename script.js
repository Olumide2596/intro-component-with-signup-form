'use strict';
const inputFileds = document.querySelectorAll('input');
const box = document.querySelectorAll('.box');
const errorImg = document.querySelectorAll('.errorImg');

document.querySelector('.submit').addEventListener('click', function (e) {
	console.log('clicked');
	inputFileds.forEach(input => {
		if (input.value.trim() === '') {
			input.style.border = '1px solid red';
			input.value = console.log('EMPTY');
			input.insertAdjacentHTML(
				'afterend',
				`<p style='color:red;text-align:right;'>${input.name} cannot be empty</p>`
			);
		}
	});
});
