const sectionTrocarIdioma = document.getElementById("sectionSwitchLanguage");
const iconeLista = document.getElementById("listIcon");
const idiomaAtual = localStorage.getItem('language');
const idiomaLista = document.getElementById("languageList");
const identificadorLinguagem = document.getElementById("idiomaAtivado");


// recupera último idioma salvo pelo usuário antes do carregametno da página
if (idiomaAtual) {
    
    // Português - Brasil
    if (idiomaAtual === '1') { 
    	identificadorLinguagem.innerHTML = '(Português - Brasil)';
    	document.querySelector('#languageList option[value="1"]').selected = true;
    }

    else {
    	identificadorLinguagem.innerHTML = '(English - United States)';
    	document.querySelector('#languageList option[value="2"]').selected = true;
    }

    // tradução dos conteúdos
    vueAtivarControladorIdiomaNav();
    vueAtivarControladorIdiomaLogin();
}

// carregamento da lista de idiomas
sectionTrocarIdioma.addEventListener('click', () => {

	// ativação da lista de idiomas
	if (iconeLista.classList.contains("fa-arrow-up")) {
		iconeLista.classList.remove("fa-arrow-up");
		iconeLista.classList.add("fa-arrow-down");
		
		idiomaLista.style.visibility = 'visible';
	}

	// desativação da lista
	else {
		iconeLista.classList.remove("fa-arrow-down");
		iconeLista.classList.add("fa-arrow-up");

		idiomaLista.style.visibility = 'hidden';
	}
});

// escolha \ alteração do idioma durante o uso da página
idiomaLista.addEventListener('change', () => {

	// português - br
	if (idiomaLista.value == '1') {
        localStorage.setItem('language', '1');
        identificadorLinguagem.innerHTML = '(Português - Brasil)';

        // identificação e tradução do modo escolhido
        // modo escuro ou claro
        if (localStorage.getItem('theme') == 'dark') { identificadorModo.innerHTML = "(Ativado)"; }
        else { identificadorModo.innerHTML = "(Desativado)"; }
	}

	// english - eua
	else {
 		localStorage.setItem('language', '2');
        identificadorLinguagem.innerHTML = '(English - United States)';

        // identificação e tradução do modo escolhido
        // dark or light mode
        if (localStorage.getItem('theme') == 'dark') { identificadorModo.innerHTML = "(Enabled)"; }
        else { identificadorModo.innerHTML = "(Disabled)"; }
	}

	// tradução dos conteúdos
	vueAtivarControladorIdiomaNav();
	vueAtivarControladorIdiomaLogin();
});