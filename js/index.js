const $home =    document.getElementById('home')
const $about =   document.getElementById('about')
const $contact = document.getElementById('contact')
const $main =    document.querySelector('.main')
const page = {
	home: '<h2>Home</h2>',
	about: '<h2>About</h2>',
	contact: '<h2>Contact</h2>'
}

const gotoPage = (name) => {
	if (!page[name])
		name = 'home'  // Actually, do a "404"
	$main.innerHTML = page[name]
}

$home.addEventListener('click', event => {
	gotoPage('home')
})

$about.addEventListener('click', event => {
	gotoPage('about')
})

$contact.addEventListener('click', event => {
	gotoPage('contact')
})


window.addEventListener('load', event => {
	gotoPage(window.location.hash.slice(1))
})

