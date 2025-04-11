import express from 'express';
import VendedoresController from '../controller/vendedoresController.js';

const router = express.Router();

router.get('/listar', VendedoresController.listarVendedores)
router.get('/:id', VendedoresController.buscarVendedor)
router.post('/criar', VendedoresController.criarVendedor)

export default router;