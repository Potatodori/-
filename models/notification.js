const Sequelize = require("sequelize");

class Notification extends Sequelize.Model {
  static initiate(sequelize) {
    Notification.init(
      {
        message: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Notification",
        tableName: "notifications",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Notification.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    });
  }
}

module.exports = Notification;
