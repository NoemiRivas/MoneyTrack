const router = require("express").Router();
const {createCategory, getAllCategories,updateCategory,deleteCategories}= require("../controller/categories")

router.post("/category", createCategory)
router.get("/all-category", getAllCategories)
router.put("/category/:id", updateCategory)
router.delete("/category/:id", deleteCategories)

module.exports = router;