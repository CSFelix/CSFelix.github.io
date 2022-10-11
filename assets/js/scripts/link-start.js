const linkStartBtn = document.getElementById('linkStartBtn');
const linkStartVideo = document.getElementById('linkStartVideo');
const linkStartAudio = new Audio('./assets/videos-audios/link-start.mp3');

function openFullscreen() {
	/*
		Opens video on FullScreen automatically
	*/
  
  	/* Chrome, Opera, Vivaldi... */
	if (linkStartVideo.requestFullscreen) { linkStartVideo.requestFullscreen(); }

  	/* Safari */
  	else if (linkStartVideo.webkitRequestFullscreen) { linkStartVideo.webkitRequestFullscreen(); }
  	
  	/* IE11 */
  	else if (linkStartVideo.msRequestFullscreen) { linkStartVideo.msRequestFullscreen(); }
}

linkStartBtn.addEventListener('click', () => {
	/*
		When 'old version button' is clicked, the video
	is open on full screen and played automatically
	*/
	alert('We are moving to the Old Version. Enjoy yourself! 😊\nPS.: if you are using a phone device, flip it horizontally!!');
	linkStartVideo.style.display = 'block';
	openFullscreen();
	linkStartAudio.play();	
});

linkStartVideo.addEventListener('ended', () => {
	/*
		When 'old version' animation is endeed, user is moved to the old version page!
	*/
	alert('Loading has been successfully completed! ✔️\nPS.: if you are using a phone device, you can flip it back vertically!!');
	window.location.href = './old/index.html';
});