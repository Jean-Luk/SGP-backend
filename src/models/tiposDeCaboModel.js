import mongoose from "mongoose";

const tiposDeCaboSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    possuiCores: { type: Boolean, required:true, default:false},
    status: { type: String, required:true, default:"ativo"} // "ativo" ou "desativo"
})

const model = mongoose.model('tiposDeCabo', tiposDeCaboSchema);

class TiposDeCaboModel {
    static async listarTiposDeCabo () {
        try {
            const result = await model.find();

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    };
    
    static async criarTipoDeCabo (nome, possuiCores) {
        try {

            const result = await model.create({
                nome, possuiCores, status:"ativo"
            })
        
            return result;
            
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }
    
    static async buscarPorNome (nome) {
        try {
            const result = await model.findOne({nome});

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

}

export default TiposDeCaboModel