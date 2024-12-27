import { test, expect } from "@playwright/test";

test("should delete an employee when clicking the Delete button", async ({
  page,
}) => {
  await page.route("http://localhost:5000/api/v1/employees", async (route) => {
    const json = {
      data: [
        {
          id: 1,
          name: "John Doe",
          role: "Developer",
          department: "Engineering",
          email: "john.doe@example.com",
        },
      ],
    };
    await route.fulfill({
      status: 200,
      body: JSON.stringify(json),
    });
  });

  await page.goto("http://localhost:5173/");

  await page.click('button:has-text("Delete")');

  await expect(page.locator("text=John Doe")).not.toBeVisible();
});
