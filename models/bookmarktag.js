'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookmarkTag extends Model {
    static associate(models) {
      this.Bookmark = this.belongsTo(models.Bookmark)
      this.Tag = this.belongsTo(models.Tag)
    }
  };
  BookmarkTag.init({
  }, {
    sequelize,
    modelName: 'BookmarkTag',
  });
  return BookmarkTag;
};
