const puppeteer = require("puppeteer");
const axios = require("axios");
const Song = require("../models/Song");


let browser;

exports.getSongThumbnails = async (req, res) => {
  try {
    const { url, songId } = req.query;
    if (!browser) {
      browser = await puppeteer.launch({ headless: true });
    }
    const thumbnail = await getThumbnail(url, browser);
    if (!thumbnail) {
      return res.status(404).json({ message: "Thumbnail not found" });
    }



    const image = await axios.get(thumbnail, { responseType: "arraybuffer" });
    res.set("Content-Type", "image/jpeg");
    res.send(Buffer.from(image.data, "binary"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
    if (
      err.name === "Error" &&
      err.message.startsWith("Error: net::ERR_NAME_NOT_RESOLVED")
    ) {
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
};
