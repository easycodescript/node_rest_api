const { commonTalkPayload } = require("./commonTalkPayload");

module.exports = {
  ...commonTalkPayload,
  required: ["name", "abstract", "speaker", "meetupId"],
  additionalProperties: false,
};
