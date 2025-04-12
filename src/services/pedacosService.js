import mongoose from "mongoose";
import PedacosModel from "../models/pedacosModel.js";
import TiposDeCaboModel from "../models/tiposDeCaboModel.js";
import CoresService from "./coresService.js";
import EntradasService from "./entradasService.js";
import VendedoresService from "./vendedoresService.js";
import RetiradasService from "./retiradasService.js";

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

            if (!idTipo || !tamanho || !percMargem || !status || !idCor) {
                throw {erro:"Algum argumento não foi especificado"}
            }

            const numberPercMargem = Number(percMargem)
            if(isNaN(numberPercMargem) || numberPercMargem < 0) {
                throw {erro:"Margem especificada é inválida"}
            }

            const numberTamanho = Number(tamanho);
            if(isNaN(numberTamanho) || numberTamanho < 0) {
                throw {erro:"Tamanho especificado é inválido"}
            }

            const margem = numberTamanho * numberPercMargem/100;
            
            const result = await PedacosModel.buscarPedacos(idTipo, numberTamanho, margem, status, idCor)

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar os pedaços"}


        }
    }

    static async criarPedaco (idTipo, tamanho, idCor='', codVendedor, pin) {
        const session = await mongoose.startSession();
        session.startTransaction();

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

            const tipo = await TiposDeCaboModel.buscarTipoPorId(idTipo);
        
            if (!tipo) {
                throw { erro: "Tipo de cabo inexistente"}
            }

            if (tipo.possuiCores) {
                const cor = CoresService.buscarCorPorId(idCor)
                if (!cor) {
                    throw { erro: "Especifique uma cor válida"}                    
                }
                
            }
        
            const result = await PedacosModel.criarPedaco(idTipo, tamanho, idCor, "guardado", session)

            const agora = Date.now();
            const entrada = await EntradasService.criarEntrada(result._id, vendedor._id, agora, session)

            await session.commitTransaction();
            return { result, entrada }
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            await session.abortTransaction();
            throw {erro:err.erro||"Ocorreu um erro ao criar o pedaço"}

        } finally {
            session.endSession();

        }
    }

    static async buscarPedacoPorId (idPedaco) {
        try {

            if(!idPedaco || String(idPedaco).length !== 24) {
                throw {erro:"ID do pedaço não especificado ou inválido"}
            }

            const result = await PedacosModel.buscarPedacoPorId(idPedaco);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar pedaço"}
        }
    }

    static async retirarPedaco (idPedaco, codVendedor, pin) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {

            if (!codVendedor || !pin ) {
                throw {erro:"Algum argumento não foi especificado"}
            }

            if (!idPedaco || String(idPedaco).length !== 24) {
                throw {erro:"ID do pedaço não especificado ou inválido"}
            }

            const pedaco = await PedacosModel.buscarPedacoPorId(idPedaco);

            if(!pedaco) {
                throw {erro:"Pedaço inexistente"}
            }

            if(pedaco.status !== "guardado") {
                throw {erro:"Pedaço já retirado"}
            }

            const vendedor = await VendedoresService.buscarVendedorPorCod(codVendedor);

            if (!vendedor) {
                throw {erro:"Vendedor inexistente"}
            }

            const pinVendedor = await VendedoresService.buscarPinPorId(vendedor._id);

            if (pinVendedor !== pin) {
                throw {erro:"Pin incorreto"}
            }
        
            const result = await PedacosModel.retirarPedaco(pedaco, session)

            const retirada = await RetiradasService.criarRetirada(pedaco._id, vendedor._id, session)

            await session.commitTransaction();
            return { result, retirada }
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            await session.abortTransaction();
            throw {erro:err.erro||"Ocorreu um erro ao criar o pedaço"}

        } finally {
            session.endSession();

        }
    }

}

export default PedacosService;