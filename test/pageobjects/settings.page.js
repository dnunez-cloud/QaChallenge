const Page = require("./page");

class settingsPage extends Page {
	get langSelect () {return $("//*[@id='setting_kad']")}
	get langLabel () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div[2]/p[1]")}

	open () {
		return super.open("settings#general");
	}
}

module.exports = new settingsPage();