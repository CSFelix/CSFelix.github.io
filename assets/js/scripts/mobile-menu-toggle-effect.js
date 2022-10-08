const toggleMobileMenuBtn = document.getElementById('mobileMenuToggle');
const toggleMobileMenu = document.getElementById('mobileMenu');

toggleMobileMenuBtn.addEventListener("click", () => {

	// if the mmenu is not toggled (right == -150px)
	// we toggle it! (right = 15px)
	if (toggleMobileMenu.style.right != '15px') {
		toggleMobileMenu.style.right = '15px';  
	}

	// else, we geet the menu back to its original position 
	else {
		toggleMobileMenu.style.right = '-150px';
	}
});