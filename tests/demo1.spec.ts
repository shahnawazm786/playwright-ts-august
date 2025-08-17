import { Browser, chromium, test } from "@playwright/test";
//import {test} from "@playwright/test"
test("open browser from local chrome path", async ({}) => {
  const explorer: Browser = await chromium.launch({
    headless: false,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const context = await explorer.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
});
