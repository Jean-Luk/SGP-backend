import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 
import tiposDeCaboRoutes from './tiposDeCaboRoutes.js';
import vendedoresRoutes from './vendedoresRoutes.js';

const router = express.Router();

router.use('/pedacos', pedacosRoutes);
router.use('/tiposDeCabo', tiposDeCaboRoutes);
router.use('/vendedores', vendedoresRoutes);

export default router;