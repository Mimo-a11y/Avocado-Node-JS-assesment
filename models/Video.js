module.exports = (sequelize, DataTypes) => {
    const videos = sequelize.define("Video", {
        V_ID: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
        },
        Description:{
            type: DataTypes.TEXT,
        },
        Active:{
            type: DataTypes.ENUM('Yes', 'No'),
        }
    },
    {
		initialAutoIncrement: 1201
	})
    return videos;
}
