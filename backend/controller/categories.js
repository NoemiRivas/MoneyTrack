const Category = require("../models/categories")

//create
exports.createCategory= async (req, res) => {
  try {
    const { name, type } = req.body;
    const newCategory = new Category({
      name,
      type
    });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// all
exports.getAllCategories = async (req, res) => {
  try {
    const getCategory = await Category.find();
    res.json(getCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update
exports.updateCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Category.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        type: req.body.type,
        
      },
      { new: true }
    );
    if (!update) {
      res.status(404).json({ message: "categoria no encontrada" });
    } else {
      res.json(update);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//delete
exports.deleteCategories = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteCategory = await Category.findByIdAndDelete(id)
      res.json({
          deleteCategory
      })
    
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  