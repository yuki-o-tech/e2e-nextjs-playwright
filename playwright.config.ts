import { PlaywrightTestConfig, devices } from "@playwright/test";
import path from "path";

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
  timeout: 5 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 0,
  webServer: {
    command: "npm start",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL,
  },
  //playywright can output test's report. in this case it outputs 'html' style's report
  //always means when test was finished, this 'html' browser will run automatically
  reporter: [["html", { open: "always" }]],
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
