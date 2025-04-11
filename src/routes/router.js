import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 
import vendedoresRoutes from './vendedoresRoutes.js'; 

const router = express.Router();

router.use('/pedacos', pedacosRoutes);
router.use('/vendedores', vendedoresRoutes);

export default router;