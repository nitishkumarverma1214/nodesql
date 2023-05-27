const router = require("express").Router();
const {
  createUser,
  getUser,
  getUsers,
  updateLastName,
  getUsersFirstName,
  getUserbyLastName,
  deleteUserByFirstName,
  createMultipleUser,
} = require("../controller/user");

router.get("/", getUsers); // /users
router.get("/:userId", getUser); // /users/:userId
router.post("/", createUser); // /users
router.put("/:firstname", updateLastName); // /users/:userId
router.delete("/:firstname", deleteUserByFirstName); // /users/:
module.exports = router;
