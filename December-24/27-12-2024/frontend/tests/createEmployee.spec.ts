import { test, expect } from "@playwright/test";

test("should create a new employee when submitting the Add Employee form", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/add");

  await page.fill('input[name="name"]', "John Doe");
  await page.fill('input[name="role"]', "Developer");
  await page.fill('input[name="department"]', "Engineering");
  await page.fill('input[name="email"]', "johndoe@example.com");

  await page.click('button:has-text("Add Employee")');

  await expect(page.locator("text=John Doe")).toBeVisible();
  await expect(page.locator("text=Developer")).toBeVisible();
  await expect(page.locator("text=Engineering")).toBeVisible();
  await expect(page.locator("text=johndoe@example.com")).toBeVisible();
});
