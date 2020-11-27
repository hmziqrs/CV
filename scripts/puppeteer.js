const puppeteer = require('puppeteer');

// const url = 'https://hackerhgl-cv.web.app';
const url = 'http://localhost:8848/build/';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      height: 1080,
      width: 1280,
    }
  });
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  await page.evaluate( function(){
    toggle();
  });
  await page.screenshot({path: 'build/assets/hackerhgl-cv.jpg', fullPage: true});
  await page.pdf({
    format: 'a3',
    printBackground: true,
    displayHeaderFooter: true,
    path: 'build/assets/hackerhgl-cv.pdf',
  });

  await browser.close();
})();
