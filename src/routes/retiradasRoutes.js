import express from 'express';
import RetiradasController from '../controller/retiradasController.js';

const router = express.Router();

router.get('/listar', RetiradasController.listarRetiradas)
router.get('/buscar/:id', RetiradasController.buscarRetirada)
router.get('/pedaco/:id', RetiradasController.buscarRetiradaPorIdPedaco)

export default router;