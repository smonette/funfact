module.exports = {
  // what to do to create the migration
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished

    // make sure that the table is pluralized
    migration.createTable('facts',
        {id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        fact: DataTypes.STRING,
        citation: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE

      })
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('facts')
  }
}
