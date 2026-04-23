import { expect, test } from "@playwright/test";

/**
 * Happy-path: dashboard → report chooser → RIDDOR injury flow → worker →
 * over-7-day severity → outcome → submit. If any link in that chain
 * breaks, this test fails loudly — it's the smoke check the CI gate
 * sits on top of.
 */
test("welcome → over-seven-day RIDDOR outcome → submit", async ({ page }) => {
  // Dashboard renders with mocked account context
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Good to see you, Tom/i }),
  ).toBeVisible();

  // Open the report chooser
  await page.getByRole("link", { name: /Report an incident/i }).click();
  await expect(page).toHaveURL(/\/report$/);

  // Pick the injury/RIDDOR route
  await page.getByRole("link", { name: /hurt or taken ill/i }).click();
  await expect(page).toHaveURL(/\/report\/riddor/);

  // Welcome → start
  await page
    .getByRole("button", { name: /Start.*tell me what happened/i })
    .click();
  await expect(page).toHaveURL(/step=incident-type/);

  // Injury
  await page.getByRole("button", { name: /Someone has been injured/i }).click();
  await expect(page).toHaveURL(/step=injury-who/);

  // Worker
  await page.getByRole("button", { name: /A worker/i }).click();
  await expect(page).toHaveURL(/step=injury-worker-severity/);

  // Over-seven-day injury
  await page
    .getByRole("button", { name: /more than seven consecutive days/i })
    .click();
  await expect(page).toHaveURL(/step=outcome/);

  // Outcome banner shows the correct 15-day verdict
  await expect(
    page.getByRole("heading", {
      name: /Reportable to HSE.*over-seven-day injury/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/Within 15 days of the incident/i)).toBeVisible();
  await expect(page.getByText(/Submit form F2508 to the HSE/i)).toBeVisible();

  // Submit → success card (no Supabase/Resend configured in test env; the
  // action still returns ok: true per the never-block-the-user contract)
  await page.getByRole("button", { name: /Send this summary to Sarah/i }).click();
  await expect(page.getByText(/Sent to Sarah/i)).toBeVisible({ timeout: 10_000 });
  await expect(
    page.getByText(/has the full summary.*will call you/i),
  ).toBeVisible();
});
