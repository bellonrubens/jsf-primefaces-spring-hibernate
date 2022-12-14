var arrayIdsElementsPage = new Array;

/**
 * Carrega um array global com os ids de todos os componentes da pagina para ter
 * facilidades em obtenção de valores dos componentes bem como trabalhar com ajax
 */
function carregarIdElementosPagina(){
	arrayIdsElementsPage = new Array;
	for (form = 0; form <= document.forms.length; form++){
		var formAtual = document.forms[form];
		if (formAtual != undefined){
			for(i = 0; i < document.forms[form].elements.length; i++){
				if(document.forms[form].elements[i].id != ''){
					arrayIdsElementsPage[i] = document.forms[form].elements[i].id;
				}
			}
		}
	}
}

/**
 * Retorna o valor do id do componente dentro do documento html passando como
 * parametro a descrição do id declarada em jsf
 *
 * @param id
 */
 
function getValorElementPorId(id){
	carregarIdElementosPagina();
	for (i = 0; i< arrayIdsElementsPage.lenght; i++){
		var valor = ""+arrayIdsElementsPage[i];
		if(valor.indexOf(id) > -1){
			return valor;
		}
	}
	return idundefined;
}

function logout(contextPath) {
	
	var post = 'invalidar_session';
	
	$.ajax({
		type:"POST",
		url: post
	}).always(function(resposta) { 
		document.location = contextPath + '/j_spring_security_logout';
	});
	
}

function invalidarSession(context, pagina){
	document.location = (context + pagina + ".jsf");
	
}

function validarSenhaLogin(){
	
	j_username = document.getElementById("j_username").value;
	j_password = document.getElementById("j_password").value;
	
	if(j_username === null || j_username.trim() === ''){
		alert("Informe o login.");
		$('#j_username').focus();
		return false;
	}
	
	if(j_password === null || j_password.trim() === ''){
		alert("Informe a senha.");
		$('#j_password').focus();
		return false;
	}
	
	return true;
}

function abrirMenupop(){
	$("#menupop").show('slow').mouseleave(function(){
		fecharMenupop();
	});
}

function fecharMenupop(){
	if ($("#menupop").is(":visible")){
		$("#menupop").hide("slow");
	}
}

function redirecionarPagina(context, pagina){
	pagina = pagina + ".jsf";
	
	document.location = context + pagina;
}