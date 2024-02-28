const router = require("express").Router();

// Controller Imports
const MeetupController = require("./controllers/MeetupController");

// JSON Schema Imports for payload verification
const createMeetupPayload = require("./schemas/createMeetupPayload");
const updateMeetupPayload = require("./schemas/updateMeetupPayload");
const { roles } = require("../config");

router.get(
  "/",
  MeetupController.getAllMeetups
);

router.get(
  "/:meetupId",
  MeetupController.getMeetupById
);

router.post(
  "/",
  MeetupController.createMeetup
);

router.patch(
  "/:meetupId",
  MeetupController.updateMeetup
);

router.delete(
  "/:meetupId",
  MeetupController.deleteMeetup
);

module.exports = router;
