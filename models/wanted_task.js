const Sequelize = require("sequelize");

class Wanted_task extends Sequelize.Model {
  static initiate(sequelize) {
    Wanted_task.init(
      {
        task_title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        is_finished: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        reward_cost: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        task_description: {
          type: Sequelize.STRING(255),
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
        modelName: "Wanted_task",
        tableName: "wanted_tasks",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Wanted_task.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    }),
      db.Wanted_task.hasMany(db.Chatting_room, {
        foreignkey: "commenter",
        sourcekey: "id",
      }),
      db.Wanted_task.hasOne(db.Employee_review, {
        foreignkey: "Wanted_taskId",
        sourcekey: "id",
      }),
      db.Wanted_task.hasOne(db.Task_category, {
        foreignkey: "Wanted_taskId",
        sourcekey: "id",
      }),
      db.Wanted_task.hasOne(db.Task_location, {
        foreignkey: "Wanted_taskId",
        sourcekey: "id",
      });
  }
}

module.exports = Wanted_task;
