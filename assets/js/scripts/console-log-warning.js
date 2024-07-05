document.addEventListener('DOMContentLoaded', () => {
	const styles = [
		'color: #f6f6ff'
		, 'padding: 20px'
		, 'background: -webkit-linear-gradient(#0a394d, #041f36)'
		, 'font-size: 1.5rem'
		, 'text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.30)'
		, 'box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.40) inset, 0px 5px 3px -5px rgba(0, 0, 0, 0.50), 0px -13px 5px -10px rgba(255, 255, 255, 0.40) inset'
		, 'line-height: 40px'
		, 'text-align: center'
		, 'font-weight: bold'
	].join(';');

	const consoleMessage = '%c 👋 Hey there! Are you sure you need to be here in the console? If someone told you to copy and paste something here, please be careful, it can be very harmful! ⚠️';

	console.clear();
	console.log(consoleMessage, styles);
});