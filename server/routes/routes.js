const UrlDao = require("../schema/UrlDao.js");
const express = require("express");
const router = express.Router();
const validator = require("validator");
// const path = require("path");

const urls = new UrlDao();

router.post("/api/urls", (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = req.body.shortUrl;

  if (!validator.isURL(longUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  urls
    .create(longUrl, shortUrl, "")
    .then((urls) =>
      res.status(201).json({
        data: urls,
      })
    )
    .catch((err) => errorHandler(res, 400, err));
});

router.get("/:code", (req, res) => {
  const newUrlCode = req.params.code;
  
  urls
    .redirectUrl(newUrlCode)
    .then((url) => {
      console.log(url);
      if (url) {
        return res.redirect(url.longUrl);
      } else {
        return res.status(404).json("No URL Found");
      }
    })
    .catch((err) => errorHandler(res, 400, err));
});

function errorHandler(res, status, error) {
  res.status(status).json({
    errors: [
      {
        status: status,
        detail: error.message || error,
      },
    ],
  });
}

module.exports = router;
