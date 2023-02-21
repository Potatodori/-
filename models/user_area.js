const Sequelize = require("sequelize");

class User_area extends Sequelize.Model {
  static initiate(sequelize) {
    User_area.init(
      {
        dong_in_residence: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User_area",
        tableName: "user_areas",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User_area.belongsTo(db.User, { foreignkey: "UserId", targetkey: "id" });
  }
}

module.exports = User_area;
