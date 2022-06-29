const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {

		var signupemail = document.getElementById('signup-email').value;
		console.log("signup-email:", signupemail);

		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


// action="connectuser.php" method="post"