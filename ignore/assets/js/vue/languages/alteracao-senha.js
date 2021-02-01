/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
    tituloAlterarSenhaPortugues: 'Alterar Senha',
    tituloAlterarSenhaEnglish: 'Change Passwrod',
    tituloAlterarSenhaAtiva: '',

    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',

    labelConfirmarSenhaPortugues: 'Confirme a Senha',
    labelConfirmarSenhaEnglish: 'Check the Password',
    labelConfirmarSenhaAtiva: '',

    labelCodigoVerificacaoPortugues: 'Código de Verificação',
    labelCodigoVerificacaoEnglish: 'Verification Code',
    labelCodigoVerificacaoAtiva: '',

    botaoNovoCodigoPortugues: 'Novo Código',
    botaoNovoCodigoEnglish: 'New Code',
    botaoNovoCodigoAtiva: '',

    botaoAlterarSenhaPortugues: 'Alterar Senha',
    botaoAlterarSenhaEnglish: 'Change Password',
    botaoAlterarSenhaAtiva: '',

    mensagemVoltarLoginPortugues: 'Voltar ao Login',
    mensagemVoltarLoginEnglish: 'Back to Login',
    mensagemVoltarLoginAtiva: '',
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaLogin = () => {

	// português - br
	if (localStorage.getItem('language') == '1') {
		vueMainContent.tituloAlterarSenhaAtiva = vueMainContent.tituloAlterarSenhaPortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaPortugues;
		vueMainContent.labelCodigoVerificacaoAtiva = vueMainContent.labelCodigoVerificacaoPortugues;
		vueMainContent.botaoNovoCodigoAtiva = vueMainContent.botaoNovoCodigoPortugues;
		vueMainContent.botaoAlterarSenhaAtiva = vueMainContent.botaoAlterarSenhaPortugues;
		vueMainContent.mensagemVoltarLoginAtiva = vueMainContent.mensagemVoltarLoginPortugues;
	}

	// english - eua
	else {
		vueMainContent.tituloAlterarSenhaAtiva = vueMainContent.tituloAlterarSenhaEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaEnglish;
		vueMainContent.labelCodigoVerificacaoAtiva = vueMainContent.labelCodigoVerificacaoEnglish;
		vueMainContent.botaoNovoCodigoAtiva = vueMainContent.botaoNovoCodigoEnglish;
		vueMainContent.botaoAlterarSenhaAtiva = vueMainContent.botaoAlterarSenhaEnglish;
		vueMainContent.mensagemVoltarLoginAtiva = vueMainContent.mensagemVoltarLoginEnglish;
	}
};