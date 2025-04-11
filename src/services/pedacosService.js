import PedacosModel from "../models/pedacosModel.js";
import TiposDeCaboModel from "../models/tiposDeCaboModel.js";
import EntradasService from "./entradasService.js";
import VendedoresService from "./vendedoresService.js";

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

    static async criarPedaco (idTipo, tamanho, idCor='', codVendedor, pin) {
        try {

            if (!idTipo || !tamanho || !codVendedor || !pin) {
                throw {erro:"Algum campo não foi especificado"}
            }

            const vendedor = await VendedoresService.buscarVendedorPorCod(codVendedor);

            if (!vendedor) {
                throw {erro:"Vendedor inexistente"}
            }

            const pinVendedor = await VendedoresService.buscarPinPorId(vendedor._id);

            if (pinVendedor !== pin) {
                throw {erro:"Pin incorreto"}
            }

            const tipo = await TiposDeCaboModel.buscarPorId(idTipo);
        
            if (!tipo) {
                throw { erro: "Tipo de cabo inexistente"}
            }

            if (tipo.possuiCores && idCor === '') {
                throw { erro: "É necessário especificar uma cor"}
            }
        
            const result = await PedacosModel.criarPedaco(idTipo, tamanho, idCor, "guardado")

            const agora = Date.now();
            const entrada = await EntradasService.criarEntrada(result._id, vendedor._id, agora)

            return { result, entrada }
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