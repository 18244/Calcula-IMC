let filtroPaciente = document.querySelector( '#filtrar-tabela' );

filtroPaciente.addEventListener( 'input', function(  ) {

	let pacientes = document.querySelectorAll('.paciente');

	pacientes.forEach( paciente => {
		
		let nome = paciente.querySelector( '.info-nome' ).textContent;

		let reg = new RegExp ( this.value,'i' );

		if( reg.test( nome ) )
			paciente.classList.remove( 'invisivel' );	
		else
			paciente.classList.add( 'invisivel' );

		if( this.value.length == 0 )
			paciente.classList.remove( 'invisivel' );				
	});
});

