const $home =    document.getElementById('home')
const $about =   document.getElementById('about')
const $contact = document.getElementById('contact')
const $main =    document.querySelector('.main')

const page = {
	home: '<h2>Home</h2>',
	about: '<h2>About</h2>',
	contact: '<h2>Contact</h2>'
}


$home.addEventListener('click', event => {
	$main.innerHTML = page['home']
})

$about.addEventListener('click', event => {
	$main.innerHTML = page['about']
})

$contact.addEventListener('click', event => {
	$main.innerHTML = page['contact']
})


window.addEventListener('load', event => {
	console.log(window.location.hash)
})

