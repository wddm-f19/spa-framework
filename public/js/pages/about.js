import Page from '../page.js'

export default class About extends Page {
	constructor() {
		super()
		this.html = `
		<header>
			<h2>About</h2>
			<button id="dosomething">Click me!</button>
		</header>
		<h3>Learn more about:</h3>
		<ul class="router">
			<li><a href="about/faculty">Faculty</a></li>
			<li><a href="about/students">Students</a></li>
		</ul>
		<article id="info"></article>`
	}
	registerListeners() {
		console.log('registerListeners() from: About')
		document.querySelector('#dosomething').addEventListener('click', event => {
			alert("It worked!")
		})
	}
	subrequests(path) {
		console.log(path) // The path (after the page) as an Array

		const $info = document.getElementById('info')

		// Depending on the first directive in the URL, load up different content (these can also be Page components!)
		if (path[0] == 'faculty') {
			$info.innerHTML = `<h3>Faculty</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
		} else if (path[0] == 'students') {
			$info.innerHTML = `<h3>Students</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
		}

	}
}
