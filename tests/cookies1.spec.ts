import { test } from "@playwright/test";
test("cookies variable", async ({ browser }) => {
  const context = await browser.newContext();
  const ck = await context.cookies();
  console.log(ck);
  const add_cook = [
    { name: "login", value: "admin", path: "/", domain: "localhost" },
    { name: "password", value: "admin@12345", path: "/", domain: "localhost" },
  ];
  await context.addCookies(add_cook);
  const ck1 = await context.cookies();
  console.log(ck1);
});
