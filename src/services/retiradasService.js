import RetiradasModel from "../models/retiradasModel.js";
import PedacosService from "./pedacosService.js";
import VendedorService from "./vendedoresService.js";

class RetiradasService {
    static async listarRetiradas () {
        try {
            const result = await RetiradasModel.listarRetiradas();

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao listar as retiradas"}
        }
    };
    
    static async buscarRetiradas (idPedaco, idVendedor, dataInicio, dataFim) {
        try {

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar as retiradas"}
        }    
    }
    
    static async criarRetirada (idPedaco, idVendedor, session=null) {
        try {

            const pedaco = await PedacosService.buscarPedacoPorId(idPedaco);
            if (!pedaco) {
                throw { erro: "Pedaço inexistente"}
            }
        
            const vendedor = await VendedorService.buscarVendedorPorId(idVendedor);
            if (!vendedor) {
                throw { erro: "Vendedor inexistente"}
            }
        
            const dataRetirada = Date.now();

            const result = await RetiradasModel.criarRetirada(idPedaco, idVendedor, dataRetirada, session);
        
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao criar a retirada"}
        }
    }

    static async buscarRetiradaPorId (idRetirada) {
        try {
            if (!idRetirada || String(idRetirada).length !== 24) {
                throw {erro:"ID da retirada não especificado ou inválido"}
            }

            const result = await RetiradasModel.buscarRetiradaPorId(idRetirada);
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar as retiradas"}
        }    
    }

    static async buscarRetiradaPorIdPedaco (idPedaco) {
        try {
            if (!idPedaco || String(idPedaco).length !== 24) {
                throw {erro:"ID do pedaço não especificado ou inválido"}
            }

            const result = await RetiradasModel.buscarRetiradaPorIdPedaco(idPedaco);
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar as retiradas"}
        }    
    }

}

export default RetiradasService;