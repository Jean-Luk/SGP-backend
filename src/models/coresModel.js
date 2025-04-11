
const cores = [
    "amarelo",
    "azul",
    "branco",
    "cinza",
    "marrom",
    "preto",
    "verde",
    "vermelho",
]

class CoresModel {
    static async listarCores () {
        try {
            return cores;

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar as cores"}

        }
    };
    
    static async buscarCorPorNome (nomeCor) {
        try {
            const result = cores.indexOf(nomeCor);
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar a cor"}
        }
    }
    
    static async buscarCorPorId (idCor) {
        try {
            const result = cores[idCor];
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no model", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar a cor"}
        }
    }

}    

export default CoresModel;