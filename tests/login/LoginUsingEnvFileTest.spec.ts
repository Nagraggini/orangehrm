import { test, expect } from "../../fixtures/BaseTest";
test.describe("TC01 Successful login test and logout", () => {
    test("Successful login test", async ({
        page,
        loginPage,
        dashBoardPage,
    }) => {
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
        await expect(dashBoardPage.fullNameLabel).toBeVisible();
        await dashBoardPage.logout();
    });
});
test.describe("TC02 Unsuccesful login test", () => {
    test("Unsuccesful login test", async ({ page, loginPage }) => {
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.USERNAME!, "abc");
        // Megvárjuk, amíg az oldal feldolgozza a kérést.
        await page.waitForLoadState("networkidle");
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText("Invalid credentials");
    });
});
