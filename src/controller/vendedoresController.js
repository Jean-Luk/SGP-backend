import PedacosService from "../services/pedacosService.js";
import VendedoresService from "../services/vendedoresService.js";

class PedacosController {
    static async listarVendedores (req, res) {
        try {
            const result = await VendedoresService.listarVendedores();

            res.status(200).json(result);

        } catch (err) {
            if (!err.erro) {
                console.error(err)
                res.status(500).json({"erro":"Erro interno no servidor"})
                return
            }

            res.status(400).json({"erro":err.erro})
        }
    }

    static async buscarVendedor (req, res) {
        try {
            const idVendedor = req.params.id;
            const result = await VendedoresService.buscarVendedorPorId(idVendedor);

            res.status(200).json(result);

        } catch (err) {
            if (!err.erro) {
                console.error(err)
                res.status(500).json({"erro":"Erro interno no servidor"})
                return
            }

            res.status(400).json({"erro":err.erro})
        }
    }

    static async criarVendedor (req, res) {
        try {
            const { codVendedor, nome, pin } = req.body;
            const result = await VendedoresService.criarVendedor(codVendedor, nome, pin);

            res.status(200).json(result);

        } catch (err) {
            if (!err.erro) {
                console.error(err)
                res.status(500).json({"erro":"Erro interno no servidor"})
                return
            }

            res.status(400).json({"erro":err.erro})
        }
    }

}

export default PedacosController;