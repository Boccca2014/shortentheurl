const UrlDao = require("../schema/UrlDao.js");
const express = require("express");
const router = express.Router();
// const path = require("path");

const urls = new UrlDao();

router.post("/urls", (req, res) => {
  // const shortUrl = req.body.shortUrl;
  const longUrl = req.body.longUrl;

  urls
    .create(longUrl)
    .then((urls) =>
      res.status(201).json({
        data: urls,
      })
    )
    .catch((err) => errorHandler(res, 400, err));
});

module.exports = router;
