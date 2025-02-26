import mongoose from "mongoose";

const tiposDeCaboSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    possuiCores: { type: Boolean, required:true, default:false}
})

export const tiposDeCaboModel = mongoose.model('tiposDeCabo', tiposDeCaboSchema);

export const getTiposDeCabo = async function () {
    const result = await tiposDeCaboModel.find()
    return {success:true, result};
};

export const createTipoDeCabo = async function (nome, possuiCores) {
    const verifyNome = await tiposDeCaboModel.findOne({nome});
    if (verifyNome) {
        return { success: false, message: "Nome já existente"}
    }

    const result = await tiposDeCaboModel.create({
        nome, possuiCores
    })

    return { success: true, result};
}