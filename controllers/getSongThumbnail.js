const puppeteer = require('puppeteer');
const request = require('request');

let browser;

exports.getSongThumbnails = async (req, res) => {
    const { url } = req.query;
    console.log(url);
    try {
        if (!browser) {
            browser = await puppeteer.launch({ headless: true });
        }
        const thumbnail = await getThumbnail(url, browser);
        if (!thumbnail) {
            return res.status(404).json({ message: "Thumbnail not found" });
        }
        request.get(thumbnail, { encoding: null }, (error, response, body) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            res.set('Content-Type', 'image/jpeg');
            res.send(body);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


async function getThumbnail(url, browserInstance) {
    try {
        const page = await browserInstance.newPage();
        await page.goto(url, { waitUntil: "networkidle0" });
        const thumbnail = await page.evaluate(() => {
            const img = document.querySelector(".js-video-preview-playlink img");
            if (img) {
                return img.getAttribute("src");
            }
            return null;
        });
        await page.close();
        return thumbnail;
    } catch (err) {
        if (err.name === "Error" && err.message.startsWith("Error: net::ERR_NAME_NOT_RESOLVED")) {
            throw new Error("Invalid URL provided");
        } else {
            throw err;
        }
    }
}

exports.cleanup = async () => {
    if (browser) {
        await browser.close();
    }
}
