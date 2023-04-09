import { test, expect } from "@playwright/test";

// test("Shall render hello world", async ({ page }) => {
//   //we can go to the wanna go to the page
//   await page.goto("/");
//   //wether  this page's title is "e2e lesson"
//   await expect(page).toHaveTitle("e2e lesson");
//   //check h tag's element. in this case <h1>
//   await expect(page.getByRole("heading")).toHaveText("Hello World");
// });

test("Shall render hello world", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("e2e lesson");
  await expect(page.getByRole("heading")).toHaveText("Hello World🚀");
});
