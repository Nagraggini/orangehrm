import { test, expect } from "../../fixtures/BaseTest";
import { readData } from "../../utils/dataReader";
import { NewEmployee } from "../../models/NewEmployee";

const testData = readData("./data/LoginData.json");

const data = testData[0];

test.describe("TC04 Add new employee and delete test", () => {
    // Backtick (Visszafelé dőlő ékezet)-t használj!
    test(`Add new employee`, async ({
        page,
        loginPage,
        dashBoardPage,
        pimPage,
    }) => {
        test.skip(data.run !== "yes", "Run flag is not yes.");

        var employee: NewEmployee = {
            firstName: await pimPage.generateRandomCharacters(8),
            middleName: await pimPage.generateRandomCharacters(8),
            lastName: await pimPage.generateRandomCharacters(8),
            employeeId: "",
        };

        await test.step("Login", async () => {
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);
        });

        await test.step("Add New Employee", async () => {
            await dashBoardPage.pimButton.click();
            await pimPage.addNewEmployeeButton.click();

            await pimPage.fillTheFormAndSave(
                employee.firstName,
                employee.middleName,
                employee.lastName,
            );
            employee.employeeId = await pimPage.getEmployeeId();
        });

        await test.step("Validate new employee is in the list", async () => {
            await pimPage.employeeListButton.click();
            await pimPage.employeeNameSearchInput.fill(employee.lastName);
            // Megvárjuk, amíg az oldal feldolgozza a kérést.
            await page.waitForLoadState("networkidle");
            await pimPage.searchEmployeeButton.click();

            (await pimPage.getSpecificEmployeeIdByLastName(
                employee.lastName,
            )) === employee.employeeId;
        });

        await test.step("Delete new employee", async () => {
            await pimPage.deleteSpecificEmployee(employee);
        });

        await test.step("Logout", async () => {
            await dashBoardPage.logout();
        });
    });
});
