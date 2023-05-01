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

/* Live Projects */
const liveProjectsModal = document.getElementById('liveProjectsModal');
const liveProjectsBtn = document.getElementById('liveProjectsBtn');
const liveProjectsClose = document.getElementById('liveProjectsClose');

liveProjectsBtn.onclick = function() { liveProjectsModal.style.display = "block"; }
liveProjectsClose.onclick = function() { liveProjectsModal.style.display = "none"; }

/* Datasets */
const datasetsModal = document.getElementById('datasetsModal');
const datasetsBtn = document.getElementById('datasetsBtn');
const datasetsClose = document.getElementById('datasetsClose');

datasetsBtn.onclick = function() { datasetsModal.style.display = "block"; }
datasetsClose.onclick = function() { datasetsModal.style.display = "none"; }

/* ML Algorithms */
const mlAlgorithmsModal = document.getElementById('mlAlgorithmsModal');
const mlAlgorithmsBtn = document.getElementById('mlAlgorithmsBtn');
const mlAlgorithmsClose = document.getElementById('mlAlgorithmsClose');

mlAlgorithmsBtn.onclick = function() { mlAlgorithmsModal.style.display = "block"; }
mlAlgorithmsClose.onclick = function() { mlAlgorithmsModal.style.display = "none"; }

/* Dashboards */
const dashboardModal = document.getElementById('dashboardModal');
const dashboardBtn = document.getElementById('dashboardBtn');
const dashboardClose = document.getElementById('dashboardClose');

dashboardBtn.onclick = function() { dashboardModal.style.display = "block"; }
dashboardClose.onclick = function() { dashboardModal.style.display = "none"; }

/* Closing modals when user taps outside the modal */
window.onclick = function(event) {
  if (event.target == themesModal) { themesModal.style.display = "none"; }
  else if (event.target == kaggleModal) { kaggleModal.style.display = "none"; }
  else if (event.target == liveProjectsModal) { liveProjectsModal.style.display = "none"; }
  else if (event.target == datasetsModal) { datasetsModal.style.display = "none"; }
  else if (event.target == mlAlgorithmsModal) { mlAlgorithmsModal.style.display = "none"; }
  else if (event.target == dashboardModal) { dashboardModal.style.display = "none"; }
}