import { expect, test } from "@playwright/test";

test("Browser context page example", async ({ browser }) => {
  const context = await browser.newContext();
  const context1 = await browser.newContext(); // cookies  // intiator // request -> review -> approver -> approved (intiator/ reviewer/ approver)
  const context2 = await browser.newContext(); //
  const page1 = await context.newPage();
  const page2 = await context1.newPage();
});
// ERP ->
test("Context page example", async ({ context }) => {
  const page1 = await context.newPage();
  const page2 = await context.newPage();
});

test("page example", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
  await expect(page).toHaveURL("https://www/google/com");
});
