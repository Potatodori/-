const Sequelize = require("sequelize");

class Chatting_message extends Sequelize.Model {
  static initiate(sequelize) {
    Chatting_message.init(
      {
        message: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        is_read: {
          type: Sequelize.BOOLEAN,
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
        modelName: "Chatting_message",
        tableName: "chatting_meaasages",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Chatting_message.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    }),
      db.Chatting_message.belongsTo(db.Chatting_room, {
        foreignkey: "commenter",
        sourcekey: "id",
      });
  }
}

module.exports = Chatting_message;
