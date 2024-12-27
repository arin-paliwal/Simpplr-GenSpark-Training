import { test, expect } from "@playwright/test";

test("should edit an existing employee when submitting the Edit Employee form", async ({
  page,
  request,
}) => {
  await page.goto("http://localhost:5173/update/1");

  await page.goto("http://localhost:5173/update/1");
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill("Arin Paliwal");
  await page.locator('input[name="role"]').click();
  await page.locator('input[name="role"]').fill("SDE Intern");
  await page.locator('input[name="department"]').click();
  await page.locator('input[name="department"]').fill("CSE");
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("arin@paliwal.com");
  await page.getByRole("button", { name: "Update" }).click();

  const updateTodo = await request.put(
    "http://localhost:5000/api/v1/employees/update/1",
    {
      data: {
        name: "Arin Paliwal",
        role: "SDE Intern",
        department: "CSE",
        email: "arin@paliwal.com",
      },
    }
  );
  await page.getByRole("button", { name: "View" }).first().click();
  await page.getByText("Name: Arin Paliwal").click();
});
