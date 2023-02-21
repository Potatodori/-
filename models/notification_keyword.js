const Sequelize = require("sequelize");

class Notification_keyword extends Sequelize.Model {
  static initiate(sequelize) {
    Notification_keyword.init(
      {
        keyword: {
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Notification_keyword",
        tableName: "notification_keywords",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Notification_keyword.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    });
  }
}

module.exports = Notification_keyword;
