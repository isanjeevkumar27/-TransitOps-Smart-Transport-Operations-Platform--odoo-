import sequelize from "../config/database.js";

import Role from "./Role.js";
import User from "./User.js";

/*
|--------------------------------------------------------------------------
| Model Associations
|--------------------------------------------------------------------------
*/

/*
Role (1)  ----------->  (M) User
*/

Role.hasMany(User, {
   foreignKey: "roleId",
   as: "users",
   onUpdate: "CASCADE",
   onDelete: "RESTRICT",
});

User.belongsTo(Role, {
   foreignKey: "roleId",
   as: "role",
});

/*
|--------------------------------------------------------------------------
| Export Database Object
|--------------------------------------------------------------------------
*/

const db = {
   sequelize,

   Role,
   User,
};

export default db;