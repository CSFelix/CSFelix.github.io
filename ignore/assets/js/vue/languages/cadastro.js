/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
  	tituloFormPortugues: 'Cadastro',
  	tituloFormEnglish: 'Sign Up',
  	tituloFormAtiva: '',

    tituloCartaoUsuarioPortugues: 'Cartão de Usuário',
    tituloCartaoUsuarioEnglish: 'User Info',
    tituloCartaoUsuarioAtiva: '',

  	labelNicknamePortugues: 'Seu Nome',
  	labelNicknameEnglish: 'Your Name',
  	labelNicknameAtiva: '',

    labelLoginPortugues: 'Seu Email',
    labelLoginEnglish: 'Your Email',
    labelLoginAtiva: '',

    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',

    labelConfirmarSenhaPortugues: 'Confirme a Senha',
    labelConfirmarSenhaEnglish: 'Check the Password',
    labelConfirmarSenhaAtiva: '',

    labelWhatsappPortugues: 'Seu WhatsApp',
    labelWhatsappEnglish: 'Your WhatsApp',
    labelWhatsappAtiva: '',

    labelTelegramPortugues: 'Seu Telegram',
    labelTelegramEnglish: 'Your Telegram',
    labelTelegramAtiva: '',

    botaoVoltarLoginPortugues: 'Voltar ao Login',
    botaoVoltarLoginEnglish: 'Back to Login',
    botaoVoltarLoginAtiva: '',

    botaoCadastrarPortugues: 'Cadastrar',
    botaoCadastrarEnglish: 'Sign Up',
    botaoCadastrarAtiva: '',

    spanAlterarAvatarPortugues: 'Clique no Avatar para trocar de foto!',
    spanAlterarAvatarEnglish: 'Click in the Avatar to change the image!',
    spanAlterarAvatarAtiva: '',

    botaoAlterarDadosPortugues: 'Alterar Dados',
    botaoAlterarDadosEnglish: 'Change Data',
    botaoAlterarDadosAtiva: '',

    botaoFinalizarCadastroPortugues: 'Finalizar!',
    botaoFinalizarCadastroEnglish: 'Wind Up!',
    botaoFinalizarCadastroAtiva: ''
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaLogin = () => {

	// português - br
	if (localStorage.getItem('language') == '1') {
		vueMainContent.tituloFormAtiva = vueMainContent.tituloFormPortugues;
    vueMainContent.tituloCartaoUsuarioAtiva = vueMainContent.tituloCartaoUsuarioPortugues;
		vueMainContent.labelNicknameAtiva = vueMainContent.labelNicknamePortugues;
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginPortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaPortugues;
		vueMainContent.labelWhatsappAtiva = vueMainContent.labelWhatsappPortugues;
		vueMainContent.labelTelegramAtiva = vueMainContent.labelTelegramPortugues;
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginPortugues;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarPortugues;

    vueMainContent.spanAlterarAvatarAtiva = vueMainContent.spanAlterarAvatarPortugues;
    vueMainContent.botaoAlterarDadosAtiva = vueMainContent.botaoAlterarDadosPortugues;
    vueMainContent.botaoFinalizarCadastroAtiva = vueMainContent.botaoFinalizarCadastroPortugues;
	}

	// english - eua
	else {
		vueMainContent.tituloFormAtiva = vueMainContent.tituloFormEnglish;
    vueMainContent.tituloCartaoUsuarioAtiva = vueMainContent.tituloCartaoUsuarioEnglish;
		vueMainContent.labelNicknameAtiva = vueMainContent.labelNicknameEnglish;
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaEnglish;
		vueMainContent.labelWhatsappAtiva = vueMainContent.labelWhatsappEnglish;
		vueMainContent.labelTelegramAtiva = vueMainContent.labelTelegramEnglish;
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginEnglish;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarEnglish;

    vueMainContent.spanAlterarAvatarAtiva = vueMainContent.spanAlterarAvatarEnglish;
    vueMainContent.botaoAlterarDadosAtiva = vueMainContent.botaoAlterarDadosEnglish;
    vueMainContent.botaoFinalizarCadastroAtiva = vueMainContent.botaoFinalizarCadastroEnglish;
	}
};