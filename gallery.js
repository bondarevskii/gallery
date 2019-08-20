function initGallery (e) {
	const viewForm = document.createElement("div");
	viewForm.classList.add("viewForm");

	const bg = document.createElement("div");
	bg.classList.add("viewForm__bg");

	const img = document.createElement("img");
	img.classList.add("viewForm__img");

	let gallery__item;

	if (e.path.length == 6) {
		gallery__item = e.path[0];
	} else {	
		gallery__item = e.path[1];
	}

	img.src = gallery__item.children[0].src;

	const buttonExit = document.createElement("div");
	buttonExit.classList.add("pe-7s-close"); // Here you can change the close-symbol
	buttonExit.classList.add("viewForm__buttonExit");

	const buttonPrevious = document.createElement("div");
	buttonPrevious.classList.add("pe-7s-angle-left"); // Here you can change the previous-symbol
	buttonPrevious.classList.add("viewForm__buttonPrevious");

	const buttonNext = document.createElement("div");
	buttonNext.classList.add("pe-7s-angle-right"); // Here you can change the next-symbol
	buttonNext.classList.add("viewForm__buttonNext");

	document.body.prepend(viewForm);
	viewForm.prepend(bg);
	viewForm.prepend(buttonPrevious);
	viewForm.prepend(buttonNext);
	viewForm.prepend(buttonExit);
	viewForm.prepend(img);

	buttonExit.addEventListener('click', () => {
		viewForm.remove();
	})

	buttonPrevious.addEventListener('click', () => {
		let event = new Event("click");
		gallery__item.previousElementSibling.dispatchEvent(event);
		viewForm.remove();
	})

	buttonNext.addEventListener('click', () => {
		let event = new Event("click");
		gallery__item.nextElementSibling.dispatchEvent(event);
		viewForm.remove();
	})

	if (gallery__item.previousElementSibling === null) {
		buttonPrevious.style.display = "none";
	} else {
		buttonPrevious.style.display = "block";
	}
	if (gallery__item.nextElementSibling === null) {
		buttonNext.style.display = "none";
	} else {
		buttonNext.style.display = "block";
	}
}