import express from 'express';
import TiposDeCaboController from '../controller/tiposDeCaboController.js';

const router = express.Router();

router.get('/listar', TiposDeCaboController.listarTiposDeCabo)
router.get('/:id', TiposDeCaboController.buscarTipoDeCabo)

export default router;