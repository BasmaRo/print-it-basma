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

document.addEventListener('DOMContentLoaded', demarrage);

const nextBtn =document.getElementsByClassName("arrow_right")[0];
const prevBtn=document.getElementsByClassName("arrow_left")[0];
const dots = document.getElementsByClassName("dots")[0];

// les deux lignes qui suivent seront utilisé pour mettre en évidence les deux boutton par rapport au changement du carrousel.
let currentItem = 0;
let precedentItem = 0;
let container = document.createElement('div');
//----------------------------

function demarrage() {
	// Div banner qui contiendra notre carrousel
	let bannerDiv = document.querySelector('#banner');

	// on crée une div qui contiendra les différents image de notre carrousel
	
	container.className= 'carrousel_container';
	container.style = 'z-index: -1';

	// On intégre notre div container dans la div banner
	bannerDiv.appendChild(container);

	// on boucle le tableau de slides

	slides.forEach((slide,i) => {
		//La méthode forEach() transmet une boucle de rappel (callback) à chaque éléments du tableau		
		// on crée un nouveau élément et on update sa src et alt attributes
		let img = document.createElement('img');
		img.src = slide.image;
		img.alt = slide.tagLine;
		img.className = 'banner-img';
		// on rajoute notre image à l'intérieur de notre div container
		container.appendChild(img);

		// ON ajoute les dots
		let dot = document.createElement('div');
		if(i==0) {
			dot.className = 'dot dot_selected';
		} else {
			dot.className = 'dot';
		}
		console.log(i);
		dot.id = i;
		dots.appendChild(dot);
	});
}

nextBtn.addEventListener("click", function(){
	console.log("click sur la flèche droite");
	precedentItem = currentItem;
	if(currentItem === 3) currentItem =-1;
	goTo(++currentItem);
})

prevBtn.addEventListener("click", function(){
	console.log("click sur la flèche gauche");
	precedentItem = currentItem;
	if(currentItem === 0) currentItem =4;
	goTo(--currentItem);
})

function goTo(index) {
	console.log(index);
	let currentPosition = Math.abs(index); //La valeur absolue du nombre passé en argument.

	//switch the image : 
	switchImage(currentPosition);

	// update the text
	updateText(currentPosition);

	// update the dots
	updateDot(currentPosition);	
}

function switchImage(Position) {
	let translateX = Position * -100;
	let containerCarrousel=document.getElementsByClassName("carrousel_container")[0];
	containerCarrousel.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
}

function updateText(Position){
	let paragraphe = document.getElementsByTagName("p")[0];
	let newText = slides[Position].tagLine;
	paragraphe.innerHTML = newText;
}

function updateDot(Position){
	let precendentDot = document.getElementById(precedentItem);
	precendentDot.className = 'dot';

	let currentDot = document.getElementById(Position);
	currentDot.className = 'dot dot_selected';
}

