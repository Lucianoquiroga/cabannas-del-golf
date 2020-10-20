function sendEmails() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "@gmail.com",
	Password : "",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}