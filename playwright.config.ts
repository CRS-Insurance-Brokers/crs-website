import { defineConfig, devices } from "@playwright/test";

/**
 * Happy-path E2E. Boots the prod build (not dev) so the test exercises
 * the same server actions + static prerender that real users hit. The
 * webServer block starts `npm run start` on :3000 and Playwright
 * waits until the URL responds before running.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 14"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: "pipe",
    stderr: "pipe",
  },
});
