let botao = document.querySelector( '#adicionar-paciente' );
botao.addEventListener( 'click', function( event ) {
	event.preventDefault( );

	let formPaciente = document.querySelector( '#form-pacientes' );
	let tdImc 		 = document.querySelector( '.info-imc' 		 );
	novoPaciente 	 = coletaDadosPaciente	 ( formPaciente      );	
	let ulErros 	 = document.querySelector( '.erros'			 );

	let erros = [];
	ulErros.innerHTML = "";

	erros = verificaErros( erros, novoPaciente );
		
	if( erros.length == 0 )
	{
		adicionaNaTabela( novoPaciente );

		formPaciente.reset( );
		ulErros.innerHTML = "";
	}
	else
	{	
		exibeErros( erros, ulErros );
	}
	
});

function coletaDadosPaciente( formPaciente ) {
	
	novoPaciente = { 
		nome   : formPaciente.nome.value,
		peso   : formPaciente.peso.value,
		altura : formPaciente.altura.value,
		gordura: formPaciente.gordura.value,
		imc    : calculaImc( formPaciente.peso.value, formPaciente.altura.value )
	};

	return novoPaciente;
}

function adicionaNaTabela( novoPaciente ) {
	let tabelaPacientes = document.querySelector( '#tabela-pacientes' );
	let trPaciente =  montaTrPaciente( novoPaciente );
	tabelaPacientes.appendChild( trPaciente );
	
}

function verificaErros( erros, novoPaciente ) {
	
	if ( novoPaciente.nome.length == 0 ) 
	{
		erros.push( 'Nome deve ser informado.' );
	}	

	if ( novoPaciente.peso.length == 0 ) 
	{
		erros.push( 'Peso deve ser informado.' );
	}	
	else
		if ( novoPaciente.peso <= 0 || novoPaciente.peso > 600 || isNaN(novoPaciente.peso) ) 
		{
			erros.push( 'Peso inválido.' );
		}	


	if ( novoPaciente.altura.length == 0 ) 
	{
		erros.push( 'Altura deve ser informada.' );
	}
	else	
		if ( novoPaciente.altura <=  0 || novoPaciente.altura > 3.00 || isNaN (novoPaciente.altura) ) 
		{
			erros.push( 'Altura inválida.' );
		}	
	

	if ( novoPaciente.gordura.length == 0  ) 
	{
		erros.push( 'Gordura deve ser informada.' );
	}	
	else
		if ( novoPaciente.gordura <= 0  || isNaN (novoPaciente.gordura) ) 
		{
			erros.push( 'Gordura inválida.' );
		}	
	return erros;	
}

function montaTrPaciente( novoPaciente ) {

	let trPaciente = document.createElement( 'tr' );
	trPaciente.classList.add( 'paciente'    );

	trPaciente.appendChild( criaTd ( 'info-nome'   , novoPaciente.nome    ) );
	trPaciente.appendChild( criaTd ( 'info-peso'   , novoPaciente.peso    ) );
	trPaciente.appendChild( criaTd ( 'info-altura' , novoPaciente.altura  ) );
	trPaciente.appendChild( criaTd ( 'info-gordura', novoPaciente.gordura ) );
	trPaciente.appendChild( criaTd ( 'info-imc'    , novoPaciente.imc     )	);
	
	return trPaciente;		
}

function criaTd( classe, dado ) {
	
	let td = document.createElement( 'td' );
	td.textContent = dado;
	td.classList.add( classe );

	return td;	
}

function exibeErros( erros, ulErros ) {

	erros.forEach ( erro => {
		let liErro = document.createElement( 'li' );
		liErro.textContent = erro;
		ulErros.appendChild( liErro );
	} );
	
}








