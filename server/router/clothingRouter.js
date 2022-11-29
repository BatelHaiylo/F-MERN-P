const clothingRouter = require("express").Router()
const {getClothings, getClothingById, addClothingToDB, updateClothing, deleteClothing } = require('../controllers/clothing-ctrl');


clothingRouter.get('/',getClothings);
clothingRouter.get('/byId/:id',getClothingById);
clothingRouter.post('/add',addClothingToDB);
clothingRouter.put('/update/:id',updateClothing);
clothingRouter.delete('/delete/:id',deleteClothing);

module.exports = clothingRouter