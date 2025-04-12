import express from 'express';
import PedacosController from '../controller/pedacosController.js';

const router = express.Router();

router.get('/listar', PedacosController.listarPedacos)
router.get('/buscar/:id', PedacosController.buscarPedaco)
router.post('/criar', PedacosController.criarPedaco)

export default router;