import { ContracModel } from "../Models/contractModel.js";

export class ContractController {
    static async getAll(req, res) {
        try{
            const contract = await ContracModel.getAll();
            if(contract.length===0){
                res.status(404).json({ message: 'No contracts found' });
            } 
            return res.json(contract);
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }

    static async create(req, res) {
        try{
            const data= req.body;
            const contract = await ContracModel.create(data);
            res.status(201).json(contract)
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }

    static async getByRadicado(req,res){
        
        try{
            console.log(req.params)
            const {contract} = req.params;
            console.log(contract);
            const result = await ContracModel.getByRadicado(contract);
            return res.status(201).json(result)
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }
}