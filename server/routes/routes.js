const UrlDao = require("../schema/UrlDao.js");
const express = require("express");
const router = express.Router();
// const path = require("path");

const urls = new UrlDao();

router.post("/urls", (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = req.body.shortUrl;
  
  urls
    .create(longUrl, shortUrl)
    .then((urls) =>
      res.status(201).json({
        data: urls,
      })
    )
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
