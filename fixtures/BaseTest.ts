import { test as base, devices, BrowserContext, Page } from "@playwright/test";
import { LoginPage as LoginPage } from "../pages/LoginPage";
import { DashBoardPage as DashBoardPage } from "../pages/DashBoardPage";

type MyFixtures = {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    dashBoardPage: DashBoardPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashBoardPage: async ({ page }, use) => {
        await use(new DashBoardPage(page));
    },
});

export { expect } from "@playwright/test";

test.afterEach(async ({ context }) => {
    await context.close();
});
