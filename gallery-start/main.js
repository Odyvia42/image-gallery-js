const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];




/* Looping through images */
for (const image of imageFilenames) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', event => displayedImage.setAttribute('src', event.target.getAttribute('src')));

}


/* Wiring up the Darken/Lighten button */

function changeMode() {
let currentMode = btn.getAttribute('class');
if (currentMode === 'dark') {
btn.setAttribute('class', 'light');
btn.textContent = 'Lighten';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
} else if (currentMode === 'light') {
btn.setAttribute('class', 'dark');
btn.textContent = 'Darken';
overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}
btn.addEventListener('click', changeMode);