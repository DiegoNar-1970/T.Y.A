 import { connection } from './configDb.js'

 export class CustomerModel {
    static async getAll() {
        const [rows] = await connection.query(`SELECT BIN_TO_UUID(id) id, name, phone, email, document, type_document  FROM customer`)
        
        return rows
    }
    static async getByCc(cc) {
        const [rows] = await connection.query('SELECT * FROM customer WHERE cc = ?', [cc])
        
        return rows[0]
    }
    static async getByName(name) {
        const [rows] = await connection.query('SELECT * FROM customer WHERE name = ?', [name])
        
        return rows[0]
    }

    static async create(customer) {
        
        const { name, document, email, phone, radicado, type_document } = customer

        const [uuidResult] = await connection.query('SELECT UUID() uuid;')
        const [{uuid}] = uuidResult
        
        const result = await connection.query(
            `INSERT INTO customer (id, name, document, email, phone, radicado, type_document) VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
            [name, document, email, phone, radicado, type_document]
        )  
        const data = await connection.query(
            `SELECT BIN_TO_UUID(id) id, name, phone, email, document, type_document  FROM customer where id = UUID_TO_BIN("${uuid}");`
        )
        return data[0]
    }
    static async updatePartialCustomer(data){

        const setClause = Object.keys(data)
        .map(key => `${key} = ?`)
         .join(', ');
        const values = Object.values(data);
        const query = `UPDATE customer SET ${setClause} WHERE id = ?`

        const [result] = await connection.query(query, [...values, data.id])
        
        return result.affectedRows
    }
 } 