import express from 'express';
import CoresController from '../controller/coresController.js';

const router = express.Router();

router.get('/listar', CoresController.listarCores)

export default router;