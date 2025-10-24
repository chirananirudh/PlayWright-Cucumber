const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

// Before({tags: "@Validation or @Regression"},async function () { --> Tagged Hooks Code
Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pomanager = new POManager(this.page);
});

After(function () {
    console.log("I am the last to execute");
});

BeforeStep(function () {

});

AfterStep(async function ({ result }) {
    if (result.status == Status.FAILED) {
        //code to take screenshot
        await this.page.screenshot({ path: './screenshot/screenshot_Fail.png', fullPage: true });
    }
});