import CoresService from "../services/coresService.js";

class CoresController {
    static async listarCores (req, res) {
        try {
            const result = await CoresService.listarCores();

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

export default CoresController;