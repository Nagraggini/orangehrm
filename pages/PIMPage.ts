import { Page, Locator } from "@playwright/test";

export class PIMPage {
    readonly page: Page;
    readonly addNewEmployeeButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly employeeIdInput: Locator;
    readonly saveButton: Locator;

    readonly employeeListButton: Locator;

    // Search boxes on employee list site
    readonly employeeNameSearchInput: Locator;
    readonly searchEmployeeButton: Locator;

    readonly yesDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addNewEmployeeButton = page.locator(
            "//button[normalize-space()='Add']",
        );
        this.firstNameInput = page.locator("//input[@name='firstName']");
        this.middleNameInput = page.locator("//input[@name='middleName']");
        this.lastNameInput = page.locator("//input[@name='lastName']");
        this.employeeIdInput = page.locator(
            "(//input[@class='oxd-input oxd-input--active'])[2]",
        );
        this.saveButton = page.locator("//button[normalize-space()='Save']");
        this.employeeListButton = page.locator(
            "//a[normalize-space()='Employee List']",
        );
        this.employeeNameSearchInput = page.locator(
            "//label[normalize-space()='Employee Name']/../following-sibling::div//input",
        );
        this.searchEmployeeButton = page.locator(
            "//button[normalize-space()='Search']",
        );

        this.yesDeleteButton = page.locator(
            "//button[normalize-space()='Yes, Delete']",
        );
    }

    async fillTheFormAndSave(
        firstName: string,
        middleName: string,
        lastName: string,
    ): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.saveButton.click();
    }

    async generateRandomCharacters(length: number): Promise<string> {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength),
            );
        }
        return result;
    }

    async getSpecificEmployeeId(lastName: string): Promise<number> {
        const employeeId: number = Number(
            this.page.locator(
                "((//div[normalize-space()='" +
                    lastName +
                    "'])[2]/../preceding-sibling::div)[2]",
            ).textContent,
        );
        return employeeId;
    }

    async deleteSpecificEmployee(lastName: string): Promise<void> {
        await this.page
            .locator(
                "(//div[normalize-space()='" +
                    lastName +
                    "'])[2]/../following-sibling::div//i[@class='oxd-icon bi-trash']",
            )
            .click();
        await this.yesDeleteButton.click();
    }
}
