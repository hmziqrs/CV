import puppeteer from "puppeteer";
import { parseArgs } from "util";
import server from "http-server";

const links: Record<string, string> = {
  prod: "https://cv.hmziq.rs",
  local: "http://127.0.0.1:3000/",
};

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

    if (env === "local") {
      server
        .createServer({
          root: "out",
        })
        .listen(8080);
    }
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
      defaultViewport: {
        height: 1080,
        width: 1280,
      },
    });
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.setCacheEnabled(false);
    await page.goto(links[env], { waitUntil: "networkidle0" });
    await page.screenshot({
      path: "public/hmziqrs-cv.jpg",
      fullPage: true,
    });
    await page.pdf({
      format: "a2",
      printBackground: true,
      displayHeaderFooter: true,
      path: "public/hmziqrs-cv.pdf",
    });

    await browser.close();
    process.exit();
  } catch (e) {
    console.error("FAILED TO get snapshot");
    console.error(e);
    process.exit(1);
  }
}

run();
