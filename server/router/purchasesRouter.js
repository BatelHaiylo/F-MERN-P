const purchasesRouter = require('express').Router()
const {getPurchases, getPurchaseById, addPurchaseToDB, updatePurchase, deletePurchase} = require('../controllers/purchases');

purchasesRouter.get('/',getPurchases);
purchasesRouter.get('/byId/:id',getPurchaseById);
purchasesRouter.post('/add',addPurchaseToDB);
purchasesRouter.put('/update/:id',updatePurchase);
purchasesRouter.delete('/delete/:id',deletePurchase);

module.exports = purchasesRouter