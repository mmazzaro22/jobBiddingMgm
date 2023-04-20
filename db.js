require('dotenv').config();

const { Sequelize } = require('sequelize');

// Set up a connection to the MySQL database using Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Define a database model for a table in the database
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('User table created successfully.');
  })
  .catch((err) => {
    console.error('Unable to synchronize the user table:', err);
  });

module.exports = {
  sequelize,
  User
};