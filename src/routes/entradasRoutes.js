import express from 'express';
import EntradasController from '../controller/entradasController.js';

const router = express.Router();

router.get('/listar', EntradasController.listarEntradas)
router.get('/buscar/:id', EntradasController.buscarEntrada)

export default router;