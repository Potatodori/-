const Sequelize = require("sequelize");

class Review_checklist extends Sequelize.Model {
  static initiate(sequelize) {
    Review_checklist.init(
      {
        good_at_task: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        good_punctuality: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        kind_and_well_mannered: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        quick_in_contact: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Review_checklist",
        tableName: "review_checklists",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Review_checklist.belongsTo(db.Employee_review, {
      foreignkey: "Employee_reviewId",
      targetkey: "id",
    });
  }
}

module.exports = Review_checklist;
