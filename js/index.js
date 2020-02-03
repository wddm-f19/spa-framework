const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')

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

window.addEventListener('load', event => {
	gotoPage(window.location.hash.slice(1))

	$routes.forEach($link => {
		$link.addEventListener('click', event => {
			gotoPage($link.getAttribute('href').slice(1))
		})
	})

})

