const router = require("express").Router();

const {createUser, updateUser, delateUser, getAllUser }= require("../controller/user")


router.get("/user", createUser)
router.put("/user/:id", updateUser)
router.get("/all-users", getAllUser)
router.delete("/user/:id", delateUser)



module.exports = router;