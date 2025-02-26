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

/* Dashboards */
const dashboardModal = document.getElementById('dashboardModal');
const dashboardBtn = document.getElementById('dashboardBtn');
const dashboardClose = document.getElementById('dashboardClose');

dashboardBtn.onclick = function() { dashboardModal.style.display = "block"; }
dashboardClose.onclick = function() { dashboardModal.style.display = "none"; }

/* Recommendation System */
const recommendationSystemModal = document.getElementById('recommendationSystemModal');
const recommendationSystemBtn = document.getElementById('recommendationSystemBtn');
const recommendationSystemClose = document.getElementById('recommendationSystemClose');

recommendationSystemBtn.onclick = function() { recommendationSystemModal.style.display = 'block'; }
recommendationSystemClose.onclick = function() { recommendationSystemModal.style.display = 'none'; }

/* Closing modals when user taps outside the modal */
window.onclick = function(event) {
  const modalsArray = [kaggleModal, liveProjectsModal, datasetsModal, dashboardModal, recommendationSystemModal];
  if (modalsArray.includes(event.target)) { event.target.style.display = 'none'; }
}

/* Closing modals when user presses Escape (Esc) */
window.onkeydown = function(event) {
  if (event.key == 'Escape') {
    if (kaggleModal.style.display == 'block') { kaggleModal.style.display = 'none'; }
    else if (liveProjectsModal.style.display == 'block') { liveProjectsModal.style.display = 'none'; }
    else if (datasetsModal.style.display == 'block') { datasetsModal.style.display = 'none'; }
    else if (dashboardModal.style.display == 'block') { dashboardModal.style.display = 'none'; }
    else if (recommendationSystemModal.style.display == 'block') { recommendationSystemModal.style.display = 'none'; }
  }
}