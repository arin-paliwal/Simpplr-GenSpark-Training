import test, { expect } from "@playwright/test";

test.describe("Todo List Functionality", () => {
  test("Add Task and Mark as Done", async ({ page }) => {
    await page.goto("http://localhost:5173/todolist");
    await page.getByRole("textbox", { name: "task" }).fill("Buy groceries");
    await page.getByRole("button", { name: "Add Task" }).click();

    await expect(page.getByText("Buy groceries")).toBeVisible();

    await page.getByRole("button", { name: "Done" }).click();
    await expect(page.locator("text=Buy groceries").first()).toHaveClass(
      /line-through/
    );
  });

  test("Add Task with Empty Fields", async ({ page }) => {
    await page.goto("http://localhost:5173/todolist");
    await page.getByRole("button", { name: "Add Task" }).click();

    await expect(page.getByText("Please fill out the task.")).toBeVisible();
  });

  test("Todo List Items Persist After Page Reload", async ({ page }) => {
    await page.goto("http://localhost:5173/todolist");
    await page.getByRole("textbox", { name: "task" }).fill("Read book");
    await page.getByRole("button", { name: "Add Task" }).click();
    await page.reload();

    await expect(page.getByText("Read book")).toBeVisible();
  });

  test("Simulating a Slow Network", async ({ page }) => {
    test.setTimeout(20000);
    await page.goto("http://localhost:5173/todolist");
    await page.getByRole("textbox", { name: "task" }).fill("Test slow task");
    await page.getByRole("button", { name: "Add Task" }).click();
    await page.waitForTimeout(2000);

    await expect(page.getByText("Test slow task")).toBeVisible();
  });

  test.fixme("Test that should fail", async ({ page }) => {
    await page.goto("http://localhost:5173/todolist");
    await page.getByRole("textbox", { name: "task" }).fill("");
    await page.getByRole("button", { name: "Add Task" }).click();
    await expect(page.getByText("Please fill out the task.")).toBeVisible();
  });
});
