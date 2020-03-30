import express from 'express';
import Nota from '../models/nota';
const router = express.Router();

//Configuramos una rita de tipo POST

//Agrrgamos una nota
router.post('/nueva-nota', async(req, res) => {
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Get with params
router.get('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findOne({ _id });
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'There was an error',
            error
        })

    }
});


//GET with all documents
router.get('/nota', async(req, res) => {
    try {
        const notaDB = await Nota.find();
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'There was an error',
            error
        })
    }
});


//Delete a note
router.delete('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findByIdAndDelete({ _id });
        if (!notaDB) {
            return res.status(400).json({
                mensaje: 'Id not found',
                error
            })
        }
        res.json(notaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'There was an error',
            error
        })
    }
});

// Update nota
router.put('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDb = await Nota.findByIdAndUpdate(
            _id,
            body, { new: true });
        res.json(notaDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Exportamos el router
module.exports = router;