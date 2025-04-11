import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 
import vendedoresRoutes from './vendedoresRoutes.js'; 
import tiposDeCaboRoutes from './tiposDeCaboRoutes.js'; 

const router = express.Router();

router.use('/pedacos', pedacosRoutes);
router.use('/vendedores', vendedoresRoutes);
router.use('/tipos', tiposDeCaboRoutes);

export default router;