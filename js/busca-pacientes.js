let botaoBuscar = document.querySelector( '#buscar-paciente' );

botaoBuscar.addEventListener( 'click', function( event ) {
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
	xhr.send();
	let spanErro = document.querySelector('#erro-ajax');
	
	xhr.addEventListener('load', function() {

		if( xhr.status == 200){
			spanErro.classList.add('invisivel');
			let pacientes = JSON.parse(xhr.responseText);
			pacientes.forEach( paciente => adicionaNaTabela( paciente ) );
		}else
			spanErro.classList.remove('invisivel');
	});

});