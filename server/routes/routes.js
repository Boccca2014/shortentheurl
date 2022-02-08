const UrlDao = require("../schema/UrlDao.js");
const express = require('express');
const router = express.Router();
const path = require('path');

const urls = new UrlDao();

router.post("/endpoints", (req, res) => {
   const content = req.body.content;

   urls
     .create(content)
     .then((url) => res.status(201).json({ data: url }))
     .catch((err) => errorHandler(res, 400, err));
 });

module.exports = router;