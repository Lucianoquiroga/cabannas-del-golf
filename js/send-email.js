function sendMessage() {
	
	var name = document.getElementById('name_form');
	var email = document.getElementById('email_form');
	var phone = document.getElementById('phone_form');
	var city = document.getElementById('city_form');
	var dateStart = document.getElementById('book_date');
	var dateEnd = document.getElementById('book_date_end');
	var messageUser = document.getElementById('message_form');

	var fd = new FormData();
	
	fd.append('name', name.value);
	fd.append('email', email.value);
	fd.append('phone', phone.value);
	fd.append('city', city.value);
	fd.append('date_start', dateStart.value);
	fd.append('date_end', dateEnd.value);
	fd.append('message_user', messageUser.value);
	
	var request = new XMLHttpRequest();
	
	request.open('POST', 'api/api_save_message.php');
	request.onload = function() {
		if (request.status === 200 && request.readyState === 4) {
			if (request.responseText) {
				var btnSubmit = document.getElementById('btn-submit');
				var spinner = document.getElementById('div-spinner');
				
				name.setAttribute('disabled', 'true');
				email.setAttribute('disabled', 'true');
				phone.setAttribute('disabled', 'true');
				city.setAttribute('disabled', 'true');
				dateStart.setAttribute('disabled', 'true');
				dateEnd.setAttribute('disabled', 'true');
				messageUser.setAttribute('disabled', 'true');

				sendMail(name.value, email.value, phone.value, city.value, dateStart.value, dateEnd.value, messageUser.value, request.responseText);
	
				spinner.removeAttribute('hidden');
				btnSubmit.remove();
			} else {
				alert('Hubo un error, por favor intente nuevamente!');
			}
		}
	};
	request.send(fd);
}

function sendMail(name, email, phone, city, dateStart, dateEnd, messageUser, id) {
	var fd = new FormData();

	fd.append('id', id);
	fd.append('name', name);
	fd.append('email', email);
	fd.append('phone', phone);
	fd.append('city', city);
	fd.append('date_start', dateStart);
	fd.append('date_end', dateEnd);
	fd.append('message_user', messageUser);
	
	var request = new XMLHttpRequest();
	
	request.open('POST', 'api/api_send_email.php');
	request.onload = function() {
		if (request.status === 200 && request.readyState === 4) {
			//El texto de respuesta
			//request.responseText 
			var spinner = document.getElementById('div-spinner');
			var alertSuccess = document.getElementById('alert-success');
			
			spinner.remove();
			alertSuccess.removeAttribute('hidden');
			if (request.responseText == true) {
				//alert('Todo bien!');
			} else {
				//alert('Hubo un error, por favor intente nuevamente!');
			}
		}
	};
	request.send(fd);
}