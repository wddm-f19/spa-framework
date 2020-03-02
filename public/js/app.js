import Home from '/js/pages/home.js'
import About from '/js/pages/about.js'
import Contact from '/js/pages/contact.js'

// Store a few references
// const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')

// Create our page routes
const routes = {
	home: new Home(),
	about: new About(),
	contact: new Contact()
}

// Load new page content
const gotoPage = (name, subs=null) => {
	if (!routes[name]) {
		name = 'home'  // Actually, do a "404"
	}
	// $main.innerHTML = routes[name].getHTML() 
	routes[name].render($main) // Put the HTML in the container, AND setup events

	if (subs) {
		routes[name].subrequests(subs)
	}
}

// If someone uses the browser back/forward functionality, redirect
window.addEventListener('popstate', event => {
	const route = event.state.path
	gotoPage(route);
})

// When the page loads...
window.addEventListener('load', event => {

	// Get the page url and load the Page based on the pathname
	const path = window.location.pathname.replace(/^\/+/g, '').split('/')
	const route = path[0]
	const subrequests = path.slice(1)


	if (route == '') {
		gotoPage('home', subrequests)
	} else {
		gotoPage(route, subrequests)
	}

	
	// When anything is clicked
	window.addEventListener('click', event => {

		// For all `.router a`...
		if (event.target.matches('.router a')) {

			const $link = event.target;

			event.preventDefault() // Stop the browser from redirecting

			// Go to the page specified in the href
			const path = $link.getAttribute('href').replace(/^\/+/g, '').split('/')
			const route = path[0]
			const subrequests = path.slice(1)
			
			gotoPage(route, subrequests)

			// Add browser history so we can go back/forward
			window.history.pushState({path:`/${route}/${subrequests.join('/')}`}, '', `/${route}/${subrequests.join('/')}`)
		}
	})

})
