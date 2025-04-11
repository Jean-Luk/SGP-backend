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
}

export default PedacosController;