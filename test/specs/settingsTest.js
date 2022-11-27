const settingsPage = require("../pageobjects/settings.page.js");

describe("settingsPage tests", () => {
  beforeAll("Open browser", () =>{
		settingsPage.open();
		browser.pause(1000);
	})
  
  it("should be: change the language to lingvo", async () =>{
    //This test will fail because the lingvo option doesn't exist
    await settingsPage.langSelect.selectByVisibleText('Lingvo');
    browser.pause(1000);
    const langDisplayed = await settingsPage.langLabel.getText();
    await expect(langDisplayed).toHaveTextContaining("Lingvo");
  })

  it("should be: change the language to english", async () =>{
    await settingsPage.langSelect.selectByVisibleText('English (Australia)');
    browser.pause(1000);
    const langDisplayed = await settingsPage.langLabel;
    await expect(langDisplayed).toHaveText('Language');
  })
});