function getFormvalue() {
	let firstName = document.querySelector(`input[name='fname']`).value;
	let lastName = document.querySelector(`input[name='lname']`).value;
	
	return alert(firstName + " " + lastName);
}

	