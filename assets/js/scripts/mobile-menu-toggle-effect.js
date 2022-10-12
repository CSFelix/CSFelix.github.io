const toggleMobileMenuBtn = document.getElementById('mobileMenuToggle');
const toggleMobileMenu = document.getElementById('mobileMenu');
const mobileMenuOptions = toggleMobileMenu.getElementsByTagName('li');

// When the menu button is tap, the menu is toggled in and out.
toggleMobileMenuBtn.addEventListener('click', () => {

	// if the menu is not toggled (right == -150px)
	// we toggle it! (right = 15px)
	if (toggleMobileMenu.style.right != '15px') { toggleMobileMenu.style.right = '15px'; }

	// else, we geet the menu back to its original position 
	else { toggleMobileMenu.style.right = '-150px'; }
});

// when a menu option is clicked, the menu is toggled out
//
// as far thee meenu options are storeed into a list, we gotta
// do a for-loop to get each element and add thee event listener
for (let index = 0; index <= mobileMenuOptions.length - 1; index++) {
    mobileMenuOptions[index].addEventListener('click', () => {
    	toggleMobileMenu.style.right = '-150px';
    	toggleMobileMenuBtn.classList.toggle("change");	
    });
}