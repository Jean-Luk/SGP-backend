import PedacosService from "../services/pedacosService.js";

class PedacosController {
    static async listarPedacos (req, res) {
        try {
            const result = await PedacosService.listarPedacos();

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

    static async buscarPedacos (req, res) {
        try {
            const {idTipo, tamanho, percMargem, status="guardado", idCor} = req.body;
            
            const result = await PedacosService.buscarPedacos(idTipo, tamanho, percMargem, status, idCor);

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

    static async buscarPedaco (req, res) {
        try {
            const idPedaco = req.params.id;
            const result = await PedacosService.buscarPedacoPorId(idPedaco);

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

    static async criarPedaco (req, res) {
        try {
            const { idTipo, tamanho, idCor, codVendedor, pin } = req.body;

            const result = await PedacosService.criarPedaco(idTipo, tamanho, idCor, codVendedor, pin);

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

    static async retirarPedaco (req, res) {
        try {
            const { idPedaco, codVendedor, pin } = req.body;

            const result = await PedacosService.retirarPedaco(idPedaco, codVendedor, pin);

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