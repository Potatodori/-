const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        login_id: {
          type: Sequelize.STRING(25),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(25),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(25),
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        phone_num: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },
        rating_score: {
          type: Sequelize.INTEGER,
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
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Wanted_task, {
      foreignkey: "commenter",
      sourcekey: "id",
    }),
      db.User.hasMany(db.Employee_review, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasMany(db.Chatting_room, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasMany(db.Chatting_message, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasMany(db.Notification, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasMany(db.Notification_keyword, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasMany(db.User_profile_image, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.User.hasOne(db.User_area, {
        foreignkey: "UserId",
        sourcekey: "id",
      });
  }
}

module.exports = User;
