const Sequelize = require("sequelize");

class Task_location extends Sequelize.Model {
  static initiate(sequelize) {
    Task_location.init(
      {
        address: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        detail_address: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        task_starting_time: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Task_location",
        tableName: "task_locations",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Task_location.belongsTo(db.Wanted_task, {
      foreignkey: "Wanted_taskId",
      targetkey: "id",
    });
  }
}

module.exports = Task_location;
