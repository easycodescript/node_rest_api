const Express = require("express");
const app = Express();
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { APP_PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = require("./config");
const PORT = process.env.PORT || APP_PORT;

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

const sequelize = new Sequelize({
    dialect: 'mssql',
    host: process.env.DB_HOST || DB_HOST,
    port: process.env.DB_PORT || DB_PORT,
    username: process.env.DB_USER || DB_USER,
    password: process.env.DB_PASSWORD || DB_PASSWORD,
    database: process.env.DB_NAME || DB_NAME,
    models: [__dirname + '/**/*.model{.ts,.js}'],
    autoLoadModels: true,
    synchronize: true, //use this with development enviroment
});
/* const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
}); */

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
      console.log("Server Listening on PORT:", APP_PORT);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });