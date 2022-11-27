const themePage = require("../pageobjects/theme.page.js");
const duckPage = require("../pageobjects/duck.page.js");

describe("themePage tests", () => {
  beforeAll("Open browser", () =>{
		themePage.open();
		browser.pause(1000);
	})
  
  it("should be: change the theme to terminal", async () =>{
    await themePage.terminalTheme.click();
    //await themePage.saveButton.click();
    duckPage.open()
    const bgColor = await duckPage.bgBody.getCSSProperty('background-color');
    await expect(bgColor).toHaveValueContaining({ property: 'background-color', value: 'rgba(34,34,34,1)', parsed: Object({ hex: '#222222', alpha: 1, type: 'color', rgba: 'rgba(34,34,34,1)' }) });
    browser.refresh();
  })
});