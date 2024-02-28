
 module.exports = {
  commonTalkPayload: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      abstract: {
        type: "string",
      },
      speaker: {
        type: "string",
      },
      meetupId: {
        type: "number",
      },
    },
  }
};
