// Playwright Fixture mintát követve mindent kitakarít a háttérben!
// fixtures/baseTest.ts
import { test as base, devices, BrowserContext, Page } from "@playwright/test";
import { LoginPage as LoginPage } from "../pages/LoginPage";

// 1. Lépés: Definiáljuk a fixture-ök típusait (milyen Page Objectjeink lesznek)
type MyFixtures = {
    // Első felhasználó környezete:
    context: BrowserContext; // Oldalváltáshoz kell.
    page: Page;
    loginPage: LoginPage;

    // Második felhasználó környezete:
    page2: Page;
};

// 2. Lépés: Kiterjesztjük az alap 'test' objektumot
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // Átadjuk a tesztnek használatra
        await use(new LoginPage(page));
    },
});

// 3. Lépés: Újraexportáljuk az 'expect' funkciót is, a kényelmesebb importálásért
export { expect } from "@playwright/test";

// Minden teszt után lefut.
test.afterEach(async ({ context }) => {
    await context.close();
});
