const router = require("express").Router();

// Controller Imports
const UserController = require("./controllers/UserController");

// JSON Schema Imports for payload verification
const updateUserPayload = require("./schemas/updateUserPayload");
const changeRolePayload = require("./schemas/changeRolePayload");

const { roles } = require("../config");

router.get("/", UserController.getUser);

router.patch(
  "/",
  UserController.updateUser
);

router.get(
  "/all",
  UserController.getAllUsers
);

router.patch(
  "/change-role/:userId",
  UserController.changeRole
);

router.delete(
  "/:userId",
  UserController.deleteUser
);

module.exports = router;
