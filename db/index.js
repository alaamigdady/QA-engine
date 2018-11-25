const Sequelize = require('sequelize');
const db = new Sequelize('QA1', 'root', '12345678', {host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000}}
  );





db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  

// we define the models we need using js--we don't need a schema file!
const user = db.define('user', {
  uid: {type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true},
  userName:Sequelize.STRING,
  passWord:Sequelize.STRING,

});


const question = db.define('question', {
  qid: {type: Sequelize.INTEGER,autoIncrement: true ,primaryKey: true},
  question:Sequelize.STRING,
  answer:{type:Sequelize.STRING,allowNull: false, defaultValue: ''},
  answered: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  name : Sequelize.STRING,


});





 user.sync({force: true});
 question.sync({force: true});
// creates these tables in MySQL if they don't already exist. Pass in {force: true}



  db.sync()
  .then(() => {
user.create({
    userName: 'admin',
    passWord: '$2b$10$LNxER/VCI.M0SGMo22VKr.iYIVw9a3MQjsSepIoZJLpF7XK3TK1su'
  })  
})



exports.user = user;
exports.question = question;

