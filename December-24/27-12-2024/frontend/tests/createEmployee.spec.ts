import { test, expect } from "@playwright/test";

test("should create a new employee when submitting the Add Employee form", async ({
  page,
  request,
}) => {
  await page.goto("http://localhost:5173/add");

  await page.fill('input[name="name"]', "Alex Harry");
  await page.fill('input[name="role"]', "Developer");
  await page.fill('input[name="department"]', "Engineering");
  await page.fill('input[name="email"]', "johndoe@example.com");

  await page.click('button:has-text("Add Employee")');

  const createEmployee = await request.post(
    "http://localhost:5000/api/v1/employees",
    {
      data: {
        name: "Alex Harry",
        role: "Alex Developer",
        department: "Alex Engineering",
        email: "alex-johndoe@example.com",
      },
    }
  );

  await expect(page.locator("text=Alex Harry")).toBeVisible();
});
