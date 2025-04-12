import EntradasModel from "../models/entradasModel.js";
import PedacosService from "./pedacosService.js";
import VendedoresService from "./vendedoresService.js";

class EntradasService {
    static async listarEntradas () {
        try {
            const result = await EntradasModel.listarEntradas();

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao listar as entradas"}
        }
    };
    
    static async buscarEntradas (idPedaco, idVendedor, dataInicio, dataFim) {
        try {
            const result = await EntradasModel.buscarEntrada(idPedaco, idVendedor, dataInicio, dataFim);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar as entradas"}
        }    
    }
    
    static async criarEntrada (idPedaco, idVendedor, dataEntrada) {
        try {

            const verificarVendedor = await VendedoresService.buscarVendedorPorId(idVendedor);
            if (!verificarVendedor) {
                throw {erro:"Vendedor inexistente"}
            }

            const verificarPedaco = await PedacosService.buscarPedacoPorId(idPedaco);
            if (!verificarPedaco) {
                throw {erro:"Pedaço inexistente"}
            }

            const result = await EntradasModel.criarEntrada(idPedaco, idVendedor, dataEntrada);
        
            return result;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao inserir no banco de dados"}
        }
    }

        static async buscarEntradaPorId (idEntrada) {
            try {
                if (!idEntrada || idEntrada.length !== 24) {
                    throw {erro:"ID da entrada não especificado ou inválido"}
                }
    
                const result = await EntradasModel.buscarEntradaPorId(idEntrada);
                return result;
    
            } catch (err) {
                if (!err.erro) {
                    console.error("Erro no service", err);
                }
    
                throw {erro:err.erro||"Ocorreu um erro ao buscar as entradas"}
            }    
        }
    
}

export default EntradasService;