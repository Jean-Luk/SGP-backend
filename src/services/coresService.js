import CoresModel from "../models/coresModel.js";

class CoresService {
    static async listarCores () {
        try {
            return CoresModel.listarCores();

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao listar as cores"}

        }
    };
    
    static async buscarCorPorNome (nomeCor) {
        try {

            if (!nomeCor) {
                throw {erro:"Especifique uma cor válida"}
            }
            
            const result = CoresModel.buscarCorPorNome(nomeCor.toLowerCase());
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar a cor"}
        }
    }
    
    static async buscarCorPorId (idCor) {
        try {

            if (!idCor || isNaN(Number(idCor))) {
                throw {erro:"Especifique um valor válido"}
            }

            const result = CoresModel.buscarCorPorId(Number(idCor));
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar a cor"}
        }
    }

}    

export default CoresService;