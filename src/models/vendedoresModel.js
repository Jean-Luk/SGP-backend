import mongoose from "mongoose";

const vendedoresSchema = new mongoose.Schema({
    codVendedor: { type: Number, required:true},
    nome: { type: String, required:true},
    totalRetiradas: { type: Number, required:true, default:0 },
    totalAdicoes: { type: Number, required:true, default:0 },
    pin: { type: String, required:true}
})

const model = mongoose.model('vendedores', vendedoresSchema);

class VendedoresModel {
    static async listarVendedores () {
        try {
            const result = await model.find({}, {pin:0})
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}

        }
    };
    
    static async buscarVendededorPorId (idVendedor) {
        try {
            const result = await model.findById(idVendedor, {pin:0});
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }
    
    static async buscarVendedorPorCod (codVendedor) {
        try {
            const result = await model.findOne({codVendedor}, {pin:0});
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

    static async buscarVendedorPorNome (nome) {
        try {
            const result = await model.findOne({nome}, {pin:0});
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

    static async criarVendedor (codVendedor, nome, pin) {
        try {
        
            const result = await model.create({
                codVendedor,
                nome,
                pin
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