import { Page, Locator } from "@playwright/test";

export class AdminPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly userRoleDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator("//button[normalize-space()='Add']");
        this.userRoleDropDown = page.locator(
            "(//div[normalize-space()='-- Select --'])[1]",
        );

        // - //div[normalize-space()='User Role']/following-sibling::div[normalize-space()='Admin']
    }

    async chooseUserRole(userRole: string): Promise<void> {
        await this.userRoleDropDown.click();
    }
}
