import Page from '../page.js'

export default class About extends Page {
	constructor() {
		super()
		this.html = `<h2>About</h2>
		<button id="dosomething">Click me!</button>`
	}
	registerListeners() {
		console.log('registerListeners() from: About')
		document.querySelector('#dosomething').addEventListener('click', event => {
			alert("It worked!")
		})
	}
}
