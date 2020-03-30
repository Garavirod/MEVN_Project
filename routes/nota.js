import express from 'express';
import Nota from '../models/nota';
const router = express.Router();

//Configuramos una rita de tipo POST

//Agrrgamos una nota
router.post('/nuava-nota', async(req, res) => {
    const body = req.body;
    try {
        notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'There was an error',
            error
        });
    }
});


// Exportamos el router
module.exports = router;