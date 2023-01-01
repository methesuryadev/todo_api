var mysql=require("mysql")
var constants=require("../helpers/constants.js")
let dbconfig= constants.dbconfig

const knex_connection = require('knex')({
    client: 'mysql',
    connection: {
      host : dbconfig.host,
      port : dbconfig.port,
      user : dbconfig.user,
      password : dbconfig.password,
      database : dbconfig.database
    },
    postProcessResponse: (result, queryContext) => {
        //console.log('result',result);
        if(result){
            if (Array.isArray(result)) {
              return Object.values(JSON.parse(JSON.stringify(result)))
            } else {
            result = JSON.parse(JSON.stringify(result))
              return result;
            }
        }else{
            return;
        }
        
    }

  });

  module.exports ={
    knex_connection
  }