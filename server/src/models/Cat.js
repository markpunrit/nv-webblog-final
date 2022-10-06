module.exports = ( sequelize, DataTypes ) => {
    const Cat = sequelize.define('Cat', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Cat
}