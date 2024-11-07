import puppeteer, { Page } from "puppeteer";
import { parseArgs } from "util";
import server from "http-server";
import { log } from "console";

const links: Record<string, string> = {
  prod: "https://cv.hmziq.rs",
  local: "http://127.0.0.1:8899",
  dev: "http://127.0.0.1:3000",
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

declare function toggleJpeg(): void;

async function capture(page: Page, dark = true) {
  const theme = dark ? "dark" : "light";
  await page.pdf({
    format: "a2",
    printBackground: true,
    displayHeaderFooter: true,
    path: `public/hmziqrs-${theme}-cv.pdf`,
  });
  console.log(`${theme} pdf saved`);
  await page.evaluate(`(() => {
    window.toggleJpeg();
    })()`);
  console.log(`${theme} toggle start`);
  await sleep(1000);
  await page.screenshot({
    path: `public/hmziqrs-${theme}-cv.jpg`,
    fullPage: true,
  });
  console.log(`${theme} jpeg saved`);
  await page.evaluate(`(() => {
    window.toggleJpeg();
    })()`);
  console.log(`${theme} toggle end`);
  await sleep(1000);
}

async function run() {
  try {
    const { values } = parseArgs({
      args: process.argv,
      strict: false,
      options: {
        env: {
          type: "string",
          default: "local",
        },
      },
    });

    const env = values.env as string;
    log("ENV", env);
    if (env === "local") {
      console.log("Local server started");
      server
        .createServer({
          root: "out",
        })
        .listen(8899, "0.0.0.0");
    }
    console.log(env, links[env]);
    const browser = await puppeteer.launch({
      // headless: false,
      headless: true,
      args: ["--no-sandbox"],
      defaultViewport: {
        height: 1080,
        width: 1280,
      },
    });
    console.log("Browser launched");
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.setCacheEnabled(false);
    await page.goto(links[env], { waitUntil: "networkidle0" });
    console.log("Page loaded");
    await capture(page, true);
    console.log("Captured dark theme");
    await page.evaluate(() => {
      const html = document.querySelector("html");
      if (html) {
        html.classList.remove("dark");
      }
    });
    await sleep(4000);
    await capture(page, false);
    console.log("Captured light theme");
    await browser.close();
    console.log("Browser closed");
    process.exit();
  } catch (e) {
    console.error("FAILED TO get snapshot");
    console.error(e);
    process.exit(1);
  }
}

run();
