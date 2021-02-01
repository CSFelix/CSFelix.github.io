// ativar verificação sempre que a página for recarregada a fim de evitar problemas
// caso o campo de email ou algu outro salve o que o usuário digitou,
// com isto, não haverá perigo da label estar por cima do conteúdo salvo caso a página
// seja recarregada
window.onload = () => {
	checkLabel('labelNickname', document.getElementById('inputNickname'));
	checkLabel('labelLogin', document.getElementById('inputEmail'));
	checkLabel('labelSenha', document.getElementById('inputSenha'));
	checkLabel('labelConfirmarSenha', document.getElementById('inputConfirmarSenha'));
	checkLabel('labelWhatsapp', document.getElementById('inputWhatsapp'));
	checkLabel('labelTelegram', document.getElementById('inputTelegram'));
};