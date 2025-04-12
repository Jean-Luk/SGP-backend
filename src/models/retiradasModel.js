import mongoose from "mongoose";

const retiradasSchema = new mongoose.Schema({
    idPedaco: { type: String, required:true},
    idVendedor: { type: String, required:true},
    dataRetirada: { type: Number, required: true},
})

const model = mongoose.model('retiradas', retiradasSchema);

class RetiradasModel {
    static async listarRetiradas () {
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
    
    static async buscarRetiradas (idPedaco, idVendedor, dataInicio, dataFim) {
        try {

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }    
    }
    
    static async criarRetirada (idPedaco, idVendedor, dataRetirada, session=null) {
        try {

            const result = await model.create([{
                idPedaco,
                idVendedor,
                dataRetirada
            }], { session })
                
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

    static async buscarRetiradaPorId (idRetirada) {
        try {
            const result = await model.findById(idRetirada)

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    };

}

export default RetiradasModel;