const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:4173");
  await page.waitForLoadState("networkidle");
  const footer = page.locator("footer");
  const logo = footer.locator("img").first();
  console.log("Footer visible:", await footer.isVisible());
  console.log("Logo Height:", await logo.evaluate(e => e.clientHeight));
  console.log("Logo Width:", await logo.evaluate(e => e.clientWidth));
  await page.screenshot({ path: "footer-test.png", fullPage: true });
  console.log("Screenshot saved!");
  await browser.close();
})();
