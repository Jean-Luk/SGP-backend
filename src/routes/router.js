import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 
import vendedoresRoutes from './vendedoresRoutes.js'; 
import tiposDeCaboRoutes from './tiposDeCaboRoutes.js'; 
import retiradasRoutes from './retiradasRoutes.js'; 
import entradasRoutes from './entradasRoutes.js'; 
import coresRoutes from './coresRoutes.js'; 

const router = express.Router();

router.use('/pedacos', pedacosRoutes);
router.use('/vendedores', vendedoresRoutes);
router.use('/tipos', tiposDeCaboRoutes);
router.use('/retiradas', retiradasRoutes);
router.use('/entradas', entradasRoutes);
router.use('/cores', coresRoutes)

export default router;