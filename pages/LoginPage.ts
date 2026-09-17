import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator("//button[normalize-space()='Login']");
        this.errorMessage = page.locator(
            "//p[normalize-space()='Invalid credentials']",
        );
    }

    async gotoLoginPage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/");
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}
