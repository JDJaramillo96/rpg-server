//Dependencies
var pg = require('pg');

var config = {
  user: 'arnxybho', //env var: PGUSER
  database: 'arnxybho', //env var: PGDATABASE
  password: 'HWb1V4EOn0E9VOOslLczru0G3PZ9hylN', //env var: PGPASSWORD
  host: 'stampy.db.elephantsql.com', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

//Query function
function query (sqlStatement, onCompleted) {
  pool.connect (function (error, client) {
    if (error)
      return console.error('Error fetching client from pool', error);

    client.query (sqlStatement, function (error, result) {
      if (error)
        return console.error('Error running query', error);

      onCompleted (result.rows);

      client.end (function (error) {
        if (error)
          return console.error('Error ending the client', error);
      });
    });
  });
  pool.on ('error', function (error, client) {
    console.error('Idle client error', error.message, error.stack);
  });
}

//Exporting module
module.exports.query = query;
