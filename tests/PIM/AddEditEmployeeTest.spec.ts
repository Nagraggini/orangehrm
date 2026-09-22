import { test, expect } from "../../fixtures/BaseTest";
import { readData } from "../../utils/dataReader";
import { NewEmployee } from "../../models/NewEmployee";

const testData = readData("./data/LoginData.json");

const data = testData[0];

test.describe("TC05 Edit employee and delete test", () => {
    // Backtick (Visszafelé dőlő ékezet)-t használj!
    test(`Add new employee`, async ({
        page,
        loginPage,
        dashBoardPage,
        pimPage,
    }) => {
        test.skip(data.run !== "yes", "Run flag is not yes.");

        var oldEmployee: NewEmployee = {
            firstName: await pimPage.generateRandomCharacters(8),
            middleName: await pimPage.generateRandomCharacters(8),
            lastName: await pimPage.generateRandomCharacters(8),
            employeeId: 0,
        };

        var modifiedEmployee: NewEmployee = {
            firstName: await pimPage.generateRandomCharacters(8),
            middleName: await pimPage.generateRandomCharacters(8),
            lastName: await pimPage.generateRandomCharacters(8),
            employeeId: 0,
        };

        await test.step("Login", async () => {
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);
        });

        await test.step("Add New Employee", async () => {
            await dashBoardPage.pimButton.click();
            await pimPage.addNewEmployeeButton.click();

            await pimPage.fillTheFormAndSave(
                oldEmployee.firstName,
                oldEmployee.middleName,
                oldEmployee.lastName,
            );
            oldEmployee.employeeId = await pimPage.getEmployeeId();
            modifiedEmployee.employeeId = await pimPage.getEmployeeId();
        });

        await test.step("Search employee", async () => {
            await pimPage.employeeListButton.click();
            await pimPage.employeeIdSearchInput.fill(
                String(modifiedEmployee.employeeId),
            );
            // Megvárjuk, amíg az oldal feldolgozza a kérést.
            await page.waitForLoadState("networkidle");
            await pimPage.searchEmployeeButton.click();
        });

        await test.step("Edit employee", async () => {
            await pimPage.editSpecificEmployee(modifiedEmployee);
        });

        await test.step("Search employee", async () => {
            await pimPage.employeeListButton.click();
            await pimPage.employeeIdSearchInput.fill(
                String(modifiedEmployee.employeeId),
            );
            // Megvárjuk, amíg az oldal feldolgozza a kérést.
            await page.waitForLoadState("networkidle");
            await pimPage.searchEmployeeButton.click();
        });

        await test.step("Validate modification data", async () => {
            // TODO
        });

        await test.step("Delete new employee", async () => {
            await pimPage.deleteSpecificEmployee(modifiedEmployee);
        });

        await test.step("Logout", async () => {
            await dashBoardPage.logout();
        });
    });
});
