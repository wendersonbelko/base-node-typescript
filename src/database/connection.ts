import mysql from 'mysql2/promise'

const connection = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  })
}

export { connection }
