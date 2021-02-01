/*
	* Desktop *
*/

const liToogleMenuVertical = document.getElementById("liToogleMenuVertical");
const toogleMenuVertical = document.getElementById("toogleMenuVertical");
const verticalMenu = document.querySelector(".verticalMenu");
const spanMenuVertical = document.querySelectorAll(".spanBotaoMenuVertical");
const toogleMenuVisivel = document.querySelector(".toogleMenuVisivel");

liToogleMenuVertical.addEventListener("click", () => {
	// expandir menu
	if (toogleMenuVertical.classList.contains("fa-forward")) {
		toogleMenuVertical.classList.remove("fa-forward");
		toogleMenuVertical.classList.add("fa-backward");

		verticalMenu.style.width = "150px";

		setTimeout(function () {
			spanMenuVertical[0].style.visibility = "visible";
			spanMenuVertical[1].style.visibility = "visible";
			spanMenuVertical[2].style.visibility = "visible";
			spanMenuVertical[3].style.visibility = "visible";
			spanMenuVertical[4].style.visibility = "visible";
			spanMenuVertical[5].style.visibility = "visible";	
		}, 250);
		
	}

	// desexpandir menu
	else {
		toogleMenuVertical.classList.remove("fa-backward");
		toogleMenuVertical.classList.add("fa-forward");

		verticalMenu.style.width = "50px";

		spanMenuVertical[0].style.visibility = "hidden";
		spanMenuVertical[1].style.visibility = "hidden";
		spanMenuVertical[2].style.visibility = "hidden";
		spanMenuVertical[3].style.visibility = "hidden";
		spanMenuVertical[4].style.visibility = "hidden";
		spanMenuVertical[5].style.visibility = "hidden";
	}
});

toogleMenuVisivel.addEventListener("click", () => {
	// exibir menu
	if (toogleMenuVisivel.classList.contains("fa-bars")) {
    	toogleMenuVisivel.classList.remove("fa-bars");
		toogleMenuVisivel.classList.add("fa-times");

		verticalMenu.style.visibility = "visible";
		verticalMenu.style.width = "50px";
	}

	// esconder menu
	else {
		toogleMenuVisivel.classList.remove("fa-times");
		toogleMenuVisivel.classList.add("fa-bars");

		verticalMenu.style.width = "0px";
		verticalMenu.style.visibility = "hidden";

		if (toogleMenuVertical.classList.contains("fa-backward")) {
			toogleMenuVertical.classList.remove("fa-backward");
			toogleMenuVertical.classList.add("fa-forward");
		}

		spanMenuVertical[0].style.visibility = "hidden";
		spanMenuVertical[1].style.visibility = "hidden";
		spanMenuVertical[2].style.visibility = "hidden";
		spanMenuVertical[3].style.visibility = "hidden";
		spanMenuVertical[4].style.visibility = "hidden";
		spanMenuVertical[5].style.visibility = "hidden";
	}
});