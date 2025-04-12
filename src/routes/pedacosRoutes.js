import express from 'express';
import PedacosController from '../controller/pedacosController.js';

const router = express.Router();

router.get('/listar', PedacosController.listarPedacos)
router.get('/buscar/:id', PedacosController.buscarPedaco)
router.post('/criar', PedacosController.criarPedaco)
router.post('/buscar', PedacosController.buscarPedacos)
router.post('/retirar', PedacosController.retirarPedaco)

export default router;