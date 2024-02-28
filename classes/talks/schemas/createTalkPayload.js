const { commonTalkPayload } = require("./commonTalkPayload");

module.exports = {
  ...commonTalkPayload,
  required: ["name", "abstract", "speaker"],
  additionalProperties: false,
};
