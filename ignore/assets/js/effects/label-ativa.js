function checkLabel(labelID, input) {
	/*
	 * Verifica se há caracteres digitados no input e aplica animação nas respectivas labels
	 * Assintótica: O(1)
	 * */
	
	let label = document.getElementById(labelID);
	input = input;
	
	/// Se há caracteres digitados no input, a label fica em cima do input
	if (input.value != '') { if (!label.classList.contains('labelAtiva')) { label.classList.add('labelAtiva'); } } 
	// Se não há caracteres digitados no input, a label retorna para dentro do input
	else { label.classList.remove('labelAtiva'); }
}