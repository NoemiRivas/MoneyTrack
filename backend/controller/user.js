const User = require("../models/User");
const jwt = require("jsonwebtoken");

//create user
exports.createUser = async (req, res) => {
  try {
    const { id, nombre, apellido, email, password } = req.body;
    const newUser = new User({
      nombre,
      apellido,
      email,
      password,
    });

    //if exists?
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "el usuario ya existe!" });

    await newUser.save();

    //generate token
    const token = jwt.sign({  id}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(201)
      .json({ token, newUser, message: "usuario creado correctamente!" });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

//login user & profile
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "usuario no encontrado" });

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const isMatch =await user.comparePassword(password)
    if(!isMatch) return res.status(400).json({ message: "contraseña incorrecta" });

    res.json({ token,user, message: "inicio sesion exitoso" });

  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

exports.profileUser = async function (req, res) {
 
  try {
    console.log("🔍 ID recibido en req.user:", req.user);
    const user = await User.findById(req.user.id).select("-password")
  if (!user) {
    console.log("❌ No se encontró el usuario en la base de datos.")
      return res.status(404).json({ message: "Usuario no encontrado en el perfil" });
    } 
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }

}

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
      return res
        .status(404)
        .json({ message: "el usuario no ha sido encontrado" });
    } else {
      res.json({ message: "Usuario actualizado correctamente", data: update });
    }
  } catch (error) {
    res.status(500).json({
      message: "No se pudo actualizar el usuario",
      error: error.message,
    });
  }
};
//all
exports.getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();
    res.json({ data: getUser });
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
