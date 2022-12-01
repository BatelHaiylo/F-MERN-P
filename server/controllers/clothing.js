const ClothingModel = require('../modals/Clothing_Schema')

 const getClothings = async(req, res) => {
    await ClothingModel.find({}).then((items) => {
      return items.length == 0
        ? res.status(300).json({ successes: true, msg: "no Clothings was found" })
        : res.status(200).json({ successes: true , items});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

 const getClothingById = async(req,res) => {
    await ClothingModel.findOne(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no Clothing was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

 const addClothingToDB = async(req,res) => {
    await ClothingModel.insertMany(req.body.Clothing)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

 const updateClothing = async(req,res) => {
    await ClothingModel.findByIdAndUpdate(req.params.id, req.body.Clothing)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

 const deleteClothing = async(req,res) => {
    await ClothingModel.findByIdAndRemove(req.params.id, req.body.Clothing)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

module.exports = {getClothings, getClothingById, addClothingToDB, updateClothing, deleteClothing}