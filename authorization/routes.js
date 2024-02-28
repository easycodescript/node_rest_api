const router = require("express").Router();

// Middleware Imports
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const registerPayload = require("./schemas/registerPayload");
const loginPayload = require("./schemas/loginPayload");

router.post(
  "/signup"
);

router.post(
  "/login"
);

module.exports = router;
