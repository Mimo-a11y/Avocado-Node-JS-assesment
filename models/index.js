const dbconfig = require('../dbconfig');
const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize(dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
});

//authenticating sequelize
sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    })

//creating a database
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
//creating users and doctors tables
db.Video = require('./Video')(sequelize, DataTypes);
db.VideoList = require('./VideoList')(sequelize, DataTypes);

//association between Video and VideoList table
db.Video.hasMany(db.VideoList);

//syncing the sequelize i.e. creating tables
db.sequelize.sync({
    force: false
})
.then(() => {
    console.log("Tables created");
})
.catch((err) => {
    console.log(err);
});

module.exports = db;
