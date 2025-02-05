const User = require("../models/User");

//create user
exports.createUser = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const newUser = new User({
      nombre,
      apellido,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};
//update
exports.updateUser = async (req, res) => {
    const { id } = req.params; 
    const { nombre, apellido, email, password } = req.body; 
  try {
    const update = await User.findByIdAndUpdate(
      id,
      {
        nombre,
        apellido,
        email,
        password,
      },
      { new: true }
    );
    if (!update) {
        return res.status(404).json({ message: "el usuario no ha sido encontrado" });
    } else {
      res.json({ message: "Usuario actualizado correctamente", data: update });
    }
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar el usuario",
        error: error.message});
  }
};
//all
exports.getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();
    res.json({data: getUser,});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete
exports.delateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    
    res.json({
      data: deleteUser,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
