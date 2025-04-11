import PedacosModel from "../models/pedacosModel.js";

class PedacosService {
    static async listarPedacos () {
        try {
            const result = await PedacosModel.listarPedacos();

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao listar os pedaços"}

        }
    }

    static async buscarPedacos (idTipo, tamanho, percMargem, status, idCor='') {
        try {
            const margem = tamanho * percMargem/100;

            const result = await PedacosModel.buscarPedacos(idTipo, tamanho, margem, status, idCor)

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar os pedaços"}


        }
    }

    static async criarPedaco (idTipo, tamanho, idCor='') {
        try {
            const tipo = await tiposDeCaboModel.findById(idTipo);
        
            if (!tipo) {
                throw { erro: "Tipo de cabo inexistente"}
            }
            if (tipo.possuiCores && idCor === '') {
                throw { erro: "É necessário especificar uma cor"}
            }
        
            const result = await PedacosModel.criarPedaco(idTipo, tamanho, idCor, "guardado")

            return result
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao criar o pedaço"}
        }
    }

    static async buscarPedacoPorId (idPedaco) {
        try {
            const result = await PedacosModel.buscarPedacoPorId(idPedaco);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar pedaço"}
        }
    }
}

export default PedacosService;