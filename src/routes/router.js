import express from 'express';
import pedacosRoutes from './pedacosRoutes.js'; 

const router = express.Router();

router.use('/pedacos', pedacosRoutes);

export default router;