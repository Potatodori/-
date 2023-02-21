const Sequelize = require("sequelize");

class Task_category extends Sequelize.Model {
  static initiate(sequelize) {
    Task_category.init(
      {
        category: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Task_category",
        tableName: "task_categories",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Task_category.belongsTo(db.Wanted_task, {
      foreignkey: "Wanted_taskId",
      targetkey: "id",
    });
  }
}

module.exports = Task_category;
