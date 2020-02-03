const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')

class HomePage {
	constructor() {
		this.html = '<h2>Home</h2>'
	}
	getHTML() {
		return this.html
	}
}

class AboutPage {
	constructor() {
		this.html = '<h2>About</h2>'
	}
	getHTML() {
		return this.html
	}
}

class ContactPage {
	constructor() {
		this.html = '<h2>Contact</h2>'
	}
	getHTML() {
		return this.html
	}
}

const page = {
	home: new HomePage(),
	about: new AboutPage(),
	contact: new ContactPage()
}


const gotoPage = (name) => {
	if (!page[name])
		name = 'home'  // Actually, do a "404"
	$main.innerHTML = page[name].getHTML();
}

window.addEventListener('load', event => {
	gotoPage(window.location.hash.slice(1))

	$routes.forEach($link => {
		$link.addEventListener('click', event => {
			gotoPage($link.getAttribute('href').slice(1))
		})
	})

})

