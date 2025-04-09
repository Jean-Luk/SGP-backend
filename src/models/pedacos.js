import mongoose from "mongoose";
import { tiposDeCaboModel } from "./tiposDeCabo.js";

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
    static async buscarPedacos (idTipo, tamanho, percMargem, status, idCor='') {
        try {
            // TODO: Mover a lógica para o service.
            const margem = tamanho * percMargem/100;
    
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
    
    static async criarPedaco (idTipo, tamanho, idCor='') {
        try {
            // TODO: Mover lógica para o service.
            const tipo = await tiposDeCaboModel.findById(idTipo);
        
            if (!tipo) {
                throw { erro: "Tipo de cabo inexistente"}
            }
            if (tipo.possuiCores && idCor === '') {
                throw { erro: "É necessário especificar uma cor"}
            }
        
            const result = await model.create({
                idTipo,
                tamanho,
                idCor,
                status:'guardado'
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
export default PedacosModel;