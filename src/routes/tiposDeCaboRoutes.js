import express from 'express';
import { createTipoDeCabo, getTiposDeCabo } from '../database/schemas/tiposDeCabo.js';

const router = express.Router();

router.get('/listar', async (req, res) => {
    try {
        const result = await getTiposDeCabo();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({error: err.message});
    }
})

router.post('/criar', async (req, res) => {
    try {
        const { nome, possuiCores=false } = req.body;

        if (!nome) {
            res.status(440).json({error: "Argumento não especificado"});
            return
        }

        const query = await createTipoDeCabo(nome, possuiCores);
        
        if (!query.success) {

            res.status(440).json({error: query.message});
            return;
        }

        res.status(201).json(query.result);

    } catch (err) {
        console.error(err);
        res.status(400).json({error: err.message});
    }
})

export default router;