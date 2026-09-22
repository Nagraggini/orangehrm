import { test, expect } from "../fixtures/BaseTest";
import { LoginPage } from "../pages/LoginPage";
import { PIMPage } from "../pages/PIMPage";
import { readData } from "../utils/dataReader";

const testData = readData("./data/LoginData.json");

const data = testData[0];

test.describe("Login Tests", () => {
    // Soronként haladunk, az any-val elfogadunk minden típust.

    // Backtick (Visszafelé dőlő ékezet)-t használj!
    test(`Add new user`, async ({
        page,
        loginPage,
        dashBoardPage,
        pimPage,
    }) => {
        test.skip(data.run !== "yes", "Run flag is not yes.");

        await test.step("Login", async () => {
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);
        });

        const lastName = await pimPage.generateRandomCharacters(8);

        await test.step("Add New Employee", async () => {
            await dashBoardPage.pimButton.click();
            await pimPage.addNewEmployeeButton.click();

            await pimPage.fillTheFormAndSave("Jane", "", lastName);
        });

        await test.step("Validate new employee is in the list", async () => {
            await pimPage.employeeListButton.click();
            await pimPage.employeeNameSearchInput.fill(lastName);
            await pimPage.searchEmployeeButton.click();

            (await pimPage.getSpecificEmployeeId(lastName)) > 0;
        });

        await test.step("Delete new employee", async () => {
            await pimPage.deleteSpecificEmployee(lastName);
        });

        await test.step("Logout", async () => {
            await dashBoardPage.logout();
        });
    });
});
