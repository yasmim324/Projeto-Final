const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const filters = {};

    if (req.query.name) {
      filters.title = new RegExp(req.query.name, "i");
    }

    const products = await Product.paginate(filters, {
      page: req.query.page || 1,
      limit: 10,
      populate: ["salesman"],
      sort: "-createdAt"
    });

    return res.json(products);
  }

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  }

  async store(req, res) {
    const product = await Product.create({ ...req.body, salesman: req.userId });

    return res.json(product);
  }
}

module.exports = new ProductController();
