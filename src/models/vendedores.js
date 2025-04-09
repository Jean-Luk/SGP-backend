import mongoose from "mongoose";

const vendedoresSchema = new mongoose.Schema({
    codVendedor: { type: Number, required:true},
    nome: { type: String, required:true},
    totalRetiradas: { type: Number, required:true, default:0 },
    totalAdicoes: { type: Number, required:true, default:0 }
})

const model = mongoose.model('vendedores', vendedoresSchema);

class VendedoresModel {
    static async getVendedores () {
        try {
            const result = await model.find()
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}

        }
    };
    
    static async getVendededorById (idVendedor) {
        try {
            const result = await model.findById(idVendedor);
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }
    
    static async getVendedorByCod (codVendedor) {
        try {
            const result = await model.findOne({codVendedor});
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }
    
    static async createVendedor (codVendedor, nome) {
        try {
            // TODO: mover lógica da regra de negócio para o service

            const verifyCod = await model.findOne({codVendedor});
            if (verifyCod) {
                throw { erro: "Código já existente"}
            }
        
            const verifyNome = await model.findOne({nome});
            if (verifyNome) {
                throw { erro: "Nome já existente"}
            }
        
            const result = await model.create({
                codVendedor,
                nome
            })
        
            return result

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }


}    

export default VendedoresModel;