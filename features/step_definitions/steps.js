const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const { expect } = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', { timeout: 300 * 1000 }, async function (userName, password) {
    //Login Page
    const loginPage = this.pomanager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(userName, password);
});

When('Add {string} to the cart', async function (productTitle) {
    //Dashboard Page
    this.dashboard = this.pomanager.getDashboardPage();
    await this.dashboard.searchProductAddToCart(productTitle);
    await this.dashboard.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productTitle) {
    //Cart Page
    const cartPage = this.pomanager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productTitle);
    await cartPage.Checkout();
});

When('Enter valid details and Place the order', async function () {
    //Orders Review Page
    const ordersReviewPage = this.pomanager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order is present in the OrderHistory', async function () {
    //Orders History Page
    await this.dashboard.navigateToOrders();
    const ordersHistoryPage = this.pomanager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 300 * 1000 }, async function (userName, password) {
    const userNameLocator = this.page.locator('#username');
    const passwordLocator = this.page.locator('#password');
    const signIn = this.page.locator('#signInBtn');

    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await this.page.title());
    await userNameLocator.fill(userName);
    await passwordLocator.fill(password);
    await signIn.click();
});

Then('Verify Error Message is displayed', async function () {
    const errorMessage = this.page.locator('[style*="block"]');
    console.log(await errorMessage.textContent());
    expect(await errorMessage.textContent()).toContain('Incorrect');
});