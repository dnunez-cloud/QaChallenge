const Page = require("./page");

class themePage extends Page {
	get defaultTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[1]")}
	get basicTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[2]")}
	get contrastTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[3]")}
	get darkTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[4]")}
	get greyTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[5]")}
	get terminalTheme () {return $("//*[@id='content_internal']/div[1]/div[1]/div[2]/form/div/div/div[6]")}
	get saveButton () {return $("//*[@id='content_internal']/div[1]/div[1]/div[3]/a")}

	open () {
		return super.open("settings#theme");
	}
}

module.exports = new themePage();