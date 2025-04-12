import express from 'express';
import RetiradasController from '../controller/retiradasController.js';

const router = express.Router();

router.get('/listar', RetiradasController.listarRetiradas)
router.get('/buscar/:id', RetiradasController.buscarRetirada)

export default router;