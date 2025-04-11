import express from 'express';
import PedacosController from '../controller/pedacosController.js';

const router = express.Router();

router.get('/listar', PedacosController.listarPedacos)

// router.get('/procurar', async (req, res) => {
//     try {
//         const { idTipo, tamanho, percMargem=10, status='', idCor='' } = req.body;
        
        
//         if (!idTipo || !tamanho) {
//             res.status(440).json({error: "Argumento não especificado"});
//             return;
//         }
//         const numberTamanho = Number(tamanho);
//         const numberPercMargem = Number(percMargem);

//         if (isNaN(numberPercMargem) || isNaN(numberTamanho)) {
//             res.status(440).json({error: "Número inválido"});
//             return;
//         }
        
//         const query = await findPedacos(idTipo, numberTamanho, numberPercMargem, status, idCor);

//         res.status(201).json(query.result);

//     } catch (err) {
//         console.error(err);
//         res.status(400).json({error: err.message});
//     }
// })

// router.post('/criar', async (req, res) => {
//     try {
//         const { idTipo, tamanho, idCor='' } = req.body;

//         if (!idTipo || !tamanho) {
//             res.status(440).json({error: "Argumento não especificado"});
//             return
//         }

//         const query = await createPedaco(idTipo, tamanho, idCor);
        
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

export default router;