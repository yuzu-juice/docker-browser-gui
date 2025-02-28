const { chromium } = require("playwright");

(async () => {
    console.log("Starting browser...");

    // ブラウザを起動
    const browser = await chromium.launch({
        headless: false,
    });

    // 新しいページを開く
    const context = await browser.newContext({});
    const page = await context.newPage();

    // YouTubeを開く
    console.log("Navigating to YouTube...");
    await page.goto("https://www.youtube.com/watch?v=u7IZAyq0FaU");

    // タイトルをログに出力する
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // ブラウザを起動したまま維持する（Ctrl+C で終了できます）
    console.log("Browser is running. Press Ctrl+C to exit.");
})().catch((err) => {
    console.error("An error occurred:", err);
    process.exit(1);
});
