const Express = require("express");
const app = Express();
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { port } = require("./config");
const PORT = process.env.PORT || port;

// Express Routes Import
const MeetupRoutes = require("./classes/meetups/routes");
const TalkRoutes = require("./classes/talks/routes");

const ModelMeetup = require("./common/models/Meetup");
const ModelTalk = require("./common/models/Talk");

app.use(morgan("tiny"));
app.use(cors());

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(Express.json());

const sequelize = new Sequelize('sqlite::memory:');

// Initialising the Model on sequelize
const Meetup = ModelMeetup.initialise(sequelize);
const Talk = ModelTalk.initialise(sequelize);

Meetup.hasMany(Talk);
Talk.belongsTo(Meetup, {through: ModelTalk, foreignKey: 'meetupId'});

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the memory/database. It creates models as tables that do not exist in the DB.
sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    app.use("/meetup", MeetupRoutes);
    app.use("/talk", TalkRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });