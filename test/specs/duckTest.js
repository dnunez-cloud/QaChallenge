const duckPage = require("../pageobjects/duck.page.js");

describe("duckPage tests", () => {
  beforeAll("Open browser", () =>{
		duckPage.open();
		browser.pause(1000);
	})
  
  it("should be: search for Michael Jordan", async () =>{
    await duckPage.searchBar.setValue("Michael Jordan");
    await duckPage.searchButton.click();
    await expect(browser).toHaveUrl('https://duckduckgo.com/?q=Michael+Jordan&t=h_&ia=web');
    browser.back();
    browser.refresh();
  })

  it("should be: search for Michael Jordan image", async () =>{
    await duckPage.searchBar.setValue("Michael Jordan");
    await duckPage.searchButton.click();
    const imageTag = await $('<img />');
    await expect(imageTag).toExist();
    browser.back();
    browser.refresh();
  })

  it("should be: search for Michael Jordan Wikipedia page", async () =>{
    await duckPage.searchBar.setValue("Michael Jordan");
    await duckPage.searchButton.click();
    const wikipediaTag = await $('*=wikipedia');
    await expect(wikipediaTag).toHaveHref('https://en.wikipedia.org/wiki/Michael_Jordan');
    browser.back();
    browser.refresh();
  })

  it("should be: search for Michael Jordan Nba page", async () =>{
    await duckPage.searchBar.setValue("Michael Jordan");
    await duckPage.searchButton.click();
    await duckPage.moreResults.click();
    const nbaPage = await $('*=nba.com');
    await expect(nbaPage).toHaveHrefContaining('https://www.nba.com/')
    browser.back();
    browser.refresh();
  })
});