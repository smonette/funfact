function Fact(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    return sequelize.define('fact',{
        fact: DataTypes.STRING,
        citation: DataTypes.STRING
    })
}

module.exports = Fact;





