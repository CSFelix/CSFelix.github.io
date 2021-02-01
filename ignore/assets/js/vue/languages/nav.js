/* 
  Variáveis
*/

var vueMainNav = new Vue({
  el: '#mainNav',
  data: {
    notificacaoTituloPortugues: '🔔 Notificações 🔔',
    notificacaoTituloEnglish: '🔔 Notifications 🔔',
    notificacaoTituloAtiva: '',

    notificacaoConteudoPortugues: '💭 Sem notificações no momento.',
    notificacaoConteudoEnglish: '💭 No notifications in the moment.',
    notificacaoConteudoAtiva: '',

    configTituloPortugues: '⚙️ Configurações ⚙️',
    configTituloEnglish: '⚙️ Configurations ⚙️',
    configTituloAtiva: '',

    configConteudoModoPortugues: 'Modo Escuro',
    configConteudoModoEnglish: 'Dark Mode',
    configConteudoModoAtiva: '',

    configConteudoIdiomaPortugues: 'Idioma',
    configConteudoIdiomaEnglish: 'Language',
    configConteudoIdiomaAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaNav = () => {

  // português - br
  if (localStorage.getItem('language') == '1') {
    vueMainNav.notificacaoTituloAtiva = vueMainNav.notificacaoTituloPortugues;
    vueMainNav.notificacaoConteudoAtiva = vueMainNav.notificacaoConteudoPortugues;

    vueMainNav.configTituloAtiva = vueMainNav.configTituloPortugues;
    vueMainNav.configConteudoModoAtiva = vueMainNav.configConteudoModoPortugues;
    vueMainNav.configConteudoIdiomaAtiva = vueMainNav.configConteudoIdiomaPortugues;
  }

  // english - eua
  else {
    vueMainNav.notificacaoTituloAtiva = vueMainNav.notificacaoTituloEnglish;
    vueMainNav.notificacaoConteudoAtiva = vueMainNav.notificacaoConteudoEnglish;

    vueMainNav.configTituloAtiva = vueMainNav.configTituloEnglish;
    vueMainNav.configConteudoModoAtiva = vueMainNav.configConteudoModoEnglish;
    vueMainNav.configConteudoIdiomaAtiva = vueMainNav.configConteudoIdiomaEnglish;
  }
};