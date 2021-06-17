const puppeteer = require("puppeteer");
const args = require("args-parser")(process.argv);

const links = {
  production: "https://hackerhgl-cv.web.app",
  dev: "http://localhost:8848/build/",
};

async function run() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],

      defaultViewport: {
        height: 1080,
        width: 1280,
      },
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setCacheEnabled(false);
    await page.goto(links[args.env], { waitUntil: "networkidle0" });
    await page.evaluate(function () {
      toggle();
    });
    await page.screenshot({
      path: "build/assets/hackerhgl-cv.jpg",
      fullPage: true,
    });
    await page.screenshot({
      path: "build/assets/hackerhgl-cv.png",
      fullPage: true,
    });
    await page.pdf({
      format: "a3",
      printBackground: true,
      displayHeaderFooter: true,
      path: "build/assets/hackerhgl-cv.pdf",
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
