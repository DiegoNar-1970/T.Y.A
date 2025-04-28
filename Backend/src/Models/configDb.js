import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '1234',
    database: 'trujilloyasociados'
}
export const connection = await mysql.createConnection(config)

