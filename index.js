jQuery(document).ready( ($) => {
	const URL = 'https://10.85.18.178/test/';
	// const URL = 'http://localhost:3000';
	$('#lte_submit').click((ev)=>{
		ev.preventDefault();
		console.log('clickty');
		submit($('#lte_msisdn').val())
	});


	const submit = (msisdn)=>{		
		const data = {msisdn};
		// const data = {msisdn:'18684735902'};
		console.log(data)
		$('#exampleModal').modal('show');
		$.ajax({
			type:'POST',
			data:JSON.stringify(data),
			headers: {'Content-Type':'application/json'},
			url:URL,
			success:(resp)=>{
				console.log(resp);
				let data = JSON.parse(resp)
				console.log(data);
				if(data['device_capability'] === undefined){
					$('#modal_body').append(data['message'])
				}else{
					$('#exampleModal').modal('hide');
					// $('#lte_output').empty().append(resp);
					update(data);
				}
			}
		});
	}
	
	const DISPLAY_OPTIONS_MAP = {
		device_capability:{name:'Device LTE Capability',present:0},
		device_name:{name:'Device Model', present:1},
		message:{name:'', present:1},
		sim_capability:{name:'Sim LTE Capability',present:0}
	}
	const update = (data) => {
		console.log(data);
		for(let key in data){
			$('#lte_output').append( 
				( DISPLAY_OPTIONS_MAP[key].present==1 ? $('<div>',{class:'col-sm'}).append(`<br>${DISPLAY_OPTIONS_MAP[key].name}</br> \t${data[key]}`) :'' )
			);
		}
		
	}
	// $('msisdn').
});
