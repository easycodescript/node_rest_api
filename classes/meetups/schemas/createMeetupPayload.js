const { commonMeetPayload } = require("./commonMeetupPayload");

module.exports = {
  ...commonMeetPayload,
  required: ["name", "date", "start", "address", "city"],
  additionalProperties: false,
};
