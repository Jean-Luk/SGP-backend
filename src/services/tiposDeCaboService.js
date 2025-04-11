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
    
    static async buscarPorId (idTipoDeCabo) {
        try {
            
            if(!idTipoDeCabo) {
                throw {erro:"ID não especificado"}
            }

            const result = await TiposDeCaboModel.buscarPorId(idTipoDeCabo);

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
        
            const result = await TiposDeCaboModel.criarTipoDeCabo(nome, possuiCores)        

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