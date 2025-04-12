import VendedoresModel from "../models/vendedoresModel.js";

class VendedoresService {
    static async listarVendedores () {
        try {
            const result = await VendedoresModel.listarVendedores();
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao listar os vendedores"}

        }
    };
    
    static async buscarVendedorPorId (idVendedor) {
        try {
            if (!idVendedor || String(idVendedor).length !== 24) {
                throw {erro:"ID do vendedor não especificado ou inválido"}
            }

            const result = await VendedoresModel.buscarVendededorPorId(idVendedor);
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o vendedor por ID"}
        }
    }
    
    static async buscarVendedorPorCod (codVendedor) {
        try {
            const result = await VendedoresModel.buscarVendedorPorCod(codVendedor);
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o vendedor por código"}
        }
    }
    
    static async buscarVendedorPorNome (nome) {
        try {
            const result = await VendedoresModel.buscarVendedorPorNome(nome);
            
            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o vendedor por nome"}
        }

    }

    static async criarVendedor (codVendedor, nome, pin) {
        try {

            if (!codVendedor || !nome || !pin) {
                throw { erro: "Faltam argumentos"}
            }

            const verifyCod = await this.buscarVendedorPorCod(codVendedor);
            if (verifyCod) {
                throw { erro: "Código já existente"}
            }
        
            const verifyNome = await this.buscarVendedorPorNome(nome);
            if (verifyNome) {
                throw { erro: "Nome já existente"}
            }
        
            const result = await VendedoresModel.criarVendedor(codVendedor, nome, pin);
        
            return result

        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao criar o vendedor"}
        }
    }

    static async buscarPinPorId (idVendedor) {
        try {
            const result = await VendedoresModel.buscarPinPorId(idVendedor);

            return result;
        } catch (err) {
            if (!err.erro) {
                console.error("Erro no service", err);
            }

            throw {erro:err.erro||"Ocorreu um erro ao buscar o pin do vendedor"}
        }
    }

}    

export default VendedoresService;