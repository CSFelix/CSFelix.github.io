const sectionTrocarModo = document.getElementById("sectionSwitchMode");
const labelTrocarModo = document.getElementById('switchMode');
const trocarModo = document.querySelector('#switchMode input[type="checkbox"]');
const temaAtual = localStorage.getItem('theme');
const identificadorModo = document.getElementById("modoAtivado");

// recupera último tema salvo pelo usuário antes do carregamento inicial da página
if (temaAtual) {
    document.documentElement.setAttribute('data-theme', temaAtual);
    
    // dark mode
    if (temaAtual === 'dark') { 
    	trocarModo.checked = true;

        // identificação do idioma escolhido e tradução do modo ativado
        if (localStorage.getItem('language') == '1') { identificadorModo.innerHTML = "(Ativado)"; }
        else { identificadorModo.innerHTML = "(Enabled)"; }
    }

    // light mode
    else {
    	trocarModo.checked = false;
    	
        // identificação do idioma escolhido e tradução do modo ativado
        if (localStorage.getItem('language') == '1') { identificadorModo.innerHTML = "(Desativado)"; }
        else { identificadorModo.innerHTML = "(Disabled)"; }
    }
}

function TrocarTema(e) {
    /*
     	* Verifica se o input está checado e atribui o tema à página durante o uso da aplicação
     	* - Checado >> Tema Escuro
     	* - Não-Checado >> Tema Claro
     	* 
     	* Assintótica: O(1)
	* */
	
    // dark mode
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        
        // identificação do idioma escolhido e tradução do modo ativado
        if (localStorage.getItem('language') == '1') { identificadorModo.innerHTML = "(Ativado)"; }
        else { identificadorModo.innerHTML = "(Enabled)"; }
    }

    // light mode
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        
        // identificação do idioma escolhido e tradução do modo ativado
        if (localStorage.getItem('language') == '1') { identificadorModo.innerHTML = "(Desativado)"; }
        else { identificadorModo.innerHTML = "(Disabled)"; }
    }
}

trocarModo.addEventListener('change', TrocarTema, false);
sectionTrocarModo.addEventListener('click', (event) => { if (!labelTrocarModo.contains(event.target)) { trocarModo.click(); } });