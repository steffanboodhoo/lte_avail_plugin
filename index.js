window.onload = () => {
	
	$('#submit').click((ev)=>{
		ev.preventDefault();
		console.log('clickty');
		submit($('#msisdn').val())
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
			url:'http://localhost/test/',
			success:(resp)=>{
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

	const update = (data) => {
		console.log(data);
		for(let key in data){
			$('<div>',{class:'row'}).append(`<br>${key}:</br> \t${data[key]}`).appendTo('#lte_output');	
		}
		
	}
	// $('msisdn').
}
