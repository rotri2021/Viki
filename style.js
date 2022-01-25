document.getElementById('check').onclick =function (){
	let login = document.getElementById('login').value;	
	let password = document.getElementById('password').value;	
	
	if(login == '1' && password == '11')
		document.location.href="logindocument.html"

		else alert("Error!!");
}

document.getElementById('check_registr').onclick_register = function() {
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if(login == null && password == null)
	{
		alert('Ви не ввели логін або пароль');
	}
	
}