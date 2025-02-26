import mongoose from "mongoose";
import { tiposDeCaboModel } from "./tiposDeCabo.js";

const pedacosSchema = new mongoose.Schema({
    idTipo: { type: String, required:true},
    tamanho: { type: Number, required: true},
    idCor: { type: String, required:false},
    status: { type: String, required:true} // guardado, retirado
})

export const pedacosModel = mongoose.model('pedacos', pedacosSchema);

export const getPedacos = async function () {
    const result = await pedacosModel.find()
    return {success:true, result};
};

export const findPedacos = async function (idTipo, tamanho, percMargem, status, idCor='') {
    const margem = tamanho * percMargem/100;

    const result = await pedacosModel.find({
        idTipo,
        tamanho: { $gte: (tamanho-margem), $lte: (tamanho+margem)},
        idCor: { $regex: idCor},    
        status: { $regex: status }
    })

    return { success: true, result};
}

export const createPedaco = async function (idTipo, tamanho, idCor='') {
    const tipo = await tiposDeCaboModel.findById(idTipo);

    if (!tipo) {
        return { success: false, message: "Tipo de cabo inexistente"}
    }
    if (tipo.possuiCores && idCor === '') {
        return { success: false, message: "É necessário especificar uma cor"}
    }

    const result = await pedacosModel.create({
        idTipo,
        tamanho,
        idCor,
        status:'guardado'
    })

    return { success: true, result};
}