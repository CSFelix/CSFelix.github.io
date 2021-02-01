/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
    labelLoginPortugues: 'Seu Email',
    labelLoginEnglish: 'Your Email',
    labelLoginAtiva: '',

    voltarLoginPortugues: 'Voltar ao Login',
    voltarLoginEnglish: 'Back to Login',
    voltarLoginAtiva: '',

    botaoEnviarEmailPortugues: 'Enviar Email',
    botaoEnviarEmailEnglish: 'Send Email',
    botaoEnviarEmailAtiva: ''
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaLogin = () => {

	// português - br
	if (localStorage.getItem('language') == '1') {
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginPortugues;
		vueMainContent.voltarLoginAtiva = vueMainContent.voltarLoginPortugues;
		vueMainContent.botaoEnviarEmailAtiva = vueMainContent.botaoEnviarEmailPortugues;
	}

	// english - eua
	else {
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginEnglish;
		vueMainContent.voltarLoginAtiva = vueMainContent.voltarLoginEnglish;
		vueMainContent.botaoEnviarEmailAtiva = vueMainContent.botaoEnviarEmailEnglish;
	}
};