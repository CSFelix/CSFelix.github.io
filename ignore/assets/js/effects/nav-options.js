// notification button and toast
const notificationButton = document.getElementById('notificationSpan');
const notificationToast = document.getElementById('toastNavMessage');

// configuration button and toast
const configButton = document.getElementById('configSpan');
const configToast = document.getElementById('toastNavConfig');

document.addEventListener('click', function(event) {
	var isClickInsideNotificationButtonOrToast = notificationButton.contains(event.target) || notificationToast.contains(event.target);
	var isClickInsideConfigButtonOrToast = configButton.contains(event.target) || configToast.contains(event.target);

	// notifications' toast click
	if (isClickInsideNotificationButtonOrToast) { 
		notificationToast.style.opacity = '1';
		notificationToast.classList.add('show'); 
	}
	else { 
		notificationToast.style.opacity = '0';
		notificationToast.style.filter = 'alpha(opacity=0)'; // IE
		setTimeout(() => { notificationToast.classList.remove('show');  }, 1000);
	}

	// options' toast click
	if (isClickInsideConfigButtonOrToast) {
		configToast.style.opacity = '1';
		configToast.classList.add('show');
	}
	else {
		configToast.style.opacity = '0';
		configToast.style.filter = 'alpha(opacity=0)'; // IE
		setTimeout(() => { configToast.classList.remove('show'); }, 1000);
	}
});