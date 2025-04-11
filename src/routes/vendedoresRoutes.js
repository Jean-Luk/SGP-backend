// import express from 'express';
// import { getVendedores, createVendedor } from '../database/schemas/vendedores.js';

// const router = express.Router();

// router.get('/listar', async (req, res) => {
//     try {
//         const query = await getVendedores();
//         res.status(201).json(query.result);
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({error: err.message});
//     }
// })

// router.post('/criar', async (req, res) => {
//     try {
//         const { cod, nome } = req.body;

//         if (!cod || !nome) {
//             res.status(440).json({error: "Argumento não especificado"});
//             return
//         }

//         const query = await createVendedor(cod, nome);
        
//         if (!query.success) {
//             res.status(440).json({error: query.message});
//             return;
//         }

//         res.status(201).json(query.result);

//     } catch (err) {
//         console.error(err);
//         res.status(400).json({error: err.message});
//     }
// })

// export default router;