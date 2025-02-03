const router = require("express").Router();

const {createTransaction, getAllTransactions, updateTransaction, deleteTransactions} = require("../controller/transactions")

router.post("/transactions", createTransaction)
router.get("/all-transactions", getAllTransactions)
router.put("/:id", updateTransaction)
router.delete("/:id", deleteTransactions)

module.exports = router