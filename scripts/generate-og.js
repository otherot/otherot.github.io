const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 627 } });
  await page.goto('file://' + path.resolve(__dirname, '../og/card.html'));
  await page.screenshot({ path: path.resolve(__dirname, '../images/og-card.png') });
  await browser.close();
  console.log('Wrote images/og-card.png');
})();
