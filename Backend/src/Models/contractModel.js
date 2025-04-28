import { connection } from './configDb.js';

export class ContracModel {
    static async getAll(){
        const [rows] = await connection.query(
            `SELECT BIN_TO_UUID(id) id ,BIN_TO_UUID(id_persona) id_persona,
            num_contract, demanda, executive, honorario_final, iva, observacion, path, type_of FROM contract`
        )
        return rows;
    }
    
    static async getByRadicado(contract){
        const [rows] = await connection.query(
            `SELECT 
                BIN_TO_UUID(contract.id) AS id_contrato,
                BIN_TO_UUID(contract.id_persona) AS id_persona,
                contract.num_contract,
                contract.demanda,
                contract.executive,
                contract.honorario_final,
                contract.iva,
                contract.observacion,
                contract.path,
                contract.type_of,
                customer.name AS name_customer,
                customer.email AS email_customer,
                customer.phone AS phone_customer,
                customer.radicado AS radicado_customer
            FROM contract
                JOIN customer ON contract.id_persona = customer.id
                WHERE contract.num_contract = ?`,
            [contract]
        )

        if(rows.length===0) throw new Error('Contract not found')

        return rows[0]
    }

    static async getByName(name){
        const [rows] = await connection.query(
            `SELECT * FROM contract WHERE name = ?`,
            [name]
        )
        if(rows.length===0) throw new Error('Contract not found')

        return rows[0]
    }

    static async create(contract){
        const {
            id_persona,
            num_contract,
            demanda,
            executive,
            honorario_final,
            iva,
            observacion,
            path,
            type_of,
        } = contract
        const [uuidResult] = await connection.query('SELECT UUID() uuid')
        const [{uuid}]= uuidResult
        try{

           const result = await connection.query(`
                INSERT INTO contract (id, id_persona, num_contract, demanda, executive, honorario_final, iva, observacion, path, type_of)
                VALUES (UUID_TO_BIN("${uuid}"), UUID_TO_BIN(?), ?, ?, ?, ?, ?, ?, ?, ?);`,
                [id_persona, num_contract, demanda, executive, honorario_final, iva, observacion, path, type_of]
            )
                console.log(result)
                
            const data = await connection.query(
                `SELECT BIN_TO_UUID(id) id, BIN_TO_UUID(id_persona), num_contract, demanda, executive, honorario_final, iva, observacion, path, type_of FROM contract WHERE id = UUID_TO_BIN("${uuid}")`
            )
            return data[0]
        }catch(err){
            return {
                error: err.message
            }
        }
        
    }

}