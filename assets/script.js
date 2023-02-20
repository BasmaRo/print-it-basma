const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const nextBtn =document.getElementsByClassName("arrow_right")[0];
const prevBtn=document.getElementsByClassName("arrow_left")[0];
const dots = document.getElementsByClassName("dots")[0];

// les deux lignes qui suivent seront utilisé pour mettre en évidence les deux boutton par rapport au changement du carrousel.
nextBtn.style ='z-index: 1';
prevBtn.style ='z-index: 1';
let currentItem = 0;
let precedentItem = 0;
let container = document.createElement('div');
//----------------------------

document.addEventListener('DOMContentLoaded', demarrage);


function demarrage() {
	// Div banner qui contiendra notre carrousel
	let bannerDiv = document.querySelector('#banner');

	// on crée une div qui contiendra les différents image de notre carrousel
	
	container.setAttribute('class', 'carrousel_container');
	//container.style.transform='translate3d(0%,0,0)';

	// On intégre notre div container dans la div banner
	bannerDiv.appendChild(container);

	// on boucle le tableau de slides
	let firstIteration = true;

	slides.forEach((slide,i) => {		
		// on crée un nouveau élément et on update sa src et alt attributes
		let img = document.createElement('img');
		img.src = slide.image;
		img.alt = slide.tagLine;
		img.className = 'banner-img'
		// on rajoute notre image à l'intérieur de notre div container
		container.appendChild(img);

		// ON ajoute les dots
		let dot = document.createElement('div');
		if(i==0) {
			dot.className = 'dot dot_selected';
		} else {
			dot.className = 'dot';
		}
		dot.style ='z-index: 1';
		console.log(i);
		dot.id = i;
		dots.appendChild(dot);
	});
	

}


nextBtn.addEventListener("click", function(){
	//alert("click sur la flèche droite");
	console.info("click sur la flèche droite");
	precedentItem = currentItem;
	if(currentItem === 3) currentItem =-1;
	goTo(++currentItem, precedentItem);
})

prevBtn.addEventListener("click", function(){
	//alert("click sur la flèche gauche");
	console.info("click sur la flèche gauche");
	precedentItem = currentItem;
	if(currentItem === 0) currentItem =4;
	goTo(--currentItem, precedentItem);
})

function goTo(index, precedentPosition) {
	console.log(index);
	let currentPosition = Math.abs(index);
	let translateX = currentPosition * -100;
	//update the image
	let containerCarrousel=document.getElementsByClassName("carrousel_container")[0];
	containerCarrousel.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
	// update the text
	let paragraphe = document.getElementsByTagName("p")[0];
	let newText = slides[currentPosition].tagLine;
	paragraphe.innerHTML = newText;
	paragraphe.style = 'z-index: 1';

	// update the dots
	let precendentDot = document.getElementById(precedentItem);
	precendentDot.className = 'dot';

	let currentDot = document.getElementById(currentPosition);
	currentDot.className = 'dot dot_selected';

	currentItem = index;
}

