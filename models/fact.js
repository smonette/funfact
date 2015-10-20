module.exports = function (sequelize, DataTypes){

    var Fact = sequelize.define('fact',{
      fact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      citation: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, //close the first opening bracket after user()

    {
    classMethods: {
      createNewFact:function(fact, citation, err, success ) {
        Fact.create({
          fact: fact,
          citation: citation
        }).error(function(error) {
          console.log(error);
        }).then(function(fact) {
          success({message: 'Fact created!'});
        });
      } // close createNewFacts

    } // close classMethods

  } //close classMethods outer

  )
  return Fact;

};







