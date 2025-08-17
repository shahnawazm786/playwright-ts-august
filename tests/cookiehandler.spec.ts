import { test } from "@playwright/test";
test("demo5", async ({ browser }) => {
  const context = await browser.newContext();
  var ck = await context.cookies();
  console.log(ck);
  await context.addCookies([
    { name: "userid", value: "admin", path: "/", domain: "localhost" },
  ]);
  //const users = [{ name: "userid", value: "admin", location: "/" }];
  //await context.addCookies(users);
  ck = await context.cookies();
  console.log(ck);
});
