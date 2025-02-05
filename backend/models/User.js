const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Por favor ingresa un email válido"],
  },
  password: {
    type: String,
    required: true,
  },

  rol: {
    type: String,
    enum: ["usuario", "admin"],
    default: "usuario",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
