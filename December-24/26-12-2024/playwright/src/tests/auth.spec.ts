import test, { expect } from "@playwright/test";

test.skip("Login Skipped", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByRole("textbox", { name: "username" }).fill("user");
  await page.getByRole("textbox", { name: "password" }).fill("password");
  await page.getByRole("button", { name: "login" }).click();

  await expect(page.getByRole("heading", { name: "Todo List" })).toBeVisible();
});

test.fail("Login Fail Test", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByRole("textbox", { name: "username" }).fill("user");
  await page.getByRole("textbox", { name: "password" }).fill("wrongpassword");
  await page.getByRole("button", { name: "login" }).click();

  await expect(page.getByRole("heading", { name: "Todo List" })).toBeVisible();
});

test.only("Login and Todo List Visibility Test", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByRole("textbox", { name: "username" }).fill("user");
  await page.getByRole("textbox", { name: "password" }).fill("password");
  await page.getByRole("button", { name: "login" }).click();

  await expect(page.getByRole("heading", { name: "Todo List" })).toBeVisible();
});

test("Login Button Disabled When Fields Are Empty", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  const loginButton = page.getByRole("button", { name: "login" });
  await expect(loginButton).toBeDisabled();
});
