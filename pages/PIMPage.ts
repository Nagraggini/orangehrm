import { Page, Locator } from "@playwright/test";

export class PIMPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly employeeIdInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator("//button[normalize-space()='Add']");
        this.firstNameInput = page.locator("//input[@name='firstName']");
        this.middleNameInput = page.locator("//input[@name='middleName']");
        this.lastNameInput = page.locator("//input[@name='lastName']");
        this.employeeIdInput = page.locator(
            "(//input[@class='oxd-input oxd-input--active'])[2]",
        );
    }

    async fillTheForm(firstName: string): Promise<void> {
        //TODO
    }
}
