const Url = require("./Url");
const { nanoid } = require('nanoid');
// const shortid = require("shortid");

class UrlDao {
  constructor() {}

  async create(longUrl, shortUrl = "", urlCode = "") {
    // check if longUrl is cached
    const url = await Url.findOne({ longUrl });
    if (url === null) {
      // uncomment next line for local testing and comment out other baseUrl
      // const baseUrl = "http://localhost:4567";

      // generate shortUrl
      const baseUrl = "https://s-url1.herokuapp.com";
      urlCode = nanoid(6);
      shortUrl = baseUrl + "/" + urlCode;

      // save urls to db
      const url = await Url.create({ longUrl, shortUrl, urlCode });
      return url;
    }
    return url;
  }

  async redirectUrl(newUrlCode) {
    const url = await Url.findOne({
      urlCode: newUrlCode,
    });
    return url;
  }
}

module.exports = UrlDao;
