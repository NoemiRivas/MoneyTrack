const mongoose=require("mongoose")
const transactionSchema= new mongoose.Schema({
  userId:{
    type: String,//mongoose.Schema.Types.ObjectId
    ref:"User",
    required: true,
  },type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },

})

module.exports = mongoose.model("Transactions", transactionSchema)