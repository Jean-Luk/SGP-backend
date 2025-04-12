import TiposDeCaboModel from "../models/tiposDeCaboModel.js";

class TiposDeCaboService {
    static async listarTiposDeCabo () {
        try {
            const result = await TiposDeCaboModel.listarTiposDeCabo();

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar os tipos de cabo"}
        }
    };
    
    static async buscarPorNome (nome) {
        try {
            const result = await TiposDeCaboModel.buscarPorNome(nome);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o tipo de cabo por nome"}
        }
    }

    static async buscarTipoPorId (idTipoDeCabo) {
        try {
            
            if(!idTipoDeCabo || idTipoDeCabo.length !== 24) {
                throw {erro:"ID do tipo não especificado ou inválido"}
            }

            const result = await TiposDeCaboModel.buscarTipoPorId(idTipoDeCabo);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o tipo de cabo por nome"}
        }
    }

    static async criarTipoDeCabo (nome, possuiCores=false) {
        try {
            const verifyNome = await this.buscarPorNome(nome);            
            if (verifyNome) {
                throw { erro: "Nome já existente"}
            }

            const possuiCoresBoolean = possuiCores === "true"

            const result = await TiposDeCaboModel.criarTipoDeCabo(nome, possuiCoresBoolean, "ativo")        

            return result;
            
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao criar o tipo de cabo"}
        }
    }

}

export default TiposDeCaboService