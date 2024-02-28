const { DataTypes } = require("sequelize");

const TalkModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  abstract: {
    type: DataTypes.STRING,
    allowNull: false
  },
  speaker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("talk", TalkModel);
    return this.model;
  },

  createTalk: (talk) => {
    return this.model.create(talk);
  },

  findTalk: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateTalk: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllTalks: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteTalk: (query) => {
    return this.model.destroy({
      where: query
    });
  }
}
