/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
    labelLoginPortugues: 'Seu Email',
    labelLoginEnglish: 'Your Email',
    labelLoginAtiva: '',

    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',

    botaoLoginPortugues: 'Entrar',
    botaoLoginEnglish: 'Sign In',
    botaoLoginAtiva: '',

    botaoCadastrarPortugues: 'Cadastre-se',
    botaoCadastrarEnglish: 'Sign Up',
    botaoCadastrarAtiva: '',

    esqueceuSenhaPortugues: 'Esqueceu sua Senha?',
    esqueceuSenhaEnglish: 'Forgot your Password?',
    esqueceuSenhaAtiva: ''
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaLogin = () => {

	// português - br
	if (localStorage.getItem('language') == '1') {
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginPortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.botaoLoginAtiva = vueMainContent.botaoLoginPortugues;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarPortugues;
		vueMainContent.esqueceuSenhaAtiva = vueMainContent.esqueceuSenhaPortugues;
	}

	// english - eua
	else {
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.botaoLoginAtiva = vueMainContent.botaoLoginEnglish;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarEnglish;
		vueMainContent.esqueceuSenhaAtiva = vueMainContent.esqueceuSenhaEnglish;
	}
};