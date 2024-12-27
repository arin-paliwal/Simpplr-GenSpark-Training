import { test, expect } from "@playwright/test";

test("should render ShowEmployees on root route", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.locator("text=All Employees")).toBeVisible();
  await expect(page.locator('button:has-text("Add Employee")')).toBeVisible();
});

test("should navigate to ShowSpecificEmployee when clicking a View button", async ({
  page,
}) => {
  await page.route("http://localhost:5000/api/v1/employees", async (route) => {
    const json = {
      data: [
        {
          id: 1,
          name: "Alice Johnson",
          role: "Developer",
          department: "Engineering",
          email: "john@doe.com",
        },
      ],
    };
    await route.fulfill({
      status: 200,
      body: JSON.stringify(json),
    });
  });
  await page.goto("http://localhost:5173/");
  await page.locator('button:has-text("View")').first().click();
  await expect(page).toHaveURL("http://localhost:5173/1");
  await expect(page.getByText("Name: Alice Johnson")).toBeVisible();
});

test("should navigate to EditEmployee when clicking Update button", async ({
  page,
}) => {
  await page.route("http://localhost:5000/api/v1/employees", (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({
        data: [
          {
            id: 1,
            name: "John Doe",
            role: "Developer",
            department: "Engineering",
            email: "john.doe@example.com",
          },
        ],
      }),
    });
  });

  await page.goto("http://localhost:5173/");
  await page.locator('button:has-text("Update")').first().click();
  await expect(page).toHaveURL("http://localhost:5173/update/1");
});

test("should navigate to AddEmployee when clicking Add Employee button", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.locator('button:has-text("Add Employee")').click();
  await expect(page).toHaveURL("http://localhost:5173/add");
});
