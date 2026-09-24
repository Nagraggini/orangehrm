import { test as base, devices, BrowserContext, Page } from "@playwright/test";
import { LoginPage as LoginPage } from "../pages/LoginPage";
import { DashBoardPage as DashBoardPage } from "../pages/DashBoardPage";
import { AdminPage as AdminPage } from "../pages/AdminPage";
import { PIMPage as PIMPage } from "../pages/PIMPage";

type MyFixtures = {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    dashBoardPage: DashBoardPage;
    adminPage: AdminPage;
    pimPage: PIMPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashBoardPage: async ({ page }, use) => {
        await use(new DashBoardPage(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },
    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
});

export { expect } from "@playwright/test";

test.afterEach(async ({ context }) => {
    await context.close();
});
