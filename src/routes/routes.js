const express = require('express');
const produtosController = require ('../controllers/produtosController.js');
const categoriasController = require ('../controllers/categoriasController.js')
const router = express.Router();
 
router.post('/categorias', categoriasController.Insert);
router.get('/categorias', categoriasController.SelectAll);
router.get('/categorias/:id_categoria', categoriasController.SelectDetail)
router.put('/categorias/:id_categoria', categoriasController.Update);
router.delete('/categorias/:id_categoria', categoriasController.Delete);

router.post('/produtos', produtosController.Insert);
router.get('/produtos', produtosController.SelectAll);
router.get('/produtos/:id', produtosController.SelectDetail)
router.put('/produtos/:id', produtosController.Update);
router.delete('/produtos/:id', produtosController.Delete);
 
module.exports = router;


 