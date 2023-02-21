const Sequelize = require("sequelize");
const Chatting_room = require("./chatting_room");
const Chatting_message = require("./chatting_message");
const Employee_review = require("./employee_review");
const Notification = require("./notification");
const Notification_keyword = require("./notification_keyword");
const Review_checklist = require("./review_checklist");
const User = require("./user");
const Wanted_task = require("./wanted_task");
const User_profile_image = require("./user_profile_image");
const Task_category = require("./task_category");
const Task_location = require("./task_location");
const User_area = require("./user_area");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Chatting_room = Chatting_room;
db.Chatting_message = Chatting_message;
db.Employee_review = Employee_review;
db.Notification = Notification;
db.Notification_keyword = Notification_keyword;
db.Review_checklist = Review_checklist;
db.User = User;
db.Wanted_task = Wanted_task;
db.User_profile_image = User_profile_image;
db.Task_category = Task_category;
db.Task_location = Task_location;
db.User_area = User_area;

Chatting_room.initiate(sequelize);
Chatting_message.initiate(sequelize);
Employee_review.initiate(sequelize);
Notification.initiate(sequelize);
Notification_keyword.initiate(sequelize);
Review_checklist.initiate(sequelize);
User.initiate(sequelize);
Wanted_task.initiate(sequelize);
User_profile_image.initiate(sequelize);
Task_category.initiate(sequelize);
Task_location.initiate(sequelize);
User_area.initiate(sequelize);

Chatting_room.associate(db);
Chatting_message.associate(db);
Employee_review.associate(db);
Notification.associate(db);
Notification_keyword.associate(db);
Review_checklist.associate(db);
User.associate(db);
Wanted_task.associate(db);
User_profile_image.associate(db);
Task_category.associate(db);
Task_location.associate(db);
User_area.associate(db);

module.exports = db;
