require('dotenv').config()

const port = process.env.port

//DB
const dbconfig = {
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  database: process.env.db_name,
  port: process.env.db_port
}

const BASE_URL = process.env.base_url

module.exports = {
  port,
  dbconfig,
  BASE_URL,
}