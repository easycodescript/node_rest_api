const router = require("express").Router();

// Controller Imports
const TalkController = require("./controllers/TalkController");

// JSON Schema Imports for payload verification
const createTalkPayload = require("./schemas/createTalkPayload");
const updateTalkPayload = require("./schemas/updateTalkPayload");

router.get(
  "/",
  TalkController.getAllTalks
);

router.get(
  "/:talkId",
  TalkController.getTalkById
);

router.post(
  "/",
  TalkController.createTalk
);

router.patch(
  "/:talkId",
  TalkController.updateTalk
);

router.delete(
  "/:talkId",
  TalkController.deleteTalk
);

module.exports = router;
