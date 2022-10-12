/* Themes */
const themesModal = document.getElementById('themesModal');
const themesBtn = document.getElementById('themeBtn');
const mobileThemesBtn = document.getElementById('mobileThemeBtn');
const themesClose = document.getElementById('themesClose');

themesBtn.onclick = function() { themesModal.style.display = "block"; }
mobileThemesBtn.onclick = function() { themesModal.style.display = "block"; }
themesClose.onclick = function() { themesModal.style.display = "none"; }

/* Kaggle Notebooks */
const kaggleModal = document.getElementById('kaggleModal');
const kaggleBtn = document.getElementById('kaggleBtn');
const kaggleClose = document.getElementById('kaggleClose');

kaggleBtn.onclick = function() { kaggleModal.style.display = "block"; }
kaggleClose.onclick = function() { kaggleModal.style.display = "none"; }

/* ML Algorithms */
const mlAlgorithmsModal = document.getElementById('mlAlgorithmsModal');
const mlAlgorithmsBtn = document.getElementById('mlAlgorithmsBtn');
const mlAlgorithmsClose = document.getElementById('mlAlgorithmsClose');

mlAlgorithmsBtn.onclick = function() { mlAlgorithmsModal.style.display = "block"; }
mlAlgorithmsClose.onclick = function() { mlAlgorithmsModal.style.display = "none"; }

/* DS Tools */
const dsToolsModal = document.getElementById('dsToolsModal');
const dsToolsBtn = document.getElementById('dsToolsBtn');
const dsToolsClose = document.getElementById('dsToolsClose');

dsToolsBtn.onclick = function() { dsToolsModal.style.display = "block"; }
dsToolsClose.onclick = function() { dsToolsModal.style.display = "none"; }

/* Closing modals when user taps outside the modal */
window.onclick = function(event) {
  if (event.target == themesModal) { themesModal.style.display = "none"; }
  else if (event.target == kaggleModal) { kaggleModal.style.display = "none"; }
  else if (event.target == mlAlgorithmsModal) { mlAlgorithmsModal.style.display = "none"; }
  else if (event.target == dsToolsModal) { dsToolsModal.style.display = "none"; }
}