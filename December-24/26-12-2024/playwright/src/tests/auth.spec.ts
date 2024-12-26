import test, { expect } from "@playwright/test";

test('Login',async({page})=>{
    await page.goto('http://localhost:5173/login');
    await page.getByRole('textbox',{name:'username'}).fill('user');
    await page.getByRole('textbox',{name:'password'}).fill('password');
    await page.getByRole('button',{name:'login'}).click();

    await expect(page.getByRole('heading',{name:'Todo List'})).toBeVisible();
})