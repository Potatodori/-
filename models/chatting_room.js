const Sequelize = require("sequelize");

class Chatting_room extends Sequelize.Model {
  static initiate(sequelize) {
    Chatting_room.init(
      {
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
        modelName: "Chatting_room",
        tableName: "chatting_rooms",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Chatting_room.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    }),
      db.Chatting_room.belongsTo(db.Wanted_task, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.Chatting_room.hasMany(db.Chatting_message, {
        foreignkey: "commenter",
        sourcekey: "id",
      });
  }
}

module.exports = Chatting_room;
