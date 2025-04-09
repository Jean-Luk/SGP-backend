import mongoose from "mongoose";

const tiposDeCaboSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    possuiCores: { type: Boolean, required:true, default:false}
})

const model = mongoose.model('tiposDeCabo', tiposDeCaboSchema);

class TiposDeCabo {
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
            // TODO: mover lógica da regra de negócio para service
            const verifyNome = await model.findOne({nome});
            if (verifyNome) {
                throw { erro: "Nome já existente"}
            }
        
            const result = await model.create({
                nome, possuiCores
            })
        
            return result;
            
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

}

export default TiposDeCabo