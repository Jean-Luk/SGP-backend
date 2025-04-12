import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 
import vendedoresRoutes from './vendedoresRoutes.js'; 
import tiposDeCaboRoutes from './tiposDeCaboRoutes.js'; 
import retiradasRoutes from './retiradasRoutes.js'; 

const router = express.Router();

router.use('/pedacos', pedacosRoutes);
router.use('/vendedores', vendedoresRoutes);
router.use('/tipos', tiposDeCaboRoutes);
router.use('/retiradas', retiradasRoutes);

export default router;