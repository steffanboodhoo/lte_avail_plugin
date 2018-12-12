jQuery(document).ready( ($) => {
	// const URL = 'https://bmobile.co.tt/test/';
	const URL = 'https://api.bmobile.co.tt/test/';
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
				$('#lte_output').empty();
				if(data['device_capability'] === undefined){
					update_failure(data);
				}else{				
					update_success(data);
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
	const update_success = (data) => {
		$('#exampleModal').modal('hide');
		console.log(data);
		for(let key in data){
			$('#lte_output').append( 
				( DISPLAY_OPTIONS_MAP[key].present==1 ? $('<div>',{class:'col-sm'}).append(`<br>${DISPLAY_OPTIONS_MAP[key].name}</br> \t${data[key]}`) :'' )
			);
		}
		
	}

	const update_failure = (data) =>{
		$('#lte_output').append(data['message']);
		setTimeout(()=>$('#exampleModal').modal('hide'),500);
	}
	// $('msisdn').
});
