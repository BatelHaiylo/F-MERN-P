const ProfitSchema = new mongoose.Schema(
    {
      ProfitName: {
        type: String,
        required: true
      },
    },
    { timeseries: true }
  );
  
  const ProfitModal = mongoose.model("Profit", ProfitSchema)
  module.exports = ProfitModal;