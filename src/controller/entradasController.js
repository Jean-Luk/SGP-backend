import EntradasService from "../services/entradasService.js";

class EntradasController {
    static async listarEntradas (req, res) {
        try {
            const result = await EntradasService.listarEntradas();

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

    static async buscarEntrada (req, res) {
        try {
            const idEntrada = req.params.id;
            const result = await EntradasService.buscarEntradaPorId(idEntrada);

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

export default EntradasController;