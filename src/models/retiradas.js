import mongoose from "mongoose";
import { pedacosModel } from "./pedacos.js";

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
    
    static async criarRetirada (idPedaco, idVendedor,) {
        try {
            // TODO: Mover a lógica para o service;
    
            const pedaco = await pedacosModel.findById(idPedaco);
            if (!pedaco) {
                throw { erro: "Pedaço inexistente"}
            }
        
            const vendedor = await vendedorModel.findById(idVendedor);
            if (!vendedor) {
                throw { erro: "Vendedor inexistente"}
            }
        
            const result = await model.create({
                idPedaco,
                idVendedor,
                dataRetirada: Date.now()
            })
        
            pedaco.status = "retirado";
            pedaco.save();
        
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

}

export default RetiradasModel;