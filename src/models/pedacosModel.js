import mongoose from "mongoose";

const pedacosSchema = new mongoose.Schema({
    idTipo: { type: String, required:true},
    tamanho: { type: Number, required: true},
    idCor: { type: String, required:false},
    status: { type: String, required:true} // guardado, retirado
})

const model = mongoose.model('pedacos', pedacosSchema);

class PedacosModel {

    static async listarPedacos () {
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
    static async buscarPedacos (idTipo, tamanho, margem, status, idCor) {
        try {
    
            const result = await model.find({
                idTipo,
                tamanho: { $gte: (tamanho-margem), $lte: (tamanho+margem)},
                idCor: { $regex: idCor},
                status: { $regex: status }
            })
        
            return result;
    
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }
    
    static async criarPedaco (idTipo, tamanho, idCor, status, session=null) {
        try {

            const result = await model.create([{
                idTipo,
                tamanho,
                idCor,
                status
            }], { session })
        
            return result[0];
            
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

    static async buscarPedacoPorId (idPedaco) {
        try {
            const result = await model.findById(idPedaco);

            return result

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

    static async retirarPedaco (idPedaco, session=null) {
        try {
            const pedaco = await model.findById(idPedaco);

            pedaco.status = "retirado"
            await pedaco.save({ session });

            return pedaco

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar no banco de dados"}
        }
    }

}
export default PedacosModel;