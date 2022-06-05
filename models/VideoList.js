module.exports = (sequelize, DataTypes) => {
    const videoLists = sequelize.define("VideoList", {
        VL_ID: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
        },
        Link:{
            type: DataTypes.STRING,
        }
    },
    {
		initialAutoIncrement: 1301
	})
    return videoLists;
}
