import { test, expect } from "@playwright/test";

test("should delete an employee when clicking the Delete button", async ({
  page,
  request,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Delete" }).first().click();
  const deleteEmployee = await request.delete(
    "http://localhost:5000/api/v1/employees/delete/1"
  );
  console.log(deleteEmployee);
  await expect(page.locator("text=John Doe")).not.toBeVisible();
});
