const Transactions = require("../models/transactions");

//create
exports.createTransaction = async (req, res) => {
  try {
    const { title, type, amount, category, description } = req.body;
    const newTransactions = new Transactions({
      title,
      type,
      amount,
      category,
      description,
    });
    await newTransactions.save();
    res.status(201).json(newTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// all
exports.getAllTransactions = async (req, res) => {
  try {
    const getTransactions = await Transactions.find();
    res.json(getTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update
exports.updateTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Transactions.findByIdAndUpdate(
      id,
      {
        type: req.body.type,
        amount: req.body.amount,
        category: req.body.category,
        description: req.body.description,
        date: req.body.date,
      },
      { new: true }
    );
    if (!update) {
      res.status(404).json({ message: "movimiento no encontrado" });
    } else {
      res.json(update);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//delete
exports.deleteTransactions = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteTransaction = await Transactions.findByIdAndDelete(id)
    res.json({
        deleteTransaction
    })
  
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

