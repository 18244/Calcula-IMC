let pacientes = document.querySelectorAll( '.paciente' );

pacientes.forEach( paciente => {

	 let tdPeso   = paciente.querySelector( '.info-peso'   );
	 let tdAltura = paciente.querySelector( '.info-altura' );
	 let tdImc    = paciente.querySelector( '.info-imc'    );

	 let peso   = tdPeso.textContent;
	 let altura = tdAltura.textContent;

	 let pesoValido   = validaPeso( peso, tdImc ) ;
	 let alturaValida = validaAltura( altura, tdImc );
	 
	 if( pesoValido && alturaValida )
	 {
	 	tdImc.textContent = calculaImc( peso, altura);
	 }
} );

function validaPeso( peso, tdImc ) {

	 if( peso > 0 && peso < 600 )
	 {
	 	return true;
	 }
	 else
	 {
	 	tdImc.classList.add( 'campo-invalido' );
	 	tdImc.textContent = 'Peso Inválido';
	 	return false;
	 }
}

function validaAltura( altura, tdImc ) {
	
	if( altura > 0 && altura < 3.00)
	 {
	 	return true;
	 }
	 else
	 {
	 	tdImc.classList.add( 'campo-invalido' );
	 	tdImc.textContent = 'Altura Inválida';
	 	return false;
	 }
}

function calculaImc( peso, altura ) {
	
	let imc = peso / ( altura * altura );

	return imc.toFixed(2);
}















