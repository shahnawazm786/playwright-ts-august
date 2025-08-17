import { expect, test } from "@playwright/test";
test("title match", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
  await expect(page).toHaveURL("https://www.google.com");
});
