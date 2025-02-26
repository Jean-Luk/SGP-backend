import mongoose from "mongoose";

const vendedoresSchema = new mongoose.Schema({
    codVendedor: { type: Number, required:true},
    nome: { type: String, required:true},
    totalRetiradas: { type: Number, required:true, default:0 },
    totalAdicoes: { type: Number, required:true, default:0 }
})

export const vendedoresModel = mongoose.model('vendedores', vendedoresSchema);

export const getVendedores = async function () {
    const result = await vendedoresModel.find()
    return {success:true, result};
};

export const getVendededorById = async function (idVendedor) {
    const result = await vendedoresModel.findById(idVendedor);
    return {success:true, result};
}

export const getVendedorByCod = async function (codVendedor) {
    const result = await vendedoresModel.findById({codVendedor});
    return {success:true, result};
}

export const createVendedor = async function (codVendedor, nome) {
    const verifyCod = await vendedoresModel.findOne({codVendedor});
    if (verifyCod) {
        return { success: false, message: "Código já existente"}
    }

    const verifyNome = await vendedoresModel.findOne({nome});
    if (verifyNome) {
        return { success: false, message: "Nome já existente"}
    }

    const result = await vendedoresModel.create({
        codVendedor,
        nome
    })

    return { success: true, result}
}

