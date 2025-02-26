import mongoose from "mongoose";
import { pedacosModel } from "./pedacos.js";

const retiradasSchema = new mongoose.Schema({
    idPedaco: { type: String, required:true},
    idVendedor: { type: String, required:true},
    dataRetirada: { type: Number, required: true},
})

export const retiradasModel = mongoose.model('retiradas', retiradasSchema);

export const getRetiradas = async function () {
    const result = await retiradasModel.find()
    return {success:true, result};
};

export const findRetiradas = async function (idPedaco, idVendedor, dataInicio, dataFim,) {

}

export const createRetirada = async function (idPedaco, idVendedor,) {
    const pedaco = await pedacosModel.findById(idPedaco);
    if (!pedaco) {
        return { success: false, message: "Pedaço inexistente"}
    }

    const vendedor = await vendedorModel.findById(idVendedor);
    if (!vendedor) {
        return { success: false, message: "Vendedor inexistente"}
    }

    const result = await retiradasModel.create({
        idPedaco,
        idVendedor,
        dataRetirada: Date.now()
    })

    pedaco.status = "retirado";
    pedaco.save();

    return { success: true, result};
}