const botaoSenha = document.querySelector('.visualizarSenha');
const inputSenha = document.getElementById('inputSenha');

botaoSenha.addEventListener('click', () => {
	// ativar visualizar senha
	if (botaoSenha.classList.contains('fa-eye')) {
		botaoSenha.classList.remove('fa-eye');
		botaoSenha.classList.add('fa-eye-slash');

		inputSenha.type = 'text';
	}

	// desativar visualizar senha
	else {
		botaoSenha.classList.remove('fa-eye-slash');
		botaoSenha.classList.add('fa-eye');

		inputSenha.type = 'password';
	}
});