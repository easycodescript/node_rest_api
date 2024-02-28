const TalkModel = require("../../../common/models/Talk");

module.exports = {
  getAllTalks: (req, res) => {
    const { query: filters } = req;

    TalkModel.findAllTalks(filters)
      .then((talks) => {
        return res.status(200).json({
          status: true,
          data: talks,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getTalkById: (req, res) => {
    const {
      params: { talkId },
    } = req;

    TalkModel.findTalk({ id: talkId })
      .then((talk) => {
        return res.status(200).json({
          status: true,
          data: talk.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createTalk: (req, res) => {
    const { body } = req;

    TalkModel.createTalk(body)
      .then((talk) => {
        return res.status(200).json({
          status: true,
          data: talk.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateTalk: (req, res) => {
    const {
      params: { talkId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the talk.",
        },
      });
    }

    TalkModel.updateTalk({ id: talkId }, payload)
      .then(() => {
        return TalkModel.findTalk({ id: talkId });
      })
      .then((talk) => {
        return res.status(200).json({
          status: true,
          data: talk.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteTalk: (req, res) => {
    const {
      params: { talkId },
    } = req;

    TalkModel.deleteTalk({id: talkId})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfTalksDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};
