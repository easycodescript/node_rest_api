const router = require("express").Router();

// Controller Imports
const ProductController = require("./controllers/ProductController");

// JSON Schema Imports for payload verification
const createProductPayload = require("./schemas/createProductPayload");
const updateProductPayload = require("./schemas/updateProductPayload");
const { roles } = require("../config");

router.get(
  "/",
  ProductController.getAllProducts
);

router.get(
  "/:productId",
  ProductController.getProductById
);

router.post(
  "/",
  ProductController.createProduct
);

router.patch(
  "/:productId",
  ProductController.updateProduct
);

router.delete(
  "/:productId",
  ProductController.deleteProduct
);

module.exports = router;
