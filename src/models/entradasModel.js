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
    
    static async buscarEntradas (idPedaco, idVendedor, dataInicio, dataFim) {
        try {

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }    
    }
    
    static async criarEntrada (idPedaco, idVendedor, dataEntrada, session=null) {
        try {

            const result = await model.create([{
                idPedaco,
                idVendedor,
                dataEntrada
            }], { session })
        
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

    static async buscarEntradaPorId (idEntrada) {
        try {

            if (!idEntrada || String(idEntrada).length !== 24) {
                throw {erro:"ID da entrada não especificado ou inválido"}
            }

            const result = await model.findById(idEntrada)

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    };

    static async buscarEntradaPorIdPedaco (idPedaco) {
        try {

            if (!idPedaco || String(idPedaco).length !== 24) {
                throw {erro:"ID do pedaço não especificado ou inválido"}
            }

            const result = await model.findOne({idPedaco})

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    };

}

export default EntradasModel;