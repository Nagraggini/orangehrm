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
            firstName: await pimPage.generateRandomCharacters(8, false),
            middleName: await pimPage.generateRandomCharacters(8, false),
            lastName: await pimPage.generateRandomCharacters(8, false),
            employeeId: await pimPage.generateRandomCharacters(8, true),
        };

        await test.step("Login", async () => {
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);
        });
        await test.step("Add New Employee", async () => {
            await dashBoardPage.pimButton.click();
            await pimPage.addNewEmployeeButton.click();

            await pimPage.fillTheFormAndSave(employee);

            console.log("employeeId: " + employee.employeeId);
            console.log("lastName:" + employee.lastName);
        });

        await test.step("Validate new employee is in the list", async () => {
            // Megvárjuk, amíg az oldal feldolgozza a kérést.
            await page.waitForLoadState("networkidle");
            await pimPage.employeeListButton.click();
            //  await pimPage.employeeNameSearchInput.fill(employee.lastName);
            await pimPage.employeeIdInput.fill(employee.employeeId);
            await pimPage.searchEmployeeButton.click();

            // Megvárjuk, amíg az oldal feldolgozza a kérést.
            await page.waitForLoadState("networkidle");

            var resultText: string = await pimPage.getResultLabelText();
            console.log(resultText);

            if (resultText !== "(1) Records Found") {
                await pimPage.searchEmployeeButton.click();
            }

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
