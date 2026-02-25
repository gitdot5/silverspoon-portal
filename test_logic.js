const puppeteer = require('puppeteer');

(async () => {
    console.log("Launching headless browser...");
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    let passes = 0;
    let errors = 0;

    console.log("Starting 1000 passes of logic testing...");

    // Initial load
    try {
        await page.goto('http://localhost:3000/dashboard', { waitUntil: 'domcontentloaded' });
    } catch (e) {
        console.error("Failed to load initial page:", e.message);
        await browser.close();
        process.exit(1);
    }

    const startTime = Date.now();

    for (let i = 1; i <= 1000; i++) {
        try {
            // Dashboard -> Reports
            await page.click('a[href="/reports"]');
            await page.waitForSelector('.reports-container');

            // Reports -> Strategy
            await page.click('a[href="/strategy"]');
            await page.waitForSelector('.strategy-container');

            // Interact with Strategy checkboxes
            const checkboxes = await page.$$('.custom-checkbox');
            if (checkboxes.length > 0) {
                await checkboxes[0].click();
            }

            // Strategy -> Admin
            await page.click('a[href="/admin"]');
            await page.waitForSelector('.admin-container');

            // Admin -> Dashboard
            await page.click('a[href="/dashboard"]');
            await page.waitForSelector('.dashboard-container');

            passes++;
            if (passes % 100 === 0) {
                console.log(`Completed ${passes} passes...`);
            }
        } catch (e) {
            console.error(`Error on pass ${i}:`, e.message);
            errors++;
            // Recover state
            await page.goto('http://localhost:3000/dashboard', { waitUntil: 'domcontentloaded' });
        }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\nTesting complete in ${duration}s.`);
    console.log(`Target Passes: 1000`);
    console.log(`Successful Passes: ${passes}`);
    console.log(`Errors encountered: ${errors}`);

    if (errors === 0) {
        console.log("SUCCESS: All logic passed smoothly.");
    } else {
        console.log(`WARNING: ${errors} errors occurred out of 1000 passes.`);
    }

    await browser.close();
})();
