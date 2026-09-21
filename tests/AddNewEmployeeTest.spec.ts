import { test, expect } from "../fixtures/BaseTest";
import { LoginPage } from "../pages/LoginPage";
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
        adminPage,
    }) => {
        test.skip(data.run !== "yes", "Run flag is not yes.");

        await test.step("Login", async () => {
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);
        });

        await test.step("Add New Employee", async () => {
            await dashBoardPage.pimButton.click();
            await page.pause();
        });

        await test.step("Validate new employee is in the list", async () => {
            // TODO
        });

        await test.step("Delete new employee", async () => {
            // TODO
        });

        await test.step("Logout", async () => {
            await dashBoardPage.logout();
        });
    });
});
