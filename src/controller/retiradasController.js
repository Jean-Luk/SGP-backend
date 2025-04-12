import RetiradasService from "../services/retiradasService.js";

class RetiradasController {
    static async listarRetiradas (req, res) {
        try {
            const result = await RetiradasService.listarRetiradas();

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

    static async buscarRetirada (req, res) {
        try {
            const idRetirada = req.params.id;
            const result = await RetiradasService.buscarRetiradaPorId(idRetirada);

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

export default RetiradasController;