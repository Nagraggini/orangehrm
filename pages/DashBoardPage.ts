import { Page, Locator } from "@playwright/test";

export class DashBoardPage {
    readonly page: Page;
    readonly fullNameLabel: Locator;
    readonly topRightAccountDropdownMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameLabel = page.locator(".oxd-userdropdown-name");
        this.topRightAccountDropdownMenu = page.locator(
            ".oxd-userdropdown-tab",
        );
        this.logoutButton = page.locator(
            "//a[@class='oxd-userdropdown-link' and normalize-space()='Logout']",
        );
    }

    async logout(): Promise<void> {
        await this.topRightAccountDropdownMenu.click();
        await this.logoutButton.click();
    }
}
