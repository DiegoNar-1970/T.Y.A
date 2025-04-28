import { CustomerModel } from '../Models/customerModel.js';


export class CustomerController {
    
    static async getAll(req, res) {
        try {
            const customers = await CustomerModel.getAll();
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getByName(req, res) {
        try {
            const customer = await CustomerModel.getByName(req.params.name);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getByCc(req, res) {
        try {
            const customer = await CustomerModel.getByCc(req.params.cc);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const customer = req.body;
            
            const id = await CustomerModel.create(customer);
            console.log('hola',id,'asi llega')
            res.status(201).json({ message: 'Customer created', data : id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async updatePartialCustomer(req, res) {
        try {
            const data = req.body;
            data.id = parseInt(req.params.id);
            const affectedRows = await CustomerModel.updatePartialCustomer(data);
            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json({ message: 'Customer updated', id: data.id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}