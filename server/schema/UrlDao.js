const Url = require("./Url");
const shortid = require('shortid');

class UrlDao {
  constructor() {}

  async create(longUrl, shortUrl = "", urlCode="") {
    // if (shortUrl !== "") {
    //   // check if shortUrl is already in use
    //   const url = await Url.findOne({ shortUrl });
    //   return url;
    // } else {
      // check if longUrl is cached
      const url = await Url.findOne({ longUrl });
      // console.log(url);
      if (url === null) {
        // generate shortUrl
        // const baseUrl = "http://localhost:4567";
        const baseUrl = "https://s-url1.herokuapp.com";
        urlCode = shortid.generate();
        shortUrl = baseUrl + '/' + urlCode;
        // save urls to db
        const url = await Url.create({ longUrl, shortUrl, urlCode });
        return url;
      }
      return url;
    // }
  }

  async redirectUrl(newUrlCode) {
    const url = await Url.findOne({
      urlCode: newUrlCode,
    });
    return url;
  }

  async readAll() {
    const urls = await Url.find(filter);
    return urls;
  }

  async read(id) {
    const url = await Url.findById(id);
    return url;
  }

  async update(id, content) {
    const url = await Url.findByIdAndUpdate(
      id,
      { content },
      { new: true, runValidators: true }
    );
    return url;
  }

  async delete(id) {
    const url = await Url.findByIdAndDelete(id);
    return url;
  }
}

module.exports = UrlDao;
