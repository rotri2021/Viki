function submit (){
	debugger
	let login = document.getElementById('login').value;	
	let password = document.getElementById('password').value;	
	
	if(login == '1' && password == '11')
		document.location.href="logindocument.html"

		else alert("Error!!");
}

function register () {
	debugger
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if(!login  && !password )
  {
  	debugger;
    alert('Ви не ввели логін або пароль');
  }
	
}