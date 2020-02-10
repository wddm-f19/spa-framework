import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `
			<h2>Home</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, excepturi placeat deserunt a sint tempore iure delectus. Explicabo tenetur eligendi rerum consequatur adipisci! Non recusandae provident placeat facere aut architecto!</p>`
	}
}