const MeetupModel = require("../../../common/models/Meetup");
const dataFromExternalApi = require("../../../common/dataFromExternalApi");
const TalkModel = require("../../../common/models/Talk");

module.exports = {
  getAllMeetups: (req, res) => {
    const { query: filters } = req;

    MeetupModel.findAllMeetups(filters)
      .then((meetups) => {
        return res.status(200).json({
          status: true,
          data: meetups,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getMeetupById: (req, res) => {
    const {
      params: { meetupId },
    } = req;

    MeetupModel.findMeetup({ id: meetupId })
      .then((meetup) => {
        meetupInJson = meetup.toJSON();

        TalkModel.findAllTalks({ meetupId: meetupInJson.id })
          .then((talks) => {
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${meetupInJson.city}&units=metric&appid=042559fc8f13bd0e86e557aa02965a24`;
            dataFromExternalApi(apiUrl).then((weatherInfo) => {
              const resp = res.status(200).json({
                status: true,
                data: { 
                        ...meetupInJson, 
                        weatherInfo: { ...weatherInfo },
                        talks: { ...talks }
                      },
              });

              return resp;
            });
          })
          .catch((err) => {
            console.log("Error on findAllTalks:", err);
          });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createMeetup: (req, res) => {
    const { body } = req;

    MeetupModel.createMeetup(body)
      .then((meetup) => {
        return res.status(200).json({
          status: true,
          data: meetup.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateMeetup: (req, res) => {
    const {
      params: { meetupId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the meetup.",
        },
      });
    }

    MeetupModel.updateMeetup({ id: meetupId }, payload)
      .then(() => {
        return MeetupModel.findMeetup({ id: meetupId });
      })
      .then((meetup) => {
        return res.status(200).json({
          status: true,
          data: meetup.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteMeetup: (req, res) => {
    const {
      params: { meetupId },
    } = req;

    MeetupModel.deleteMeetup({ id: meetupId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfMeetupsDeleted: numberOfEntriesDeleted,
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
