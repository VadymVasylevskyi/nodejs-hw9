import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database_development', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize