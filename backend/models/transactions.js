const mongoose=require("mongoose")
const transactionSchema= new mongoose.Schema({
  title:{
    type: String,
    required: true,
    
  },type: {
    type: String,
    enum: ['gasto', 'ingreso'],
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