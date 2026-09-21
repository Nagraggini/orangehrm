import { test, expect } from "../fixtures/BaseTest";
import { LoginPage } from "../pages/LoginPage";
import { readData } from "../utils/dataReader";

// Jobb klikk a fájlon és Copy Relative Path. /-re figyelj!
//Típus biztonsággal, elkelhetjük a fordításkori futás esetén bekövetkező hibákat.
const testData = readData("./data/LoginData.json");
// const testData = readData('./data/LoginData.csv');
//const testData = readData("./data/LoginData.xlsx", "Sheet1");

test.describe("Login Tests", () => {
    // Soronként haladunk, az any-val elfogadunk minden típust.
    for (const data of testData) {
        // Backtick (Visszafelé dőlő ékezet)-t használj!
        test(`Login test for - ${data.username}`, async ({
            page,
            loginPage,
            dashBoardPage,
        }) => {
            // A skippelt tesztek láthatóak a reportban is, felül a lapfülek között.
            test.skip(
                // Ha nem yes az értéke, akkor ne csináljon semmit.
                data.run !== "yes",
                "Run flag is not yes.",
            );

            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);

            await test.step("Validate Result", async () => {
                if (data.expected === "success") {
                    await expect(page).toHaveURL(
                        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
                    );
                    await expect(dashBoardPage.fullNameLabel).toBeVisible();
                    await dashBoardPage.logout();
                } else {
                    await expect(loginPage.errorMessage).toBeVisible();
                }
            });
        });
    }
});
