const { DataTypes } = require("sequelize");

const MeetupModel = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  start: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("meetup", MeetupModel)
  },

  createMeetup: (meetup) => {
    return this.model.create(meetup);
  },

  findMeetup: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateMeetup: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllMeetups: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteMeetup: (query) => {
    return this.model.destroy({
      where: query
    });
  }
}
