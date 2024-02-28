const { commonMeetPayload } = require("./commonMeetupPayload");

module.exports = {
  ...commonMeetPayload,
  additionalProperties: false,
};
