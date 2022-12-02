const ProductModal = require("../modals/Products_Schema");

const getProducts = async (req, res) => {
  await ProductModal.find({})
    .then((products) => {
      products.length == 0
        ? res.status(300).json({ success: false, message: "no products was found" })
        : res.status(200).json({ success: true, products });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};

const getProductById = async (req, res) => {
  await ProductModal.findById(req.params.id)
    .then((result) => {
      return !result
        ? res.status(200).json({ successes: true }, result)
        : res.status(300).json({ successes: false, msg: "no product was found" });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const addNewProduct = async (req, res) => {
  await ProductModal.create(req.body.product)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const addProductToDB = async (req, res) => {
  await ProductModal.insertMany(req.body.product)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const updateProduct = async (req, res) => {
  await ProductModal.findByIdAndUpdate(req.params.id, req.body.product)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const deleteAProduct = async (req, res) => {
  await ProductModal.where("email")
    .equals(req.body.product.email)
    .remove()
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const deleteProduct = async (req, res) => {
  await ProductModal.findByIdAndRemove(req.params.id, req.body.product)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

module.exports = { getProducts,getProductById,addProductToDB,updateProduct,deleteProduct };