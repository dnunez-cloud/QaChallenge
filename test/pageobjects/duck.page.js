const Page = require("./page");

class duckPage extends Page {
	get searchBar () {return $("//*[@id='search_form_input_homepage']")}
	get searchButton () {return $("//*[@id='search_button_homepage']")}
	get moreResults () {return $("//*[@id='rld-1']/a")}
	get bgBody () {return $("//*[@id='pg-index']")}

	open () {
		return super.open("");
	}
}

module.exports = new duckPage();