const Sequelize = require("sequelize");

class User_profile_image extends Sequelize.Model {
  static initiate(sequelize) {
    User_profile_image.init(
      {
        profile_image_url: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User_profile_image",
        tableName: "user_profile_images",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User_profile_image.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    });
  }
}

module.exports = User_profile_image;
