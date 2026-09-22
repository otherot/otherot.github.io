const { chromium } = require('playwright');
const path = require('path');

const cards = [
  { src: '../og/card.html', out: '../images/og-card.png' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const card of cards) {
    await page.goto('file://' + path.resolve(__dirname, card.src));
    const out = path.resolve(__dirname, card.out);
    await page.screenshot({ path: out });
    console.log('Wrote ' + card.out.replace('../', ''));
  }
  await browser.close();
})();
