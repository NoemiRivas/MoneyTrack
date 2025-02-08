const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const {createUser, updateUser, delateUser, getAllUser, loginUser, profileUser  }= require("../controller/user")


router.get("/user", createUser)
router.put("/user/:id", updateUser)
router.get("/all-users", getAllUser)
router.delete("/user/:id", delateUser)
router.post("/login", loginUser)
router.get("/perfil",authMiddleware, profileUser )

module.exports = router;