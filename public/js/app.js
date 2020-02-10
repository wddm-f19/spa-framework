import HomePage from '/js/pages/home.js'
import AboutPage from '/js/pages/about.js'
import ContactPage from '/js/pages/contact.js'

const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')


const page = {
	home: new HomePage(),
	about: new AboutPage(),
	contact: new ContactPage()
}

const gotoPage = (name) => {
	if (!page[name]) {
		name = 'home'  // Actually, do a "404"
	}
	$main.innerHTML = page[name].getHTML()
}

window.addEventListener('load', event => {
	const route = window.location.pathname.slice(1).split('/')[0]
	gotoPage(route)

	$routes.forEach($link => {
		$link.addEventListener('click', event => {
			event.preventDefault()
			const route = $link.getAttribute('href').slice(1).split('/')[0]
			window.history.pushState({page:`${route}`}, '', `/${route}`)
			gotoPage(route)
		})
	})
})

window.addEventListener('popstate', event => {
	const route = event.state.page
	gotoPage(route);
})