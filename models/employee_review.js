const Sequelize = require("sequelize");

class Employee_review extends Sequelize.Model {
  static initiate(sequelize) {
    Employee_review.init(
      {
        review_message: {
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
        modelName: "Employee_review",
        tableName: "employee_reviews",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Employee_review.belongsTo(db.User, {
      foreignkey: "commenter",
      sourcekey: "id",
    }),
      db.Employee_review.hasOne(db.Review_checklist, {
        foreignkey: "Employee_checklistId",
        sourcekey: "id",
      }),
      db.Employee_review.belongsTo(db.Wanted_task, {
        foreignkey: "Wanted_taskId",
        targetkey: "id",
      });
  }
}

module.exports = Employee_review;
