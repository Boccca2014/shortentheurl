const Url = require("./Url");

class UrlDao {
  constructor() {
  }

  async create(longUrl, shortUrl = "temp") {
    // const filter = shortUrl ? { shortUrl } : {};
    // console.log(filter);
    // const url = await Url.find(filter);
    // if (url === {}) {
    //   return url;
    // } else {
    const url = await Url.create({ longUrl, shortUrl });
    return url;
    // }
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