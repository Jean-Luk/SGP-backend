import mongoose from "mongoose";

const entradasSchema = new mongoose.Schema({
    idPedaco: { type: String, required:true},
    idVendedor: { type: String, required:true},
    dataEntrada: { type: Number, required: true},
})

const model = mongoose.model('entradas', entradasSchema);

class EntradasModel {
    static async listarEntradas () {
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
    
    static async buscarEntrada (idPedaco, idVendedor, dataInicio, dataFim) {
        try {

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }    
    }
    
    static async criarEntrada (idPedaco, idVendedor, dataEntrada) {
        try {

            const result = await model.create({
                idPedaco,
                idVendedor,
                dataEntrada
            })
        
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

}

export default EntradasModel;