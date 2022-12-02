const PurchasesModal = require("../modals/Purchases_Schema");

const getPurchases = async (req, res) => {
  await PurchasesModal.find({}).populate("purchaserInfo.user")
    .then((purchases) => {
      purchases.length == 0
        ? res.status(300).json({ success: false, message: "no purchases was found" })
        : res.status(200).json({ success: true, purchases });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};

const getPurchaseById = async (req, res) => {
  await PurchasesModal.findById(req.params.id)
    .then((result) => {
      return !result
        ? res.status(200).json({ successes: true }, result)
        : res.status(300).json({ successes: false, msg: "no purchase was found" });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const addNewPurchase = async (req, res) => {
  await PurchasesModal.create(req.body.purchase)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const addPurchaseToDB = async (req, res) => {
  await PurchasesModal.insertMany(req.body.purchase)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const updatePurchase = async (req, res) => {
  await PurchasesModal.findByIdAndUpdate(req.params.id, req.body.purchase)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const deleteAPurchase = async (req, res) => {
  await PurchasesModal.where("email")
    .equals(req.body.purchase.email)
    .remove()
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const deletePurchase = async (req, res) => {
  await PurchasesModal.findByIdAndRemove(req.params.id, req.body.purchase)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

module.exports = { getPurchases, getPurchaseById, addPurchaseToDB, updatePurchase, deletePurchase };