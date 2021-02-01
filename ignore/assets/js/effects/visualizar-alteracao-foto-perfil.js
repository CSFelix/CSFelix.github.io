/*
	* realiza visualização da foto de perfil durante a alteração do cadastro do usuário
	* Assintótica: O(1)
* */
function readURL(input, labelId) {
	if (input.files && input.files[0]) {
		var avatarVisualizacao = document.getElementById(labelId);
		var reader = new FileReader();
		
		reader.onload = function(e) { avatarVisualizacao.style.backgroundImage = "url(" + e.target.result + ")"; }
		reader.readAsDataURL(input.files[0]); // converte imagem para base 64
	}
}

var selecionarAvatar = document.getElementById("selecionarAvatar");
selecionarAvatar.addEventListener("change", function() { readURL(this, "avatarVisualizacao"); });