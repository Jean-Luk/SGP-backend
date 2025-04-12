import TiposDeCaboService from "../services/tiposDeCaboService.js";

class TiposDeCaboController {
    static async listarTiposDeCabo (req, res) {
        try {
            const result = await TiposDeCaboService.listarTiposDeCabo();

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

    static async buscarTipoDeCabo (req, res) {
        try {
            const idTipoDeCabo = req.params.id;
            const result = await TiposDeCaboService.buscarTipoPorId(idTipoDeCabo);

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

    static async criarTipoDeCabo (req, res) {
        try {
            const { nome, possuiCores } = req.body;

            const result = await TiposDeCaboService.criarTipoDeCabo(nome, possuiCores);

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

export default TiposDeCaboController;