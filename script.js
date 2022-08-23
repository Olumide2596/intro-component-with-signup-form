'use strict';
const inputFileds = document.querySelectorAll('input');
const box = document.querySelectorAll('.box');

document.querySelector('.submit').addEventListener('click', function (e) {
	console.log('clicked');
	inputFileds.forEach(input => {
		if (input.value.trim() === '') {
			input.style.border = '2px solid red';
			input.nextSibling.remove();

			input.insertAdjacentHTML(
				'afterend', //ADD THE IMG ELEMENT TOO
				`<div class="errorMsg"><img
            src="images/icon-error.svg"
            class="errorImg"
            alt=""
         />
            <p style='color:red;text-align:right; margin-top:5px'>${input.name} cannot be empty</p></div>`
			);
		} else {
			input.style.border = '1px solid var(--GrayishBlue)';
			input.nextSibling.textContent = '';
		}
		//
	});
});

console.log(box);
